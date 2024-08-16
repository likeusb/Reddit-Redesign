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
        filterSelection(this.innerHTML)
    });
};



function filterSelection(toFilter) {
    const regexCHAT = new RegExp(/chat.svg/g);
    const regexNOTIF = new RegExp(/notifications.svg/g);
    const regexUSER = new RegExp(/user.svg/g);

    if (regexCHAT.test(toFilter)) { 
        console.log('chat')
    } else if (regexNOTIF.test(toFilter)) {
        console.log('notifications')
    } else if (regexUSER.test(toFilter)) {
        console.log('user')
    }
}