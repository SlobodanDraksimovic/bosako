const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });
const image = document.querySelectorAll("img");
const x = document.getElementById("mobile-expand");

t1.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
t1.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
t1.to(".intro", { y: "-100%", duration: 1 }, "-=1");
t1.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

$("nav a#toggle").click(function () {
  $("ul, h1").slideToggle(200, function () {});
});

function imageGallery() {
  const highlight = document.querySelector(".gallery-highlight");
  const previews = document.querySelectorAll(".gallery-preview img");
  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      const smallImg = this.src;
      const bigImg = smallImg.replace("min", "big");
      highlight.src = bigImg;
      previews.forEach((preview) => preview.classList.remove("gallery-active"));
      preview.classList.add("gallery-active");
    });
  });
}

buttonFunction = () => {
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.flexDirection = "column";
    x.style.gap = "1rem";
    x.style.justifyContent = "center";
    x.style.alignItems = "center";
  } else {
    x.style.display = "none";
  }
};

Array.from(image).forEach((image) => {
  image.addEventListener("load", () => fitImage(image));

  if (image.complete && image.naturalWidth !== 0) fitImage(image);
});

function fitImage(image) {
  const aspectRatio = image.naturalWidth / image.naturalHeight;

  // If image is landscape
  if (aspectRatio > 1 && !x) {
    image.style.width = "80%";
    image.style.height = "600px";
  }

  // If image is portrait
  else if (aspectRatio < 1 && !x) {
    image.style.width = "auto";
    image.style.maxHeight = "100%";
  }
  // Otherwise, image is square
  else {
    image.style.maxWidth = "100%";
    image.style.height = "auto";
  }
}
imageGallery();
