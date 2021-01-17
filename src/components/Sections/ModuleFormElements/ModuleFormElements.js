import React from 'react';
import ReactDOM from 'react-dom';

const ModuleElements = function() {

};

ModuleElements.border = (props) => {

  switch (props.columnelementType) {
    case 'Text':
        return [
            <>
                <span class="border-no-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="text" class="upper-label form-value1" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="text" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-inside-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="text" class="upper-label" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="text"  class="form-value2" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-left">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="text" class="upper-label form-value3" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="text"  label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-center">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="text" class="upper-label form-value4" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="text" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>

                <div class="form-group">
                    <span class="underline-no-label">
                        <input type="text" name="username" class="form-value5" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label1">{props.replaceFolder}</label><i class="bar"></i>
                    </span>
                    <span class="underline-inside-label">
                        <input type="text" name="username" class="form-value6" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label><i class="bar"></i>
                    </span>                    
                    <span class="underline-above-left">
                        <label for="input" style={{top:"-1rem", paddingLeft:"0.125rem"}}><b>{props.label}</b></label>
                        <input type="text" name="username" class="form-value7" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </span>
                    <div class="underline-above-center" style={{textAlign:"center"}}>
                        <label for="input" style={{top:"-1rem"}}><b>{props.label}</b></label>
                        <input type="text" name="username" class="form-value8" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </div>
                </div>
                <p></p>
            </>
        ];
      break;
    case 'Email':
        return [
            <>
                <span class="border-no-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="email" class="upper-label form-value1" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="email" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-inside-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="email" class="upper-label" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="email"  class="form-value2" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-left">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="email" class="upper-label form-value3" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="email"  label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-center">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="email" class="upper-label form-value4" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="email" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>

                <div class="form-group">
                    <span class="underline-no-label">
                        <input type="email" name="username" class="form-value5" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label1">{props.replaceFolder}</label><i class="bar"></i>
                    </span>
                    <span class="underline-inside-label">
                        <input type="email" name="username" class="form-value6" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label><i class="bar"></i>
                    </span>                    
                    <span class="underline-above-left">
                        <label for="input" style={{top:"-1rem", paddingLeft:"0.125rem"}}><b>{props.label}</b></label>
                        <input type="email" name="username" class="form-value7" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </span>
                    <div class="underline-above-center" style={{textAlign:"center"}}>
                        <label for="input" style={{top:"-1rem"}}><b>{props.label}</b></label>
                        <input type="email" name="username" class="form-value8" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </div>
                </div>
                <p></p>
            </>
        ];
      break;
    case 'Password':
        return [
            <>
                <span class="border-no-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="password" class="upper-label form-value1" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="password" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-inside-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="password" class="upper-label" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="password"  class="form-value2" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-left">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="password" class="upper-label form-value3" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="password"  label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-center">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="password" class="upper-label form-value4" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="password" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>

                <div class="form-group">
                    <span class="underline-no-label">
                        <input type="password" name="username" class="form-value5" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label1">{props.replaceFolder}</label><i class="bar"></i>
                    </span>
                    <span class="underline-inside-label">
                        <input type="password" name="username" class="form-value6" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label><i class="bar"></i>
                    </span>                    
                    <span class="underline-above-left">
                        <label for="input" style={{top:"-1rem", paddingLeft:"0.125rem"}}><b>{props.label}</b></label>
                        <input type="password" name="username" class="form-value7" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </span>
                    <div class="underline-above-center" style={{textAlign:"center"}}>
                        <label for="input" style={{top:"-1rem"}}><b>{props.label}</b></label>
                        <input type="password" name="username" class="form-value8" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </div>
                </div>
                <p></p>
            </>
        ];
      break;
    case 'Number':
        return [
            <>
                <span class="border-no-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="number" class="upper-label form-value1" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="number" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-inside-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="number" class="upper-label" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="number"  class="form-value2" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-left">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="number" class="upper-label form-value3" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="number"  label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-center">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="number" class="upper-label form-value4" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="number" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>

                <div class="form-group">
                    <span class="underline-no-label">
                        <input type="number" name="username" class="form-value5" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label1">{props.replaceFolder}</label><i class="bar"></i>
                    </span>
                    <span class="underline-inside-label">
                        <input type="number" name="username" class="form-value6" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label><i class="bar"></i>
                    </span>
                    <span class="underline-above-left">
                        <label for="input" style={{top:"-1rem", paddingLeft:"0.125rem"}}><b>{props.label}</b></label>
                        <input type="number" name="username" class="form-value7" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </span>
                    <div class="underline-above-center" style={{textAlign:"center"}}>
                        <label for="input" style={{top:"-1rem"}}><b>{props.label}</b></label>
                        <input type="number" name="username" class="form-value8" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </div>
                </div>
                <p></p>
            </>          
        ];
      break;
    case 'Dropdown':
        var defaultValues = props.defaultValue;
        var res = defaultValues.split(",");
        return[
            <>
                <span class="dropdown-border">
                    <span class="dropdown-border-no-label">                    
                        <select 
                            className="select form-value1" label={props.label} formType={props.columnelementType} id={props.label} placeholder={props.replaceFolder}>
                                <option value=""  disabled selected>{props.replaceFolder}</option>
                                {res.map((_res, _i) => {
                                    return (
                                        <option key={_i} value={_res}>{_res}</option>
                                    )
                                })}
                        </select>
                    </span>
                    <div class="form-group2 dropdown-border-inside-label">
                        <select 
                            className="select form-value2" label={props.label} formType={props.columnelementType} id={props.label} placeholder={props.replaceFolder} required="required">
                                <option value=""  disabled selected></option>
                                {res.map((_res, _i) => {
                                    return (
                                        <option key={_i} value={_res}>{_res}</option>
                                    )                                
                                })}                            
                        </select>
                        <div class="form-group2"></div>
                        <label for={props.label} class="control-label"><b>{props.label}</b></label><i class="bar"></i>
                    </div>
                    <span class="dropdown-border-above-left">  
                        <div for={props.label} ><b>{props.label}</b></div>
                        <select 
                            className="select form-value3" label={props.label} formType={props.columnelementType} id={props.label} placeholder={props.replaceFolder}>
                                <option value=""  disabled selected></option>
                                {res.map((_res, _i) => {
                                    return (
                                        <option key={_i} value={_res}>{_res}</option>
                                    )                                
                                })}
                        </select>
                    </span>
                    <span class="dropdown-border-above-center">  
                        <div for={props.label} style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <select 
                            className="select form-value4" label={props.label} formType={props.columnelementType} id={props.label} placeholder={props.replaceFolder}>
                                <option value=""  disabled selected></option>
                                {res.map((_res, _i) => {
                                    return (
                                        <option key={_i} value={_res}>{_res}</option>
                                    )                                
                                })}
                        </select>
                    </span>
                </span>

                <span class="dropdown-underline">
                    <div class="form-group3 dropdown-underline-no-label">
                        <select 
                            className="select form-value5" label={props.label} formType={props.columnelementType} id={props.label} placeholder={props.replaceFolder} required="required">
                                <option value=""  disabled selected>{props.replaceFolder}</option>
                                {res.map((_res, _i) => {
                                    return (
                                        <option key={_i} value={_res}>{_res}</option>
                                    )                                
                                })}                            
                        </select>
                       <i class="bar"></i>
                    </div>
                    
                    <div class="form-group3 dropdown-underline-inside-label">
                        <select 
                            className="select form-value6" label={props.label} formType={props.columnelementType} id={props.label} placeholder={props.replaceFolder} required="required">
                                <option value=""  disabled selected></option>
                                {res.map((_res, _i) => {
                                    return (
                                        <option key={_i} value={_res}>{_res}</option>
                                    )                                
                                })}                            
                        </select>
                        <label for={props.label} class="control-label"><b>{props.label}</b></label><i class="bar"></i>
                    </div>                    

                    <div class="form-group3 dropdown-underline-above-left">
                        <div for={props.label} ><b>{props.label}</b></div>
                        <select 
                            className="select form-value7" label={props.label} formType={props.columnelementType} id={props.label} placeholder={props.replaceFolder} required="required">
                                <option value=""  disabled selected></option>
                                {res.map((_res, _i) => {
                                    return (
                                        <option key={_i} value={_res}>{_res}</option>
                                    )                                
                                })}                            
                        </select>
                        <i class="bar"></i>
                    </div>

                    <div class="form-group3 dropdown-underline-above-center">
                        <div for={props.label} style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <select 
                            className="select form-value8" label={props.label} formType={props.columnelementType} id={props.label} placeholder={props.replaceFolder} required="required">
                                <option value=""  disabled selected></option>
                                {res.map((_res, _i) => {
                                    return (
                                        <option key={_i} value={_res}>{_res}</option>
                                    )                                
                                })}                            
                        </select>
                        <i class="bar"></i>
                    </div>
                </span>                   
                <p></p>
            </>
                
        ];        
        break;
    case 'Check':
        var defaultValues = props.defaultValue;
        var res = defaultValues.split(",");
            return [
                <div type="checkbox" class="checkbox check-form-value"><b>{props.label}</b>
                    <p>
                        {res.map((_res, _i) => {
                            return (                       
                                <label>
                                    <input type="checkbox" class="form-value9" label={props.label} formType={props.columnelementType} key={_i} value={_res}/> <i class="helper"></i>{_res}
                                </label>                   
                            )                                
                        })}  
                    </p>
                </div>                
            ];
        break;        
    case 'Radio':
        var defaultValues = props.defaultValue;
        var res = defaultValues.split(",");
            return [    
                <>
                    <b class="radio-label">{props.label}</b>
                    <p class="radio-form-value">
                        {res.map((_res, _i) => {
                                return (            
                                    <div class="radio">
                                        <input class="form-value10" name={props.label} type="radio" value={_res} label={props.label} formType={props.columnelementType} key={_i} id={_res}/>
                                        <label key={_i} for={_res} class="radio-label">{_res}</label>
                                    </div>                   
                                )                                
                        })} 
                    </p>
                    <p></p>
                </>
            ];
      break;
    case 'Toggle':
        return [            
            <>
                <p></p>
                <b>{props.label} </b>                
                <label className="toggle toggle-form-value" style={{top:"-4px"}} placeholder={props.replaceFolder}>
                    <input type="checkbox" id="toggler1" className="check form-value11" label={props.label} formType={props.columnelementType}/>
                    <span className="toggle_slider round"></span>
                </label>
                <p></p>        
            </>            
        ];
      break;
    case 'Date Picker':
        return [
            <>
                <span class="border-no-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="date" class="upper-label form-value1" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="date" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-inside-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="date" class="upper-label" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="date"  class="form-value2" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-left">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="date" class="upper-label form-value3" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="date"  label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-center">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="date" class="upper-label form-value4" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="date" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
 
                <div class="form-group">
                    <span class="underline-no-label">
                        <input type="date" name="username" class="form-value5" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label1">{props.replaceFolder}</label><i class="bar"></i>
                    </span>
                    <span class="underline-inside-label">
                        <input type="date" name="username" class="form-value6" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label><i class="bar"></i>
                    </span>                    
                    <span class="underline-above-left">
                        <label for="input" style={{top:"-1rem", paddingLeft:"0.125rem"}}><b>{props.label}</b></label>
                        <input type="date" name="username" class="form-value7" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </span>
                    <div class="underline-above-center" style={{textAlign:"center"}}>
                        <label for="input" style={{top:"-1rem"}}><b>{props.label}</b></label>
                        <input type="date" name="username" class="form-value8" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </div>
                </div>
                <p></p>
            </>            
        ];
        break;
    case 'Time Selector':
        return [
            <>                
                <span class="border-no-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="time" class="upper-label form-value1" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="time" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-inside-label">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="time" class="upper-label" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="time"  class="form-value2" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-left">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="time" class="upper-label form-value3" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="time"  label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>
                <span class="border-above-center">
                        <div class="upper-label no-label above-left"><b>{props.label}</b></div>
                        <div class="upper-label no-label above-center" style={{textAlign:"center"}}><b>{props.label}</b></div>
                        <input type="time" class="upper-label form-value4" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                    <div class="form-group1">                  
                        <input type="time" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label>
                    </div>
                </span>        
 
                <div class="form-group">
                    <span class="underline-no-label">
                        <input type="time" name="username" class="form-value5" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label1">{props.replaceFolder}</label><i class="bar"></i>
                    </span>
                    <span class="underline-inside-label">
                        <input type="time" name="username" class="form-value6" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <label for="input" class="control-label"><b>{props.label}</b></label><i class="bar"></i>
                    </span>                    
                    <span class="underline-above-left">
                        <label for="input" style={{top:"-1rem", paddingLeft:"0.125rem"}}><b>{props.label}</b></label>
                        <input type="time" name="username" class="form-value7" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </span>
                    <div class="underline-above-center" style={{textAlign:"center"}}>
                        <label for="input" style={{top:"-1rem"}}><b>{props.label}</b></label>
                        <input type="time" name="username" class="form-value8" label={props.label} formType={props.columnelementType} placeholder={props.replaceFolder} required="required"/>
                        <i class="bar"></i>
                    </div>
                </div>
                <p></p>
            </>
        ];
      break;   
  }

  return null;
}

const ModuleFormElements = ( props) => {
    if (1) {
        return ModuleElements.border(props);
   
    }
     return alert("There is error in Formbuiler!!!");
    
};

export default ModuleFormElements;

