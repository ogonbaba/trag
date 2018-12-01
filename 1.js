
function sloghit() {
var num1, num2, result;
num1 = document.getElementById('one').value;
num1 = parseInt(num1);
num2 = document.getElementById('two').value;
num2 = parseInt(num2);
	result = num1 + num2;
	document.getElementById('re').innerHTML = result;
}
function vychest() {
var num1, num2, result;
num1 = document.getElementById('one').value;
num1 = parseInt(num1);
num2 = document.getElementById('two').value;
num2 = parseInt(num2);
	result = num1 - num2;
	document.getElementById('re').innerHTML = result;
}
function umnoghit() {
var num1, num2, result;
num1 = document.getElementById('one').value;
num1 = parseInt(num1);
num2 = document.getElementById('two').value;
num2 = parseInt(num2);
	result = num1 * num2;
	document.getElementById('re').innerHTML = result;
}
function razdelit() {
var num1, num2, result;
num1 = document.getElementById('one').value;
num1 = parseInt(num1);
num2 = document.getElementById('two').value;
num2 = parseInt(num2);
	result = num1 / num2;
	document.getElementById('re').innerHTML = result;
}