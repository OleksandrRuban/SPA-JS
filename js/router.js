let pageUrls = {
    about: '/index.html?about',
    contact: '/index.html?contact'
};

function OnStartUp() {
    popStateHandler();
}
OnStartUp();

document.querySelector('#about-link').addEventListener('click', (event) => {
    let stateObj = { page: 'about' };
    document.title = 'About';
    history.pushState(stateObj, "about", "?about");
    RenderAboutPage();
});

document.querySelector('#contact-link').addEventListener('click', (event) => {
    let stateObj = { page: 'contact' };
    document.title = 'Contact';
    history.pushState(stateObj, "contact", "?contact");
    RenderContactPage();
});

function RenderAboutPage() {
    document.querySelector('main').innerHTML = `
        <h1 class="title">About Me</h1>
        <p>Welcome to the About page!</p>`;
}

function RenderContactPage() {
    document.querySelector('main').innerHTML = `
        <h1 class="title">Contact</h1>
        <p>Feel free to reach out via the Contact page.</p>`;
}

function popStateHandler() {
    const loc = window.location.href.toString().split(window.location.host)[1];
    if (loc === pageUrls.contact) {
        RenderContactPage();
    } else if (loc === pageUrls.about) {
        RenderAboutPage();
    }
}
window.onpopstate = popStateHandler;
