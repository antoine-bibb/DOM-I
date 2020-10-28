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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let navItem = document.getElementsByTagName('a');
navItem[0].textContent = siteContent['nav']['nav-item-1'];
let navItem1 = document.getElementsByTagName('a');
navItem1[1].textContent = siteContent['nav']['nav-item-2'];
let navItem2 = document.getElementsByTagName('a');
navItem2[2].textContent = siteContent['nav']['nav-item-3'];
let navItem3 = document.getElementsByTagName('a');
navItem3[3].textContent = siteContent['nav']['nav-item-4'];
let navItem4 = document.getElementsByTagName('a');
navItem4[4].textContent = siteContent['nav']['nav-item-5'];
let navItem5 = document.getElementsByTagName('a');
navItem5[5].textContent = siteContent['nav']['nav-item-6'];

let headTitle = document.querySelectorAll('.cta-text h1');
headTitle[0].textContent = siteContent['cta']['h1'];
//let headImg = document.getElementById('#cta-img');
//headImg.setAttribute('src', siteContent['cta']['img-src']);
let mainConFeat = document.querySelectorAll('.text-content h4');
mainConFeat[0].textContent = siteContent['main-content']
['features-h4'];
let mainConFeatText = document.querySelectorAll('.text-content p');
mainConFeatText[0].textContent = siteContent['main-content']
['features-content']
let mainConAbout = document.querySelectorAll('.text-content h4');
mainConAbout[1].textContent = siteContent['main-content']['about-h4'];
let mainConAboutText = document.querySelectorAll('.text-content p');
mainConAboutText[1].textContent = siteContent['main-content'] ['about-content'];
let mainConServ = document.querySelectorAll(".text-content h4");
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
mainConServ[3].textContent = siteContent["main-content"]["services-h4"];
let mainConServText = document.querySelectorAll(".text-content p");
mainConServText[3].textContent =
  siteContent["main-content"]["services-content"];
let mainConProd = document.querySelectorAll(".text-content h4");
mainConProd[4].textContent = siteContent["main-content"]["product-h4"];
let mainConProdText = document.querySelectorAll(".text-content p");
mainConProdText[4].textContent = siteContent["main-content"]["product-content"];
//let mainConVision = document.querySelectorAll(".text-content h4");
//mainConVision[5].textContent = siteContent["main-content"]["vision-h4"];
//let mainConVisionText = document.querySelectorAll(".text-content p");
//mainConVisionText[5].textContent = siteContent["main-content"]["vision-content"];
let cont = document.querySelectorAll('.contact h4');
cont[0].textContent = siteContent['contact']['contact-h4'];
let conta = document.querySelectorAll('.contact p');
conta[0].textContent = siteContent['contact']['address'];
let contP = document.querySelectorAll('.contact p');
contP[1].textContent = siteContent['contact']['phone'];
let contE = document.querySelectorAll('.contact p');
contE[2].textContent = siteContent['contact']['email'];
let foot = document.querySelectorAll('footer p');
foot[0].textContent = siteContent['footer']['copyright'];