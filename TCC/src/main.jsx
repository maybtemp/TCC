import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


function ColorSelector( parent , options )
{

    if ( document.getElementById("ColorSelectorStyle") === null )
    {
        var style = document.createElement("style");
        style.id = "ColorSelectorStyle";
        style.innerHTML = "ColorSelectorContainer{display:grid;grid-template-columns:repeat(8,1fr);position:absolute;left:0;top:0;z-index:999;padding:5px;background-color:#eeeeee;border:1px solid #dddddd;}pingpoliColorSelectorColor{display:inline-block;width:30px;height:30px;margin:5px;border:1px solid #000000;}pingpoliColorSelectorColor:hover{box-shadow:0 0 10px #555555;}";
        document.body.appendChild( style );
    }
  this.container = document.createElement("colorselectorcontainer")  
  }