"use strict";var steps,stepPageOne='\n  <div class="quiz-page__info">\n    <p class="quiz-page__text">\n    Aliquam urna arcu, scelerisque vel viverra sed, pellentesque sit\n    amet metus. Curabitur at luctus massa. Vestibulum pretium sem\n    tortor, vitae mattis odio accumsan vitae. Fusce id luctus erat:\n    </p>\n    <ol class="quiz-page__list">\n    <li class="quiz-page__list-item">\n      Mauris rutrum interdum condimentum.\n    </li>\n    <li class="quiz-page__list-item">\n      Donec commodo quis arcu eget pretium.\n    </li>\n    </ol>\n  </div>\n  <button class="btn btn-reset btn--primary quiz-page__btn btn-next-step">\n    Agree and continue\n  </button>\n',stepPageTwo='\n  <div class="quiz-page__info">\n    <p style="margin-bottom: 5rem;" class="quiz-page__text">\n    To participate in this giveaway please share this giveaway offer with your friends. Not only your friends will appreciate this offer but you will receive $10 Amazon Gift Card for each of your friends that participates in this giveaway!\n    </p>\n  </div>\n  <button class="btn btn-reset btn--primary quiz-page__btn btn-next-step">\n    continue\n  </button>\n',stepPageThree='\n  <div class="quiz-page__info">\n    <p style="margin-bottom: 2rem;" class="quiz-page__text">\n    Do you have an Amazon Prime account?\n    </p>\n    <p style="margin-bottom: 5rem;" class="quiz-page__text">\n    To be able to participate in this giveaway you need to have Amazon Prime.\n    </p>\n  </div>\n  <div class="quiz-page__btns">\n    <button style="margin-right: 2rem;" class="btn btn-reset btn--flex-bs btn--primary btn-next-step">\n    Yes, i have\n    </button>\n    <button class="btn btn-reset btn--secondary btn--flex-bs btn-next-step">\n    no, i don’t have\n    </button>\n  </div>\n',stepPageFour='\n  <div class="quiz-page__info">\n    <ul class="bonus-list list-reset">\n      <li class="bonus-list__item">\n        You need to Buy our Product on Amazon at the specified price $20.89!\n      </li>\n      <li class="bonus-list__item">\n        After the purchase - Send us your Order Number or the Screenshot to our\n        manager in FB Messenger\n      </li>\n      <li class="bonus-list__item">\n        When you receive the product please use it and share product reviews\n      </li>\n      <li class="bonus-list__item">\n        We will send you the 25$ Amazon Gift Card code within 24 hours after we\n        get short review from you.\n      </li>\n      <li class="bonus-list__item">\n        As a result, you will receive our Product Free!\n      </li>\n    </ul>\n  </div>\n  <div class="quiz-page__btns" style="flex-direction: column;">\n    <button style="margin-bottom: 2rem;" class="btn btn-reset btn--primary quiz-page__btn btn-next-step">\n      get offer\n    </button>\n    <button class=" btn-reset quiz-page__offer  btn-next-step">\n    I don\'t like offer terms\n    </button>\n  </div>\n',stepPageFive='\n  <div class="quiz-page__info">\n    <p style="margin-bottom: 2rem;" class="quiz-page__text">\n    Click the button <strong>GO TO AMAZON</strong>  and <strong>Buy a Product</strong>\n    </p>\n  </div>\n  <button style="margin-bottom: 5.5rem;" class="btn btn-reset btn--primary quiz-page__btn btn-next-step">\n    Go to amazon\n  </button>\n    <p style="margin-bottom: 1rem;" class="quiz-page__text">\n    Click on the button below and <strong>Provide Order ID \n    to our Manager</strong> in FB Messenger\n    </p>\n    <p style="margin-bottom: 2rem;" class="quiz-page__italic">\n    (If you have any questions, you can ask them to our Manager)\n    </p>\n    <button  class="btn btn-reset btn--primary quiz-page__btn btn-next-step">\n    provide order id\n  </button>\n',quizData=[{step:"Step 1",title:"Lorem ipsum dolor sit&nbsp;amet",img:"acne-cream.jpg",content:stepPageOne},{step:"Step 2",title:"Share Facebook post",img:"discount.jpg",content:stepPageTwo},{step:"Step 3",title:"Amazon Prime",img:"acne-cream.jpg",content:stepPageThree},{step:"Step 4",title:"How to Buy a Product with 100% BONUS!",img:"acne-cream.jpg",content:stepPageFour},{step:"Step 5",title:"Buy and Provide order ID to our Manager",img:"acne-cream.jpg",content:stepPageFive}],selectButton=document.querySelector(".product-info__btn"),quizSection=document.getElementById("quiz"),renderPage=function(e){if(0===e)quizSection.innerHTML="",quizSection.innerHTML='\n  <div class="container">\n    <div class="quiz-page">\n      <div id="stepsbar" class="stepsbar">\n        <ul class="stepsbar__list list-reset">\n          <li class="stepsbar__item stepsbar__item--active">\n            <span>Step1 Details</span>\n          </li>\n\n          <li class="stepsbar__item"><span>Step2 Details</span></li>\n          <li class="stepsbar__item"><span>Step3 Details</span></li>\n          <li class="stepsbar__item"><span>Step4 Details</span></li>\n          <li class="stepsbar__item"><span>Step5 Details</span></li>\n        </ul>\n      </div>\n        <div class="quiz-page__main">\n          <div class="quiz-page__content">\n            <div class="quiz-page__current-page">'.concat(quizData[e].step,'</div>\n            <h3 class="quiz-title quiz-page__title">\n            ').concat(quizData[e].title,"\n            </h3>\n            ").concat(quizData[e].content,'\n        </div>\n        <div class="quiz-page__img">\n          <img src="./img/').concat(quizData[e].img,'" alt="Acne cream" />\n        </div>\n    </div>\n  </div>\n');else{var t=document.querySelector(".quiz-page__main");t.innerHTML="",t.innerHTML='\n    <div class="quiz-page__content">\n    <div class="quiz-page__current-page">'.concat(quizData[e].step,'</div>\n    <h3 class="quiz-title quiz-page__title">\n    ').concat(quizData[e].title,"\n    </h3>\n    ").concat(quizData[e].content,'\n  </div>\n  <div class="quiz-page__img">\n    <img src="./img/').concat(quizData[e].img,'" alt="Acne cream" />\n  </div>\n    ')}steps=document.querySelectorAll(".stepsbar__item")};selectButton.addEventListener("click",(function(){return renderPage(0)}));var prodSwiper=new Swiper(".slider__container",{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".slider-preview__next",prevEl:".slider-preview__prev"}}),prodImages=document.querySelectorAll(".slider-preview__item");prodImages.forEach((function(e){e.addEventListener("click",(function(e){var t=+e.currentTarget.dataset.index;prodSwiper.slideTo(t)}))}));var currentStep=0;quizSection.addEventListener("click",(function(e){e.target.classList.contains("btn-next-step")&&(4===currentStep&&(steps[4].classList.remove("stepsbar__item--active"),steps[4].classList.add("stepsbar__item--done"),location.reload()),currentStep<steps.length-1&&(steps[currentStep].classList.remove("stepsbar__item--active"),steps[currentStep].classList.add("stepsbar__item--done"),steps[currentStep+1].classList.add("stepsbar__item--active"),currentStep++,renderPage(currentStep)))}));