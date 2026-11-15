function periksaKuis() {

    const kunci = {
        q1: "C",
        q2: "B",
        q3: "A",
        q4: "B",
        q5: "C"
    };

    let benar = 0;
    let terjawab = 0;

    for (let i = 1; i <= 5; i++) {

        const jawaban =
            document.querySelector(
                `input[name="q${i}"]:checked`
            );

        if (jawaban) {
            terjawab++;

            if (jawaban.value === kunci[`q${i}`]) {
                benar++;
            }
        }
    }


    if (terjawab < 5) {

        alert(
            `Masih ada ${5 - terjawab} soal yang belum dijawab.`
        );

        return;
    }


    const nilai = (benar / 5) * 100;

    let pesan = "";

    if (nilai === 100) {

        pesan = `
            <h3>🎉 Sangat Baik!</h3>
            <p>
                Semua jawaban benar. Kamu sudah memahami
                materi Pertemuan 2 dengan sangat baik.
            </p>
        `;

    } else if (nilai >= 80) {

        pesan = `
            <h3>👏 Baik!</h3>
            <p>
                Pemahamanmu sudah baik. Pelajari kembali
                bagian yang masih kurang.
            </p>
        `;

    } else if (nilai >= 60) {

        pesan = `
            <h3>📚 Cukup Baik</h3>
            <p>
                Beberapa konsep masih perlu dipelajari kembali,
                terutama bagian perhitungan kalor dan Asas Black.
            </p>
        `;

    } else {

        pesan = `
            <h3>💪 Tetap Semangat!</h3>
            <p>
                Pelajari kembali materi dan coba kerjakan
                kuis setelah memahami konsepnya.
            </p>
        `;
    }


    document.getElementById("hasilKuis").innerHTML = `

    <div class="score">

        <h2>Hasil Kuis</h2>

        <div class="nilai">
            ${nilai}
        </div>

        <p>
            Jawaban benar:
            <strong>${benar} dari 5 soal</strong>
        </p>

        ${pesan}

        <a href="penyelesaian2.html" class="btn">
            Lihat Penyelesaian Masalah →
        </a>

    </div>
`;


    document.getElementById("hasilKuis")
        .scrollIntoView({
            behavior: "smooth"
        });
}