function copyAddress() {
  const contract = "0xABCDEF1234567890ABCDEF1234567890ABCDEF12"; // Replace with real contract address
  navigator.clipboard.writeText(contract).then(() => {
    document.getElementById("copied").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("copied").classList.add("hidden");
    }, 3000);
  });
}
