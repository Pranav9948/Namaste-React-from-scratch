import React,{ReactDOM} from "react";

const Elements1 =  React.createElement("h1",{},"Namaste Everyone...")
const Elements2 =  React.createElement("h3",{},"Welcome Everyone...")



const Elements3 =  React.createElement("div",{},[Elements1,Elements2])

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(Elements3)