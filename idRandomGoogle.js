daftarFire = ['AIzaSyB7TX3CfUSUBnWnNP9CGBjLzmfIeo6SpfM','AIzaSyCXN3jgZPhm0qhD3biP5xvmkIrYzK6VbHk','AIzaSyBTPAz_OQr140D1rtD0o6vwM63XohXw8Ds'];
 const CSE_ID  = '936670722b64b414c';

async function mulaiLinkGoogle() {
    let jumlah = 1;
	while (Math.random () < 0.5){jumlah++}
    for (let i = 0; i < jumlah; i++) {
        const keyword = genYoutubeCode(); // fungsi ini kamu isi sendiri
        const link = await ambilLinkAcakDariGoogle(keyword)
	}
		
		videoIdsGoogle = semuaHasil
		.filter(url => url.startsWith("https://www.youtube.com/watch?v="))
		.map(url => url.split("v=")[1].slice(0, 11));
}

const YT_ID_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

// Fungsi placeholder untuk generate kata kunci acak
function genYoutubeCode() {
    const length = Math.floor(Math.random() * 11) + 1; // 1–11
    let code = "";

    for (let i = 0; i < length; i++) {
        code += YT_ID_CHARS[Math.floor(Math.random() * YT_ID_CHARS.length)];
    }

   return `allinurl:${code} https://www.youtube.com/watch?v=`;
}

// Fungsi ambil link acak dari Google Custom Search API
async function ambilLinkAcakDariGoogle(keyword) {
	//console.log("🔍 Cari keyword:", keyword);

    let halaman = 1;


    while (true) {
        const startIndex = ((halaman - 1) * 10) + 1; 
        const url = `https://www.googleapis.com/customsearch/v1?key=${daftarFire[Math.floor(Math.random()*daftarFire.length)]}&cx=${CSE_ID}&q=${encodeURIComponent(keyword)}&start=${startIndex}`;

        try {
            const res = await fetch(url);

            // cek kalau error 429 atau lainnya
            if (!res.ok) {
                console.warn("⚠️ API error:", res.status, res.statusText);
                // fallback langsung ke link cadangan
            }

            const data = await res.json();

            if (data.items && data.items.length > 0) {
                semuaHasil.push(...data.items.map(item => item.link));
            } else {
                break; 
            }
        } catch (err) {
            console.error("Error fetch:", err);
            // fallback juga kalau fetch gagal
        }

        if (Math.random() < 0.5) {
            halaman++;
        } else {
            break;
        }
    }

    return semuaHasil[Math.floor(Math.random() * semuaHasil.length)];
}


mulaiLinkGoogle();