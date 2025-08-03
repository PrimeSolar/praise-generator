// Footer
footerContainer = document.querySelector("#footerContainer");
const year = new Date().getFullYear();

function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    //Create a content of the footer:
    footerContainer.innerHTML += `
<footer>
Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${year}
</footer>
      `;
  }
}
footerContainerF(footerContainer);
