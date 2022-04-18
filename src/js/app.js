import * as flsFunction from "./modules/functions.js";
// import $ from "jquery";
// import styler from "jquery-form-styler/dist/jquery.formstyler.js";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
flsFunction.isWebp();

 import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper('.banner__slider', {
    // Optional parameters
    modules: [Navigation, Pagination],

    // If we need pagination


    // Navigation arrows
    navigation: {
      nextEl: '.banner-swiper-button-next',
      prevEl: '.banner-swiper-button-prev',
    },

    // And if we need scrollbar

  });

  new Swiper ('.top-position__slider', {
    modules: [Navigation, Pagination],

    // If we need pagination


    // Navigation arrows
    navigation: {
      nextEl: '.top-swiper-button-next',
      prevEl: '.top-swiper-button-prev',
    },
    nested: true,
  });

  new Swiper ('.combo-menu__slider', {
    modules: [Navigation, Pagination],

    // If we need pagination


    // Navigation arrows
    navigation: {
      nextEl: '.combo-menu-swiper-button-next',
      prevEl: '.combo-menu-swiper-button-prev',
    },
    nested: true,
  });

  $(function() {

	$('.sort__select').styler();

	$('body').on('click', '.number-minus, .number-plus', function(){
		var $row = $(this).closest('.cart__input-count');
		var $input = $row.find('.cart__input-number');
		var step = $row.data('step');
		var val = parseFloat($input.val());
		if ($(this).hasClass('number-minus')) {
			val -= step;
		} else {
			val += step;
		}
		$input.val(val);
		$input.change();
		return false;
	});

	$('body').on('change', '.cart__input-number', function(){
		var $input = $(this);
		var $row = $input.closest('.cart__input-count');
		var step = $row.data('step');
		var min = parseInt($row.data('min'));
		var max = parseInt($row.data('max'));
		var val = parseFloat($input.val());
		if (isNaN(val)) {
			val = step;
		} else if (min && val < min) {
			val = min;
		} else if (max && val > max) {
			val = max;
		}
		$input.val(val);
	});
   });