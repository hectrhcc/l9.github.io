var images = document.getElementsByTagName('img');

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", updateName)
}

function updateName() {
  sampleText.innerHTML = this.getAttribute('data-text');
}

