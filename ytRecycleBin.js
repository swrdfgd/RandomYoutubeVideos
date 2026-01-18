function randomInt(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("a dan b harus bilangan bulat");
  }
  if (a > b) {
    [a, b] = [b, a]; // tukar jika terbalik
  }
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function padNumber(num, n) {
  return String(num).padStart(n, '0');
}

function randomMonth() {
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  return months[Math.floor(Math.random() * months.length)];
}

function randomHex(length = 6, letterCase = "lower") {
  const chars = "0123456789abcdef";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * 16)];
  }

  return letterCase === "upper" ? result.toUpperCase() : result;
}


daftarYTRecBin = [
	"ZOE ${padNumber(randomInt(1,50),4)}",
	"PB${padNumber(randomInt(0,50),2)}${padNumber(randomInt(1,499),4)}",
	"Capture ${randomInt(2008,currentYear)}${padNumber(randomInt(1,12),2)}${padNumber(randomInt(1,31),2)}",
	"My Great Movie",
	"PXL",
	"SNV3${padNumber(randomInt(1,3000),4)}",
	"My Movie",
	"MOVI${padNumber(randomInt(0,1050),4)}",
	"SAM ${padNumber(randomInt(0,9999),4)}",
	"For ${randomMonth()} ${padNumber(randomInt(1,31),2)}, ${randomInt(2006,currentYear)}",
	"Recorded on ${randomMonth()} ${padNumber(randomInt(1,31),2)}, ${randomInt(2006,currentYear)} using a Flip Video Camcorder",
	"You have new picture mail! (video)",
	"New Multimedia Message",
	"PXL ${randomInt(2020,currentYear)}${padNumber(randomInt(1,12),2)}${padNumber(randomInt(1,31),2)}",
	"I created this video with the YouTube Slideshow Creator",
	"MOV${padNumber(randomInt(0,10),5)}",
	"Recording gvo",
	"My Videolicious Video",
	"${yearRand}${padNumber(randomInt(1,12),2)}${padNumber(randomInt(1,31),2)}",
	"I created this video with the YouTube Video Editor",
	"FHD${padNumber(randomInt(1,1000),4)}",
	"M4V${padNumber(randomInt(0,9999),5)}",
	"Media1.3gp",
	"DSC ${padNumber(randomInt(0,5000),5)}",
	"Javaw",
	"MAV ${padNumber(randomInt(0,399),4)}",
	"480p 2000k",
	"100 ${padNumber(randomInt(0,9999),4)}",
	"/Storage/Emulated/",
	"Sequence ${padNumber(randomInt(1,200),3)}",
	"DSCN${padNumber(randomInt(0,9999),4)}",
	"RPReplay",
	"HDV ${padNumber(randomInt(1,5000),4)}",
	"WA${padNumber(randomInt(0,999),4)}",
	"WhatsApp Video ${yearRand}",
	"GOPR${padNumber(randomInt(0,9999),4)}",
	"Vid${padNumber(randomInt(0,10),3)}",
	"muuvee${padNumber(randomInt(0,40),4)}",
	"Lv 0",
	"Sent from my blackberry smartphone",
	"4${randomHex(3, 'upper')}",
	"C${padNumber(randomInt(0,9999),4)}",
	"WIN ${yearRand}${padNumber(randomInt(1,12),2)}${padNumber(randomInt(1,31),2)}",
	"DSCF${padNumber(randomInt(0,9999),4)}",
	".3g2",
	"ZOOM${padNumber(randomInt(1,800),4)}",
	"Kazam Screencast ${padNumber(randomInt(1,50),5)}",
	"AVSEQ${padNumber(randomInt(0,99),2)}.DAT ",
	"Video Assignment",
	"GMT${yearRand}${padNumber(randomInt(1,12),2)}${padNumber(randomInt(1,31),2)}",
	"VICO${padNumber(randomInt(1,250),4)}",
	"XRecorder ${padNumber(randomInt(1,31),2)}${padNumber(randomInt(1,12),2)}${randomInt(2021,2024)}",
	"Bandicam ${randomInt(2010,currentYear)} ${padNumber(randomInt(1,12),2)} ${padNumber(randomInt(1,31),2)}",
	"FullSizeRender",
	"DSC ${padNumber(randomInt(0,9999),4)}",
	"My First Project",
	"KVID${padNumber(randomInt(0,1000),4)}",
	"MOL0${randomHex(2, 'upper')}",
	".MP4",
	"Media1.3g2",
	"0_VIDEO_${padNumber(randomInt(1,54),3)}",
	"Multimedia Message",
	"Screen Recording ${randomInt(2012,currentYear)} ${padNumber(randomInt(1,12),2)} ${padNumber(randomInt(1,31),2)}",
	"Video from my phone",
	"720p 1500k",
	"720p 4000k",
	"Wideo${padNumber(randomInt(0,199),3)}",
	"Desktop ${yearRand} ${padNumber(randomInt(1,12),2)} ${padNumber(randomInt(1,31),2)}",
	"PTDC${padNumber(randomInt(0,1000),4)}",
	"Untitled Video Made with Clipchamp",
	"Video Output",
	"${padNumber(randomInt(0,23),2)}${padNumber(randomInt(0,59),2)}${padNumber(randomInt(0,59),2)}",
	"Video uploaded from my mobile phone",
	"Video.3g2",
	"Untitled video",
	".AVI",
]
	
function ytRecBinGen(){
	const currentYear = new Date().getFullYear();
	let yearRand = 0 + currentYear;
	while(Math.random() < 0.5){yearRand = yearRand - 1;}
	return eval("`"+daftarYTRecBin[Math.floor(Math.random()*daftarYTRecBin.length)]+"`");
}