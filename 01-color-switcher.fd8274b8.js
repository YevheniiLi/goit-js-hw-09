!function(){var t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),body:document.querySelector("body")},e=null;t.startButton.addEventListener("click",(function(o){o.preventDefault(),t.startButton.style.disabled=!1,t.startButton.style.color="#666666",e=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));t.body.style.background=e}),1e3)})),t.stopButton.addEventListener("click",(function(o){o.preventDefault(),clearInterval(e),t.startButton.style.disabled=!0,t.startButton.style.color="#000000"}))}();
//# sourceMappingURL=01-color-switcher.fd8274b8.js.map
