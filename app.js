const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });

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
  var x = document.getElementById("mobile-expand");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
};

imageGallery();
