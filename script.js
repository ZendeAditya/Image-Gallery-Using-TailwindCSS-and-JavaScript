let imgUrl;
const apiUrl =
  "https://api.unsplash.com/photos/?client_id=4fBMbWGW5VkIyXXNpXs9bjvjOO3MWD5mw-y1PVGzejw";
let preBtn = document.getElementById("previous");
let currentBtn = document.getElementById("current");
let nextBtn = document.getElementById("next");
const perPage = 9;
let currentPage = 1;
const getImage = async (page) => {
  let api = await fetch(`${apiUrl}&page=${page}&per_page=${perPage}`);
  let body = await api.json();
  for (let i = 0; i < body.length; i++) {
    let imageBox = document.getElementById("imageBox");
    // imageBox.innerHTML = "";
    let imgEl = document.createElement("img");
    let smallEl = document.createElement("p");
    smallEl.innerText = body[i].alt_description;
    imgEl.className = "w-52 h-52 rounded-md";
    imgEl.src = body[i].urls.small;
    imgEl.alt = body[i].alt_description;

    imageBox.appendChild(imgEl);
    // imageBox.appendChild(smallEl);
  }
};
function nextPage() {
  const imageBox = document.getElementById("imageBox");
  imageBox.innerHTML = "";
  currentPage++;
  nextBtn.innerText + currentPage;
  currentBtn.innerText = currentPage;
  getImage(currentPage);
}

function previousPage() {
  if (currentPage > 1) {
    const imageBox = document.getElementById("imageBox");
    imageBox.innerHTML = "";
    currentPage--;
    preBtn.innerText + currentPage;
    currentBtn.innerText = currentPage;
    getImage(currentPage);
  }
}
preBtn.addEventListener("click", previousPage);
nextBtn.addEventListener("click", nextPage);
getImage(currentPage);
