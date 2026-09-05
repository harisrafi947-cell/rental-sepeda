let hargaSepeda = 0;


// Memilih sepeda dari tombol "Sewa Sekarang"
function pilihSepeda(namaSepeda, harga) {

    document.getElementById("jenisSepeda").value = namaSepeda;

    hargaSepeda = harga;

    hitungTotal();

    document.getElementById("pesan").scrollIntoView({
        behavior: "smooth"
    });
}


// Mengambil harga berdasarkan pilihan dropdown
function updateHarga() {

    const select = document.getElementById("jenisSepeda");

    const option = select.options[select.selectedIndex];

    if (option.dataset.price) {

        hargaSepeda = Number(option.dataset.price);

    } else {

        hargaSepeda = 0;

    }

    hitungTotal();
}


// Menghitung total pembayaran
function hitungTotal() {

    const durasi = Number(
        document.getElementById("durasi").value
    );

    const total = hargaSepeda * durasi;

    document.getElementById("totalHarga").innerText =
        "Rp" + total.toLocaleString("id-ID");
}


// Konfirmasi pemesanan
document.getElementById("bookingForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const nama =
            document.getElementById("nama").value;

        const sepeda =
            document.getElementById("jenisSepeda").value;

        const tanggal =
            document.getElementById("tanggal").value;

        const total =
            document.getElementById("totalHarga").innerText;

        if (sepeda === "") {

            alert("Silakan pilih sepeda terlebih dahulu.");

            return;
        }


        alert(
            "Pemesanan berhasil dibuat!\n\n" +
            "Nama: " + nama + "\n" +
            "Sepeda: " + sepeda + "\n" +
            "Tanggal: " + tanggal + "\n" +
            "Total: " + total
        );

    }
);