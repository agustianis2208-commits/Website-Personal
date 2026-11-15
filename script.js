// ==========================================
// MEMUAT JAWABAN YANG PERNAH DISIMPAN
// ==========================================

window.addEventListener("DOMContentLoaded", function () {

    for (let i = 1; i <= 3; i++) {

        const jawaban = localStorage.getItem("dugaanKasus" + i);

        if (jawaban) {

            document.getElementById("jawaban" + i).value = jawaban;

        }

    }

});


// ==========================================
// SIMPAN DUGAAN SISWA
// ==========================================

function simpanJawaban(nomor) {

    const textarea =
        document.getElementById("jawaban" + nomor);

    const status =
        document.getElementById("status" + nomor);

    const jawaban =
        textarea.value.trim();


    if (jawaban === "") {

        status.textContent =
            "⚠️ Silakan tuliskan dugaan terlebih dahulu.";

        status.style.color = "#d35400";

        return;
    }


    localStorage.setItem(
        "dugaanKasus" + nomor,
        jawaban
    );


    status.textContent =
        "✓ Dugaan berhasil disimpan.";

    status.style.color = "#159447";


    setTimeout(function () {

        status.textContent = "";

    }, 3000);
}


// ==========================================
// TOMBOL MULAI PENYELIDIKAN
// ==========================================

function mulaiPenyelidikan() {

    const jawaban1 =
        document.getElementById("jawaban1").value.trim();

    const jawaban2 =
        document.getElementById("jawaban2").value.trim();

    const jawaban3 =
        document.getElementById("jawaban3").value.trim();


    if (
        jawaban1 === "" ||
        jawaban2 === "" ||
        jawaban3 === ""
    ) {

        alert(
            "Silakan tuliskan dugaan awal pada ketiga kasus terlebih dahulu."
        );

        return;
    }


    // Menyimpan semua jawaban
    localStorage.setItem(
        "dugaanKasus1",
        jawaban1
    );

    localStorage.setItem(
        "dugaanKasus2",
        jawaban2
    );

    localStorage.setItem(
        "dugaanKasus3",
        jawaban3
    );


    /*
       GANTI BAGIAN INI sesuai nama halaman
       Materi Pertemuan 1 Anda.

       Contoh:
       window.location.href = "materi-pertemuan-1.html";
    */

    alert(
        "Dugaan awal berhasil disimpan. Selanjutnya kamu akan masuk ke tahap penyelidikan."
    );

    // Contoh jika halaman materi sudah dibuat:
    // window.location.href = "materi.html";
}