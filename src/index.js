import 'bootstrap';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import orcaImgSrc from './img/orca.jpg';
import belugaImgSrc from './img/beluga.jpg';
import humpbackImgSrc from './img/humpback.jpg';

const orcaImg = document.getElementById('img__orca');
orcaImg.src = orcaImgSrc;

const belugaImg = document.getElementById('img__beluga');
belugaImg.src = belugaImgSrc;

const humpbackImg = document.getElementById('img__humpback');
humpbackImg.src = humpbackImgSrc;

$(document).ready(function() {
  $('.nav-link').click(function(e){
    const url = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $('section'+url+'').offset().top - 50
    }, 500, 'swing');

    $('#navbarCollapse').removeClass('show');

    e.preventDefault();
  });
});