const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".destinations_image");
const original = document.querySelector (".full-img");
const caption = document.querySelector (".caption");
const read = document.querySelector (".read");


previews.forEach((preview) => {
    preview.addEventListener ("click", () => {
            
            modal.classList.add("open");
            original.classList.add("open");
            const originalSrc = preview.getAttribute("data-original");
            original.src = `pictures/Backgrounds/${originalSrc}`;
            const altText = preview.alt;
            caption.textContent = altText;
            const read = preview.j;
            caption.textContent = altText;
        });
});

modal.addEventListener ("click", (e) => {
    if (e.target.classList.contains ("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});
    