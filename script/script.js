document.addEventListener("DOMContentLoaded", function () {
  var burger = document.getElementById("burgerMenu");
  var nav = document.getElementById("navLinks");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  const testimonials = document.querySelectorAll(".testimonial");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      if (i === index) {
        testimonial.classList.add("active");
      }
    });
  }

  document.querySelector(".left")?.addEventListener("click", () => {
    currentTestimonial =
      currentTestimonial === 0
        ? testimonials.length - 1
        : currentTestimonial - 1;
    showTestimonial(currentTestimonial);
  });

  document.querySelector(".right")?.addEventListener("click", () => {
    currentTestimonial =
      currentTestimonial === testimonials.length - 1
        ? 0
        : currentTestimonial + 1;
    showTestimonial(currentTestimonial);
  });

  showTestimonial(currentTestimonial);
});
