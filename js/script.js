
function run1(){
	document.getElementById("content").value +="1";
}

function run2(){
	document.getElementById("content").value += "2";
}

function run3(){
	document.getElementById("content").value += "3";
}

function run4(){
	document.getElementById("content").value += "4";
}

function run5(){
	document.getElementById("content").value += "5";
}

function run6(){
	document.getElementById("content").value += "6";
}

function run7(){
	document.getElementById("content").value += "7";
}

function run8(){
	document.getElementById("content").value += "8";
}

function run9(){
	document.getElementById("content").value += "9";
}

function run0(){
	document.getElementById("content").value += "0";
}

function runMinus(){
	document.getElementById("content").value += "-";
}

function runplus(){
	document.getElementById("content").value +="+";
}

function runMulti(){
	document.getElementById("content").value +="*";
}

function runDivi(){
	document.getElementById("content").value +="/";
}

function eq(){
	var ev = eval(document.getElementById("content").value)
	document.getElementById("content").value = ev;
}


