(() => {
    // табуляция  выбора калькулятора
    var elemItem = document.querySelectorAll(".item_tabe_choise_calculator");
    var elemData;
    var elemDataN = Number(elemData)
    var elemCalc = document.querySelectorAll('.form_calc_inet');

    for (var i = 0; i < elemItem.length; i++) {
        elemItem[i].addEventListener('click', function () {
            for (var i = 0; i < elemItem.length; i++) {
                elemItem[i].classList.remove('item_tabe_choise_calculator_active')
                this.classList.add('item_tabe_choise_calculator_active');
                elemData = this.getAttribute('data-number');
            }
            for (var j = 0; j < elemCalc.length; j++) {
                elemCalc[j].classList.add('noactive');
                elemCalc[elemData].classList.remove('noactive');
            }
        })
    }

})();

(() => {
    //  калькулятор пакет----------------
    //переменные пакета телевединия

    var tvKabel = document.querySelector('#squaredTwo_inet121') || null;
    var tvDigital = document.querySelector('#squaredTwo_inet122') || null;
    var tvBox = document.querySelector('#squaredTwo_inet123')
    var tvBoxContayner = document.querySelector('.tvBox_contayner');
    var priceTvBox = document.querySelector('.price_tvBox');
    var nameTvBox = document.querySelector('.name_tvBox');
    var changeTvBox = document.querySelector('.box_event_js_tvBox');
    var changeTvItem = document.querySelectorAll('.input_check_inet_box_tvBox input');
    var rightDigitalTv = document.querySelector('.tv_text_top_right_box_digitalTv');
    var rightCableTv = document.querySelector('.tv_text_top_right_box_cableTv');
    var rightTvBox = document.querySelector('.tvBox_right_text_calc');
    var rightTvBoxName = document.querySelector('.tvBox_right_text_calc_name');
    var rightTvBoxPrice = document.querySelector('.tvBox_right_text_calc_price');

    changeTvBox.addEventListener('change', tvBoxChange);

    if (tvDigital !== null) {
        tvDigital.addEventListener('change', function () {
            if (this.checked) {
                tvBoxContayner.classList.add('active');
                rightCableTv.style.display = 'none';
                rightDigitalTv.style.display = 'block';
            }
        })
    }

    if (tvKabel !== null) {
        tvKabel.addEventListener('change', function () {
            if (this.checked) {
                tvBoxContayner.classList.remove('active');
                tvBox.checked = false;
                nameTvBox.innerHTML = 'ТВ-Приставка';
                priceTvBox.innerHTML = '';
                rightCableTv.style.display = 'block';
                rightDigitalTv.style.display = 'none';
            }
        })
    }

    tvBox.addEventListener('change', function () {
        if (this.checked) {
            nameTvBox.innerHTML = 'ТВ-Приставка HD 8911';
            priceTvBox.innerHTML = '<span>+<b class="sumTvAtTime"></b><b class="sumTvMonth">70</b> руб./мес. аренда</span>';
            rightTvBox.style.display = 'block';
            rightTvBoxName.innerHTML = 'ТВ-Приставка HD 8911';
            rightTvBoxPrice.innerHTML = '+ 70 руб./мес. аренда'

        } else {
            nameTvBox.innerHTML = 'ТВ-Приставка';
            priceTvBox.innerHTML = '';
            rightTvBox.style.display = 'none';
            rightTvBoxName.innerHTML = '';
            rightTvBoxPrice.innerHTML = ''
            for (var i = 0; i < changeTvItem.length; i++) {
                changeTvItem[i].checked = false;
            }
        }
        sumNumFunc();
    })

    function tvBoxChange(e) {
        var elem = e.target.closest('.text_TvBox_choise').querySelector('.headling_text_TvBox_choise').innerHTML;
        tvBox.checked = true;
        nameTvBox.innerHTML = elem;
        var elemPrice = e.target.closest('.input_check_inet_box_tvBox').querySelector('.calc_router_label_text').innerHTML;
        priceTvBox.innerHTML = elemPrice;
        rightTvBox.style.display = 'block';
        rightTvBoxName.innerHTML = elem;
        rightTvBoxPrice.innerHTML = elemPrice;
        sumNumFunc();
    }



    //переменные интернета  

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
        var sumTvAtTime = 0;
        var sumTvMonth = 0;
        if (tvBox.checked) {
            sumTvAtTime = priceTvBox.querySelector('.sumTvAtTime').innerHTML;
            sumTvMonth = priceTvBox.querySelector('.sumTvMonth').innerHTML;
            if (sumTvAtTime == "") {
                sumTvAtTime = 0;
            }
            if (sumTvMonth == "") {
                sumTvMonth = 0;
            }
            sumCostOfEquipment.innerHTML = (Number(sumTvAtTime) + Number(sumRouterAtTime)) + ' руб.' + '<br>' + '+ ' + (Number(sumTvMonth) + Number(sumRouterMonth)) + " руб/мес.";
        } else {
            sumTvMonth = 0;
            sumTvAtTime = 0;
            sumCostOfEquipment.innerHTML = sumRouterAtTime + ' руб.' + '<br>' + '+ ' + sumRouterMonth + " руб/мес.";

        }

        if (calcRouter.checked) {
            sumRouterAtTime = calcRouterPrice.querySelector('.sumRouterAtTime').innerHTML;
            sumRouterMonth = calcRouterPrice.querySelector('.sumRouterMonth').innerHTML;
            if (sumRouterMonth == "") {
                sumRouterMonth = 0;
            }
            if (sumRouterAtTime == "") {
                sumRouterAtTime = 0;
            }
            sumCostOfEquipment.innerHTML = (Number(sumTvAtTime) + Number(sumRouterAtTime)) + ' руб.' + '<br>' + '+ ' + (Number(sumTvMonth) + Number(sumRouterMonth)) + " руб/мес.";
        } else {
            sumRouterAtTime = 0;
            sumRouterMonth = 0;
            sumCostOfEquipment.innerHTML = sumTvAtTime + ' руб.' + '<br>' + '+ ' + sumTvMonth + " руб/мес.";

        }


        if (sumRouterAtTime == 0 && sumRouterMonth == 0 && sumTvMonth == 0 && sumTvAtTime == 0) {
            sumCostOfEquipment.innerHTML = '0 руб.'
        }



        if (valueGrafCalc == 70) {
            valueTariff = document.querySelector('.price_invisible_block_packet .price_packet70').innerHTML;
            benefitBox.style.display = "none";
        }
        if (valueGrafCalc == 100) {
            valueTariff = document.querySelector('.price_invisible_block_packet .price_packet100').innerHTML;
            benefitBox.style.display = "none";
        }
        if (valueGrafCalc == 200) {
            valueTariff = document.querySelector('.price_invisible_block_packet .price_packet200').innerHTML;
            benefitBox.style.display = "flex";
        }
        if (valueGrafCalc == 500) {
            valueTariff = document.querySelector('.price_invisible_block_packet .price_packet500').innerHTML;
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
            valueTariff = document.querySelector('.price_invisible_block_packet .price_packetUdobnii').innerHTML;
        }

        var totalComputed = Number(valueTariff) + totalValueTwin + valueStart + valueAmediateca + valueAntivirus + Number(sumRouterAtTime) + Number(sumTvAtTime);
        totalNum.innerHTML = totalComputed;

        var percent = Math.ceil((230 / (totalComputed + 230)) * 100);
        benefitValue.innerHTML = 'Выгода до ' + percent + '%';


        if (nameUdobniiCheck.checked) {
            monthlyFeet.innerHTML = totalValueTwin + valueStart + valueAmediateca + valueAntivirus + Number(sumRouterMonth) + Number(sumTvMonth) + ' руб./мес.';
            nominalFee.innerHTML = Number(valueTariff) + ' руб./год.';
        } else {
            monthlyFeet.innerHTML = Number(valueTariff) + totalValueTwin + valueStart + valueAmediateca + valueAntivirus + Number(sumRouterMonth) + Number(sumTvMonth) + ' руб./мес.';
            nominalFee.innerHTML = Number(valueTariff) + ' руб./мес.';
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
        speedTariffHeadl.innerHTML = valueGrafCalc + ' Мб/с';

        var nameTariffInet;
        var nameTariffUdobnii = document.querySelector('.input_check_inet_box_udobnii');


        if (valueGrafCalc == 70) {
            nameTariffInet = '(тариф “Минимальный”)';
            rightNameTariff.innerHTML = '(тариф “Минимальный”)';
            nameTariffUdobnii.style.display = 'none';
            nameUdobniiCheck.checked = false;
            calcTwinCheck.checked = false;
            valueTwinPlay = 230;
            calcTwinCheckValue.innerHTML = '+ ' + valueTwinPlay + ' p.';
            initKino()
        }
        if (valueGrafCalc == 100) {
            nameTariffInet = '(тариф “Оптимальный”)';
            rightNameTariff.innerHTML = '(тариф “Оптимальный”)';
            nameTariffUdobnii.style.display = 'block';
            calcTwinCheck.checked = false;
            valueTwinPlay = 230;
            calcTwinCheckValue.innerHTML = '+ ' + valueTwinPlay + ' p.';
            initKino()
        }
        if (valueGrafCalc == 200) {
            nameTariffInet = '(тариф “Специальный”)';
            rightNameTariff.innerHTML = '(тариф “Специальный”)';
            nameTariffUdobnii.style.display = 'none';
            nameUdobniiCheck.checked = false;
            calcTwinCheck.checked = true;
            valueTwinPlay = 0;
            calcTwinCheckValue.innerHTML = '+ ' + valueTwinPlay + ' p.';
            initKino()
        }
        if (valueGrafCalc == 500) {
            nameTariffInet = '(тариф “Экстремальный”)';
            rightNameTariff.innerHTML = '(тариф “Экстремальный”)';
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
            nameTariffInet = '(тариф “Удобный”)';
            rightNameTariff.innerHTML = '(тариф “Удобный”)';
            nameTariffHeadl.innerHTML = nameTariffInet;
        } else {
            nameTariffInet = '(тариф “Оптимальный”)';
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
            calcRouterName.innerHTML = "Wi-Fi роутер SNR-CPE-W4N";
            calcRouterPrice.innerHTML = '<span>+ <b class="sumRouterAtTime">1700</b> руб.</span> при единовременной оплате<b class="sumRouterMonth"></b>';
            rightRouterName.innerHTML = 'Wi-Fi роутер SNR-CPE-W4N'
            rightRouterPrice.innerHTML = '(1700 руб. при единовременной оплате)'
        } else {
            calcRouterName.innerHTML = "Роутер";
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
            if (elemK == 'Онлайн кинотеатр Start') {
                valueStart = 299;
            }
            if (elemK == 'Онлайн кинотеатр Amediateca') {
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

            if (elemK == 'Онлайн кинотеатр Start') {
                valueStart = 0;
            }
            if (elemK == 'Онлайн кинотеатр Amediateca') {
                valueAmediateca = 0;
            }
            sumNumFunc();
        }

    }

})();



(() => {

    //  калькулятор тв----------------
    //переменные пакета телевединия

    var tvKabel = document.querySelector('#squaredTwo_inet221') || null;
    var tvDigital = document.querySelector('#squaredTwo_inet222')
    var tvBox = document.querySelector('#squaredTwo_inet223')
    var tvBoxContayner = document.querySelector('.tvBox_contayner-TV');
    var priceTvBox = document.querySelector('.price_tvBox-TV');
    var nameTvBox = document.querySelector('.name_tvBox-TV');
    var changeTvBox = document.querySelector('.box_event_js_tvBox-TV');
    var changeTvItem = document.querySelectorAll('.input_check_inet_box_tvBox-TV input');
    var rightDigitalTv = document.querySelector('.tv_text_top_right_box_digitalTv-TV');
    var rightCableTv = document.querySelector('.tv_text_top_right_box_cableTv-TV');
    var rightTvBox = document.querySelector('.tvBox_right_text_calc-TV');
    var rightTvBoxName = document.querySelector('.tvBox_right_text_calc_name-TV');
    var rightTvBoxPrice = document.querySelector('.tvBox_right_text_calc_price-TV');


    changeTvBox.addEventListener('change', tvBoxChangeTV);

    tvDigital.addEventListener('change', function () {
        if (this.checked) {
            tvBoxContayner.classList.add('active');
            rightCableTv.style.display = 'none';
            rightDigitalTv.style.display = 'block';
        }
    })

    if (tvKabel !== null) {
        tvKabel.addEventListener('change', function () {
            if (this.checked) {
                tvBoxContayner.classList.remove('active');
                tvBox.checked = false;
                nameTvBox.innerHTML = 'ТВ-Приставка';
                priceTvBox.innerHTML = '';
                rightCableTv.style.display = 'block';
                rightDigitalTv.style.display = 'none';
            }
        })
    }

    tvBox.addEventListener('change', function () {
        if (this.checked) {
            nameTvBox.innerHTML = 'ТВ-Приставка HD 8911';
            priceTvBox.innerHTML = '<span>+<b class="sumTvAtTime-TV"></b><b class="sumTvMonth-TV">70</b> руб./мес. аренда</span>';
            rightTvBox.style.display = 'block';
            rightTvBoxName.innerHTML = 'ТВ-Приставка HD 8911';
            rightTvBoxPrice.innerHTML = '+ 70 руб./мес. аренда'

        } else {
            nameTvBox.innerHTML = 'ТВ-Приставка';
            priceTvBox.innerHTML = '';
            rightTvBox.style.display = 'none';
            rightTvBoxName.innerHTML = '';
            rightTvBoxPrice.innerHTML = ''
            for (var i = 0; i < changeTvItem.length; i++) {
                changeTvItem[i].checked = false;
            }
        }
        sumNumFunc_TV();
    })

    function tvBoxChangeTV(e) {
        var elem = e.target.closest('.text_TvBox_choise').querySelector('.headling_text_TvBox_choise').innerHTML;
        tvBox.checked = true;
        nameTvBox.innerHTML = elem;
        var elemPrice = e.target.closest('.input_check_inet_box_tvBox-TV').querySelector('.calc_router_label_text').innerHTML;
        priceTvBox.innerHTML = elemPrice;
        rightTvBox.style.display = 'block';
        rightTvBoxName.innerHTML = elem;
        rightTvBoxPrice.innerHTML = elemPrice;
        sumNumFunc_TV();
    }


    var totalNum = document.querySelector('.total_price_calc_inet_num-TV');
    var monthlyFeet = document.querySelector('.num_monthlyFeet_calc-TV');
    var nominalFee = document.querySelector('.num_nominalFee_calc-TV');
    var sumCostOfEquipment_TV = document.querySelector('.cost_of_equipment-TV')


    function sumNumFunc_TV() {
        var valueTariff = document.querySelector('.price_invisible_block_tv .price_packet').innerHTML;
        var sumTvAtTime_TV = 0;
        var sumTvMonth_TV = 0;
        if (tvBox.checked) {
            sumTvAtTime_TV = priceTvBox.querySelector('.sumTvAtTime-TV').innerHTML;
            sumTvMonth_TV = priceTvBox.querySelector('.sumTvMonth-TV').innerHTML;
            if (sumTvAtTime_TV == "") {
                sumTvAtTime_TV = 0;
            }
            if (sumTvMonth_TV == "") {
                sumTvMonth_TV = 0;
            }
            sumCostOfEquipment_TV.innerHTML = sumTvAtTime_TV + ' руб.' + '<br>' + '+ ' + sumTvMonth_TV + " руб/мес.";
        } else {
            sumTvMonth_TV = 0;
            sumTvAtTime_TV = 0;
            sumCostOfEquipment_TV.innerHTML = '0 руб.';

        }

        var totalComputed = Number(valueTariff) + Number(sumTvAtTime_TV);

        totalNum.innerHTML = totalComputed;
        monthlyFeet.innerHTML = Number(valueTariff) + Number(sumTvMonth_TV) + ' руб./мес.';
        nominalFee.innerHTML = Number(valueTariff) + ' руб./мес.';

    }




})();

(() => {
    var grafCalc = document.querySelectorAll('.item_icon_speed_calc_inet-INET');
    var grafCalc1 = document.querySelector('.icon_speed_calc1-INET');
    var grafCalc2 = document.querySelector('.icon_speed_calc2-INET');
    var grafCalc3 = document.querySelector('.icon_speed_calc3-INET');
    var grafCalc4 = document.querySelector('.icon_speed_calc4-INET');
    var grafCalcBox = document.querySelector('.flex_icon_speed_inet_calc-INET');
    var lineGrafCalc1 = document.querySelector('.line_speed_calc_inet1-INET');
    var lineGrafCalc2 = document.querySelector('.line_speed_calc_inet2-INET');
    var lineGrafCalc3 = document.querySelector('.line_speed_calc_inet3-INET');
    var valueGrafCalc = 100;
    var valueTwinPlay = 230;
    var valueStart = 0;
    var valueAmediateca = 0;
    var valueAntivirus = 0;
    var headlingGrafCalc = document.querySelector('.value_headling_calc_inet-INET');
    var nameTariffHeadl = document.querySelector('.name_tariff_inet-INET');
    var nameUdobniiCheck = document.querySelector('#squaredTwo_inet30');
    var calcTwinCheck = document.querySelector('#squaredTwo_inet31');
    var kinoBoxCheck = document.querySelector('.checkbox_kino_inet-INET');
    var calcTwinCheckValue = document.querySelector('.price_calc_twinPlay_text_boxValue-INET');
    var calcKinoStart = document.querySelector('#squaredTwo_inet33');
    var calcKinoAmediateca = document.querySelector('#squaredTwo_inet34');
    var calcAntivirus = document.querySelector('#squaredTwo_inet35');
    var calcRouter = document.querySelector('#squaredTwo_inet36');
    var calcRouterName = document.querySelector('.name_router-INET');
    var calcRouterPrice = document.querySelector('.price_router-INET');
    var calcRouterAccordion = document.querySelector('.accordion_calc-INET');
    var calcRouterBoxInput = document.querySelectorAll('.input_check_inet_box_router_val-INET input');
    var rightNameTariff = document.querySelector('.name_tariff_top_right_box-INET span');
    var rightSpeedTariff = document.querySelector('.speed_tariff_top_right_box-INET span b');
    var rightTV = document.querySelector('.tv_text_top_right_box-INET span');
    var rightKino = document.querySelector('.kino_text_top_right_box-INET');
    var rightAntivirus = document.querySelector('.antivirus_text_top_right_box-INET');
    var rightRouterName = document.querySelector('.name_router_item_calc_right-INET');
    var rightRouterPrice = document.querySelector('.price_router_item_calc_right-INET');
    var totalNum = document.querySelector('.total_price_calc_inet_num-INET');
    var benefitBox = document.querySelector('.flex_benefit_calc-INET');
    var monthlyFeet = document.querySelector('.num_monthlyFeet_calc-INET');
    var nominalFee = document.querySelector('.num_nominalFee_calc-INET');
    var sumCostOfEquipment = document.querySelector('.cost_of_equipment-INET')
    var benefitValue = document.querySelector('.benefit_button-INET')

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
            sumCostOfEquipment.innerHTML = sumRouterAtTime + ' руб.' + '<br>' + '+ ' + sumRouterMonth + " руб/мес.";
        } else {
            sumRouterAtTime = 0;
            sumRouterMonth = 0;
            sumCostOfEquipment.innerHTML = 0 + ' руб.';

        }

        if (valueGrafCalc == 70) {
            valueTariff = document.querySelector('.price_invisible_block_inet .price_packet70').innerHTML;
            benefitBox.style.display = "none";
        }
        if (valueGrafCalc == 100) {
            valueTariff = document.querySelector('.price_invisible_block_inet .price_packet100').innerHTML;
            benefitBox.style.display = "none";
        }
        if (valueGrafCalc == 200) {
            valueTariff = document.querySelector('.price_invisible_block_inet .price_packet200').innerHTML;
            benefitBox.style.display = "flex";
        }
        if (valueGrafCalc == 500) {
            valueTariff = document.querySelector('.price_invisible_block_inet .price_packet500').innerHTML;
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
            valueTariff = document.querySelector('.price_invisible_block_inet price_packetUdobnii').innerHTML;
        }

        var totalComputed = Number(valueTariff) + totalValueTwin + valueStart + valueAmediateca + valueAntivirus + Number(sumRouterAtTime);
        totalNum.innerHTML = totalComputed;

        var percent = Math.ceil((230 / (totalComputed + 230)) * 100);
        benefitValue.innerHTML = 'Выгода до ' + percent + '%';


        if (nameUdobniiCheck.checked) {
            monthlyFeet.innerHTML = totalValueTwin + valueStart + valueAmediateca + valueAntivirus + Number(sumRouterMonth) + ' руб./мес.';
            nominalFee.innerHTML = Number(valueTariff) + ' руб./год.';
        } else {
            monthlyFeet.innerHTML = Number(valueTariff) + totalValueTwin + valueStart + valueAmediateca + valueAntivirus + Number(sumRouterMonth) + ' руб./мес.';
            nominalFee.innerHTML = Number(valueTariff) + ' руб./мес.';
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
        var speedTariffHeadl = document.querySelector('.valueSpeedName-INET');
        speedTariffHeadl.innerHTML = valueGrafCalc + ' Мб/с';

        var nameTariffInet;
        var nameTariffUdobnii = document.querySelector('.input_check_inet_box_udobnii-INET');


        if (valueGrafCalc == 70) {
            nameTariffInet = '(тариф “Минимальный”)';
            rightNameTariff.innerHTML = '(тариф “Минимальный”)';
            nameTariffUdobnii.style.display = 'none';
            nameUdobniiCheck.checked = false;
            calcTwinCheck.checked = false;
            valueTwinPlay = 230;
            calcTwinCheckValue.innerHTML = '+ ' + valueTwinPlay + ' p.';
            initKino()
        }
        if (valueGrafCalc == 100) {
            nameTariffInet = '(тариф “Оптимальный”)';
            rightNameTariff.innerHTML = '(тариф “Оптимальный”)';
            nameTariffUdobnii.style.display = 'block';
            calcTwinCheck.checked = false;
            valueTwinPlay = 230;
            calcTwinCheckValue.innerHTML = '+ ' + valueTwinPlay + ' p.';
            initKino()
        }
        if (valueGrafCalc == 200) {
            nameTariffInet = '(тариф “Специальный”)';
            rightNameTariff.innerHTML = '(тариф “Специальный”)';
            nameTariffUdobnii.style.display = 'none';
            nameUdobniiCheck.checked = false;
            calcTwinCheck.checked = true;
            valueTwinPlay = 0;
            calcTwinCheckValue.innerHTML = '+ ' + valueTwinPlay + ' p.';
            initKino()
        }
        if (valueGrafCalc == 500) {
            nameTariffInet = '(тариф “Экстремальный”)';
            rightNameTariff.innerHTML = '(тариф “Экстремальный”)';
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
            nameTariffInet = '(тариф “Удобный”)';
            rightNameTariff.innerHTML = '(тариф “Удобный”)';
            nameTariffHeadl.innerHTML = nameTariffInet;
        } else {
            nameTariffInet = '(тариф “Оптимальный”)';
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
            calcRouterName.innerHTML = "Wi-Fi роутер SNR-CPE-W4N";
            calcRouterPrice.innerHTML = '<span>+ <b class="sumRouterAtTime">1700</b> руб.</span> при единовременной оплате<b class="sumRouterMonth"></b>';
            rightRouterName.innerHTML = 'Wi-Fi роутер SNR-CPE-W4N'
            rightRouterPrice.innerHTML = '(1700 руб. при единовременной оплате)'
        } else {
            calcRouterName.innerHTML = "Роутер";
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
        var priceR = e.target.closest('.input_check_inet_box_router_val-INET').querySelector('.calc_router_label_text').innerHTML;
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
            if (elemK == 'Онлайн кинотеатр Start') {
                valueStart = 299;
            }
            if (elemK == 'Онлайн кинотеатр Amediateca') {
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
            if (elemK == 'Онлайн кинотеатр Start') {
                valueStart = 0;
            }
            if (elemK == 'Онлайн кинотеатр Amediateca') {
                valueAmediateca = 0;
            }
            sumNumFunc();
        }

    }






})();