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
//-------------------------------------NAV----------------------------------
const nav = document.getElementsByTagName('a');
console.log(nav);

const firstNav = nav[0];
const secondNav = nav[1];
const thirdNav = nav[2];
const fourthNav = nav[3];
const fifthNav = nav[4];
const sixthNav = nav[5];

firstNav.textContent = siteContent["nav"]["nav-item-1"];
secondNav.textContent = siteContent["nav"]["nav-item-2"];
thirdNav.textContent = siteContent["nav"]["nav-item-3"];
fourthNav.textContent = siteContent["nav"]["nav-item-4"];
fifthNav.textContent = siteContent["nav"]["nav-item-5"];
sixthNav.textContent = siteContent["nav"]["nav-item-6"];

//--------------------------------CTA------------------------------------------

const h1 = document.querySelector('h1');
console.log(h1);
h1.textContent = siteContent["cta"]["h1"];

const button = document.querySelector('button');
console.log(button);
button.textContent = siteContent["cta"]["button"];

const ctaImg = document.querySelector('.cta img');
console.log(ctaImg)
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//---------------------------------Top h4---------------------------------
const topH4 = document.querySelectorAll('.top-content .text-content h4');
console.log("top h4",topH4);

firstTopH4 = topH4[0];
firstTopH4.textContent = siteContent["main-content"]["features-h4"];

secondTopH4 = topH4[1];
secondTopH4.textContent = siteContent["main-content"]["about-h4"];

//--------------------------------Bottom h4-------------------------------------------
const bottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
console.log("bottom h4", bottomH4);

firstBottomH4 = bottomH4[0];
firstBottomH4.textContent = siteContent["main-content"]["services-h4"];


secondBottomH4 = bottomH4[1];
secondBottomH4.textContent = siteContent["main-content"]["product-h4"];


thirdBottomH4 = bottomH4[2];
thirdBottomH4.textContent = siteContent["main-content"]["vision-h4"];
//--------------------------------------------------------------------------
const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', 'img/mid-page-accent.jpg');


//---------------------------------Top p-----------------------------------------
const topP = document.querySelectorAll('.top-content .text-content p');
console.log("top paragraph", topP);

firstTopP= topP[0];
firstTopP.textContent = siteContent["main-content"]["features-content"];

secondTopP = topP[1];
secondTopP.textContent = siteContent["main-content"]["about-content"];

//--------------------------------Bottom p-------------------------------------------

bottomP = document.querySelectorAll('.bottom-content .text-content p');
console.log("bottom paragraph", bottomP);

firstBottomP = bottomP[0];
firstBottomP.textContent = siteContent["main-content"]["services-content"];

secondBottomP = bottomP[1];
secondBottomP.textContent = siteContent["main-content"]["services-content"];

thirdBottomP = bottomP[2];
thirdBottomP.textContent = siteContent["main-content"]["services-content"];

//-----------------------------------Contact h4----------------------------------------

contactH4 = document.querySelector('.contact h4');
console.log(contactH4);

contactH4.textContent = siteContent["contact"]["contact-h4"];



//----------------------------------Contact p--------------------------------------
contactP = document.querySelectorAll('.contact p');
console.log(contactP);

firstcontactP = contactP[0];
firstcontactP.textContent = siteContent["contact"]["address"];

secondcontactP = contactP[1];
secondcontactP.textContent =siteContent["contact"]["phone"]


thirdcontactP = contactP[2];
thirdcontactP.textContent =siteContent["contact"]["email"]

//-----------------------------------Footer----------------------------------------
footer = document.querySelector('footer p');
console.log(footer);

footer.textContent = siteContent["footer"]["copyright"];
