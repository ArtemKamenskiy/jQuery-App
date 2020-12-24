jQuery(document).ready(function () {
    const btnGetNames = document.querySelector('.btn_get-names');
    const btnGetUsernames = document.querySelector('.btn_get-usernames');
    const btnGetEmail = document.querySelector(".btn_get-email");
    const userName = document.querySelector(".user-name");
    const userUsername = document.querySelector(".user-username");
    const userEmail = document.querySelector(".user-email");
    const selectNames = document.querySelector(".select__names");

    jQuery.get('https://jsonplaceholder.typicode.com/users', (data) => {
        jQuery(btnGetNames).on('click', function () {
            data.forEach(i => {
                let userInfoNames = document.createElement('li');
                let optionsNames = document.createElement('option');

                userInfoNames.classList.add("table__item");

                userName.append(userInfoNames);
                selectNames.append(optionsNames);

                jQuery(userInfoNames).html(i.name);
                jQuery(optionsNames).html(i.name);

                jQuery(this).off();
            });
        });

        jQuery(btnGetUsernames).on('click', function () {
            data.forEach(i => {
                let userInfoUsernames = document.createElement('li');
                userInfoUsernames.classList.add("table__item");
                userUsername.append(userInfoUsernames);
                jQuery(userInfoUsernames).html(i.username);
                jQuery(this).off();
            });
        });

        jQuery(btnGetEmail).on('click', function () {
            data.forEach(i => {
                let userInfoEmail = document.createElement('li');
                userInfoEmail.classList.add("table__item");
                userEmail.append(userInfoEmail);
                jQuery(userInfoEmail).html(i.email);
                jQuery(this).off();
            });
        });

    });
});

