function copyAddress() {
  const contract = "9dkgmNTaThwZUKBUeggPQmFt4XYnPihYxLuPHBrCpump";
  navigator.clipboard.writeText(contract).then(() => {
    const copiedMsg = document.getElementById("copied");
    copiedMsg.classList.remove("hidden");
    setTimeout(() => {
      copiedMsg.classList.add("hidden");
    }, 3000);
  });
}
