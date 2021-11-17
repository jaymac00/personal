
const roster = [ // roster json - Squirtle, Ivysaur, Charizard, Pyra (individual), Mythra (individual)
	{
	"id":"Mario",
	"name":"Mario",
	"number":1,
	"series":"Super Mario",
	"alts":[""],
	"echo":false
	},
	{
	"id":"DonkeyKong",
	"name":"Donkey Kong",
	"number":2,
	"series":"Donkey Kong",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Link",
	"name":"Link",
	"number":3,
	"series":"The Legend of Zelda",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Samus",
	"name":"Samus",
	"number":4,
	"series":"Metroid",
	"alts":[""],
	"echo":false
	},
	{
	"id":"DarkSamus",
	"name":"Dark Samus",
	"number":4,
	"series":"Metroid",
	"alts":[""],
	"echo":true
	},
	{
	"id":"Yoshi",
	"name":"Yoshi",
	"number":5,
	"series":"Yoshi",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Kirby",
	"name":"Kirby",
	"number":6,
	"series":"Kirby",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Fox",
	"name":"Fox",
	"number":7,
	"series":"Star Fox",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Pikachu",
	"name":"Pikachu",
	"number":8,
	"series":"Pokémon",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Luigi",
	"name":"Luigi",
	"number":9,
	"series":"Super Mario",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Ness",
	"name":"Ness",
	"number":10,
	"series":"EarthBound",
	"alts":[""],
	"echo":false
	},
	{
	"id":"CaptainFalcon",
	"name":"Captain Falcon",
	"number":11,
	"series":"F-Zero",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Jigglypuff",
	"name":"Jigglypuff",
	"number":12,
	"series":"Pokémon",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Peach",
	"name":"Peach",
	"number":13,
	"series":"Super Mario",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Daisy",
	"name":"Daisy",
	"number":13,
	"series":"Super Mario",
	"alts":[""],
	"echo":true
	},
	{
	"id":"Bowser",
	"name":"Bowser",
	"number":14,
	"series":"Super Mario",
	"alts":[""],
	"echo":false
	},
	{
	"id":"IceClimbers",
	"name":"Ice Climbers",
	"number":15,
	"series":"Ice Climber",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Sheik",
	"name":"Sheik",
	"number":16,
	"series":"The Legend of Zelda",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Zelda",
	"name":"Zelda",
	"number":17,
	"series":"The Legend of Zelda",
	"alts":[""],
	"echo":false
	},
	{
	"id":"DrMario",
	"name":"Dr. Mario",
	"number":18,
	"series":"Super Mario",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Pichu",
	"name":"Pichu",
	"number":19,
	"series":"Pokémon",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Falco",
	"name":"Falco",
	"number":20,
	"series":"Star Fox",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Marth",
	"name":"Marth",
	"number":21,
	"series":"Fire Emblem",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Lucina",
	"name":"Lucina",
	"number":21,
	"series":"Fire Emblem",
	"alts":[""],
	"echo":true
	},
	{
	"id":"YoungLink",
	"name":"Young Link",
	"number":22,
	"series":"The Legend of Zelda",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Ganondorf",
	"name":"Ganondorf",
	"number":23,
	"series":"The Legend of Zelda",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Mewtwo",
	"name":"Mewtwo",
	"number":24,
	"series":"Pokémon",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Roy",
	"name":"Roy",
	"number":25,
	"series":"Fire Emblem",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Chrom",
	"name":"Chrom",
	"number":25,
	"series":"Fire Emblem",
	"alts":[""],
	"echo":true
	},
	{
	"id":"MrGame&Watch",
	"name":"Mr. Game & Watch",
	"number":26,
	"series":"Game & Watch",
	"alts":[""],
	"echo":false
	},
	{
	"id":"MetaKnight",
	"name":"Meta Knight",
	"number":27,
	"series":"Kirby",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Pit",
	"name":"Pit",
	"number":28,
	"series":"Kid Icarus",
	"alts":[""],
	"echo":false
	},
	{
	"id":"DarkPit",
	"name":"Dark Pit",
	"number":28,
	"series":"Kid Icarus",
	"alts":[""],
	"echo":true
	},
	{
	"id":"ZeroSuitSamus",
	"name":"Zero Suit Samus",
	"number":29,
	"series":"Metroid",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Wario",
	"name":"Wario",
	"number":30,
	"series":"WarioWare",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Snake",
	"name":"Snake",
	"number":31,
	"series":"Metal Gear Solid",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Ike",
	"name":"Ike",
	"number":32,
	"series":"Fire Emblem",
	"alts":[""],
	"echo":false
	},
	{
	"id":"PokémonTrainer",
	"name":"Pokémon Trainer",
	"number":null,
	"series":"Pokémon",
	"alts":[""],
	"echo":false
	},
	{
	"id":"DiddyKong",
	"name":"Diddy Kong",
	"number":36,
	"series":"Donkey Kong",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Lucas",
	"name":"Lucas",
	"number":37,
	"series":"EarthBound",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Sonic",
	"name":"Sonic",
	"number":38,
	"series":"Sonic the Hedgehog",
	"alts":[""],
	"echo":false
	},
	{
	"id":"KingDedede",
	"name":"King Dedede",
	"number":39,
	"series":"Kirby",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Olimar",
	"name":"Olimar",
	"number":40,
	"series":"Pikmin",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Lucario",
	"name":"Lucario",
	"number":41,
	"series":"Pokémon",
	"alts":[""],
	"echo":false
	},
	{
	"id":"ROB",
	"name":"R.O.B.",
	"number":42,
	"series":"R.O.B.",
	"alts":[""],
	"echo":false
	},
	{
	"id":"ToonLink",
	"name":"Toon Link",
	"number":43,
	"series":"The Legend of Zelda",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Wolf",
	"name":"Wolf",
	"number":44,
	"series":"Star Fox",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Villager",
	"name":"Villager",
	"number":45,
	"series":"Animal Crossing",
	"alts":[""],
	"echo":false
	},
	{
	"id":"MegaMan",
	"name":"Mega Man",
	"number":46,
	"series":"Mega Man",
	"alts":[""],
	"echo":false
	},
	{
	"id":"WiiFitTrainer",
	"name":"Wii Fit Trainer",
	"number":47,
	"series":"Wii Fit",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Rosalina",
	"name":"Rosalina & Luma",
	"number":48,
	"series":"Super Mario",
	"alts":[""],
	"echo":false
	},
	{
	"id":"LittleMac",
	"name":"Little Mac",
	"number":49,
	"series":"Punch-Out!!",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Greninja",
	"name":"Greninja",
	"number":50,
	"series":"Pokémon",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Palutena",
	"name":"Palutena",
	"number":54,
	"series":"Kid Icarus",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Pac-Man",
	"name":"Pac-Man",
	"number":55,
	"series":"Pac-Man",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Robin",
	"name":"Robin",
	"number":56,
	"series":"Fire Emblem",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Shulk",
	"name":"Shulk",
	"number":57,
	"series":"Xenoblade Chronicles",
	"alts":[""],
	"echo":false
	},
	{
	"id":"BowserJr",
	"name":"Bowser Jr.",
	"number":58,
	"series":"Super Mario",
	"alts":[""],
	"echo":false
	},
	{
	"id":"DuckHunt",
	"name":"Duck Hunt",
	"number":59,
	"series":"Duck Hunt",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Ryu",
	"name":"Ryu",
	"number":60,
	"series":"Street Fighter",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Ken",
	"name":"Ken",
	"number":60,
	"series":"Street Fighter",
	"alts":[""],
	"echo":true
	},
	{
	"id":"Cloud",
	"name":"Cloud",
	"number":61,
	"series":"Final Fantasy VII",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Corrin",
	"name":"Corrin",
	"number":62,
	"series":"Fire Emblem",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Bayonetta",
	"name":"Bayonetta",
	"number":63,
	"series":"Bayonetta 2",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Inkling",
	"name":"Inkling",
	"number":64,
	"series":"Splatoon",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Ridley",
	"name":"Ridley",
	"number":65,
	"series":"Metroid",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Simon",
	"name":"Simon",
	"number":66,
	"series":"Castlevania",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Richter",
	"name":"Richter",
	"number":66,
	"series":"Castlevania",
	"alts":[""],
	"echo":true
	},
	{
	"id":"KingKRool",
	"name":"King K. Rool",
	"number":67,
	"series":"Donkey Kong",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Isabelle",
	"name":"Isabelle",
	"number":68,
	"series":"Animal Crossing",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Incineroar",
	"name":"Incineroar",
	"number":69,
	"series":"Pokémon",
	"alts":[""],
	"echo":false
	},
	{
	"id":"PiranhaPlant",
	"name":"Piranha Plant",
	"number":70,
	"series":"Super Mario",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Joker",
	"name":"Joker",
	"number":71,
	"series":"Persona 5",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Hero",
	"name":"Hero",
	"number":72,
	"series":"Dragon Quest XI",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Banjo&Kazooie",
	"name":"Banjo & Kazooie",
	"number":73,
	"series":"Banjo-Kazooie",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Terry",
	"name":"Terry",
	"number":74,
	"series":"Fatal Fury",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Byleth",
	"name":"Byleth",
	"number":75,
	"series":"Fire Emblem",
	"alts":[""],
	"echo":false
	},
	{
	"id":"MinMin",
	"name":"Min Min",
	"number":76,
	"series":"Arms",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Steve",
	"name":"Steve",
	"number":77,
	"series":"Minecraft",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Sephiroth",
	"name":"Sephiroth",
	"number":78,
	"series":"Final Fantasy VII",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Pythra",
	"name":"Pyra/Mythra",
	"number":null,
	"series":"Xenoblade Chronicles",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Kazuya",
	"name":"Kazuya",
	"number":81,
	"series":"Tekken",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Sora",
	"name":"Sora",
	"number":82,
	"series":"Kingdom Hearts",
	"alts":[""],
	"echo":false
	},
	{
	"id":"MiiBrawler",
	"name":"Mii Brawler",
	"number":51,
	"series":"Mii",
	"alts":[""],
	"echo":false
	},
	{
	"id":"MiiSwordfighter",
	"name":"Mii Swordfighter",
	"number":52,
	"series":"Mii",
	"alts":[""],
	"echo":false
	},
	{
	"id":"MiiGunner",
	"name":"Mii Gunner",
	"number":53,
	"series":"Mii",
	"alts":[""],
	"echo":false
	},
	{
	"id":"Random",
	"name":"Random",
	"number":null,
	"series":null,
	"alts":[""],
	"echo":false
	}
];

// stock icon path = ./assets/fighters/50px-[fighter id]HeadSSBU.png

/* index.html initialization */

let checkboxes = "";
for (let i = 0; i < roster.length; ++i) {
	if (roster[i].series != null) {
		checkboxes += "<input type=\"checkbox\" id=\"" + roster[i].id + "\" style=\"display:none;\" checked>"
			+ "<label for=\"" + roster[i].id + "\"><img src=\"./assets/fighters/50px-" + roster[i].id + "HeadSSBU.png\"></label>";
	} else {
		checkboxes += "<input type=\"checkbox\" id=\"" + roster[i].id + "\" style=\"display:none;\" checked>"
			+ "<label for=\"" + roster[i].id + "\"><img src=\"./assets/fighters/QuestionMark.png\"></label>";
	}
}
document.getElementById("checkboxes").innerHTML = "<br>" + checkboxes + "<br><br>";

/* index.html initialization */

/* randomImg() function for index.html random button */

function randomImg() {
	let tmp = [];
	for (let i = 0; i < roster.length; ++i) {
		if (document.getElementById(roster[i].id).checked) {
			tmp.push(roster[i]);
		}
	}
	
	if (tmp.length > 0) {
		let fighter = tmp[Math.floor(Math.random() * tmp.length)];
		if (fighter.series != null) {
			document.getElementById("random").innerHTML =
				"<img src=\"./assets/fighters/50px-" + fighter.id + "HeadSSBU.png\">"
				+ "<br>" + fighter.name;
		} else {
			document.getElementById("random").innerHTML =
				"<img src=\"./assets/fighters/QuestionMark.png\">"
				+ "<br>" + fighter.name;
		}
	} else {
		document.getElementById("random").innerHTML =
				"<img src=\"./assets/fighters/QuestionMark.png\">"
				+ "<br>No fighter is selected!";
	}
}

/* randomImg() function for index.html random button */

/* toggle all on */

function toggleOn() {
	for (let i = 0; i < roster.length; ++i) {
		document.getElementById(roster[i].id).checked = true;
	}
}

/* toggle all on */

/* toggle all off */

function toggleOff() {
	for (let i = 0; i < roster.length; ++i) {
		document.getElementById(roster[i].id).checked = false;
	}
}

/* toggle all off */