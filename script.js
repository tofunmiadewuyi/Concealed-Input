const currentPage = document.querySelector(".currentpage");
const title = document.querySelector(".title");

currentPage.addEventListener('input', () => {
    title.value = `${currentPage.value}`
})

title.addEventListener('input', () => {
  currentPage.value = `${title.value}`
})

const textarea = document.querySelector(".body");

textarea.style.height = "192px";

textarea.addEventListener('input', () => {
  var currentHeight = textarea.scrollHeight - 12;
  if (currentHeight > 192) {
    newHeight(currentHeight)
  }
})

function newHeight(currentHeight) {
  textarea.style.height = `${currentHeight}px`;
}