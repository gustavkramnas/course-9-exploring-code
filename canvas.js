//Add audio to the nav ball animatiom
const audio = new Audio("./public/sound.wav");
const ball = document.querySelector(".soccer");

ball.addEventListener("click", () => {
  audio.currentTime = 0;

  for (let i = 0; i < 2; i++) {
    audio.play();
  }
});


// STARS
const star_count = 300;
const stars = [];

function initStarsAnimation() {
  const background = document.querySelector(".background");
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height = background.offsetHeight;

  for (let i = 1; i <= star_count; i++) {
    let rand_x = Math.floor(Math.random() * width) + 1;
    let rand_y = Math.floor(Math.random() * height) + 1;
    let rand_color = Math.floor(Math.random() * 10) + 1;
    let speed = Math.floor(Math.random() * 5) + 1;

    const element = document.createElement("div");
    element.className = "star star-" + rand_color;
    element.style.left = rand_x + "px";
    element.style.top = rand_y + "px";
    element.setAttribute("data-speed", speed);
    document.body.appendChild(element);
    stars[i] = element;
  }

  animateStars();
}

function animateStars() {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height = document.querySelector(".background").offsetHeight;

  for (let i = 1; i < stars.length; i++) {
    let left = stars[i].style.left;
    if (left === "0px") {
      stars[i].style.left = width - 10 + "px";
    } else {
      stars[i].style.left =
        parseInt(left) - stars[i].getAttribute("data-speed") + "px";
    }
  }

  requestAnimationFrame(animateStars);
}

initStarsAnimation();

//FIRE
var numOfFireElements = 8;
var fireElementImages = [];
var fireElements = [];

loadImages();
initFireAnimation();

function loadImages() {
  for (var i = 1; i < 8; i++) {
    fireElementImages[i] = new Image();
    fireElementImages[i].src = "./public/fire-animation/fire-" + i + ".png";
    fireElementImages[i].id = i;
    $(fireElementImages[i]).addClass("FireImage");
    $(fireElementImages[i]).load(function () {
      console.log("Image Load Complete: " + this.id);
    });
  }
}

function initFireAnimation() {
  for (var i = 0; i < numOfFireElements; i++) {
    fireElements[i] = document.createElement("div");

    for (var p = 0; p < fireElementImages.length; p++) {
      $(fireElements[i]).append($(fireElementImages[p]).clone(true));
    }

    $(fireElements[i]).addClass("FireElement");
    $(fireElements[i]).css({ left: i * 5 + "px" });
    $("#fireplace").append(fireElements[i]);

    loopFireElement(fireElements[i]);
  }
}

function loopFireElement($element) {
  var elementImages = $($element).children().toArray();
  var randomVisibleElement = Math.floor(
    Math.random() * fireElementImages.length
  );

  for (var i = 0; i < elementImages.length; i++) {
    if (i != randomVisibleElement) {
      TweenMax.to(elementImages[i], 0, { autoAlpha: 0 });
    } else {
      TweenMax.to(elementImages[i], 0, { autoAlpha: 1 });
    }
  }

  TweenMax.to($element, 0, { scaleX: 0, scaleY: 0, rotation: 0, autoAlpha: 1 });

  var animationDuration = Math.random() * 0.4 + 0.4;
  var animationDelay = Math.random() * 0.8;

  TweenMax.to($element, animationDuration * 0.75, {
    delay: animationDuration * 0.25 + animationDelay,
    autoAlpha: 0,
  });

  TweenMax.to($element, animationDuration, {
    scaleX: Math.random() * 0.1 + 0.4,
    scaleY: Math.random() * 0.1 + 0.4,
    delay: animationDelay,
    onComplete: loopFireElement,
    onCompleteParams: [$element],
  });
}

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml15 .word",
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i,
  })
  .add({
    targets: ".ml15",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
