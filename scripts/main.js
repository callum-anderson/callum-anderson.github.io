// Set active nav link
const path = window.location.pathname;

const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.classList.remove('active');
});

if (path.includes('index.html')) {
    document.getElementById('link-about').classList.add('active');
} else if (path.includes('costs.html')) {
    document.getElementById('link-costs').classList.add('active');
} else if (path.includes('benefits.html')) {
    document.getElementById('link-benefits').classList.add('active');
}