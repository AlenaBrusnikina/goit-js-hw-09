const t={containerEl:document.querySelector("body"),buttonStartEl:document.querySelector("[data-start]"),buttonStopEl:document.querySelector("[data-stop]")};let e=null;t.buttonStartEl.addEventListener("click",(function(){e=setInterval((()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.containerEl.style.backgroundColor=e}),1e3),t.buttonStartEl.setAttribute("disabled",!0),t.buttonStopEl.removeAttribute("disabled",!1)})),t.buttonStopEl.addEventListener("click",(function(){clearInterval(e),t.buttonStartEl.removeAttribute("disabled",!1),t.buttonStopEl.setAttribute("disabled",!0)})),t.containerEl.style.margin="50px",t.containerEl.style.textAlign="center",t.buttonStartEl.style.padding="10px 30px",t.buttonStopEl.style.padding="10px 30px",t.buttonStartEl.style.backgroundColor="white",t.buttonStopEl.style.backgroundColor="white",t.buttonStartEl.style.fontSize="25px",t.buttonStopEl.style.fontSize="25px";
//# sourceMappingURL=01-color-switcher.ce447eca.js.map
