renderPageNumberLine();

function renderPageNumberLine() {
	let pageNumberActive = document.querySelector(".page-number_active");
    if (pageNumberActive.nextElementSibling) {
        let nextLine = document.createElement('div');
        nextLine.classList.add('nextLine');
        pageNumberActive.after(nextLine);
    }
    if (pageNumberActive.previousElementSibling) {
        let prevLine = document.createElement('div');
        prevLine.classList.add('prevLine');
        pageNumberActive.before(prevLine);
    }
}

window.localStorage.getItem('preferedTheme') === 'dark' ? changeToDark() : changeToLight();

document.querySelector('.light-btn').addEventListener('click', changeToLight);
document.querySelector('.dark-btn').addEventListener('click', changeToDark);

function changeToLight() {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="icon" href="media/logo-cut-black.ico" type="image/x-icon" sizes="64x64" />';
    document.querySelector('.body__logo').src = 'media/logo-full-black.png';
    document.documentElement.setAttribute("data-theme", "light");
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#ede0df');
    document.querySelector('.light-btn').classList.add('color-btn_active');
    document.querySelector('.dark-btn').classList.remove('color-btn_active');
    window.localStorage.setItem('preferedTheme', 'light');
}

function changeToDark() {
    document.getElementsByTagName('head')[0].innerHTML += '<link rel="icon" href="media/logo-cut-white.ico" type="image/x-icon" sizes="64x64" />';
    document.querySelector('.body__logo').src = 'media/logo-full-white.png';
    document.documentElement.setAttribute("data-theme", "dark");
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#202124');
    document.querySelector('.light-btn').classList.remove('color-btn_active');
    document.querySelector('.dark-btn').classList.add('color-btn_active');
    window.localStorage.setItem('preferedTheme', 'dark');
}




document.querySelectorAll(".next-page-block").forEach( el => el.addEventListener('click', showNextSection) );
document.querySelectorAll(".prev-page-block").forEach( el => el.addEventListener('click', showPrevSection) );

function showNextSection() {
	let sectionActive = document.querySelector(".section-active");

    if (sectionActive.nextElementSibling) {
        sectionActive.classList.toggle('section-prev');
        sectionActive.classList.toggle('section-active');
        sectionActive.nextElementSibling.classList.toggle('section-active');
        sectionActive.nextElementSibling.classList.toggle('section-next');
        
        if (sectionActive.previousElementSibling) {
            sectionActive.previousElementSibling.classList.remove('section-prev');
            sectionActive.previousElementSibling.classList.add('section-hidden');
        }

        if (sectionActive.nextElementSibling.nextElementSibling && !sectionActive.nextElementSibling.nextElementSibling.classList.contains('page-numbers') ) {
            sectionActive.nextElementSibling.nextElementSibling.classList.remove('section-hidden');
            sectionActive.nextElementSibling.nextElementSibling.classList.add('section-next');
        }  
        
        if ( document.querySelector('.prevLine') ) {
            document.querySelector('.prevLine').remove();
        }
        if ( document.querySelector('.nextLine') ) {
            document.querySelector('.nextLine').remove();
        }
        
        let cellActive = document.querySelector('.page-number_active');
        cellActive.nextElementSibling.classList.add('page-number_active');
        cellActive.classList.remove('page-number_active');
        
        renderPageNumberLine();
        
    }
}

function showPrevSection() {
	let sectionActive = document.querySelector(".section-active");
  
    if (sectionActive.previousElementSibling) {
        sectionActive.classList.toggle('section-next');
        sectionActive.classList.toggle('section-active');
        sectionActive.previousElementSibling.classList.toggle('section-active');
        sectionActive.previousElementSibling.classList.toggle('section-prev');
        
        if (sectionActive.nextElementSibling && !sectionActive.nextElementSibling.classList.contains('page-numbers')) {
            sectionActive.nextElementSibling.classList.remove('section-next');
            sectionActive.nextElementSibling.classList.add('section-hidden');
        }
        
        if (sectionActive.previousElementSibling.previousElementSibling) {
            sectionActive.previousElementSibling.previousElementSibling.classList.remove('section-hidden');
            sectionActive.previousElementSibling.previousElementSibling.classList.add('section-prev');
        }
        
        if ( document.querySelector('.prevLine') ) {
            document.querySelector('.prevLine').remove();
        }

        if ( document.querySelector('.nextLine') ) {
            document.querySelector('.nextLine').remove();
        }
        let cellActive = document.querySelector('.page-number_active');
        cellActive.previousElementSibling.classList.add('page-number_active');
        cellActive.classList.remove('page-number_active');
        
        renderPageNumberLine();
    }
}

document.querySelectorAll('.header__link').forEach( el => el.addEventListener('click', changePageNav) );
let sectionAll = document.querySelectorAll('.section');

function changePageNav() {
    let clickedNumber = +this.getAttribute('data-no');
    let activedNumber = +document.querySelector('.section-active').getAttribute('data-no');
    
    if (activedNumber - clickedNumber) {
        if (+clickedNumber > +activedNumber) {
            let dif = clickedNumber - activedNumber;
            var runCount = 0;    
            function timerMethod() {
                runCount++;
                if(runCount >= dif) clearInterval(timerId);
            
                showNextSection();
            }
            
            var timerId = setInterval(timerMethod, 250); 
            
        } else {
            let dif = activedNumber - clickedNumber;
            var runCount = 0;    
            function timerMethod() {
                runCount++;
                if(runCount >= dif) clearInterval(timerId);
            
                showPrevSection();
            }
            
            var timerId = setInterval(timerMethod, 250); 
        }
    }
}


document.querySelector(".portfolio-sec__next").addEventListener('click', showNextPortfolio);
document.querySelector(".portfolio-sec__prev").addEventListener('click', showPrevPortfolio);

function showNextPortfolio() {
	let portfolioActive = document.querySelector(".portfolio-sec__link_active");
    if(portfolioActive.nextElementSibling) {
        portfolioActive.classList.remove('portfolio-sec__link_active');
        portfolioActive.classList.add('portfolio-sec__link_hidden');
        portfolioActive.nextElementSibling.classList.add('portfolio-sec__link_active');
        portfolioActive.nextElementSibling.classList.remove('portfolio-sec__link_hidden');
    }
}

function showPrevPortfolio() {
    let portfolioActive = document.querySelector(".portfolio-sec__link_active");
    if(portfolioActive.previousElementSibling) {
        portfolioActive.classList.remove('portfolio-sec__link_active');
        portfolioActive.classList.add('portfolio-sec__link_hidden');
        portfolioActive.previousElementSibling.classList.add('portfolio-sec__link_active');
        portfolioActive.previousElementSibling.classList.remove('portfolio-sec__link_hidden');
    } 
}
