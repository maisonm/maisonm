// DOM Elements
const review1 = $('#hero-review-1');
const review2 = $('#hero-review-2');
const review3 = $('#hero-review-3');
const navbar = $('#navbar-top');
const menuOptionPanel = $('.menu-selection');
const closeBtn = $('#close-btn');
const openBtn = $('#open-btn');
const mainDishesMenuLink = $('#main-dishes-link');
const seafoodMenuLink = $('#seafood-link');
const appetizerMenuLink = $('#appetizers-link');
const sidesMenuLink = $('#sides-link');
const menuSection = $('#menu-section');
const menuBtn = $('#menu-btn');
const mainDishMenuTarget = $('#main-dishes');
const seafoodMenuTarget = $('#seafood');
const appetizerMenuTarget = $('#appetizers');
const sideMenuTarget = $('#sides');
const htmlBody = $('html, body');
const menuDisplay = $('.menu-display');
const sideNavHomeLink = $('#home-link');
const topNavMenuLink = $('#menu-link');
const hero = $('#hero');
const reservationDate = $('#reservation-input-date');
const reservationSubmitBtn = $('#reservation-submit-btn');
const reservationForm = $('.reservation-form');
const reservationSubmitSuccess = $('.reservation-form-submit');
const mobileNavDropdown = $('#mobile-nav-dropdown');
const mobileNavContents = $('#mobile-nav-contents');
const hamburgerMenuIcon = $('#hamburger-menu-icon');


// ***** BEGIN INDEX PAGE ******

window.onload = () => {

	reviewCycle(6000, review1, review2, review3);
	scrollTopFadeOut(navbar, 400, 10);

}

// Hero Review FadeIn / FadeOut Cycle
function reviewCycle(delay) {

    var elements = Array.prototype.slice.call(arguments, 1);
    var functions = [];

    for (var i = 0; i < elements.length; i++) {
        functions.push(function (i) {
            var prev = i === 0 ? elements.length - 1 : i - 1;
            var next = (i + 1) % elements.length;
            return function() {
                elements[prev].fadeToggle(function() {
                    elements[i].fadeToggle(function() {
                        setTimeout(functions[next], delay);
                    });
                });
            };
        }(i));
    }
    functions[1]();
}

//Smooth Scroll to Target
const smoothScrollToTarget = (target, transition, animate) => {
	animate.animate({
		scrollTop: target.offset().top
	}, transition);
}

// Open Side Menu
const openSideMenu = () => {

	openBtn.fadeOut(100);
	smoothScrollToTarget(menuSection, 1000, htmlBody);


	setTimeout( () => {
		menuOptionPanel.addClass('open-menu-panel');
		menuOptionPanel.removeClass('close-menu-panel');
	}, 1000)

	setTimeout( () => {
		mainDishesMenuLink.fadeIn(800);
		seafoodMenuLink.fadeIn(800);
		appetizerMenuLink.fadeIn(800);
		sidesMenuLink.fadeIn(800);
	}, 1500)

}

// Hero 'Menu Link' Scroll to Menu Section
menuBtn.click( () => {

	openSideMenu();

})

// Menu Panel Links Scroll to Menu Heading Target
mainDishesMenuLink.click( () => {

	smoothScrollToTarget(mainDishMenuTarget, 800, menuDisplay);
})

seafoodMenuLink.click( () => {

	smoothScrollToTarget(seafoodMenuTarget, 800, menuDisplay);
})

appetizerMenuLink.click( () => {

	smoothScrollToTarget(appetizerMenuTarget, 800, menuDisplay);
})

sidesMenuLink.click( () => {

	smoothScrollToTarget(sideMenuTarget, 800, menuDisplay);
})

// Side Navbar Links Scroll to Targets
sideNavHomeLink.click(() => {

	smoothScrollToTarget(hero, 800, htmlBody);
})

// Top Navbar Links Scroll to Targets
topNavMenuLink.click(() => {

	smoothScrollToTarget(menuSection, 800, htmlBody);
	openSideMenu();
})

// FadeIn/Out Element at Scroll Position 
const scrollTopFadeOut = (element, speed, fromTop) => {
	$(window).on('scroll', () => {
		var scrollTop = $(window).scrollTop();
		if( scrollTop >= fromTop) {
			element.fadeOut(speed);
		} else {
			element.fadeIn(speed);
		}
	})
}

// Open and Close Menu Panel with 'Open and Close' buttons
const closeMenuOptions = () => {

	mainDishesMenuLink.fadeOut(500);
	seafoodMenuLink.fadeOut(500);
	appetizerMenuLink.fadeOut(500);
	sidesMenuLink.fadeOut(500);

	setTimeout( () => {
		openBtn.fadeIn(800);
	}, 1300)

	setTimeout( () => {
		menuOptionPanel.addClass('close-menu-panel');
		menuOptionPanel.removeClass('open-menu-panel');
	}, 800)
}

const openMenuOptions = () => {

		menuOptionPanel.removeClass('close-menu-panel');
		menuOptionPanel.addClass('open-menu-panel');

		openBtn.fadeOut(500);

	setTimeout(() => {
		mainDishesMenuLink.fadeIn(500);
		seafoodMenuLink.fadeIn(500);
		appetizerMenuLink.fadeIn(500);
		sidesMenuLink.fadeIn(500);
	}, 800)

}
// Slide out menu open/close button
closeBtn.click(closeMenuOptions)
openBtn.click(openMenuOptions)



// ***** Begin Reservation Page *****
window.onload = () => {

	// Date and Time Input Drop Down Menu
    $('#reservation-input-date').datepicker();
    $('#reservation-input-time').timepicker();

    // Reservation Submit Button Click Handler
	reservationSubmitBtn.click(reservationsSubmitLoadingSuccess);

}

// Faux Reservation Submit Success Loading Icon and Success Message
const reservationsSubmitLoadingSuccess = () => {

	reservationForm.fadeOut(500);

	setTimeout(() => {
		reservationSubmitSuccess.fadeIn(500);
		reservationSubmitSuccess.css({
			display: 'flex'
		})

	}, 490)	

	setTimeout(() => {
		$('#loading-ring').fadeOut(500);
		$('.reservation-submit-success').delay(500).fadeIn(500);
	}, 5000)
}


// ***** Mobile Hamburger Menu *****

const toggleMobileNavDropdown = () => {

	if(mobileNavDropdown.height() == 0) {

		mobileNavDropdown.css({
			height: '180px',
			width: '200px'
		})
		mobileNavContents.delay(800).fadeIn(900);

	} else if(mobileNavDropdown.height() == 180) {

		mobileNavContents.fadeOut(400);

		setTimeout(() =>  {
			mobileNavDropdown.css({
			height: '0px',
			width: '0px'
		})
		}, 400)
	}
}

window.onload = () => {
hamburgerMenuIcon.click(toggleMobileNavDropdown)
}

