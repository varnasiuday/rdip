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
function formValidation()
{
var uname = document.registration.username;
var uemail = document.registration.email;
var phoneno =document.registration.phnnumber;
{
if(allLetter(uname))
{
if(ValidateEmail(uemail))
{
if(allnumeric(phoneno))
{
}
}
}
}
return false;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}function allnumeric(phoneno)
{
var phoneno=/^\d{10}$/;
if(phoneno.value.match(phoneno))
{
return true;
}
else
{
alert("you have entered an invalid phone number");
phoneno.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}



