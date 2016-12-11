var age;
var nationalité;
var sexe;

age = prompt('Quel âge avez-vous?');
nationalité = prompt('De quelle nationalité êtes-vous?');
sexe = prompt('Dernière question, êtes-vous une fille ou un garçon?');

if (age >18, sexe == 'garçon') {
	alert('Vous êtes un garçon majeur');
}
else if (age <=18, sexe == 'garçon')  {
    alert('Vous êtes un garçon mineur')
}
else if (age >18, sexe == 'fille') {
	alert('Vous êtes une fille majeure');
}
else if (age <=18, sexe == 'fille') {
	alert('Vous êtes une fille mineure');	
}
else {
	alert('Oups! Un des champs n\'a pas été rempli correctement');
}

