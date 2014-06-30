var inputElement = document.getElementById("file");
inputElement.addEventListener("change", handleFile, false);


function handleFile(e) {
	// get first file
	var file = this.files[0];
	_id('filename').innerHTML = file.name;
	var ext = file.name.split(".").pop();

	if(ext !== 'vav') {
		warning("file must have .vav extension");
		return;
	}
	var reader = new FileReader();
	reader.onload = function(e) {
		var	text = reader.result;
		var xml2js = require("xml2js");
		var parser = new xml2js.Parser({
			explicitArray: false
		});
		parser.parseString(text, function(err, result) {
			if(err) {
				console.error(err);
				return;
			}
			showheader(result);
			showcontents(result);
		});
	};

	reader.readAsText(file);
}

function showheader(json) {
	// dodavka atributy
	var dodavka = json.dodavka.$;
	_id('xmlns').innerHTML = dodavka.xmlns;
	_id('struktura').innerHTML = dodavka.struktura;

	// rozsah
	var rozsah = json.dodavka.zahlavi.rozsah;
	_id('oblast').innerHTML = rozsah['informacni-oblast'];
	_id('obdobi').innerHTML = rozsah['obdobi-sberu'];

	// predkladatel
	var predkladatel = rozsah.predkladatel;

	var predsubjekt = predkladatel.subjekt;
	_id('ico').innerHTML = predsubjekt.ICO._;
	_id('nazev').innerHTML = predsubjekt.nazev._;

	var jednotka = predkladatel['organizacni-jednotka'];
	_id('kod').innerHTML = jednotka.kod._;
	_id('nazev-org').innerHTML = jednotka.nazev._;

	// dodavatel
	var dodavatel = json.dodavka.zahlavi.dodavatel;
	var dodsubjekt = dodavatel.subjekt;
	_id('dod-sub-kod').innerHTML = dodsubjekt.kod._;

	// osoba
	var osoba = dodavatel['pracovnik-povereny-pripravou-dodavky'].osoba;
	_id('jmeno').innerHTML = osoba['cele-jmeno']._;
	_id('email').innerHTML = osoba.kontakt['emailova-adresa']._;
	_id('tel').innerHTML = osoba.kontakt['telefonni-cislo']._;

}

function showcontents(json) {
	var pozadavky = json.dodavka.obsah['pozadavek-odstranit-zaznam-z-RIV'];
	console.log(pozadavky);
	pozadavky.forEach(appendrow);
}

function appendrow(row) {
	var table = _id('pozadavky');
	var trow = table.insertRow();

	var id = trow.insertCell(0);
	id.appendChild(document.createTextNode(row.$['identifikacni-kod']));

	var nazev = trow.insertCell(1);
	nazev.appendChild(document.createTextNode(row.nazev._));

	var kontrol = trow.insertCell(2);
	kontrol.appendChild(document.createTextNode(row.$['kontrolni-kod']));

	var duvod = trow.insertCell(3);
	duvod.appendChild(document.createTextNode(row.duvod));
}

function warning(msg) {
	if(typeof msg !== "string") {
		console.error(msg, "msg must be a string");
		return;
	}

	var w = document.getElementById("warning");
	w.innerHTML = msg;
}

function _id(id) {
	return document.getElementById(id);
}
