function getOutput() {
    return document.querySelector('.output-value').innerText;
} 

function printOutput(num) {
    document.querySelector('.output-value').innerText = num;	
}

var operator = document.getElementsByClassName('operator');

for(var i = 0;i < operator.length;i++) {
    operator[i].addEventListener('click', function() {
        var output = getOutput();
        if(this.id === 'clear') {
            printOutput("");
        } else if(this.id === 'backspace') {
            output = output.substr(0,output.length- 1);
            printOutput(output);
        } else if(this.id === '=') {
            output = eval(output);
            printOutput(output);
        } else {
            output = output + this.id;
            printOutput(output);
        }
    });
}

var number = document.getElementsByClassName('number');
for(var i = 0;i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var output = getOutput();
        output = output + this.id;
        printOutput(output);
    });
}

/*
var microphone = document.getElementById('microphone');
microphone.onclick = function() {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    operations = {
        "plus":"+",
        "minus":"-",
        "multiply":"*",
        "multiplied":"*",
        "divide":"/",
        "divided":"/",
        "reminder":"%"}
    recognition.onresult = function(event){
		var input = event.results[0][0].transcript;
		for(property in operations){
			input= input.replace(property, operations[property]);
		}
		document.querySelector('.output-value').innerText = input;
		setTimeout(function(){
			evaluate(input);
		},1000);
	}
}

function evaluate(input){
	try{
		var result = eval(input);
		document.querySelector('.output-value').innerText = result;
	}
	catch(e){
		console.log(e);
		document.querySelector('.output-value').innerText = '';
	}
}
 */



