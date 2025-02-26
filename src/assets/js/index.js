import $ from "jquery"

import Swiper from 'swiper';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let $win = $(window);
var $body       = $('body')
var $modal_bg   = $('.modal_bg');
var $modal      = $modal_bg.find('.modal-item');
var $item_list  = $('.item-list');
var $item       = $item_list.find('.item');



opning();
function tick(time) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve()
            console.log('YES');
        }, time)
    })
}

async function opning() {
    $body.addClass('noscroll');
    $('.contents').addClass('start');
    await tick(1000);
    $body.removeClass('noscroll');
    
    
}




const swiper = new Swiper(".swiper", {
    loop: true, 
    slidesPerView: 1.5, 
    spaceBetween: 5, 
    centeredSlides: true,
    autoplay: {
        delay: 1500, 
        disableOnInteraction: false, 
    },
    initialSlide: 1, // 真ん中のスライド（インデックス1）を最初に表示
});



// ページ内スクロール
$('.anchor_link a[href*="#"]').on('click', function(){
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top - 200; // ここで少し上に調整（20px）
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});




  function toggleModal() {
    
    $item.on('click', function(){
        var $this = $(this);
        var index = $this.attr('data-modal') - 1;
        $modal.removeClass('show');
        $modal.eq(index).addClass('show');
        $body.addClass('noscroll');
        $modal_bg.addClass('open');
    });
    
    $modal.on('click', function(event){
        event.stopPropagation(); 
    });

    $modal_bg.on('click', function(){
        $body.removeClass('noscroll');
        $modal.removeClass('show');
        $modal_bg.removeClass('open');
    });  

    $('.close').on('click', function(){
        $body.removeClass('noscroll');
        $modal.removeClass('show');
        $modal_bg.removeClass('open');
    });  
    $('.chara_close').on('click', function(){
        $body.removeClass('noscroll');
        $modal.removeClass('show');
        $modal_bg.removeClass('open');
    });  
}

$win.on({
    'load' : function(){
        toggleModal();
    }
});
  

gsap.utils.toArray(".item").forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        toggleClass: {
          targets: element,
          className: "in",
        },
        once: true,
      },
    });
  });

gsap.utils.toArray(".leftin").forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        toggleClass: {
          targets: element,
          className: "in",
        },
        once: true,
      },
    });
  });


gsap.utils.toArray(".fadein").forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        toggleClass: {
          targets: element,
          className: "in",
        },
        once: true,
      },
    });
  });

  gsap.to(".anchor", {
    scrollTrigger: {
      toggleActions: "play none none reverse",  
      trigger: ".wrapper",
      start: "top 90%", 
      toggleClass: {
        targets: ".anchor", 
        className: "active", 
      },
    },
  });
  gsap.to(".mv_illwrap-sp", {
    scrollTrigger: {
      toggleActions: "play none none reverse",  
      trigger: ".mv_illwrap-sp",
      start: "top 80%", 
      toggleClass: {
        targets: ".mv_illwrap-sp", 
        className: "show", 
      },
    },
  });
  gsap.to(".about", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%", 
      toggleClass: {
        targets: ".about", 
        className: "show", 
      },
    },
  });
  