const size = document.querySelector("#size");
const password = document.querySelector("#password");
const label = document.querySelector("#label");
const button = document.querySelector("#button");
const modalText = document.querySelector("#modalText");
const modal = document.querySelector("#modal");
const background = document.querySelector("#background");
const container = document.querySelector("#container");
const result = document.querySelector("#result");

function generatePass() {
  if (size.value === "" || size.value > 100 || size.value < 4) {
    modalText.innerHTML = "Digite um tamanho entre 4 e 100";
    openModal();
    return;
  }
  result.classList.remove("hide");
  let charset =
    "abcdefghijklmniopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$";
  let passwordGenerated = "";
  while (
    passwordGenerated.indexOf("@") == -1 &&
    passwordGenerated.indexOf("#") == -1 &&
    passwordGenerated.indexOf("$") == -1
  ) {
    passwordGenerated = ""
    for (var i = 0, n = charset.length; i < size.value; i++) {
      passwordGenerated += charset.charAt(Math.floor (Math.random() * n));
    }
  }
  password.innerHTML = passwordGenerated;
}

function copy() {
  navigator.clipboard.writeText(password.innerHTML);
  modalText.innerHTML = "Copiado com sucesso!";
  openModal();
}

function openModal() {
  modal.classList.remove("hide");
  background.classList.remove("hide");
  container.classList.add("hide");
}

function closeModal() {
  modal.classList.add("hide");
  background.classList.add("hide");
  container.classList.remove("hide");
}
