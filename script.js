var counters = document.getElementsByClassName('counter');

document.getElementById('upvote').addEventListener('click', () => {
    let count = counters[0].textContent;
    count++;
    counters[0].textContent = count;
});

document.getElementById('downvote').addEventListener('click', () => {
    let count = counters[0].textContent;
    count--;
    counters[0].textContent = count;
});

document.getElementById('comment').addEventListener('click', () => {
    let count = counters[1].textContent;
    count++;
    counters[1].textContent = count;
});

document.getElementById('share').addEventListener('click', () => {
    let shareData = {
        title: "Likeusb.me",
        text: "Likeusb.me",
        url: "https://likeusb.me/",
    };

    navigator.share(shareData)
});

document.getElementById('menuImg').addEventListener('click', () => {
    let menu = document.getElementById('postMenu');
    menu.classList.toggle('active');
});

var navMenus = document.getElementsByClassName('openable');

for (var i = 0; i < navMenus.length; i++) {
    navMenus[i].addEventListener('click', function() {
        handleMenuEvents(this.innerHTML);
    });
};

function handleMenuEvents(menu) {
    let menuOpened = filterSelection(menu);
    var dmMenu = document.getElementById('dms');
    
    if (menuOpened == 'chat') {
        dmMenu.classList.toggle('active');
        navMenus[1].classList.remove('active');
        navMenus[2].classList.remove('active');
    } else if (menuOpened == 'notifs') {
        dmMenu.classList.remove('active');
        navMenus[1].classList.toggle('active');
        navMenus[2].classList.remove('active');
    } else if (menuOpened == 'user') {
        dmMenu.classList.remove('active');
        navMenus[1].classList.remove('active');
        navMenus[2].classList.toggle('active');
    }
};


function filterSelection(toFilter) {
    const regexCHAT = new RegExp(/chat.svg/g);
    const regexNOTIF = new RegExp(/notifications.svg/g);
    const regexUSER = new RegExp(/user.svg/g);

    if (regexCHAT.test(toFilter)) { 
        return 'chat';
    } else if (regexNOTIF.test(toFilter)) {
        return 'notifs';
    } else if (regexUSER.test(toFilter)) {
        return 'user';
    }
}