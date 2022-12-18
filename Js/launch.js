(() => {
  // Specify the deadline date
  const deadlineDate = new Date('December 19, 2022 23:59:59').getTime();

  // Cache all countdown boxes into consts
  const countdownDays = document.querySelector('.countdown__days .number');
  const countdownHours = document.querySelector('.countdown__hours .number');
  const countdownMinutes = document.querySelector('.countdown__minutes .number');
  const countdownSeconds = document.querySelector('.countdown__seconds .number');

  // Update the count down every 1 second (1000 milliseconds)
  setInterval(() => {
    // Get current date and time
    const currentDate = new Date().getTime();

    // Calculate the distance between current date and time and the deadline date and time
    const distance = deadlineDate - currentDate;

    // Calculations the data for remaining days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60) / 1000);

    // Insert the result data into individual countdown boxes
    countdownDays.innerHTML = days;
    countdownHours.innerHTML = hours;
    countdownMinutes.innerHTML = minutes;
    countdownSeconds.innerHTML = seconds;
  }, 1000);
})();

// Necessary GSAP libs:
// * TweenLite.min.js
// * TimelineLite.min.js
// * AttrPlugin.min.js
// * CSSPlugin.min.js
//
// Total size is about 80kB

window.onload = function () {
  // Keep graphics fit the screen for small devices
  mobileScale();

  // Loop timeline
  let tl = new TimelineLite({
      onComplete: function() {
          this.restart();
      }
  });

  // Open the laptop
  tl.to('.laptop-lid', 0.1, {
      fill: '#313638',
      stroke: 'none',
      ease: Linear.easeNone
  }, '+=1');
  tl.to('.laptop-lid', 0.6, {
      attr: {d: 'M 70,240 l 341.643 0 l 0 -215.73 l -341.643 0 l 0 215.73 z M 4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV048 18.048 l 0 231.663 z'},
      ease: Power1.easeOut
  }, '-=0.1');

  // Switch on the screen
  tl.to(['.screen-bg', '.grid', '.logo'], 0.1, {
      opacity: 1,
      ease: Power1.easeOut
  });

  // Draw charts
  tl.to('.chart', 0.5, {
      strokeDashoffset: 0,
      ease: Power1.easeIn
  });

  // make boxes fly from the laptop center + fade in the boxs
  const delta = [
      {x: 12, y: 17},
      {x: -15, y: 13},
      {x: -14, y: -13},
      {x: 21, y: 0},
      {x: -3, y: 23},
      {x: -21, y: 11},
      {x: -21, y: 2},
      {x: -20, y: 5},
      {x: 11, y: -27},
      {x: 24, y: -11},
      {x: 21, y: 9}
  ];
  const textBoxes = Array.from(document.getElementsByClassName('text-block'));
  for (idx in delta) {
      tl.fromTo(textBoxes[idx], 0.6, {
          x: delta[idx].x,
          y: delta[idx].y
      }, {
          x: 0,
          y: 0,
          opacity: 1,
          ease: Power2.easeOut
      }, 2.5);
  }

  // fade out the whole container
  tl.to('.container', 0.5, {
      opacity: 0
  }, '+=1');
};

window.onresize = mobileScale;

// Keep graphics fit the screen for small devices
function mobileScale() {
  scale = Math.min(
      // the container is (577 x 418) px initially
      window.innerWidth / 577,
      window.innerHeight / 418
  );
  if (scale < 1) {
      TweenLite.set('.container', {
          scale: scale,
          transformOrigin: 'center center'
      })
  }
}

$(window).on("load", function() {
  $(".loader-wrapper").fadeout("slow");
})