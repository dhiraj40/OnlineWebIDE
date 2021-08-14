import React,{useState} from "react";
import Editor from "./Editor";
import {Container, Row, Col} from "react-bootstrap";


function App() { 
    const [html, setHtml] = useState("");
    const [css, setcss] = useState("");
    const [js, setjs] = useState("");

    const srcDoc = ` 
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    return (
        <Container className="AllFill">
            <Row>
                <Col><Editor language="xml" editor_name="HTML" value={html} onChange={setHtml} /></Col>
                <Col><Editor language="css" editor_name="CSS" value={css} onChange={setcss} /></Col>
                <Col><Editor language="javascript" editor_name="JS" value={js} onChange={setjs} /></Col>
            </Row>
            <Row>
                <iframe
                    srcDoc = {srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </Row>
        </Container>
    );
 }

 export default App;