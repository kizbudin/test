function konfirmasi(form) {
    if (confirm("Apakah data sudah benar?")) {
    form.submit();
    }
    
    else {
    alert("Silahkan isi kembali datanya");
    }
    }