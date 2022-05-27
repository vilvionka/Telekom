/*------ faces init start-----------*/
(() => {
    var faces = document.querySelectorAll('.item_faces');
    for (var i = 0; i < faces.length; i++) {
        faces[i].addEventListener('click', facesFunc);
    }

    function facesFunc() {
        for (var i = 0; i < faces.length; i++) {
            faces[i].classList.remove('item_faces_active');
        }
        this.classList.add('item_faces_active');
    }

})();


/*------ menu init start-----------*/
(() => {
    var menuGamb = document.querySelector('.gamburg_menu');
    var menuCont = document.querySelector('.menu_gamburg');
    menuGamb.addEventListener('click', menuFunc);

    function menuFunc() {
        menuCont.classList.toggle('menu_gamburg_active')
    }

})();

/*------ geolo and cookie init start-----------*/
(() => {
    var geolo = document.querySelector('.pop_up_geolo');
    var geoloBox = document.querySelector('.geolo_box');
    var cookieBox = document.querySelector('.cookie_box');
    var geoloLeft = geoloBox.offsetLeft;
    var geoloWidth = geoloBox.offsetWidth;
    var windowWidth = window.innerWidth;

    window.onload = function () {
        window.setTimeout(function () {
            geolo.classList.add('pop_up_geolo_active');
            geolo.style.left = (geoloLeft - 125) + geoloWidth / 2 + 'px';
            var mediaQuery = window.matchMedia('(max-width: 660px)');
            if (mediaQuery.matches) {
                geolo.style.left = (windowWidth / 2 - 125) + 'px';
            }
            var mediaQuery2 = window.matchMedia('(max-width: 420px)');
            if (mediaQuery2.matches) {
                geolo.style.left = (windowWidth / 2 - 100) + 'px';
            }
        }, 1500);

        window.setTimeout(function () {
            cookieBox.classList.add('cookie_box_active');

        }, 2500);
    }



    var buttonCookie = document.querySelectorAll('.button_cookie');
    for (var i = 0; i < buttonCookie.length; i++) {
        buttonCookie[i].addEventListener('click', buttonCookieFunc);
    }

    function buttonCookieFunc() {
        cookieBox.classList.remove('cookie_box_active');
    }


    var buttonGeo = document.querySelector('.button_geolo');
    buttonGeo.addEventListener('click', buttonGeoFunc);

    function buttonGeoFunc() {
        geolo.classList.remove('pop_up_geolo_active');
    }

})();
/*------ choose_city init start-----------*/

(() => {

    var chooseCity = document.querySelector('.choose_city');
    var choosePop = document.querySelector('.choose_city_pop_up');
    var closeChoose = document.querySelector('.close_choose');
    var geoloBox = document.querySelector('.geolo_box');
    var geolo = document.querySelector('.pop_up_geolo');
    var popUpCity = document.querySelector('.city_persona span') || null;

    chooseCity.addEventListener('click', chooseCityFunc);
    closeChoose.addEventListener('click', closeChooseFunc);
    geoloBox.addEventListener('click', chooseCityFunc);
    if (popUpCity !== null) {
        popUpCity.addEventListener('click', chooseCityFunc)
    }

    function chooseCityFunc() {
        choosePop.classList.add('choose_city_pop_up_active')
        geolo.classList.remove('pop_up_geolo_active');
    }

    function closeChooseFunc() {
        choosePop.classList.remove('choose_city_pop_up_active')
    }

})();

/*------ fixed_menu init start-----------*/


(() => {

    window.addEventListener('scroll', function () {
        let windowHeight = window.innerHeight;
        let scrollSize = window.pageYOffset;

        if (scrollSize + windowHeight / 3 > windowHeight) {
            var nav = document.querySelector('.nav_box');
            nav.classList.add('fixed');
        }
        if (scrollSize + windowHeight / 2 < windowHeight) {
            var nav = document.querySelector('.nav_box');
            nav.classList.remove('fixed');
        }
    });


})();







/*------ POP-UP init start-----------*/
(() => {

    var buttonPopUp = document.querySelectorAll('.button_pop_up_START');
    var popUp = document.querySelector('.connect_services_box');
    var closePopUp = document.querySelector('.close_services_box') || null;

    for (var i = 0; i < buttonPopUp.length; i++) {
        buttonPopUp[i].addEventListener('click', function () {
            popUp.classList.add('active');
        })
    }
    if (closePopUp !== null) {
        closePopUp.addEventListener('click', function () {
            popUp.classList.remove('active');
        })
    }

})();


/*------ POP-UP init start-----------*/

(() => {
    var closeAdd = document.querySelector('.close_pop_up_add') || null;
    var popUpAdd = document.querySelector('.pop_up_add')|| null;
    
    if(closeAdd !== null){
        closeAdd.addEventListener('click', function(){
            popUpAdd.style.display = 'none';
        })
    }

})();