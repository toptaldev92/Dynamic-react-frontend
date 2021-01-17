import React from 'react';
import ReactDOM from 'react-dom';
import dynamic from 'next/dynamic';
import { ModuleFormBuilderContainer } from "./style";
import SectionsWrapper from "../../Sections/SectionsWrapper";
import ModuleFormElements from "../ModuleFormElements/ModuleFormElements";
import ReCAPTCHA from "react-google-recaptcha"
import $ from 'jquery';


const sectionComponents = {
  module_multi_columns: dynamic(() => import("components/Sections").then((sections) => sections.ModuleMultiColumns)),
  module_form_elements: dynamic(() => import("components/Sections").then((sections) => sections.ModuleFormElements)),
}

class ModuleFormBuilder extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  onChange1 = (value) => {
    console.log("Captcha value:", value)
  }

  submit = () => {
    let data = [];
    let formdata = {}; 

    if(this.props.formDesign == "Border" && this.props.labelPlacement == "No Label"){      
      $(".form-value1").each(function(idx){
        let fdata = {};
          fdata["label"] = $(".form-value1").eq(idx).attr("label");
          fdata["value"] = $(".form-value1").eq(idx).val();
          data.push(fdata);     
      });
    }else if(this.props.formDesign == "Border" && this.props.labelPlacement == "Inside Label"){      
      $(".form-value2").each(function(idx){
        let fdata = {};
          fdata["label"] = $(".form-value2").eq(idx).attr("label");
          fdata["value"] = $(".form-value2").eq(idx).val();
          data.push(fdata);     
      });
    }else if(this.props.formDesign == "Border" && this.props.labelPlacement == "Above Left"){      
      $(".form-value3").each(function(idx){
        let fdata = {};
          fdata["label"] = $(".form-value3").eq(idx).attr("label");
          fdata["value"] = $(".form-value3").eq(idx).val();
          data.push(fdata);     
      });
    }else if(this.props.formDesign == "Border" && this.props.labelPlacement == "Above Center"){      
      $(".form-value4").each(function(idx){
        let fdata = {};
          fdata["label"] = $(".form-value4").eq(idx).attr("label");
          fdata["value"] = $(".form-value4").eq(idx).val();
          data.push(fdata);     
      });
    }else if(this.props.formDesign == "Underline" && this.props.labelPlacement == "No Label"){      
      $(".form-value5").each(function(idx){
        let fdata = {};
          fdata["label"] = $(".form-value5").eq(idx).attr("label");
          fdata["value"] = $(".form-value5").eq(idx).val();
          data.push(fdata);     
      });
    }else if(this.props.formDesign == "Underline" && this.props.labelPlacement == "Inside Label"){      
      $(".form-value6").each(function(idx){
        let fdata = {};
          fdata["label"] = $(".form-value6").eq(idx).attr("label");
          fdata["value"] = $(".form-value6").eq(idx).val();
          data.push(fdata);     
      });
    }else if(this.props.formDesign == "Underline" && this.props.labelPlacement == "Above Left"){      
      $(".form-value7").each(function(idx){
        let fdata = {};
          fdata["label"] = $(".form-value7").eq(idx).attr("label");
          fdata["value"] = $(".form-value7").eq(idx).val();
          data.push(fdata);     
      });
    }else if(this.props.formDesign == "Underline" && this.props.labelPlacement == "Above Center"){      
      $(".form-value8").each(function(idx){
        let fdata = {};
          fdata["label"] = $(".form-value8").eq(idx).attr("label");
          fdata["value"] = $(".form-value8").eq(idx).val();
          data.push(fdata);     
      });
    }

    $(".check-form-value").each(function(idx){
        let fdata  = {};
        fdata["label"] = $(this).children().children().children(".form-value9").attr("label");
        fdata["value"] = $(this).children().children().children(".form-value9:checked").map(function() {return this.value;}).get().join(",");
        data.push(fdata);      
    });
    $(".radio-form-value").each(function(idx){
      let fdata  = {};
      fdata["label"] = $(this).children().children(".form-value10").attr("label");
      let label = fdata["label"];
      fdata["value"] = $(this).children().children('input[name="'+label+'"]:checked').val();
      data.push(fdata);
    });
    $(".toggle-form-value").each(function(idx){
      let fdata  = {};
      fdata["label"] = $(this).children(".form-value11").attr("label");
      fdata["value"] = $(this).children(".form-value11:checked").val();
      data.push(fdata);
    });

    formdata["formBuilderId"] = this.props.formBuilderId;
    formdata["formName"] = this.props.label;
    formdata["data"] = JSON.stringify(data);
    let forwardingUrl = this.props.forwardingUrl;

    $.post("http://localhost:5000/form_data_send", formdata).then(function(res){
      if(1) {
        window.location.href = forwardingUrl;
      } else {
        alert("failed");
      }
    });
  }
  render() {
    return (      
        <ModuleFormBuilderContainer {...this.props}>
          <div class="container">
          <form>
            <h1>{this.props.label}</h1>
            {this.props.boxes.map((_box, _i) => {
              const Content = sectionComponents[_box.moduleName];          
              return (
                  <Content key={_i} {..._box.module}/>
              )
            })}
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={this.onChange1} />
            <div class="button-container" >
                <button type="button" class="button" onClick={this.submit}><span>{this.props.submitButtonText}</span></button>
            </div>
          </form>
          </div>
        </ModuleFormBuilderContainer>
    );
  }
}

export default SectionsWrapper(ModuleFormBuilder);