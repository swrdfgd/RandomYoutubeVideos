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
	
]
	
function ytRecBinGen(){
	const currentYear = new Date().getFullYear();
	return eval("`"+daftarYTRecBin[Math.floor(Math.random()*daftarYTRecBin.length)]+"`");
}