//THEME PICKER_____________________________________________________

/**
 * Updates the theme of the website.
 * @param {any} theme The new theme to change to.
 * @param {any} el The theme picker circle that the user clicked on.
 */
function updateSiteTheme(theme, el) {
    //Update the active status for the circle that the user selected and
    //remove the active status from the rest of the circles.
    var x = document.getElementsByClassName("theme-picker");
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    el.parentNode.classList.add("active");

    //Load the requested theme and apply to the page.
    try {
        document.getElementById('CssTheme').href = '../Content/' + theme + '.min.css';
    } catch (err) {
        document.getElementById('CssTheme').href = '../Content/Retro.min.css';
        console.log("Exception at updateSiteTheme() " + err.message);
    }

}


//DID YOU KNOW SLIDER___________________________________________________

var slideIndex = 0;

/**
 * Set the current index of the slider.
 * @param {any} n The slide number requested.
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * Show the requested slide from the slider.
 * @param {any} n The slide number requested.
 */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Default the slider to the first slide on page load.
showSlides(slideIndex = 1);


//MISC___________________________________________________________

/**
 * Returns a lower case version of the string supplied.
 * @param {any} value The string that needs to be converted.
 * @returns {any} Returns a lower case version of the string supplied.
 */
function getLowercase(value) {
    try {
        return value.toLowerCase();
    }
    catch (ex) {
        console.log("Exception at getLowercase() " + ex.message);
        return value;
    }
}