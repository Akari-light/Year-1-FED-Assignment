//Navbar color on scroll
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 800);
})

//Hamburger menu
const menuIcon = document.querySelector(".hb-hamburger-menu");
const navbar = document.querySelector(".hb-navbar");
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

//Table Tab
function openTab(evt, region) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(region).style.display = "block";
    evt.currentTarget.className += " active";
}

//News page
const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');

searchFrom.addEventListener('submit', retrieve)

function retrieve(e) {

    if (input.value == '') {
        alert('Search input is empty!')
        return
    }

    var newsDisplay = document.getElementById('news-section');
    newsDisplay.innerHTML = "";

    e.preventDefault()

    const apiKey = 'f5a53a804dd7f19b1789c83e64c82fe9'
    let topic = input.value;

    let url = `https://gnews.io/api/v3/search?q=${topic}?&token=${apiKey}`

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        data.articles.forEach(article => {
            if (article.image == null) {
                console.log('working')
                newsDisplay.innerHTML = newsDisplay.innerHTML + `
                <div class="news-display">
                <a href="${article.url}" target="_blank"><img src="../images/no_image.jpg" alt=""></a>
                <h6><a href="${article.url} target="_blank"">${article.title}</a></h6>
                <p>${article.description}</p>
                <p class="publish-date">${article.publishedAt}</p>
                </div>
                `
            } else {
                newsDisplay.innerHTML = newsDisplay.innerHTML + `
                <div class="news-display">
                <a href="${article.url} target="_blank""><img src="${article.image}" alt=""></a>
                <h6><a href="${article.url} target="_blank"">${article.title}</a></h6>
                <p>${article.description}</p>
                <p class="publish-date">${article.publishedAt}</p>
                </div>
                `
            }
        })
    }).catch((error) => {
        console.log(error)
    })
    console.log(topic)
}

//First Load
function firstload(e) {
    var newsDisplay = document.getElementById('news-section');
    newsDisplay.innerHTML = "";

    const apiKey = 'f5a53a804dd7f19b1789c83e64c82fe9'

    let url = `https://gnews.io/api/v3/search?q=covid?&token=${apiKey}`

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        data.articles.forEach(article => {
            if (article.image == null) {
                console.log('working')
                newsDisplay.innerHTML = newsDisplay.innerHTML + `
                <div class="news-display">
                <a href="${article.url}" target="_blank"><img src="images/no_image.jpg" alt=""></a>
                <h6><a href="${article.url} target="_blank"">${article.title}</a></h6>
                <p>${article.description}</p>
                <p class="publish-date">${article.publishedAt}</p>
                </div>
                `
            } else {
                newsDisplay.innerHTML = newsDisplay.innerHTML + `
                <div class="news-display">
                <a href="${article.url} target="_blank""><img src="${article.image}" alt=""></a>
                <h6><a href="${article.url} target="_blank"">${article.title}</a></h6>
                <p>${article.description}</p>
                <p class="publish-date">${article.publishedAt}</p>
                </div>
                `
            }
        })
    }).catch((error) => {
        console.log(error)
    })
};