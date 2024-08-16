let tobeDisplayed = [];
let pages = ['example', 'example2', 'example3'];
var searchbar = document.getElementById('searchbar');
var searchbox = document.getElementById('searchbox');

searchbar.addEventListener('keyup', () => {
    let input = document.getElementById('searchbar').value;
    parseArray(input);
});

searchbar.addEventListener('focus', () => {
    searchbox.style.visibility = 'visible';
    insertInitial();
    document.getElementById('search').classList.add('searchActive')
});

function parseArray(value) {
    tobeDisplayed = [];
    
    value = value.toLowerCase();
    
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].includes(value)) {
            tobeDisplayed.push(pages[i]);
        }
    }

    insertElements();
    return tobeDisplayed;
}

function insertElements() { 
    var div = document.getElementById('searchbox');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    
    if (tobeDisplayed.length === 0) {
        searchbox.insertAdjacentHTML('beforeend', '<p>No results found</p>');
        return;
    }

    for (var i = 0; i < 16; i++) {
        if (tobeDisplayed[i] == undefined) {
            break;
        }
        searchbox.insertAdjacentHTML('beforeend', '<p class="searchresult" data-page="'+tobeDisplayed[i]+'">'+tobeDisplayed[i]+'</p>');
    };

    let searchresults = document.getElementsByClassName('searchresult');

    for (var i = 0; i < searchresults.length; i++) {
        searchresults[i].addEventListener('click', function() {
            saveSearches(this.textContent);
        });
    };
};


searchbar.addEventListener('blur', () => {
    setTimeout(() => {
        searchbox.style.visibility = 'hidden';
        document.getElementById('search').classList.remove('searchActive')
    }, 100);
    searchbar.value = ""
});

function setCookie(value) {
    const d = new Date();
    d.setTime(d.getTime() + ((10*365+2)*24*60*60*1000));
    const date = d.toUTCString();
    
    document.cookie = "RecentSearches="+value+"; expires="+date+"; SameSite=None; secure";
}

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};

let toSave = [];

function saveSearches(value) {
    if (toSave.length < 5) {
        toSave.push(value);
    }

    if (toSave.length == 5) {
        toSave.shift();
        toSave.push(value);
    }

    setCookie(toSave);
}

let toInsert = [];

function insertInitial() {
    var div = document.getElementById('searchbox');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    if (getCookie('RecentSearches') != undefined) {
        toInsert = getCookie('RecentSearches').split(',');
    }

    for (var i = 0; i < toInsert.length; i++) {
        searchbox.insertAdjacentHTML('beforeend', '<p class="searchresult" data-page="'+toInsert[i]+'">'+toInsert[i]+'</p>');
    }
}