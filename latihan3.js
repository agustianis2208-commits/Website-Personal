function periksaJawaban() {

    const kunciJawaban = {
        q1: "C",
        q2: "B",
        q3: "B",
        q4: "C",
        q5: "A"
    };


    let benar = 0;
    let belumDijawab = 0;


    for (let i = 1; i <= 5; i++) {

        const jawaban = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        if (!jawaban) {

            belumDijawab++;

        } else if (jawaban.value === kunciJawaban[`q${i}`]) {

            benar++;

        }

    }


    if (belumDijawab > 0) {

        alert(
            `Masih ada ${belumDijawab} soal yang belum dijawab.`
        );

        return;

    }


    const nilai = benar * 20;


    const hasil = document.getElementById("hasil");
    const nilaiElement = document.getElementById("nilai");
    const feedback = document.getElementById("feedback");
    const detail = document.getElementById("detail");


    nilaiElement.textContent = nilai;


    if (nilai >= 80) {

        feedback.innerHTML = `
            🎉 <strong>Sangat Baik!</strong><br>
            Pemahamanmu tentang perpindahan kalor sudah sangat baik.
        `;

    } else if (nilai >= 60) {

        feedback.innerHTML = `
            👍 <strong>Baik!</strong><br>
            Namun masih ada beberapa konsep yang perlu kamu pelajari kembali.
        `;

    } else {

        feedback.innerHTML = `
            📚 <strong>Perlu Belajar Kembali</strong><br>
            Pelajari kembali materi konduksi, konveksi, dan radiasi
            sebelum melihat pembahasan.
        `;

    }


    detail.innerHTML = `
        <p>
            Jawaban benar:
            <strong>${benar} dari 5 soal</strong>
        </p>

        <p>
            Nilai:
            <strong>${nilai}</strong>
        </p>
    `;


    hasil.style.display = "block";


    hasil.scrollIntoView({
        behavior: "smooth"
    });


    localStorage.setItem("nilaiPertemuan3", nilai);

}