import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

for (const image of galleryItems) {
  const listEl = `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
          <img
            class="gallery__image"
            src=${image.preview}
            data-source=${image.original}
            alt=${image.description}
          />
        </a>
      </li>`;

  galleryEl.insertAdjacentHTML("beforeend", listEl);
  galleryEl.addEventListener("click", (e) => e.preventDefault());
}

galleryEl.insertAdjacentHTML("beforeend", galleryEl);

let lightbox = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.on("show.simplelightbox", () => {
  galleryEl.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      lightbox.close();
    }
  });
});

galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
});
