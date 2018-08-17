
// https://github.com/jgthms/bulma/issues/238 thanks!
document.getElementById("nav-toggle").addEventListener("click", toggleNav);
function toggleNav() {
    var nav = document.getElementById("nav-menu");
    var className = nav.getAttribute("class");
    if(className == "nav-right nav-menu") {
        nav.className = "nav-right nav-menu is-active";
    } else {
        nav.className = "nav-right nav-menu";
    }
}


document.getElementById("search-text").addEventListener("keydown", function(e) {
    // search
    if (e.keyCode == 13) { searchHandler(); }
}, false);

function searchHandler() {
    var searchInput = document.getElementById('search-text');
    var text = searchInput.value;
    // add site:example.com in the placeholder
    window.location.href = "https://www.google.com/search?q=site:bcc.ufba.br " + text;
}