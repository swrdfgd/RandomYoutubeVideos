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

daftarYTRecBin = [
	"ZOE ${padNumber(randomInt(1,50),4)}",
	"PB${padNumber(randomInt(0,50),2)}${padNumber(randomInt(1,499),4)}",
	"Capture ${randomInt(2016,currentYear)}${randomInt(1,12)}${randomInt(1,31)}",
	"My Great Movie",
	"PXL",
	"SNV3${padNumber(randomInt(1,3000),4)}",
	"My Movie",
	"MOVI${padNumber(randomInt(0,1050),4)}",
]
	
function ytRecBinGen(){
	const currentYear = new Date().getFullYear();
	return eval("`"+daftarYTRecBin[Math.floor(Math.random()*daftarYTRecBin.length)]+"`");
}