var nb1;
var nb2;

nb1 = prompt('Bonjour, veuillez entrer un nombre décimal.\nExemple : 2,678');
nb2 = prompt('Veuillez entrer un autre nombre décimal.');

var total = parseInt(nb1)*parseInt(nb2); //parseInt pour que le nombre rentré ne soit pas compris comme une string 
//et renvoi obligatoirement un entier
alert('La multiplication de vos nombres donne : '+ total);