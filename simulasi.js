// =====================================================
// SIMULASI PERTEMUAN 1
// SUHU, SKALA TERMOMETER, DAN PEMUAIAN ZAT
// =====================================================



// =====================================================
// SIMULASI 1
// TERMOMETER
// =====================================================

const sliderSuhu =
    document.getElementById("sliderSuhu");

sliderSuhu.addEventListener("input", function () {

    updateTermometer(this.value);

});


function updateTermometer(suhu) {

    suhu = parseFloat(suhu);


    // Celsius
    document.getElementById("nilaiSuhu")
        .textContent =
        suhu + " °C";


    document.getElementById("suhuBesar")
        .textContent =
        suhu;


    document.getElementById("hasilCelsius")
        .textContent =
        suhu.toFixed(2) + " °C";


    // Fahrenheit

    let fahrenheit =
        (9 / 5) * suhu + 32;

    document.getElementById("hasilFahrenheit")
        .textContent =
        fahrenheit.toFixed(2) + " °F";


    // Reamur

    let reamur =
        (4 / 5) * suhu;

    document.getElementById("hasilReamur")
        .textContent =
        reamur.toFixed(2) + " °R";


    // Kelvin

    let kelvin =
        suhu + 273.15;

    document.getElementById("hasilKelvin")
        .textContent =
        kelvin.toFixed(2) + " K";


    // Tinggi cairan termometer

    document.getElementById("cairanTermometer")
        .style.height =
        suhu + "%";
}


function resetTermometer() {

    sliderSuhu.value = 25;

    updateTermometer(25);
}



// =====================================================
// SIMULASI 2
// PEMUAIAN LOGAM
// =====================================================


// Koefisien muai panjang

const koefisienLogam = {

    aluminium: 2.4e-5,

    tembaga: 1.7e-5,

    besi: 1.2e-5

};



const sliderDeltaT =
    document.getElementById("sliderDeltaT");


sliderDeltaT.addEventListener("input", function () {

    updatePemuaian();

});


document.getElementById("jenisLogam")
    .addEventListener("change", function () {

        updatePemuaian();

    });


document.getElementById("panjangAwal")
    .addEventListener("input", function () {

        updatePemuaian();

    });



function updatePemuaian() {

    let jenis =
        document.getElementById("jenisLogam")
            .value;


    let L0 =
        parseFloat(
            document.getElementById("panjangAwal")
                .value
        );


    let deltaT =
        parseFloat(
            sliderDeltaT.value
        );


    if (isNaN(L0)) {

        return;

    }


    // Ambil koefisien

    let alpha =
        koefisienLogam[jenis];


    // Rumus pemuaian

    let deltaL =
        alpha *
        L0 *
        deltaT;


    // Panjang akhir

    let panjangAkhir =
        L0 + deltaL;


    // Tampilkan suhu

    document.getElementById("nilaiDeltaT")
        .textContent =
        deltaT + " °C";


    document.getElementById("suhuLogam")
        .textContent =
        "+" + deltaT + " °C";


    // Koefisien

    document.getElementById("hasilAlpha")
        .textContent =
        alpha.toExponential(2)
        + " /°C";


    // Pertambahan panjang

    document.getElementById("hasilDeltaL")
        .textContent =
        deltaL.toFixed(6)
        + " m";


    // Panjang akhir

    document.getElementById("hasilPanjangAkhir")
        .textContent =
        panjangAkhir.toFixed(6)
        + " m";


    // =================================================
    // ANIMASI BATANG LOGAM
    // =================================================

    let batang =
        document.getElementById("batangLogam");


    // Ukuran dasar

    let ukuranAwal = 180;


    // Perubahan visual

    let perubahanVisual =
        deltaT * alpha * 50000;


    let ukuranAkhir =
        ukuranAwal +
        perubahanVisual;


    batang.style.width =
        ukuranAkhir + "px";


    // Label warna kelas

    batang.className =
        "batang-logam " + jenis;
}



// =====================================================
// ==========================================
// SIMULASI GAS IDEAL
// ==========================================

const wadahGas = document.getElementById("wadahGas");
const sliderSuhuGas = document.getElementById("sliderSuhuGas");
const sliderVolumeGas = document.getElementById("sliderVolumeGas");

const nilaiSuhuGas = document.getElementById("nilaiSuhuGas");
const nilaiVolumeGas = document.getElementById("nilaiVolumeGas");
const nilaiTekananGas = document.getElementById("nilaiTekananGas");

let partikelGas = [];


// Membuat partikel gas
function buatPartikelGas() {

    wadahGas.innerHTML = "";
    partikelGas = [];

    const jumlahPartikel = 25;

    for (let i = 0; i < jumlahPartikel; i++) {

        const partikel = document.createElement("div");

        partikel.classList.add("partikel-gas");

        // Posisi awal secara acak
        const x = Math.random() * 90;
        const y = Math.random() * 80;

        partikel.style.left = x + "%";
        partikel.style.top = y + "%";

        wadahGas.appendChild(partikel);

        partikelGas.push({
            element: partikel,

            x: x,
            y: y,

            // Kecepatan awal
            dx: (Math.random() - 0.5) * 0.8,
            dy: (Math.random() - 0.5) * 0.8
        });
    }
}


// Animasi partikel
function gerakkanPartikel() {

    const suhu = Number(sliderSuhuGas.value);

    // Semakin tinggi suhu → semakin cepat partikel
    const faktorKecepatan = suhu / 300;

    partikelGas.forEach(partikel => {

        partikel.x += partikel.dx * faktorKecepatan;
        partikel.y += partikel.dy * faktorKecepatan;

        // Pantulan kiri dan kanan
        if (partikel.x <= 0 || partikel.x >= 96) {
            partikel.dx *= -1;
        }

        // Pantulan atas dan bawah
        if (partikel.y <= 0 || partikel.y >= 94) {
            partikel.dy *= -1;
        }

        partikel.element.style.left = partikel.x + "%";
        partikel.element.style.top = partikel.y + "%";
    });

    requestAnimationFrame(gerakkanPartikel);
}


// Menghitung tekanan gas
function hitungTekananGas() {

    const T = Number(sliderSuhuGas.value);
    const volumeLiter = Number(sliderVolumeGas.value);

    // Konversi liter → m³
    const V = volumeLiter / 1000;

    // jumlah mol
    const n = 1;

    // konstanta gas
    const R = 8.314;

    // PV = nRT
    const P = (n * R * T) / V;

    nilaiSuhuGas.textContent = T + " K";
    nilaiVolumeGas.textContent = volumeLiter + " L";
    nilaiTekananGas.textContent = Math.round(P) + " Pa";

    // Ukuran wadah mengikuti volume
    const ukuranWadah = 200 + (volumeLiter - 2) * 30;

    wadahGas.style.width = ukuranWadah + "px";
}


// Slider suhu
sliderSuhuGas.addEventListener("input", function () {

    hitungTekananGas();

});


// Slider volume
sliderVolumeGas.addEventListener("input", function () {

    hitungTekananGas();

});


// Jalankan
buatPartikelGas();

hitungTekananGas();

gerakkanPartikel();



// =====================================================
// SIMPAN KESIMPULAN
// =====================================================

function simpanKesimpulan() {

    let kesimpulan =
        document.getElementById("kesimpulan")
            .value;


    if (kesimpulan.trim() === "") {

        alert(
            "Tuliskan kesimpulan terlebih dahulu."
        );

        return;

    }


    localStorage.setItem(
        "kesimpulanSimulasi",
        kesimpulan
    );


    alert(
        "Kesimpulan berhasil disimpan."
    );
}



// =====================================================
// JALANKAN SAAT HALAMAN DIBUKA
// =====================================================

updateTermometer(25);

updatePemuaian();

updateGas();