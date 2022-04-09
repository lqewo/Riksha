import * as flsFunction from "./modules/functions.js";
import $ from "jquery";
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

//   $(function() {
//     let header = $('.header');

//     $(window).scroll(function() {
//       if($(this).scrollTop() > 1) {
//        header.addClass('header_fixed');
//       } else {
//        header.removeClass('header_fixed');
//       }
//     });
//    });