function copyAddress() {
  const contract = "0x616A1de200d49e210de940F91FB636f67b75d657"; // ضع هنا عنوان العقد الحقيقي
  navigator.clipboard.writeText(contract).then(() => {
    const copiedMsg = document.getElementById("copied");
    copiedMsg.classList.remove("hidden");
    setTimeout(() => {
      copiedMsg.classList.add("hidden");
    }, 3000);
  });
}
