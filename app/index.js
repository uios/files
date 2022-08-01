window.onload = ()=>{
    window.dom = {
        body: document.body,
        boot: document.getElementById("boot")
    };

    dom.body.dataset.load = "ing";

    init();
}

function init() {
    dom.body.dataset.load = "ed";
    
    window.location.pathname.router();
}

window.on = {};
window.on.submit = {};

window.on.submit.index = {};
window.on.submit.index.path = function(event) {
    console.log(event);
    event.preventDefault();
    const form = event.target;
    const path = form.find('input[type="text"]');
    var GOT = path.value.split("\\");
    GOT.shift();
    var href = rout.ed.url(GOT);
    console.log(GOT,href);
    href.router();
}

window.submit = window.on.submit;
