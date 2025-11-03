// Welcome Text dengan nama user
window.onload = function() {
  let userName = prompt("Masukkan nama Anda:");
  if (userName) {
    document.getElementById("welcome-text").innerText = "Selamat Datang " + userName + " !";
  }
};

// Form Validation
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let birth = document.getElementById("birth").value.trim();
  let gender = document.querySelector("input[name='gender']:checked");
  let msg = document.getElementById("msg").value.trim();
  let result = document.getElementById("result");

  if (name === "" || birth === "" || !gender || msg === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  result.innerHTML = `
    <h3>Data Terkirim:</h3>
    <p><b>Nama:</b> ${name}</p>
    <p><b>Tanggal Lahir:</b> ${birth}</p>
    <p><b>Jenis Kelamin:</b> ${gender.value}</p>
    <p><b>Pesan:</b> ${msg}</p>
  `;
});
