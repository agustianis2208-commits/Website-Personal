// ==========================================
// KUNCI JAWABAN
// ==========================================

const kunciJawaban = {
    q1: "B",
    q2: "C",
    q3: "A",
    q4: "C",
    q5: "B"
};


// ==========================================
// CEK JAWABAN
// ==========================================

function cekJawaban() {

    let benar = 0;
    let total = 5;

    // Mengecek setiap soal
    for (let i = 1; i <= total; i++) {

        const jawaban = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        if (jawaban && jawaban.value === kunciJawaban[`q${i}`]) {
            benar++;
        }
    }


    // Hitung salah
    const salah = total - benar;


    // Hitung nilai
    const nilai = (benar / total) * 100;


    // Tampilkan hasil
    document.getElementById("nilai").textContent = nilai;
    document.getElementById("benar").textContent = benar;
    document.getElementById("salah").textContent = salah;


    // Pesan berdasarkan nilai
    let pesan = "";

    if (nilai >= 90) {

        pesan = "Sangat baik! Pemahamanmu terhadap materi sangat baik.";

    } else if (nilai >= 80) {

        pesan = "Bagus! Pemahamanmu terhadap materi sudah baik.";

    } else if (nilai >= 70) {

        pesan = "Cukup baik. Pelajari kembali beberapa bagian materi.";

    } else {

        pesan = "Tetap semangat. Pelajari kembali materi dan coba kuis lagi.";

    }


    document.getElementById("pesan").textContent = pesan;


    // Tampilkan hasil
    document.getElementById("hasil").style.display = "block";


    // Scroll menuju hasil
    document.getElementById("hasil").scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// ULANGI KUIS
// ==========================================

function ulangKuis() {

    document.getElementById("quizForm").reset();

    document.getElementById("hasil").style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}