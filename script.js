var input = '';
var nbResult = '';

function affichage(input) {
	document.getElementById('affichage').innerHTML = input;
}

function nbPad(nb) {
	affichage(' '); //replace 0 par rien
	input+=nb;
	affichage(input); //ajout nb en strig à input
}

function operator(optr) {
	input = input + ' ' +optr+ ' '; //ajout de l'opérateur en strig à input
	affichage(input);
}

function result() {
	nbResult = eval(input); //opération sur une chaine
	if (nbResult === undefined) {
		document.getElementById('affichage').innerHTML = input;
	} else {
		document.getElementById('affichage').innerHTML = nbResult;
	}
}

function reset() {
	input = '';
	affichage('0');
}