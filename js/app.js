// ADD SVG BACKGROUND TO HEADER SECTION THAT HAS PARALLAX EFFECT.
window.onload = () => {
    parallax(60, headerParallax);
    calculateSkillSectionTop(70);
    glyphHoverColor();
};

const projectContainer = $('project-card-container');
const headerParallax = $('.header');
const hero = $('.hero-container');
const glyphicons = $('.glyphicon');



// Nav Logo Color Shift
const navLogoAnimate = () => {
    let reverse = anime({
        targets: '.element',
        complete: function() {
            anime({
                targets: '#letter',
                fill: '#595959',
                transition: '.1s',
                delay: 200
            });
        }
    });
    let color = anime({
        targets: ['#rect', '#mAlpha'],
        stroke: '#ed852b',
        fill: '#ed852b',
        delay: 1200
    });
};
//

// Parallax Effect
const parallax = (intensity, el) => {
        $(window).scroll(function() {
            let scrollTop = $(window).scrollTop();
            let position = scrollTop / intensity + 'px';
            el.css('transform', 'translateY(' + position + ')');
        })
    }
    //

// Navbar Color Theme Change On Scroll
const calculateSkillSectionTop = (top) => {
    $(window).on('scroll', () => {
        let elementOffset = $('.skills-section').offset().top;
        let scrollTop = $(window).scrollTop();
        let distance = (elementOffset - scrollTop);
        if (distance <= top) {

            navLinkColorShift();
            navBackgroundAdd();
            navLogoAnimate();

        } else {
            navLinkColorRevert();
            navBackgroundRemove();
        }
    })
};

const navLinkColorShift = () => {

    $('.navLinks').addClass('navLinksScrollColor');

};

const navLinkColorRevert = () => {
    $('.navLinks').removeClass('navLinksScrollColor');

}

const navBackgroundAdd = () => {
    $('.navigation-bar').addClass('navbar-bg');
}

const navBackgroundRemove = () => {
        $('.navigation-bar').removeClass('navbar-bg');
    }
//

// Input Glyphicon Color Change On Hover 

    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputMessage = document.getElementById('message');

    function glyphiconColorAdd(){

        glyphicons.addClass('glyphicon-focus');
    }

    const glyphiconColorRemove = () => {

        glyphicons.removeClass('glyphicon-focus');

    }

    const glyphHoverColor = () => {

        inputName.addEventListener('mouseover', glyphiconColorAdd);
        inputEmail.addEventListener('mouseover', glyphiconColorAdd);
        inputMessage.addEventListener('mouseover', glyphiconColorAdd);

        inputName.addEventListener('mouseout', glyphiconColorRemove);
        inputEmail.addEventListener('mouseout', glyphiconColorRemove);
        inputMessage.addEventListener('mouseout', glyphiconColorRemove);


    }


//