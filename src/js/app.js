import * as flsFunction from "./modules/functions.js";
import $ from "jquery";
flsFunction.isWebp();

 import Swiper, { Navigation, Pagination } from 'swiper';

  const swiper = new Swiper();

  $(function() {
    let header = $('.header');

    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
      } else {
       header.removeClass('header_fixed');
      }
    });
   });