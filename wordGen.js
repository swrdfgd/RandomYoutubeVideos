daftarWords = [];

daftarWords.push(kataEnglish[Math.floor(Math.random()*kataEnglish.length)]);
function addKataEnglish(){
	while (Math.random() < 1/2){
		daftarWords.push(kataEnglish[Math.floor(Math.random()*kataEnglish.length)]);
	}
}
addKataEnglish();

function addKataIndo(){
	while (Math.random() < 1/2){
		daftarWords.push(kataIndo[Math.floor(Math.random()*kataIndo.length)]);
	}
}

daftarwiki = ["en.wikipedia.org", "id.wikipedia.org","id.wiktionary.org"]
function addKataWiki(){
	pilihwiki = daftarwiki[Math.floor(Math.random()*daftarwiki.length)];
	var url = "https://"+pilihwiki+"/w/api.php"; 

	var params = {
		action: "query",
		format: "json",
		list: "random",
		rnlimit: "1",
		rnnamespace: "0"
	};

	url = url + "?origin=*";
	Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

	fetch(url)
		.then(function(response){return response.json();})
		.then(function(response) {
		randoms = response.query.random;
		daftarWords.push(randoms[0].title);
		})
		.catch(function(error){console.log(error);});
}

function addKataPunk(){

pilihwiki = punk[Math.floor(Math.random()*punk.length)][0];
pilihwiki = pilihwiki.split('http:').join('https:');

var url = pilihwiki+"api.php"; 

var params = {
    action: "query",
    format: "json",
    list: "random",
    rnlimit: "1",
    rnnamespace: "0"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

	fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        randoms = response.query.random;
        //for (var r in randoms) {
        //    console.log(randoms[r].title);
        //}
        daftarWords.push(randoms[0].title);
    })
    .catch(function(error){console.log(error);});
}

function addKataOtherLang(){
	while (Math.random() < 1/2){
		daftarWords.push(kata[Math.floor(Math.random()*kata.length)]);
	}
}

daftarWords.push(kataIndo[Math.floor(Math.random()*kataIndo.length)]);
function addKataIndo(){
	while (Math.random() < 1/2){
		daftarWords.push(kataIndo[Math.floor(Math.random()*kataIndo.length)]);
	}
}

// Data frekuensi huruf dari kamus (dalam persentase)
const kamusFrequency = {
   'A': 0.078,
   'B': 0.02,
   'C': 0.04,
   'D': 0.038,
   'E': 0.11,
   'F': 0.014,
   'G': 0.03,
   'H': 0.023,
   'I': 0.086,
   'J': 0.0021,
   'K': 0.0097,
   'L': 0.053,
   'M': 0.027,
   'N': 0.072,
   'O': 0.061,
   'P': 0.028,
   'Q': 0.0019,
   'R': 0.073,
   'S': 0.087,
   'T': 0.067,
   'U': 0.033,
   'V': 0.01,
   'W': 0.0091,
   'X': 0.0027,
   'Y': 0.016,
   'Z': 0.0044
};
const kamusFrequencyIndonesia = {
   'A': 0.2039,
   'B': 0.0264,
   'C': 0.0076,
   'D': 0.0500,
   'E': 0.0828,
   'É': 0.0001,
   'F': 0.0021,
   'G': 0.0366,
   'H': 0.0274,
   'I': 0.0798,
   'J': 0.0087,
   'K': 0.0514,
   'L': 0.0326,
   'M': 0.0421,
   'N': 0.0933,
   'O': 0.0126,
   'P': 0.0261,
   'Q': 0.0001,
   'R': 0.0464,
   'S': 0.0415,
   'T': 0.0558,
   'U': 0.0462,
   'V': 0.0018,
   'W': 0.0048,
   'X': 0.0003,
   'Y': 0.0188,
   'Z': 0.0004
};

// Fungsi untuk menghasilkan huruf acak berdasarkan peluang kemunculannya di kamus
function getRandomLetter(probabilities) {
   const random = Math.random();
   let cumulativeProbability = 0;

   for (const char in probabilities) {
	  cumulativeProbability += probabilities[char];
	  if (random < cumulativeProbability) {
		 return char;
	  }
   }

   // Jika seluruh huruf telah diiterasi tetapi belum ada yang dipilih, pilih huruf terakhir sebagai default.
   return Object.keys(probabilities)[Object.keys(probabilities).length - 1];
}

function addKataHurufLatinEnglish(){
	while (Math.random() < 1/2){
		  panjangKata = 5;
		  while (Math.random() < 1/2){panjangKata++;}
		  panjangKata = Math.ceil(Math.random()*panjangKata);
		  kataBaru = '';
		  for (j = 0; j < panjangKata; j++){kataBaru += getRandomLetter(kamusFrequency);}
		  if (Math.random() < 1/2){
			 kataBaru = kataBaru.toLowerCase();
			 if (Math.random() < 1/2){
				kataBaru = kataBaru.charAt(0).toUpperCase() + kataBaru.slice(1)
			 }
		 }
		daftarWords.push(kataBaru);
	}
}

function addKataHurufLatinIndo(){
	while (Math.random() < 1/2){
		  panjangKata = 5;
		  while (Math.random() < 1/2){panjangKata++;}
		  panjangKata = Math.ceil(Math.random()*panjangKata);
		  kataBaru = '';
		  for (j = 0; j < panjangKata; j++){kataBaru += getRandomLetter(kamusFrequencyIndonesia);}
		  if (Math.random() < 1/2){
			 kataBaru = kataBaru.toLowerCase();
			 if (Math.random() < 1/2){
				kataBaru = kataBaru.charAt(0).toUpperCase() + kataBaru.slice(1)
			 }
		 }
		daftarWords.push(kataBaru);
	}
}

function generateTrulyRandomString(length = 3) {
  let result = '';
  for (let i = 0; i < length; i++) {
    // Unicode resmi berakhir di 0x10FFFF
    let codePoint;
    while (true) {
      codePoint = Math.floor(Math.random() * 0x10FFFF);
      // Hindari surrogate pairs yang invalid: D800-DFFF
      if (!(codePoint >= 0xD800 && codePoint <= 0xDFFF)) break;
    }
    result += String.fromCodePoint(codePoint);
  }
  return result;
}

function addKataHurufUnicode(){
	while (Math.random() < 1/2){
		  panjangKata = 5;
		  while (Math.random() < 1/2){panjangKata++;}
		  panjangKata = 1 + Math.floor(Math.random()*panjangKata);
		  daftarWords.push(generateTrulyRandomString(panjangKata));
	}
}

daftarWords.push(kataIndo[Math.floor(Math.random()*kataIndo.length)]);
function addKataIndo(){
	while (Math.random() < 1/2){
		daftarWords.push(kataIndo[Math.floor(Math.random()*kataIndo.length)]);
	}
}

function wordGen(){
	if (Math.random() < 1/2){
		addKataEnglish();
	}
	else if (Math.random() < 1/2){
		addKataIndo();
	}
	else if (Math.random() < 1/2){
		addKataWiki();
	}
	else if (Math.random() < 1/2){
		addKataPunk();
	}
	else if (Math.random() < 1/2){
		addKataHurufLatinEnglish();
	}
	else if (Math.random() < 1/2){
		addKataHurufLatinIndo();
	}
	else if (Math.random() < 1/2){
		addKataHurufUnicode();
	}
	return daftarWords[Math.floor(Math.random()*daftarWords.length)]
}