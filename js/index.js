const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// // Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 1
// header image circle
const header_img = document.getElementById('cta-img');
header_img.setAttribute('src', siteContent['cta']['img-src']);

// middle image below features/about paragraphs
const middle_img = document.getElementById('middle-img');
middle_img.setAttribute('src', siteContent['main-content']["middle-img-src"]);

// Task 2 
// nav content

let navBar = document.querySelectorAll("a");

// navBar[0].textContent = siteContent["nav"]["nav-item-1"];
// navBar[1].textContent = siteContent["nav"]["nav-item-2"];
// navBar[2].textContent = siteContent["nav"]["nav-item-3"];
// navBar[3].textContent = siteContent["nav"]["nav-item-4"];
// navBar[4].textContent = siteContent["nav"]["nav-item-5"];
// navBar[5].textContent = siteContent["nav"]["nav-item-6"];

// changing navBar color to green and looping.
let itemIncrement = 1;
navBar.forEach(item => {
  item.innerText = siteContent.nav[`nav-item-${itemIncrement++}`];
  item.style.color = "green";
  });

// Utilize .appendChild() and .prepend() to add two new items.
const newNav = document.querySelector("nav");
const first = document.createElement("a");
const last = document.createElement("a");
first.innerText = "First Link";
last.innerText = "Last Link";
newNav.append(last);
newNav.prepend(first);
first.style.color = "green";
last.style.color = "green";

// DOM is awesome content
const domIsAwesome = document.querySelector(".cta-text h1").innerText = "DOM\nis\nAwesome";
// domIsAwesome.textContent = siteContent["cta"]["h1"];

// button button who has the button!
const buttonLabel = document.querySelector(".cta-text button");
buttonLabel.textContent = siteContent["cta"]["button"];

// body content headers
const bodyHeader = document.querySelectorAll("h4");
bodyHeader[0].textContent = siteContent["main-content"]["features-h4"];
bodyHeader[1].textContent = siteContent["main-content"]["about-h4"];
bodyHeader[2].textContent = siteContent["main-content"]["services-h4"];
bodyHeader[3].textContent = siteContent["main-content"]["product-h4"];
bodyHeader[4].textContent = siteContent["main-content"]["vision-h4"];

// body paragraph content
const paragraphContent = document.querySelectorAll("p");
paragraphContent[0].textContent = siteContent["main-content"]["features-content"];
paragraphContent[1].textContent = siteContent["main-content"]["about-content"];
paragraphContent[2].textContent = siteContent["main-content"]["services-content"];
paragraphContent[3].textContent = siteContent["main-content"]["product-content"];
paragraphContent[4].textContent = siteContent["main-content"]["vision-content"];



// footer content
// footer header
const footerHeader = document.querySelector(".contact h4");
footerHeader.textContent = siteContent["contact"]["contact-h4"];

// footer content
const footerContent = document.querySelectorAll(".contact p");
footerContent[0].textContent = siteContent["contact"]["address"];
footerContent[1].textContent = siteContent["contact"]["phone"];
footerContent[2].textContent = siteContent["contact"]["email"];

// needs a break in the address - fix!

// footer copyright
const footerCopy = document.querySelector("footer");
footerCopy.textContent = siteContent["footer"]["copyright"];


