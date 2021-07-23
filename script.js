function help() {
    var xyz = document.getElementById("textHelper").value;

    var synth = window.speechSynthesis;

    speak_data = xyz;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}
function repeat() {
    repeat(help());
}
function stop() {
    pause(repeat());
}
