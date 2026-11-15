/* ==========================================
   DATA KONDUKTIVITAS TERMAL
========================================== */

const logam = {

    aluminium: {
        nama: "Aluminium",
        k: 205
    },

    tembaga: {
        nama: "Tembaga",
        k: 385
    },

    besi: {
        nama: "Besi",
        k: 80
    }

};



/* ==========================================
   UPDATE NILAI SLIDER
========================================== */

document
    .getElementById("suhuPanas")
    .addEventListener("input", function () {

        document.getElementById(
            "suhuPanasValue"
        ).textContent = this.value;

    });


document
    .getElementById("suhuDingin")
    .addEventListener("input", function () {

        document.getElementById(
            "suhuDinginValue"
        ).textContent = this.value;

    });


document
    .getElementById("panjang1")
    .addEventListener("input", function () {

        document.getElementById(
            "panjang1Value"
        ).textContent = this.value;

    });


document
    .getElementById("panjang2")
    .addEventListener("input", function () {

        document.getElementById(
            "panjang2Value"
        ).textContent = this.value;

    });



/* ==========================================
   SIMULASI KONDUKSI
========================================== */

function jalankanKonduksi() {

    const jenis1 =
        document.getElementById("logam1").value;

    const jenis2 =
        document.getElementById("logam2").value;


    const Tpanas =
        Number(
            document.getElementById("suhuPanas").value
        );


    const Tdingin =
        Number(
            document.getElementById("suhuDingin").value
        );


    const L1 =
        Number(
            document.getElementById("panjang1").value
        );


    const L2 =
        Number(
            document.getElementById("panjang2").value
        );


    const k1 =
        logam[jenis1].k;

    const k2 =
        logam[jenis2].k;



    /*
       Untuk dua batang seri dengan luas
       penampang sama:

       k1/L1 (Tpanas - Ts)
       =
       k2/L2 (Ts - Tdingin)

       sehingga:

       Ts =
       [(k1/L1)Tpanas + (k2/L2)Tdingin]
       /
       [(k1/L1)+(k2/L2)]
    */

    const konduktansi1 =
        k1 / L1;

    const konduktansi2 =
        k2 / L2;


    const Ts =
        (
            konduktansi1 * Tpanas +
            konduktansi2 * Tdingin
        )
        /
        (
            konduktansi1 +
            konduktansi2
        );


    const deltaT =
        Tpanas - Tdingin;



    /* UPDATE TEKS */

    document.getElementById(
        "namaLogam1"
    ).textContent =
        logam[jenis1].nama;


    document.getElementById(
        "namaLogam2"
    ).textContent =
        logam[jenis2].nama;


    document.getElementById(
        "k1"
    ).textContent =
        k1 + " W/mK";


    document.getElementById(
        "k2"
    ).textContent =
        k2 + " W/mK";


    document.getElementById(
        "hasilSuhu"
    ).textContent =
        Ts.toFixed(2) + " °C";


    document.getElementById(
        "suhuSambungan"
    ).textContent =
        Ts.toFixed(1) + "°C";


    document.getElementById(
        "deltaT"
    ).textContent =
        deltaT.toFixed(1) + " °C";


    document.getElementById(
        "suhuPanasVisual"
    ).textContent =
        Tpanas + "°C";


    document.getElementById(
        "suhuDinginVisual"
    ).textContent =
        Tdingin + "°C";



    /* INTERPRETASI */

    let interpretasi = "";

    if (k1 > k2) {

        interpretasi =
            `<strong>${logam[jenis1].nama}</strong>
             memiliki konduktivitas termal lebih besar
             daripada ${logam[jenis2].nama}.
             Kalor lebih mudah mengalir melalui logam
             dengan konduktivitas termal yang lebih besar.`;

    }

    else if (k2 > k1) {

        interpretasi =
            `<strong>${logam[jenis2].nama}</strong>
             memiliki konduktivitas termal lebih besar
             daripada ${logam[jenis1].nama}.
             Perbedaan konduktivitas menyebabkan distribusi
             suhu pada kedua batang tidak sama.`;

    }

    else {

        interpretasi =
            `Kedua batang memiliki konduktivitas termal
             yang sama sehingga distribusi suhu lebih
             seimbang apabila panjang dan luas penampang
             keduanya sama.`;

    }


    document.getElementById(
        "interpretasi"
    ).innerHTML =
        interpretasi;



    /* ANIMASI */

    buatPartikelKalor();

}



/* ==========================================
   PARTIKEL KALOR
========================================== */

function buatPartikelKalor() {

    const container =
        document.getElementById(
            "heatParticles"
        );

    container.innerHTML = "";

    for (let i = 0; i < 18; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add(
            "heat-particle"
        );

        particle.style.left =
            Math.random() * 85 + "%";

        particle.style.top =
            Math.random() * 70 + 15 + "%";

        particle.style.animationDelay =
            Math.random() * 1.5 + "s";

        container.appendChild(
            particle
        );

    }

}



/* ==========================================
   KONVEKSI
========================================== */

let konveksiAktif = false;


function updateKonveksi() {

    const suhu =
        document.getElementById(
            "suhuAir"
        ).value;


    document.getElementById(
        "suhuAirValue"
    ).textContent =
        suhu;


    document.getElementById(
        "infoSuhuAir"
    ).textContent =
        suhu + "°C";

}



function mulaiKonveksi() {

    konveksiAktif = true;

    document
        .querySelector(".water")
        .classList.add(
            "konveksi-aktif"
        );

}



function stopKonveksi() {

    konveksiAktif = false;

    document
        .querySelector(".water")
        .classList.remove(
            "konveksi-aktif"
        );

}



/* Nilai awal */

updateKonveksi();