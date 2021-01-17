import styled from 'styled-components';

export const ModuleFormBuilderContainer = styled.div`
  width: 100%;
        
    .form {
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 100%;
        border: 3px solid #73AD21;
        padding: 50px 20px 100px 50px;
        border-radius: 6px;       
    }

// ---------------------------------------------------


.form-group, .dropdown-underline{
  display: ${props => props.formDesign == "Border" ? "none" : "" };
}

    .no-label, .form-group1, .border-inside-label, .border-above-left, .border-above-center{
      display: ${props => props.labelPlacement == "No Label" ? "none" : ""};
    }

    .upper-label, .border-no-label, .border-above-left, .border-above-center{
      display: ${props => props.labelPlacement == "Inside Label" ? "none" : ""};
    }

    .above-center, .form-group1, .border-no-label, .border-inside-label, .border-above-center{
      display: ${props => props.labelPlacement == "Above Left" ? "none" : ""};
    }

    .above-left, .form-group1, .border-no-label, .border-inside-label, .border-above-left{
      display: ${props => props.labelPlacement == "Above Center" ? "none" : ""};
    }

    // -------------------------------------------------------------------------

    .dropdown-border-above-left, .dropdown-border-above-center, .dropdown-border-inside-label{
      display: ${props => props.labelPlacement == "No Label" ? "none" : ""};
    }

    
    .dropdown-border-no-label, .dropdown-border-above-left, .dropdown-border-above-center{
      display: ${props => props.labelPlacement == "Inside Label" ? "none" : ""};
    }

    .dropdown-border-no-label, .dropdown-border-above-center, .dropdown-border-inside-label{
      display: ${props => props.labelPlacement == "Above Left" ? "none" : ""};
    }

    .dropdown-border-no-label, .dropdown-border-above-left, .dropdown-border-inside-label{
      display: ${props => props.labelPlacement == "Above Center" ? "none" : ""};
    }

    // -------------------------------------------------------------------------
.upper-label, .form-group1, .dropdown-border{
  display:${props => props.formDesign == "Underline" ? "none": ""};
}

    .underline-inside-label, .underline-above-left, .underline-above-center{
      display: ${props => props.labelPlacement == "No Label" ? "none" : ""};
    }

    .underline-no-label, .underline-above-left, .underline-above-center{
      display: ${props => props.labelPlacement == "Inside Label" ? "none" : ""};
    }

    .underline-no-label, .underline-inside-label, .underline-above-center{
      display: ${props => props.labelPlacement == "Above Left" ? "none" : ""};
    }

    .underline-no-label, .underline-inside-label, .underline-above-left{
      display: ${props => props.labelPlacement == "Above Center" ? "none" : ""};
    }

    // --------------------------------------------------------------------------
   .dropdown-underline-inside-label, .dropdown-underline-above-left, .dropdown-underline-above-center{
      display: ${props => props.labelPlacement == "No Label" ? "none" : ""};
    }

    .dropdown-underline-no-label, .dropdown-underline-above-left, .dropdown-underline-above-center{
      display: ${props => props.labelPlacement == "Inside Label" ? "none" : ""};
    }

    .dropdown-underline-no-label, .dropdown-underline-inside-label, .dropdown-underline-above-center{
      display: ${props => props.labelPlacement == "Above Left" ? "none" : ""};
    }

    .dropdown-underline-no-label, .dropdown-underline-inside-label, .dropdown-underline-above-left{
      display: ${props => props.labelPlacement == "Above Center" ? "none" : ""};
    }


// ---------------------------------------------------


    input:focus {
        outline-width: 1px;
        outline-style: solid;
        outline-color: SteelBlue;
      }

    // --------------------------------------------------
    .submit{
        float:right;
    }
    // --------------------------------------------------
    
    input, select{
      width:100%;
      height:2.3rem;
    }
    
    // --------------------------------------------------
    .toggle {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 25px;
    }
      
    .toggle input { 
        opacity: 0;
        width: 0;
        height: 0;
    }
      
    .toggle_slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }
      
    .toggle_slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 7px;
        bottom: 2px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
      
    .check:checked + .toggle_slider {
        background-color: #2196F3;
    }
      
    .check:focus + .toggle_slider {
        box-shadow: 0 0 1px #2196F3;
    }
      
    .check:checked + .toggle_slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
      
    /* Rounded toggle_sliders */
    .toggle_slider.round {
        border-radius: 34px;
    }
      
    .toggle_slider.round:before {
        border-radius: 50%;
    }
// -------------------------------------------------------------------------


.radio {
  margin: 0.5rem;
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    + .radio-label {
      &:before {
        content: '';
        background: #f4f4f4;
        border-radius: 100%;
        border: 1px solid darken(#f4f4f4, 25%);
        display: inline-block;
        width: 1.4em;
        height: 1.4em;
        position: relative;
        top: 0.1em;
        margin-right: 0.8em; 
        vertical-align: top;
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
      }
    }
    &:checked {
      + .radio-label {
        &:before {
          background-color:  #3197EE;
          box-shadow: inset 0 0 0 4px #f4f4f4;
        }
      }
    }
    &:focus {
      + .radio-label {
        &:before {
          outline: none;
          border-color:  #3197EE;
        }
      }
    }
    &:disabled {
      + .radio-label {
        &:before {
          box-shadow: inset 0 0 0 4px #f4f4f4;
          border-color: darken(#f4f4f4, 25%);
          background: darken(#f4f4f4, 25%);
        }
      }
    }
    + .radio-label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
}

// -------------------------------------------------------------------------

input, select {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));  
    border-image: initial;
    padding: .5em .6em;
    display: inline-block;
    border: 1px solid #ccc;
    -webkit-box-shadow: inset 0 1px 3px #ddd;
    box-shadow: inset 0 1px 3px #ddd;
    vertical-align: middle;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height:2.3rem;
}


// ---------------------------------------------------------------------------


h1 {
    font-size: 2rem;
    text-align: center;
    margin: 0 0 0em;
  }
  
  .container {
    position: relative;
    // max-width: 40rem;
    margin: 5rem auto;
    background: #fff;
    width: 100%;
    padding: 3rem 5rem 0;
    border-radius: 1px;
  }
  .container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-transition: -webkit-transform 0.28s ease-in-out;
    transition: -webkit-transform 0.28s ease-in-out;
    transition: transform 0.28s ease-in-out;
    transition: transform 0.28s ease-in-out, -webkit-transform 0.28s ease-in-out;
    z-index: -1;
  }
  .container:hover::before {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  
  .button-container {
    text-align: center;
  }
  
  .checkbox {
    position: absolute;
    width: 100%;  
    position: relative;
    margin-bottom: 2rem;
  }
 
 

//   -----------------------------------------------------------------------------------------------

   
  .form-radio,
  .form-group {
    position: relative;
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
  }
  
  .form-inline > .form-group,
  .form-inline > .btn {
    display: inline-block;
    margin-bottom: 0;
  }
  
  .form-help {
    margin-top: 0.125rem;
    margin-left: 0.125rem;
    color: #b3b3b3;
    font-size: 0.8rem;
  }
  .checkbox .form-help, .form-radio .form-help, .form-group .form-help {
    position: absolute;
    width: 100%;
  }
  .checkbox .form-help {
    position: relative;
    margin-bottom: 1rem;
  }
  .form-radio .form-help {
    padding-top: 0.25rem;
    margin-top: -1rem;
  }
  
  .form-group input {
    height: 2.3rem;
  }
  .form-group textarea {
    resize: none;
  }
  .form-group select {
    width: 100%;
    font-size: 1rem;
    height: 2.3rem;
    padding: 0.125rem 0.125rem 0.0625rem;
    background: none;
    border: none;
    line-height: 1.6;
    box-shadow: none;
  }
  .form-group .control-label {
    position: absolute;
    top: 0.25rem;
    pointer-events: none;
    padding-left: 0.125rem;
    z-index: 1;
    color: #b3b3b3;
    font-size: 1rem;
    font-weight: normal;
    -webkit-transition: all 0.28s ease;
    transition: all 0.28s ease;
  }
  .form-group .bar {
    position: relative;
    border-bottom: 0.0625rem solid #999;
    display: block;
  }
  .form-group .bar::before {
    content: '';
    height: 0.125rem;
    width: 0;
    left: 50%;
    bottom: -0.0625rem;
    position: absolute;
    background: #337ab7;
    -webkit-transition: left 0.28s ease, width 0.28s ease;
    transition: left 0.28s ease, width 0.28s ease;
    z-index: 2;
  }
  .form-group input,
  .form-group textarea {
    display: block;
    background: none;
    padding: 0.125rem 0.125rem 0.0625rem;
    font-size: 1rem;
    border-width: 0;
    border-color: transparent;
    line-height: 1.9;
    width: 100%;
    color: transparent;
    -webkit-transition: all 0.28s ease;
    transition: all 0.28s ease;
    box-shadow: none;
  }
  .form-group input[type="file"] {
    line-height: 1;
  }
  .form-group input[type="file"] ~ .bar {
    display: none;
  }
  .form-group select,
  .form-group input:focus,
  .form-group input:valid,
  .form-group input.form-file,
  .form-group input.has-value,
  .form-group textarea:focus,
  .form-group textarea:valid,
  .form-group textarea.form-file,
  .form-group textarea.has-value {
    color: #333;
  }
  .form-group select ~ .control-label,
  .form-group input:focus ~ .control-label,
  .form-group input:valid ~ .control-label,
  .form-group input.form-file ~ .control-label,
  .form-group input.has-value ~ .control-label,
  .form-group textarea:focus ~ .control-label,
  .form-group textarea:valid ~ .control-label,
  .form-group textarea.form-file ~ .control-label,
  .form-group textarea.has-value ~ .control-label {
    font-size: 1rem;
    color: black;
    top: -1rem;
    left: 0;
  }

  .form-group select:focus,
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
  }
  .form-group select:focus ~ .control-label,
  .form-group input:focus ~ .control-label,
  .form-group textarea:focus ~ .control-label {
    color: #337ab7;
  }
  .form-group select:focus ~ .bar::before,
  .form-group input:focus ~ .bar::before,
  .form-group textarea:focus ~ .bar::before {
    width: 100%;
    left: 0;
  }
  
  .checkbox label,
  .form-radio label {
    position: relative;
    cursor: pointer;
    padding-left: 2rem;
    text-align: left;
    color: #333;
    display: block;
  }
  .checkbox input,
  .form-radio input {
    width: auto;
    opacity: 0.00000001;
    position: absolute;
    left: 0;
  }
  
  .radio {
    margin-bottom: 1rem;
  }
  .radio .helper {
    position: absolute;
    top: -0.25rem;
    left: -0.25rem;
    cursor: pointer;
    display: block;
    font-size: 1rem;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    color: #999;
  }
  .radio .helper::before, .radio .helper::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    margin: 0.25rem;
    width: 1rem;
    height: 1rem;
    -webkit-transition: -webkit-transform 0.28s ease;
    transition: -webkit-transform 0.28s ease;
    transition: transform 0.28s ease;
    transition: transform 0.28s ease, -webkit-transform 0.28s ease;
    border-radius: 50%;
    border: 0.125rem solid currentColor;
  }
  .radio .helper::after {
    -webkit-transform: scale(0);
            transform: scale(0);
    background-color: #337ab7;
    border-color: #337ab7;
  }
  .radio label:hover .helper {
    color: #337ab7;
  }
  .radio input:checked ~ .helper::after {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  .radio input:checked ~ .helper::before {
    color: #337ab7;
  }
  
  .checkbox {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  .checkbox .helper {
    color: #999;
    position: absolute;
    top: 5px;
    left: 10px;
    width: 1rem;
    height: 1rem;
    z-index: 0;
    border: 0.125rem solid currentColor;
    border-radius: 0.0625rem;
    -webkit-transition: border-color 0.28s ease;
    transition: border-color 0.28s ease;
  }
  .checkbox .helper::before, .checkbox .helper::after {
    position: absolute;
    height: 0;
    width: 0.2rem;
    background-color: #337ab7;
    display: block;
    -webkit-transform-origin: left top;
            transform-origin: left top;
    border-radius: 0.25rem;
    content: '';
    -webkit-transition: opacity 0.28s ease, height 0s linear 0.28s;
    transition: opacity 0.28s ease, height 0s linear 0.28s;
    opacity: 0;
  }
  .checkbox .helper::before {
    top: 0.65rem;
    left: 0.38rem;
    -webkit-transform: rotate(-135deg);
            transform: rotate(-135deg);
    box-shadow: 0 0 0 0.0625rem #fff;
  }
  .checkbox .helper::after {
    top: 0.3rem;
    left: 0;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
  }
  .checkbox label:hover .helper {
    color: #337ab7;
  }
  .checkbox input:checked ~ .helper {
    color: #337ab7;
  }
  .checkbox input:checked ~ .helper::after, .checkbox input:checked ~ .helper::before {
    opacity: 1;
    -webkit-transition: height 0.28s ease;
    transition: height 0.28s ease;
  }
  .checkbox input:checked ~ .helper::after {
    height: 0.5rem;
  }
  .checkbox input:checked ~ .helper::before {
    height: 1.2rem;
    -webkit-transition-delay: 0.28s;
            transition-delay: 0.28s;
  }
  
  .radio + .radio,
  .checkbox + .checkbox {
    margin-top: 1rem;
  }
  
  .has-error .legend.legend, .has-error.form-group .control-label.control-label {
    color: #d9534f;
  }
  .has-error.form-group .form-help,
  .has-error.form-group .helper, .has-error.checkbox .form-help,
  .has-error.checkbox .helper, .has-error.radio .form-help,
  .has-error.radio .helper, .has-error.form-radio .form-help,
  .has-error.form-radio .helper {
    color: #d9534f;
  }
  .has-error .bar::before {
    background: #d9534f;
    left: 0;
    width: 100%;
  }
  
  .button {
    position: relative;
    background: currentColor;
    border: 1px solid currentColor;
    font-size: 1.1rem;
    color: #4f93ce;
    margin: 3rem 0;
    padding: 0.75rem 3rem;
    cursor: pointer;
    -webkit-transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;
    transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;
    overflow: hidden;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .button span {
    color: #fff;
    position: relative;
    z-index: 1;
  }
  .button::before {
    content: '';
    position: absolute;
    background: #071017;
    border: 50vh solid #1d4567;
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    display: block;
    top: 50%;
    left: 50%;
    z-index: 0;
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
  }
  .button:hover {
    color: #337ab7;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
  }
  .button:active::before, .button:focus::before {
    -webkit-transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;
    transition: opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;
    transition: transform 1.12s ease, opacity 0.28s ease 0.364s;
    transition: transform 1.12s ease, opacity 0.28s ease 0.364s, -webkit-transform 1.12s ease;
    -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
  .button:focus {
    outline: none;
  }
// -------------------------------------------------------------------------------------------------

.form-group .control-label1 {
  position: absolute;
  top: 0.25rem;
  pointer-events: none;
  padding-left: 0.125rem;
  z-index: 1;
  color: #b3b3b3;
  font-size: 1rem;
  font-weight: normal;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
}
.form-group select ~ .control-label1,
.form-group input:focus ~ .control-label1,
.form-group input:valid ~ .control-label1,
.form-group input.form-file ~ .control-label1,
.form-group input.has-value ~ .control-label1,
.form-group textarea:focus ~ .control-label1,
.form-group textarea:valid ~ .control-label1,
.form-group textarea.form-file ~ .control-label1,
.form-group textarea.has-value ~ .control-label1 {
  font-size: 0rem;
  color: black;
  top: -1rem;
  left: 0;
}

.form-group select:focus ~ .control-label1,
.form-group input:focus ~ .control-label1,
.form-group textarea:focus ~ .control-label1 {
  color: #337ab7;
}
.has-error .legend.legend, .has-error.form-group .control-label1.control-label1 {
  color: #d9534f;
}
//   -----------------------------------------------------------------------------------------------
  .form-group1 {
    position: relative;
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
    -webkit-box-shadow: inset 0 1px 3px #ddd;
    box-shadow: inset 0 1px 3px #ddd;
    boder: 1px solid #ccc;     
  }
  
  .form-group1 input {
    height: 2.3rem;    
  }

  .form-group1 .control-label {
    position: absolute;
    top: 0.35rem;
    pointer-events: none;
    padding-left: 0.8rem;
    z-index: 1;
    color: #b3b3b3;
    font-size: 1rem;
    font-weight: normal;
    -webkit-transition: all 0.28s ease;
    transition: all 0.28s ease;
  }
 
  .form-group1 input
  {
    display: block;
    padding: .5em .6em;
    font-size: 1rem;
    line-height: 1.9;
    width: 100%;
    color: transparent;
    -webkit-transition: all 0.28s ease;
    transition: all 0.28s ease;
    -webkit-box-shadow: inset 0 1px 3px #ddd;
    box-shadow: inset 0 1px 3px #ddd;
    boder: 1px solid #ccc; 
  }
  .form-group1 input[type="file"] {
    line-height: 1;
  }
  .form-group1 input[type="file"] ~ .bar {
    display: none;
  }
  .form-group1 input:focus,
  .form-group1 input:valid,
  .form-group1 input.form-file,
  .form-group1 input.has-value
  {
    color: #333;
  }
  .form-group1 input:focus ~ .control-label,
  .form-group1 input:valid ~ .control-label,
  .form-group1 input.form-file ~ .control-label,
  .form-group1 input.has-value ~ .control-label
  {
    font-size: 1rem;
    color: black;
    top: -1.2rem;
    left: 0;
  }
  .form-group1 input:focus,
  {
    outline: none;
    outline-width: 1px;
        outline-style: solid;
        outline-color: blue;
  }
  .form-group1 input:focus ~ .control-label,
  .form-group1 textarea:focus ~ .control-label {
    color: #337ab7;
  }
  .form-group1 select:focus ~ .bar::before,
  .form-group1 input:focus ~ .bar::before,
  .form-group1 textarea:focus ~ .bar::before {
    width: 100%;
    left: 0;
  }
  
// -------------------------------------------------------------------------------------------------

.form-group2 {
  position: relative;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
  -webkit-box-shadow: inset 0 1px 3px #ddd;
  box-shadow: inset 0 1px 3px #ddd;
  boder: 1px solid #ccc;     
}

.form-group2 select {
  height: 2.3rem;    
}

.form-group2 .control-label {
  position: absolute;
  top: 0.35rem;
  pointer-events: none;
  padding-left: 0.8rem;
  z-index: 1;
  color: #b3b3b3;
  font-size: 1rem;
  font-weight: normal;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
}

.form-group2 select
{
  display: block;
  padding: .5em .6em;
  font-size: 1rem;
  line-height: 1.02;
  width: 100%;
  color: transparent;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
  -webkit-box-shadow: inset 0 1px 3px #ddd;
  box-shadow: inset 0 1px 3px #ddd;
  boder: 1px solid #ccc; 
}
.form-group2 select[type="file"] {
  line-height: 1;
}
.form-group2 select[type="file"] ~ .bar {
  display: none;
}
.form-group2 select:focus,
.form-group2 select:valid,
.form-group2 select.form-file,
.form-group2 select.has-value
{
  color: #333;
}
.form-group2 select:focus ~ .control-label,
.form-group2 select:valid ~ .control-label,
.form-group2 select.form-file ~ .control-label,
.form-group2 select.has-value ~ .control-label
{
  font-size: 1rem;
  color: black;
  top: -1.2rem;
  left: 0;
}
.form-group2 select:focus,
{
  outline: none;
  outline-width: 1px;
      outline-style: solid;
      outline-color: blue;
}
.form-group2 select:focus ~ .control-label,
.form-group2 textarea:focus ~ .control-label {
  color: #337ab7;
}
.form-group2 select:focus ~ .bar::before,
.form-group2 select:focus ~ .bar::before,
.form-group2 textarea:focus ~ .bar::before {
  width: 100%;
  left: 0;
}  

// -------------------------------------------------------------------------------------------------
  
.form-group3 {
  position: relative;
  margin-top: 0rem;
  margin-bottom: 0rem;
}

.form-inline > .form-group3{
  display: inline-block;
  margin-bottom: 0;
}


.form-group3 select {
  height: 2.3rem;
}
.form-group3 textarea {
  resize: none;
}
.form-group3 select {
  width: 100%;
  font-size: 1rem;
  height: 2.3rem;
  padding: 0.125rem 0.125rem 0.0625rem;
  background: none;
  border: none;
  line-height: 1.6;
  box-shadow: none;
}
.form-group3 .control-label {
  position: absolute;
  top: 0.25rem;
  pointer-events: none;
  padding-left: 0.125rem;
  z-index: 1;
  color: #b3b3b3;
  font-size: 1rem;
  font-weight: normal;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
}
.form-group3 .bar {
  position: relative;
  border-bottom: 0.0625rem solid #999;
  display: block;
}
.form-group3 .bar::before {
  content: '';
  height: 0.125rem;
  width: 0;
  left: 50%;
  bottom: -0.0625rem;
  position: absolute;
  background: #337ab7;
  -webkit-transition: left 0.28s ease, width 0.28s ease;
  transition: left 0.28s ease, width 0.28s ease;
  z-index: 2;
}
.form-group3 select,
.form-group3 textarea {
  display: block;
  background: none;
  padding: 0.125rem 0.125rem 0.0625rem;
  font-size: 1rem;
  border-width: 0;
  border-color: transparent;
  line-height: 0;
  width: 100%;
  color: transparent;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
  box-shadow: none;
}
.form-group3 select[type="file"] {
  line-height: 1;
}
.form-group3 select[type="file"] ~ .bar {
  display: none;
}
.form-group3 select,
.form-group3 select:focus,
.form-group3 select:valid,
.form-group3 select.form-file,
.form-group3 select.has-value,
.form-group3 textarea:focus,
.form-group3 textarea:valid,
.form-group3 textarea.form-file,
.form-group3 textarea.has-value {
  color: #333;
}

.form-group3 select:focus,
.form-group3 select:focus,
.form-group3 textarea:focus {
  outline: none;
}

.form-group3 select:valid ~ .control-label,
.form-group3 select.form-file ~ .control-label,
.form-group3 select.has-value ~ .control-label,
.form-group3 select:focus ~ .control-label,
.form-group3 textarea:focus ~ .control-label {
  color: #337ab7;
  top: -1rem;
}

.form-group3 select:valid ~ .control-label,
.form-group3 select.form-file ~ .control-label,
.form-group3 select.has-value ~ .control-label{
  color: black;
  top: -1rem;
}

.form-group3 select:focus ~ .bar::before,
.form-group3 select:focus ~ .bar::before,
.form-group3 select:focus ~ .bar::before,
.form-group3 textarea:focus ~ .bar::before {
  width: 100%;
  left: 0;
}

.has-error .legend.legend, .has-error.form-group3 .control-label.control-label {
  color: #d9534f;
}
.has-error.form-group3 .form-help,
.has-error.form-group3 .helper, .has-error.checkbox .form-help{
  color: #d9534f;
}
.has-error .bar::before {
  background: #d9534f;
  left: 0;
  width: 100%;
}
 
    }
 
`;
