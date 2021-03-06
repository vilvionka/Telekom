(() => {
    var grafCalc = document.querySelectorAll('.item_icon_speed_calc_inet');
    var grafCalc1 = document.querySelector('.icon_speed_calc1');
    var grafCalc2 = document.querySelector('.icon_speed_calc2');
    var grafCalc3 = document.querySelector('.icon_speed_calc3');
    var grafCalc4 = document.querySelector('.icon_speed_calc4');
    var grafCalcBox = document.querySelector('.flex_icon_speed_inet_calc');
    var lineGrafCalc1 = document.querySelector('.line_speed_calc_inet1');
    var lineGrafCalc2 = document.querySelector('.line_speed_calc_inet2');
    var lineGrafCalc3 = document.querySelector('.line_speed_calc_inet3');
    var valueGrafCalc = 100;
    var valueTwinPlay = 230;
    var valueStart = 0;
    var valueAmediateca = 0;
    var valueAntivirus = 0;
    var headlingGrafCalc = document.querySelector('.value_headling_calc_inet');
    var nameTariffHeadl = document.querySelector('.name_tariff_inet');
    var nameUdobniiCheck = document.querySelector('#squaredTwo_inet0');
    var calcTwinCheck = document.querySelector('#squaredTwo_inet1');
    var kinoBoxCheck = document.querySelector('.checkbox_kino_inet');
    var calcTwinCheckValue = document.querySelector('.price_calc_twinPlay_text_boxValue');
    var calcKinoStart = document.querySelector('#squaredTwo_inet3');
    var calcKinoAmediateca = document.querySelector('#squaredTwo_inet4');
    var calcAntivirus = document.querySelector('#squaredTwo_inet5');
    var calcRouter = document.querySelector('#squaredTwo_inet6');
    var calcRouterName = document.querySelector('.name_router');
    var calcRouterPrice = document.querySelector('.price_router');
    var calcRouterAccordion = document.querySelector('.accordion_calc');
    var calcRouterBoxInput = document.querySelectorAll('.input_check_inet_box_router_val input');
    var rightNameTariff = document.querySelector('.name_tariff_top_right_box span');
    var rightSpeedTariff = document.querySelector('.speed_tariff_top_right_box span b');
    var rightTV = document.querySelector('.tv_text_top_right_box span');
    var rightKino = document.querySelector('.kino_text_top_right_box');
    var rightAntivirus = document.querySelector('.antivirus_text_top_right_box');
    var rightRouterName = document.querySelector('.name_router_item_calc_right');
    var rightRouterPrice = document.querySelector('.price_router_item_calc_right');
    var totalNum = document.querySelector('.total_price_calc_inet_num');
    var benefitBox = document.querySelector('.flex_benefit_calc');
    var monthlyFeet = document.querySelector('.num_monthlyFeet_calc');
    var nominalFee = document.querySelector('.num_nominalFee_calc');
    var sumCostOfEquipment = document.querySelector('.cost_of_equipment')
    var benefitValue = document.querySelector('.benefit_button')

    calcAntivirus.addEventListener('change', initAntiFunc)
    kinoBoxCheck.addEventListener('change', kinoBoxCheckFunc);
    calcRouterAccordion.addEventListener('change', changeAccordionRouter);
    calcRouter.addEventListener('change', routerCheck);
    calcTwinCheck.addEventListener('change', initKino);
    nameUdobniiCheck.addEventListener('change', initCalcUdobnii);
    grafCalc1.addEventListener('click', animGraf1);
    grafCalc2.addEventListener('click', animGraf2);
    grafCalc3.addEventListener('click', animGraf3);
    grafCalc4.addEventListener('click', animGraf4);
    for (var i = 0; i < grafCalc.length; i++) {
        grafCalc[i].addEventListener('click', initCalc);
    };


    function sumNumFunc() {
        var valueTariff;
        var totalValueTwin;
        var sumRouterAtTime = 0;
        var sumRouterMonth = 0;
        if (calcRouter.checked) {
            sumRouterAtTime = calcRouterPrice.querySelector('.sumRouterAtTime').innerHTML;
            sumRouterMonth = calcRouterPrice.querySelector('.sumRouterMonth').innerHTML;
            if (sumRouterMonth == "") {
                sumRouterMonth = 0;
            }
            sumCostOfEquipment.innerHTML = sumRouterAtTime + ' ??????.' + '<br>' + '+ ' + sumRouterMonth + " ??????/??????.";
        } else {
            sumRouterAtTime = 0;
            sumRouterMonth = 0;
            sumCostOfEquipment.innerHTML = 0 + ' ??????.';

        }

        if (valueGrafCalc == 70) {
            valueTariff = document.querySelector('.price_invisible_block .price_packet70').innerHTML;
            benefitBox.style.display = "none";
        }
        if (valueGrafCalc == 100) {
            valueTariff = document.querySelector('.price_invisible_block .price_packet100').innerHTML;
            benefitBox.style.display = "none";
        }
        if (valueGrafCalc == 200) {
            valueTariff = document.querySelector('.price_invisible_block .price_packet200').innerHTML;
            benefitBox.style.display = "flex";
        }
        if (valueGrafCalc == 500) {
            valueTariff = document.querySelector('.price_invisible_block .price_packet500').innerHTML;
            benefitBox.style.display = "flex";
        }
        if (calcTwinCheck.checked) {
            if (valueTwinPlay == 0) {
                totalValueTwin = 0;
            } else {
                totalValueTwin = 230;
            }

        } else {
            totalValueTwin = 0;
        }

        if (nameUdobniiCheck.checked) {
            valueTariff = document.querySelector('.price_invisible_block .price_packetUdobnii').innerHTML;
        }

        var totalComputed = Number(valueTariff) + totalValueTwin + valueStart + valueAmediateca + valueAntivirus + Number(sumRouterAtTime);
        totalNum.innerHTML = totalComputed;

        var percent = Math.ceil((230 / (totalComputed + 230)) * 100);
        benefitValue.innerHTML = '???????????? ???? ' + percent + '%';


        if (nameUdobniiCheck.checked) {
            monthlyFeet.innerHTML = totalValueTwin + valueStart + valueAmediateca + valueAntivirus + Number(sumRouterMonth) + ' ??????./??????.';
            nominalFee.innerHTML = Number(valueTariff) + ' ??????./??????.';
        } else {
            monthlyFeet.innerHTML = Number(valueTariff) + totalValueTwin + valueStart + valueAmediateca + valueAntivirus + Number(sumRouterMonth) + ' ??????./??????.';
            nominalFee.innerHTML = Number(valueTariff) + ' ??????./??????.';
        }


    }


    function animGraf1() {
        this.classList.add('active_graffCalc');
        grafCalc2.classList.remove('active_graffCalc');
        grafCalc3.classList.remove('active_graffCalc')
        grafCalc4.classList.remove('active_graffCalc')
        grafCalc2.classList.remove('passive_graffCalc');
        grafCalc3.classList.remove('passive_graffCalc');
        grafCalc4.classList.remove('passive_graffCalc');
        grafCalcBox.classList.remove('flex_icon_speed_inet_calc_active4');
        grafCalcBox.classList.remove('flex_icon_speed_inet_calc_active3');
        grafCalcBox.classList.remove('flex_icon_speed_inet_calc_active2');
        lineGrafCalc3.classList.remove('line_speed_calc_inet_active');
        lineGrafCalc2.classList.remove('line_speed_calc_inet_active');
        lineGrafCalc1.classList.remove('line_speed_calc_inet_active');
        valueGrafCalc = 70;
        rightSpeedTariff.innerHTML = valueGrafCalc;
        sumNumFunc()
    }

    function animGraf2() {
        this.classList.remove('passive_graffCalc');
        this.classList.add('active_graffCalc');
        grafCalc1.classList.remove('active_graffCalc');
        grafCalc3.classList.remove('active_graffCalc');
        grafCalc4.classList.remove('active_graffCalc');
        grafCalc3.classList.remove('passive_graffCalc');
        grafCalc4.classList.remove('passive_graffCalc');
        grafCalc1.classList.add('passive_graffCalc');
        grafCalcBox.classList.remove('flex_icon_speed_inet_calc_active4');
        grafCalcBox.classList.remove('flex_icon_speed_inet_calc_active3');
        grafCalcBox.classList.add('flex_icon_speed_inet_calc_active2');
        lineGrafCalc3.classList.remove('line_speed_calc_inet_active');
        lineGrafCalc2.classList.remove('line_speed_calc_inet_active');
        lineGrafCalc1.classList.add('line_speed_calc_inet_active');
        valueGrafCalc = 100;
        rightSpeedTariff.innerHTML = valueGrafCalc;
        sumNumFunc()
    }

    function animGraf3() {
        this.classList.remove('passive_graffCalc');
        this.classList.add('active_graffCalc');
        grafCalc1.classList.remove('active_graffCalc');
        grafCalc2.classList.remove('active_graffCalc');
        grafCalc4.classList.remove('active_graffCalc');
        grafCalc2.classList.add('passive_graffCalc');
        grafCalcBox.classList.remove('flex_icon_speed_inet_calc_active4');
        grafCalcBox.classList.add('flex_icon_speed_inet_calc_active3');
        lineGrafCalc3.classList.remove('line_speed_calc_inet_active');
        lineGrafCalc1.classList.add('line_speed_calc_inet_active');
        lineGrafCalc2.classList.add('line_speed_calc_inet_active');
        valueGrafCalc = 200;
        rightSpeedTariff.innerHTML = valueGrafCalc;
        sumNumFunc()
    }

    function animGraf4() {
        this.classList.add('active_graffCalc');
        grafCalc1.classList.remove('active_graffCalc');
        grafCalc2.classList.remove('active_graffCalc');
        grafCalc3.classList.remove('active_graffCalc');
        grafCalc2.classList.add('passive_graffCalc');
        grafCalc3.classList.add('passive_graffCalc');
        grafCalcBox.classList.add('flex_icon_speed_inet_calc_active4');
        lineGrafCalc1.classList.add('line_speed_calc_inet_active');
        lineGrafCalc2.classList.add('line_speed_calc_inet_active');
        lineGrafCalc3.classList.add('line_speed_calc_inet_active');
        valueGrafCalc = 500;
        rightSpeedTariff.innerHTML = valueGrafCalc;
        sumNumFunc()
    }

    function initCalc() {
        var speedTariffHeadl = document.querySelector('.valueSpeedName');
        speedTariffHeadl.innerHTML = valueGrafCalc + ' ????/??';

        var nameTariffInet;
        var nameTariffUdobnii = document.querySelector('.input_check_inet_box_udobnii');


        if (valueGrafCalc == 70) {
            nameTariffInet = '(?????????? ????????????????????????????)';
            rightNameTariff.innerHTML = '(?????????? ????????????????????????????)';
            nameTariffUdobnii.style.display = 'none';
            nameUdobniiCheck.checked = false;
            calcTwinCheck.checked = false;
            valueTwinPlay = 230;
            calcTwinCheckValue.innerHTML = '+ ' + valueTwinPlay + ' p.';
            initKino()
        }
        if (valueGrafCalc == 100) {
            nameTariffInet = '(?????????? ????????????????????????????)';
            rightNameTariff.innerHTML = '(?????????? ????????????????????????????)';
            nameTariffUdobnii.style.display = 'block';
            calcTwinCheck.checked = false;
            valueTwinPlay = 230;
            calcTwinCheckValue.innerHTML = '+ ' + valueTwinPlay + ' p.';
            initKino()
        }
        if (valueGrafCalc == 200) {
            nameTariffInet = '(?????????? ????????????????????????????)';
            rightNameTariff.innerHTML = '(?????????? ????????????????????????????)';
            nameTariffUdobnii.style.display = 'none';
            nameUdobniiCheck.checked = false;
            calcTwinCheck.checked = true;
            valueTwinPlay = 0;
            calcTwinCheckValue.innerHTML = '+ ' + valueTwinPlay + ' p.';
            initKino()
        }
        if (valueGrafCalc == 500) {
            nameTariffInet = '(?????????? ????????????????????????????????)';
            rightNameTariff.innerHTML = '(?????????? ????????????????????????????????)';
            nameTariffUdobnii.style.display = 'none';
            nameUdobniiCheck.checked = false;
            calcTwinCheck.checked = true;
            valueTwinPlay = 0;
            calcTwinCheckValue.innerHTML = '+ ' + valueTwinPlay + ' p.';
            initKino()
        }


        nameTariffHeadl.innerHTML = nameTariffInet;
    }

    function initCalcUdobnii() {
        if (nameUdobniiCheck.checked) {
            nameTariffInet = '(?????????? ????????????????????)';
            rightNameTariff.innerHTML = '(?????????? ????????????????????)';
            nameTariffHeadl.innerHTML = nameTariffInet;
        } else {
            nameTariffInet = '(?????????? ????????????????????????????)';
            nameTariffHeadl.innerHTML = nameTariffInet;
        }
        sumNumFunc();
    }

    function initAntiFunc() {
        if (calcAntivirus.checked) {
            rightAntivirus.style.display = 'block';
            valueAntivirus = 149;
        } else {
            rightAntivirus.style.display = 'none';
            valueAntivirus = 0;
        }
        sumNumFunc();
    }

    function initKino() {
        if (calcTwinCheck.checked) {
            kinoBoxCheck.style.display = 'block';
            rightTV.style.display = 'block';
            sumNumFunc();

        } else {
            kinoBoxCheck.style.display = 'none';
            calcKinoStart.checked = false;
            calcKinoAmediateca.checked = false;
            rightTV.style.display = 'none';
            rightKino.innerHTML = '';
            valueStart = 0;
            valueAmediateca = 0;
            sumNumFunc();

        }
    }


    function routerCheck() {
        if (calcRouter.checked) {
            calcRouterName.innerHTML = "Wi-Fi ???????????? SNR-CPE-W4N";
            calcRouterPrice.innerHTML = '<span>+ <b class="sumRouterAtTime">1700</b> ??????.</span> ?????? ???????????????????????????? ????????????<b class="sumRouterMonth"></b>';
            rightRouterName.innerHTML = 'Wi-Fi ???????????? SNR-CPE-W4N'
            rightRouterPrice.innerHTML = '(1700 ??????. ?????? ???????????????????????????? ????????????)'
        } else {
            calcRouterName.innerHTML = "????????????";
            calcRouterPrice.innerHTML = '';
            rightRouterName.innerHTML = '';
            rightRouterPrice.innerHTML = '';
            for (var i = 0; i < calcRouterBoxInput.length; i++) {
                calcRouterBoxInput[i].checked = false;
            }
        }
        sumNumFunc();

    }

    function changeAccordionRouter(e) {
        var nameR = e.target.closest('.accordion-body_calc_inet').previousElementSibling.querySelector('.name_router_header').innerHTML;
        calcRouter.checked = true;
        calcRouterName.innerHTML = nameR;
        rightRouterName.innerHTML = nameR;
        var priceR = e.target.closest('.input_check_inet_box_router_val').querySelector('.calc_router_label_text').innerHTML;
        calcRouterPrice.innerHTML = priceR;
        rightRouterPrice.innerHTML = priceR;
        sumNumFunc();
    }

    function kinoBoxCheckFunc(e) {
        var elemK = e.target.closest('.input_check_inet_box').querySelector('.text_calc_twinPlay_text_box').innerHTML;
        if (e.target.checked) {
            var elemP = document.createElement("p");
            var elemText = document.createTextNode(elemK);
            elemP.appendChild(elemText)
            rightKino.appendChild(elemP);
            if (elemK == '???????????? ?????????????????? Start') {
                valueStart = 299;
            }
            if (elemK == '???????????? ?????????????????? Amediateca') {
                valueAmediateca = 299;
            }
            sumNumFunc();

        } else {
            var kinoRight = rightKino.querySelectorAll('p');
            for (var i = 0; i < kinoRight.length; i++) {
                var valueElem = kinoRight[i].innerHTML;
                if (valueElem == elemK) {
                    kinoRight[i].remove();
                }
            }

            if (elemK == '???????????? ?????????????????? Start') {
                valueStart = 0;
            }
            if (elemK == '???????????? ?????????????????? Amediateca') {
                valueAmediateca = 0;
            }
            sumNumFunc();
        }

    }






})();


(() => {

    var close = document.querySelector('.close_popUp');
    var popUp = document.querySelector('.packet_box_popUp');
    var submit = document.querySelector('.submit_calc_button');

    
    var inputTotalNum = document.querySelector('.total_price_calc_inet_num_popUp');
    var inputinSpeed = document.querySelector('.speed_internet_popUp');
    var inputTw = document.querySelector('.tw_inet_popUp');
    var inputStart = document.querySelector('.start_popUp');
    var inputAmedia = document.querySelector('.amedia_popUp');
    var inputVirus = document.querySelector('.virus_popUp');
    var inputRouter = document.querySelector('.router_popUp');
    var tariff = document.querySelector('.cost_option_popUp');
    
    

    close.addEventListener('click', function () {
        popUp.classList.remove('active');
    })


    submit.addEventListener('click', activePopUp)

    function activePopUp() {
        var totalNum = document.querySelector('.total_price_calc_inet_num').innerHTML; // ???????????????? ???????? value
        var rightSpeedTariff = document.querySelector('.speed_tariff_top_right_box span b').innerHTML; // ???????????????? ?????????????????? ??????????
        var rightTV = document.querySelector('.tv_text_top_right_box span'); // ?????????????????????? ???????? ????????
        var calcKinoStart = document.querySelector('#squaredTwo_inet3');
        var calcKinoAmediateca = document.querySelector('#squaredTwo_inet4');
        var rightAntivirus = document.querySelector('.antivirus_text_top_right_box');
        
        
        // ???????????????? ??????????????????
        inputinSpeed.value = '???????????????? ??????????????????:' + ' ' + rightSpeedTariff + ' '  + '????/??';
        
        
        // ???????? ????????
        if(rightTV.style.display == 'block'){
           var rightTVValue = rightTV.innerHTML;
           inputTw.style.display = 'block';
            inputTw.value = rightTVValue;
        }else{
            inputTw.style.display = 'none';
        }
        
        // ?????????????????? ??????????
        if(calcKinoStart.checked == true){
            inputStart.style.display = 'block';
            inputStart.value = '???????????? ?????????????????? Start';
        }
        else{
            inputStart.style.display = 'none';
        }
        
        // ?????????????????? ????????????
        if(calcKinoAmediateca.checked == true){
            inputAmedia.style.display = 'block';
            inputAmedia.value = '???????????? ?????????????????? Amediateca';
        }
        else{
            inputAmedia.style.display = 'none';
        }
      
        // ??????????????????
        if(rightAntivirus.style.display == 'block'){
           inputVirus.style.display = 'block';
            inputVirus.value = "?????????????????? ????????????????????????";
        }else{
            inputVirus.style.display = 'none';
        }
        // ????????????
        
        var rightRouterName = document.querySelector('.name_router_item_calc_right');
        var rightRouterPrice = document.querySelector('.price_router_item_calc_right');
        
        if(rightRouterName.innerHTML !== ''){
            inputRouter.style.display = 'block';
            var routerName = rightRouterName.innerHTML;
            var routerPrice = rightRouterPrice.innerHTML;
            inputRouter.value = routerName + " " + routerPrice;
        }
        else{
            inputRouter.style.display = 'none';
        }
        
        // ?????????????????? ???????????? ?????? ??????????
        var nominalFee = document.querySelector('.num_nominalFee_calc').innerHTML;
        tariff.value = nominalFee;
        
        
        popUp.classList.add('active');
        inputTotalNum.value = totalNum; 
        
    }

})();