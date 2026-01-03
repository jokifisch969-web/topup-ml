let produkTerpilih = "";

function pilihProduk(el, nama) {
  document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('active');
        });
          el.classList.add('active');
            produkTerpilih = nama;
            }

            function checkout() {
              const user = document.getElementById('userid').value;
                const server = document.getElementById('server').value;

                  if (!user || !server || !produkTerpilih) {
                      alert("Lengkapi data dan pilih diamond!");
                          return;
                            }

                              alert(
                                  "Pesanan Berhasil!\n\n" +
                                      "User ID: " + user + "\n" +
                                          "Server: " + server + "\n" +
                                              "Produk: " + produkTerpilih
                                                );
                                                }

                                                function scrollToTopup() {
                                                  document.getElementById("topup").scrollIntoView({ behavior: "smooth" });
                                                  }