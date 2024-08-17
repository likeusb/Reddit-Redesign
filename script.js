var counters = document.getElementsByClassName('counter');
var clickonMenu = 'false';
var popup = document.getElementById('popup');
var poupText = document.getElementById('popupText');

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
    setTimeout(() => {
        clickonMenu = 'postMenu';
    }, 20);
    let menu = document.getElementById('postMenu');
    menu.classList.toggle('active');
});

var navMenus = document.getElementsByClassName('openable');

for (var i = 0; i < navMenus.length; i++) {
    navMenus[i].addEventListener('click', function() {
        handleMenuEvents(this.innerHTML);
        setTimeout(() => {
            clickonMenu = 'navmenu';
        }, 20);
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
    } else {
        dmMenu.classList.remove('active');
        navMenus[1].classList.remove('active');
        navMenus[2].classList.remove('active');
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

window.addEventListener('click', function() {
    clickonMenu = 'false';

    setTimeout(() => {
        if (clickonMenu == 'navmenu') {
            document.getElementById('postMenu').classList.remove('active');
        } else if (clickonMenu == 'postMenu') {
            handleMenuEvents('');
        } else {
            handleMenuEvents('');
            document.getElementById('postMenu').classList.remove('active');
        }
    }, 100);
});

function dmScroll() {
    var messages = document.getElementById('messages');

    messages.scrollTop = messages.scrollHeight;
}

var options = document.getElementsByClassName('forPopup');
console.log(options);

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function() {
        const regExFilter = new RegExp(/Save|Hide|Report|Follow Post|Crosspost/g)
        const filtered = this.innerHTML.toString().match(regExFilter).toString();
        popupContent(filtered);
    });
};

function popupContent(string) {
    // console.log('initial')
    popup.insertAdjacentHTML('afterbegin', '<div class="popupContent"><p>'+string+'</p></div>')
    let popupContent = [];
    setTimeout(() => {
        popupContent = document.getElementsByClassName('popupContent');
        console.log(popupContent)
        Array.from(popupContent).forEach((element) => {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            };
        });
    }, 50);
    console.log(string)
    setTimeout(() => {
        popupContent = document.getElementsByClassName('popupContent');
        if (popupContent.classList.contains('active')) {
            console.log(this)
        };
    }, 200);
    setTimeout(() => {
        console.log('Removal')
    }, 2150);
};