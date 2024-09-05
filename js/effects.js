function setFadeIn(value) {
    var className = "." + value;
    gsap.to(className, {
        scrollTrigger: {
            trigger: className,
            start: "top bottom",
            end: "bottom top",
            scrub: false,
            markers: false,
            id: "fade-in",
            toggleClass: {
                targets: className,
                className: "active",
            },
        },
    });
}

function setParallax(value) {
    var className = "." + value;
    gsap.to(className, {
        scrollTrigger: {
            trigger: className,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: false,
            id: "parallax",
            onUpdate: (self) =>
                (self.trigger.style.backgroundPositionY =
                    100 - 100 * self.progress + "%"),
        },
    });
}

function setFadeOnScroll(value) {
    var className = "." + value;
    gsap.to(className, {
        scrollTrigger: {
            trigger: className,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: false,
            id: "fade-on-scroll",
            onUpdate: (self) => {
                var percentageFromCenter = (self.progress - 0.5) * 2;
                self.trigger.style.opacity =
                    1 - Math.abs(percentageFromCenter);
            },
        },
    });
}

function showSnackbar(value) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.innerHTML = value;
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}