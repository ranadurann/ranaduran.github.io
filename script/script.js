document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('burgerMenu')?.addEventListener('click', function () {
        document.getElementById('navLinks')?.classList.toggle('active');
    });

    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    }

    document.querySelector('.left')?.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
        showTestimonial(currentTestimonial);
    });

    document.querySelector('.right')?.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
        showTestimonial(currentTestimonial);
    });

    showTestimonial(currentTestimonial);
});
