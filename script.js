import {blurOn, popupClose, popupOn} from "./functions/functions.js";

jQuery(document).ready(function () {
    const btnGetNames = document.querySelector('.btn_get-names');
    const userName = document.querySelector(".user-name");
    const selectNames = document.querySelector(".select__names");
    const userInfoTitle = document.querySelector(".user-info__title");
    const userInfoMain = document.querySelector(".user-info__list-main");
    const address = document.querySelector('.user-info__list-address');
    const company = document.querySelector('.user-info__list-company');

    jQuery.get('https://jsonplaceholder.typicode.com/users', (data) => {
        console.log(data);
        jQuery(btnGetNames).on('click', function () {
            data.forEach(i => {
                let userInfoNames = document.createElement('li');
                let name = document.createElement('span');
                let image = document.createElement('img');
                let imageContainer = document.createElement('div');
                let optionsNames = document.createElement('option');
                let moreInfo = document.createElement('a');

                jQuery(userInfoNames).addClass("table__item");
                jQuery(imageContainer).addClass("user-image__container");
                jQuery(moreInfo).addClass("more-info__btn");

                jQuery(moreInfo).attr('href', "#");
                jQuery(image).attr('src', "./assets/img/icons/profileUser.svg");

                jQuery(imageContainer).append(image);
                jQuery(userInfoNames).append(imageContainer);
                jQuery(userInfoNames).append(name);
                jQuery(userInfoNames).append(moreInfo);
                jQuery(userName).append(userInfoNames);
                jQuery(selectNames).append(optionsNames);

                jQuery(moreInfo).text("More info...");
                jQuery(name).text(i.name);
                jQuery(optionsNames).text(i.name);

                jQuery(this).off();

                jQuery(moreInfo).on('click', function () {
                    popupOn();
                    blurOn();

                    //get title
                    jQuery(userInfoTitle).text(i.name);

                    //get email
                    const email = document.createElement('li');
                    jQuery(email).addClass("address__item");
                    jQuery(userInfoMain).append(email);
                    jQuery(email).html("Email: " + i.email);

                    //get username
                    const username = document.createElement('li');
                    jQuery(username).addClass("address__item");
                    jQuery(userInfoMain).append(username);
                    jQuery(username).html("Username: " + i.username);

                    //get phone
                    const phone= document.createElement('li');
                    jQuery(phone).addClass("address__item");
                    jQuery(userInfoMain).append(phone);
                    jQuery(phone).html("Phone: " + i.phone);

                    //get website
                    const website = document.createElement('li');
                    jQuery(website).addClass("address__item")
                    jQuery(userInfoMain).append(website);
                    jQuery(website).html("Website: " + i.website);

                    //get city
                    const city = document.createElement('li');
                    jQuery(city).addClass("address__item");
                    jQuery(address).append(city);
                    jQuery(city).html("City: " + i.address.city);

                    //get street
                    const street = document.createElement('li');
                    jQuery(street).addClass("address__item");
                    jQuery(address).append(street);
                    jQuery(street).html("Street: " + i.address.street);

                    //get suite
                    const suite = document.createElement('li');
                    jQuery(suite).addClass("address__item")
                    jQuery(address).append(suite);
                    jQuery(suite).html("Suite: " + i.address.suite);

                    //get zipcode
                    const zipcode = document.createElement('li');
                    jQuery(zipcode).addClass("address__item");
                    jQuery(address).append(zipcode);
                    jQuery(zipcode).html("Zipcode: " + i.address.zipcode);

                    //get company name
                    const companyName = document.createElement('li');
                    jQuery(companyName).addClass("address__item");
                    jQuery(company).append(companyName);
                    jQuery(companyName).html("Name: " + i.company.name);

                    //get bs
                    const bs = document.createElement('li');
                    jQuery(bs).addClass("address__item");
                    jQuery(company).append(bs);
                    jQuery(bs).html("BS: " + i.company.bs);

                    //get catch phrase
                    const phrase = document.createElement('li');
                    jQuery(phrase).addClass("address__item");
                    jQuery(company).append(phrase);
                    jQuery(phrase).html("Catch phrase: " + i.company.catchPhrase);

                    popupClose();
                })
            });
        });
    });
});

