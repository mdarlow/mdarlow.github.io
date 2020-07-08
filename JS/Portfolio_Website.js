////////////////////////////////
// Functions for contact form //
// Open contact form:
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
// Close Contact form:
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
////////////////////////////////



//////////////////////////////
// Functions for slideshow //
var slideIndex = 1;
    showSlides(slideIndex);
// Next & previous button controls:
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Dot controls:
function currentSlide(n) {
    showSlides(slideIndex = n);
}
// Allow slideshow to be viewed:
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
//////////////////////////////


