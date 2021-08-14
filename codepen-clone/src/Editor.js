import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import {Controlled as ControlledTextEditor} from "react-codemirror2"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const Editor=({editor_name, language, value, onChange})=>{ 

    //const {text,setText} = useState('');

    function changeHandler(editor,data, value){
        onChange(value);
    }

    return (
        <div className="container">
            <div className="editor-title">{editor_name}</div>
            <ControlledTextEditor 
                value = {value}
                onBeforeChange = {changeHandler}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping:true,
                    lint: true,
                    mode: language,
                    theme: "material",
                    lineNumbers: true,
                }}
            />

        </div>
    );
 }

 export default Editor;