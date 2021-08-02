import $ from 'jquery';
import 'slick-carousel';
import 'lightbox2';
// import headerSlider from './lib/headerSlider';
// import newsSlider from './lib/newsSlider';
// import headerMenuNavigation from './lib/headerMenuNavigation';
// import seeMore from './lib/seeMore';
// import formValidationFooter from './lib/validationForm';
// import googleMap from './lib/googleMap';

// headerSlider();
// newsSlider();
// headerMenuNavigation();
// seeMore();
// formValidationFooter();
// googleMap();


// Add the searchActive class when hovering to the search button and increase the input field
// Добавляем класс searchActive при ховере на кнопку search  и увеличиваем поле input (header:128 searchActive);

function addInputClass() {
    setTimeout(() => {
        if ($('.header__search-input').hasClass('searchActive2')) {
            $('.header__search-input').removeClass('searchActive2');
        } else
            $('.header__search-input').addClass('searchActive');

        // setTimeout(() => {

        //     $('.header__search-input').addClass('searchActive2');
        // }, 2000);
        // $('.header__search-input').removeClass('searchActive2');
    }, 0);
}
function removeInputClass() {
    setTimeout(() => {
        if ($('.header__search-input').hasClass('searchActive')) {
            setTimeout(() => {
                $('.header__search-input').removeClass('searchActive');

                $('.header__search-input').addClass('searchActive2');
            }, 1000);
        }

        // $('.header__search-input').removeClass('searchActive');
        // $('.header__search-input').addClass('searchActive2');
        // $('.header__search-input').removeClass('searchActive2');
    }, 0);
}
//

$('.header__search-button').hover(addInputClass, removeInputClass)
$('.header__search-button').mouseenter(addInputClass).mouseleave(removeInputClass);
// End search Active
