var arrayComp = ['acrobaties', 'art_magie', 'bluff', 
			'connaiss_exploration', 'connaiss_folklore', 'connaiss_geographie', 'connaiss_histoire', 'connaiss_ingenierie', 'connaiss_mystere', 'connaiss_nature', 'connaiss_noblesse', 'connaiss_plans', 'connaiss_religion', 
			'deguisement', 'diplomatie', 'discretion', 'dressage', 'equitation', 'escalade', 'escamotage', 'estimation', 'evasion', 'intimidation', 'linguistique', 'natation', 'perception', 'premiers_secours', 'psychologie', 'sabotage', 'survie', 'utilisation_objets_magiques', 'vol'];
/*var arrayKeyComp = {};
for(var key in arrayComp) {
	arrayKeyComp[arrayComp[key]] = key;
}*/
var arrayLang = ['commun', 'elfique', 'gnome', 'halfelin', 'nain', 'druide', 'dragon', 'geant', 'gnoll', 'gobelin', 'orque', 'profondeur', 'sylvestre', 'abyssal', 'aerien', 'aquatique', 'celeste', 'igneux', 'infernal', 'terreux'];
/*var arrayKeyLang = {};
for(var key in arrayLang) {
	arrayKeyLang[arrayLang[key]] = key;
}*/

var barbare = {
	refl : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	vig  : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vol  : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	bba  : ['+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12', '+13', '+14', '+15', '+16', '+17', '+18', '+19', '+20'],
	hpbase : 12,
	ptcomp : 4,
	comp   : [0, 9, 16, 17, 18, 22, 24, 25, 29],
	artisanat : true,
	profession : false,
	representation : false
},
barde = {
	refl : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vig  : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	vol  : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	bba  : ['0', '+1', '+2', '+3', '+3', '+4', '+5', '+6', '+6', '+7', '+8', '+9', '+9', '+10', '+11', '+12', '+12', '+13', '+14', '+15'],
	hpbase : 8,
	ptcomp : 6,
	comp   : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 25, 27, 30],
	artisanat : true,
	profession : true,
	representation : true
},
druide = {
	refl : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vig  : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	vol  : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	bba  : ['0', '+1', '+2', '+3', '+3', '+4', '+5', '+6', '+6', '+7', '+8', '+9', '+9', '+10', '+11', '+12', '+12', '+13', '+14', '+15'],
	hpbase : 8,
	ptcomp : 4,
	comp   : [1, 5, 9, 16, 17, 18, 24, 25, 26, 29, 31],
	artisanat : true,
	profession : true,
	representation : false
},
ensorceleur = {
	refl : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vig  : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	vol  : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	bba  : ['0', '+1', '+1', '+2', '+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10'],
	hpbase : 6,
	ptcomp : 2,
	comp   : [1, 2, 8, 20, 22, 30, 31],
	artisanat : true,
	profession : true,
	representation : false
},
guerrier = {
	refl : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	vig  : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vol  : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	bba  : ['+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12', '+13', '+14', '+15', '+16', '+17', '+18', '+19', '+20'],
	hpbase : 10,
	ptcomp : 2,
	comp   : [3, 7, 16, 17, 18, 22, 24, 29],
	artisanat : true,
	profession : true,
	representation : false
},
magicien = {
	refl : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vig  : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	vol  : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	bba  : ['0', '+1', '+1', '+2', '+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10'],
	hpbase : 6,
	ptcomp : 2,
	comp   : [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 23, 31],
	artisanat : true,
	profession : true,
	representation : false
},
moine = {
	refl : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vig  : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vol  : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	bba  : ['0', '+1', '+2', '+3', '+3', '+4', '+5', '+6', '+6', '+7', '+8', '+9', '+9', '+10', '+11', '+12', '+12', '+13', '+14', '+15'],
	hpbase : 8,
	ptcomp : 4,
	comp   : [0, 6, 12, 15, 17, 18, 21, 22, 24, 25, 27],
	artisanat : true,
	profession : true,
	representation : true
},
paladin = {
	refl : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vig  : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vol  : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	bba  : ['+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12', '+13', '+14', '+15', '+16', '+17', '+18', '+19', '+20'],
	hpbase : 10,
	ptcomp : 2,
	comp   : [1, 10, 12, 14, 16, 15, 24, 25],
	artisanat : true,
	profession : true,
	representation : false
},
pretre = {
	refl : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vig  : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vol  : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	bba  : ['0', '+1', '+2', '+3', '+3', '+4', '+5', '+6', '+6', '+7', '+8', '+9', '+9', '+10', '+11', '+12', '+12', '+13', '+14', '+15'],
	hpbase : 8,
	ptcomp : 2,
	comp   : [1, 6, 8, 10, 11, 12, 14, 20, 23, 26, 27],
	artisanat : true,
	profession : true,
	representation : false
},
rodeur = {
	refl : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	vig  : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	vol  : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	bba  : ['+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12', '+13', '+14', '+15', '+16', '+17', '+18', '+19', '+20'],
	hpbase : 10,
	ptcomp : 6,
	comp   : [1, 3, 5, 9, 15, 16, 17, 18, 22, 24, 25, 26, 29],
	artisanat : true,
	profession : true,
	representation : false
},
roublard = {
	refl : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	vig  : ['0', '0', '+1', '+1', '+1', '+2', '+2', '+2', '+3', '+3', '+3', '+4', '+4', '+4', '+5', '+5', '+5', '+6', '+6', '+6'],
	vol  : ['+2', '+3', '+3', '+4', '+4', '+5', '+5', '+6', '+6', '+7', '+7', '+8', '+8', '+9', '+9', '+10', '+10', '+11', '+11', '+12'],
	bba  : ['0', '+1', '+2', '+3', '+3', '+4', '+5', '+6', '+6', '+7', '+8', '+9', '+9', '+10', '+11', '+12', '+12', '+13', '+14', '+15'],
	hpbase : 8,
	ptcomp : 8,
	comp   : [0, 2, 3, 4, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 30],
	artisanat : true,
	profession : true,
	representation : true
};
var arrayClass = {
	'barbare' 		: barbare,
	'barde' 		: barde,
	'druide' 		: druide,
	'ensorceleur' 	: ensorceleur,
	'guerrier' 		: guerrier,
	'magicien' 		: magicien,
	'moine' 		: moine,
	'paladin' 		: paladin,
	'pretre' 		: pretre,
	'rodeur' 		: rodeur,
	'roublard' 		: roublard
};

var demi_elfe = {
	langbase : [0, 1],
	langsupp : [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
}
demi_orque = {
	langbase : [0, 10],
	langsupp : [6, 7, 8, 9, 13]
},
elfe = {
	langbase : [0, 1],
	langsupp : [2, 6, 8, 9, 10, 12, 16]
},
gnome = {
	langbase : [0, 2],
	langsupp : [1, 4, 6, 7, 9, 10]
},
halfelin = {
	langbase : [0, 3],
	langsupp : [1, 2, 4, 9, 13]
},
humain = {
	langbase : [0],
	langsupp : [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
},
nain = {
	langbase : [0, 4],
	langsupp : [2, 7, 9, 10, 11, 14, 15, 17, 19]
};
var arrayRace = {
	'demi_elfe' 	: demi_elfe,
	'demi_orque' 	: demi_orque,
	'elfe' 			: elfe,
	'gnome' 		: gnome,
	'halfelin' 		: halfelin,
	'humain' 		: humain,
	'nain'			: nain
};
