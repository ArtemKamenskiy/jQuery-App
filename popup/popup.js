import {blurOff, overflowOn, overflowOff, popupOff} from "../functions/functions.js";

jQuery(document).ready(function () {
    const closeBtn = document.querySelector(".close__btn");
    overflowOff();
    jQuery(closeBtn).on('click', function () {
        popupOff();
        blurOff();
        overflowOn();
    })
})
