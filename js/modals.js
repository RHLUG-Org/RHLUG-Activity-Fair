function injectModalHTML(){
    var html = '<div id="modalBackground"><div id="modalFrame"><div id="modalHeader"><button onclick="closeModal()">&times;</button></div><div id="modalContent"><h1>This is a popup</h1></div></div>';
    document.body.insertAdjacentHTML("beforeEnd", html);
}

injectModalHTML();

function showModal(content){
    document.getElementById("modalContent").innerHTML = content;
    document.getElementById("modalBackground").style.display = "flex";
}

function closeModal(){
    document.getElementById("modalBackground").style.display = "none";
}

function showQR(url){
    showModal("<span id='qrSpan'>Scan to Continue on Your Mobile Device:</span><div id='qrcode'></div>");
    new QRCode(document.getElementById("qrcode"), url);
}
