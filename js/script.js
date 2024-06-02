//Event listener for Navbar Changing Colors when scrolled down
window.addEventListener('scroll', () => {

    const verticalScrollPx = window.scrollY || window.pageYOffset;

    if(verticalScrollPx < 700){

        document.querySelector('.navbar-container').style.backdropFilter = 'none';
        document.querySelector('.navbar-container').style.backgroundColor = 'transparent';

    }else if(verticalScrollPx > 500 && verticalScrollPx < 1000){

        document.querySelector('.navbar-container').style.backdropFilter = 'none';
        document.querySelector('.navbar-container').style.backgroundColor = 'black';
        document.querySelector('.navbar-container').style.transition = "0.8s ease";
        
    }else if(verticalScrollPx > 500 || verticalScrollPx < 1000){

        document.querySelector('.navbar-container').style.backdropFilter = 'none';
        document.querySelector('.navbar-container').style.backgroundColor = 'black';

    }

});


/* Disabled

//Spinner Loader
let loadingDuration;

function loadingProcess(){

    loadingDuration = setTimeout(showContent, 2000);

}

function showContent(){
    
    document.querySelector('.spinner-border').style.display = "none";
    document.querySelector('.mainPageContent').style.display = "block";
    
    let loaderContainer = document.querySelector('.loader-container');
    loaderContainer.remove();

}   

*/




//Function for nav links activated if in their respective section or container
window.addEventListener('scroll', function(){

    //Declaring the section variables
    let aboutUsSection = document.getElementById('aboutUS');
    let whyChooseUs = document.getElementById('whyChooseUsSection');
    let contactUs = document.getElementById('contactUsSection');

    //declaring the navlinks variables
    let aboutNavLinks = document.getElementById('aboutUsLink');
    let whyChooseUsLink = document.getElementById('whyChooseUsLink');
    let contactUsLink = document.getElementById('contactLink');

    //aboutustop&bottom
    let aboutUsSectionTop = aboutUsSection.offsetTop;
    let aboutUsSectionBottom = aboutUsSection.offsetTop + aboutUsSection.offsetHeight;

    //whychooseustop&bottom
    let whyChooseUsSectionTop = whyChooseUs.offsetTop;
    let whyChooseUsSectionBottom = whyChooseUs.offsetTop + whyChooseUs.offsetHeight;


    //contactusustop&bottom
    let contactUsSectionTop = contactUs.offsetTop;
    let contactUsSectionBottom = contactUs.offsetTop + contactUs.offsetHeight;

    let buffer = 100;

    if(window.scrollY >= aboutUsSectionTop - buffer && window.scrollY <= aboutUsSectionBottom - buffer){

        aboutNavLinks.classList.add('active')


    }else{

        aboutNavLinks.classList.remove('active')

    }
    
    if(window.scrollY >= whyChooseUsSectionTop - buffer && window.scrollY <= whyChooseUsSectionBottom - buffer){

        whyChooseUsLink.classList.add('active')

    }else {

        whyChooseUsLink.classList.remove('active')

    }
    
    if(window.scrollY >= contactUsSectionTop - buffer && window.scrollY <= contactUsSectionBottom - buffer){

        contactUsLink.classList.add('active')

    }else{

        contactUsLink.classList.remove('active')


    }
    

});




//Get year dynamically in footer
let copyrightYear = new Date();
let year = copyrightYear.getFullYear();

document.getElementById('currentYear').innerText = year;




//opens an email
function sendEmail(){

    let email = "info@energo.ph";
    let subject = "Energo Solar Energy Inquiry";
    let message = "Hello My name is (Your name), and I would like to know more about your products";

    document.location = "mailto:" + email + "?subject=" + subject + "&body=" + message;

}



//opens contact and call
function callPhone(){

    let phoneNumber = "09285521108";
    window.location.href = "tel:" + phoneNumber;

}