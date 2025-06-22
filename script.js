function copyAddress() {
  const contract = "0x616A1de200d49e210de940F91FB636f67b75d657"; // استبدل بالعنوان الحقيقي
  navigator.clipboard.writeText(contract).then(() => {
    document.getElementById("copied").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("copied").classList.add("hidden");
    }, 3000);
  });
}
