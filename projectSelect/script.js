// select fighter screen; extras: Squirtle, Ivysaur, Charizard; not sure how to do Pyra/Mythra yet -> using just Pyra for now
// 11 per row; 9 on last
const roster = [
	"Banjo&Kazooie", "Bayonetta", "Bowser", "BowserJr", "Byleth", "CaptainFalcon", "Chrom", "Cloud", "Corrin", "Daisy", "DarkPit",
	"DarkSamus", "DiddyKong", "DonkeyKong", "DrMario", "DuckHunt", "Falco", "Fox", "Ganondorf", "Greninja", "Hero", "IceClimbers",
	"Ike", "Incineroar", "Inkling", "Isabelle", "Jigglypuff", "Joker", "Kazuya", "Ken", "KingDedede", "KingKRool", "Kirby",
	"Link", "LittleMac", "Lucario", "Lucas", "Lucina", "Luigi", "Mario", "Marth", "MegaMan", "MetaKnight", "Mewtwo",
	"MiiBrawler", "MiiGunner", "MiiSwordfighter", "MinMin", "MrGame&Watch", "Ness", "Olimar", "Pac-Man", "Palutena", "Peach", "Pichu",
	"Pikachu", "PiranhaPlant", "Pit", "PokémonTrainer", "Pyra", "Richter", "Ridley", "ROB", "Robin", "Rosalina", "Roy",
	"Ryu", "Samus", "Sephiroth", "Sheik", "Shulk", "Simon", "Snake", "Sonic", "Sora", "Steve", "Terry",
	"ToonLink", "Villager", "Wario", "WiiFitTrainer", "Wolf", "Yoshi", "YoungLink", "Zelda", "ZeroSuitSamus"];

// every individual fighter; PT removed due to being Squirtle, Ivysaur, Charizard
// 11 per row; 1 on last
const full_roster = [
	"Banjo&Kazooie", "Bayonetta", "Bowser", "BowserJr", "Byleth", "CaptainFalcon", "Charizard", "Chrom", "Cloud", "Corrin", "Daisy",
	"DarkPit", "DarkSamus", "DiddyKong", "DonkeyKong", "DrMario", "DuckHunt", "Falco", "Fox", "Ganondorf", "Greninja", "Hero",
	"IceClimbers", "Ike", "Incineroar", "Inkling", "Isabelle", "Ivysaur", "Jigglypuff", "Joker", "Kazuya", "Ken", "KingDedede",
	"KingKRool", "Kirby", "Link", "LittleMac", "Lucario", "Lucas", "Lucina", "Luigi", "Mario", "Marth", "MegaMan",
	"MetaKnight", "Mewtwo", "MiiBrawler", "MiiGunner", "MiiSwordfighter", "MinMin", "MrGame&Watch","Mythra", "Ness", "Olimar", "Pac-Man",
	"Palutena", "Peach", "Pichu", "Pikachu", "PiranhaPlant", "Pit", "Pyra", "Richter", "Ridley", "ROB", "Robin",
	"Rosalina", "Roy", "Ryu", "Samus", "Sephiroth", "Sheik", "Shulk", "Simon", "Snake", "Sonic", "Sora",
	"Squirtle", "Steve", "Terry", "ToonLink", "Villager", "Wario", "WiiFitTrainer", "Wolf", "Yoshi", "YoungLink", "Zelda",
	"ZeroSuitSamus"];

// temp path for testing
const path = "C:\\Users\\mille\\Pictures\\SSBU Stock Icons 50px\\";

const pxSize = "50px-";
const head = "HeadSSBU.png";

const imgs = ["32", "50"];
function randomImg() {
	document.getElementById("random").innerHTML = "<img src=\"" + path + pxSize + roster[Math.floor(Math.random() * roster.length)] + head + "\">";
}