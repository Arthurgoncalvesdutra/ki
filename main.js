var SpeechRecognition = window.webkitSpeechRecognition;
var voz = new SpeechRecognition();
var Texto = document.getElementById("voz");
function iscuti() {
    Texto.innerHTML = "";
    voz.start();
}
voz.onresult = function (e) {
    var conteudo = e.results[0][0].transcript;
    Texto.innerHTML = conteudo;
    if (conteudo == "pug") {
        xereta();

    }
}
function xereta() {
    var vos = window.speechSynthesis;
    var frase = "olha o pugzinho";
    var fale = new SpeechSynthesisUtterance(frase);
    vos.speak(fale);
    Webcam.attach(camera);
    setTimeout(function () {
        pug400000();
       // ctrl_S();
    }, 5000);
    setTimeout(function () {
        pug400000();
       // ctrl_S();
    }, 10000);
    setTimeout(function () {
        pug400000();
       // ctrl_S();
    }, 15000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 109
});
function pug400000() {
    Webcam.snap(function (data_uri) { document.getElementById("resultado").innerHTML = '<img id="foto" src="' + data_uri + '"/>'; });

}
function ctrl_S(){
    link=document.getElementById("link");
    foto=document.getElementById("foto").src;
    link.href=foto;
    link.click();
}