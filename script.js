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