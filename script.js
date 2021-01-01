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

                userInfoNames.classList.add("table__item");
                imageContainer.classList.add("user-image__container");
                moreInfo.classList.add("more-info__btn");

                jQuery(moreInfo).attr('href', "#");
                jQuery(image).attr('src', "./assets/img/icons/profileUser.svg");


                jQuery(moreInfo).text("More info...");
                imageContainer.append(image);
                userInfoNames.append(imageContainer);
                userInfoNames.append(name);
                userInfoNames.append(moreInfo);
                userName.append(userInfoNames);
                selectNames.append(optionsNames);

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
                    email.classList.add("address__item");
                    jQuery(userInfoMain).append(email);
                    jQuery(email).html("Email: " + i.email);

                    //get username
                    const username = document.createElement('li');
                    username.classList.add("address__item");
                    jQuery(userInfoMain).append(username);
                    jQuery(username).html("Username: " + i.username);

                    //get phone
                    const phone= document.createElement('li');
                    phone.classList.add("address__item");
                    jQuery(userInfoMain).append(phone);
                    jQuery(phone).html("Phone: " + i.phone);

                    //get website
                    const website = document.createElement('li');
                    website.classList.add("address__item");
                    jQuery(userInfoMain).append(website);
                    jQuery(website).html("Website: " + i.website);

                    //get city
                    const city = document.createElement('li');
                    city.classList.add("address__item");
                    jQuery(address).append(city);
                    jQuery(city).html("City: " + i.address.city);

                    //get street
                    const street = document.createElement('li');
                    street.classList.add("address__item");
                    jQuery(address).append(street);
                    jQuery(street).html("Street: " + i.address.street);

                    //get suite
                    const suite = document.createElement('li');
                    suite.classList.add("address__item");
                    jQuery(address).append(suite);
                    jQuery(suite).html("Suite: " + i.address.suite);

                    //get zipcode
                    const zipcode = document.createElement('li');
                    zipcode.classList.add("address__item");
                    jQuery(address).append(zipcode);
                    jQuery(zipcode).html("Zipcode: " + i.address.zipcode);

                    //get company name
                    const companyName = document.createElement('li');
                    companyName.classList.add("address__item");
                    jQuery(company).append(companyName);
                    jQuery(companyName).html("Name: " + i.company.name);

                    //get bs
                    const bs = document.createElement('li');
                    bs.classList.add("address__item");
                    jQuery(company).append(bs);
                    jQuery(bs).html("BS: " + i.company.bs);

                    //get catch phrase
                    const phrase = document.createElement('li');
                    phrase.classList.add("address__item");
                    jQuery(company).append(phrase);
                    jQuery(phrase).html("Catch phrase: " + i.company.catchPhrase);

                    popupClose();
                })
            });
        });
    });
});

