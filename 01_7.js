var age;
var nationalité;
var sexe;

age = prompt('Quel âge avez-vous?');
sexe = prompt('Dernière question, êtes-vous une fille ou un garçon?');
nationalité = prompt('De quelle nationalité êtes-vous?');

if (age >18 && sexe == 'garçon') {     //&& vérifie les deux conditions
	alert('Vous êtes un garçon majeur de nationalité '+ nationalité);
}
else if (age <=18 && sexe == 'garçon')  {
    alert('Vous êtes un garçon mineur de nationalité '+ nationalité)
}
else if (age >18 && sexe == 'fille') {
	alert('Vous êtes une fille majeure de nationalité '+ nationalité);
}
else if (age <=18 && sexe == 'fille') {
	alert('Vous êtes une fille mineure de nationalité '+ nationalité);	
}
else {
	alert('Oups! Un des champs n\'a pas été rempli correctement');
}

