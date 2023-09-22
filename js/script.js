const hamburgerBtn = document.getElementById("btn-menu");
const nav = document.getElementById("menu");
var sliderTimer = null;

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

function slider(direction = "right") {
  const elements = document.getElementsByClassName("testimonial");
  const min = 0;
  const max = elements.length;
  let initialTarget,
    target = 0;
  for (let i = min; i < max; i++) {
    if (!elements[i].classList.contains("hidden")) {
      initialTarget = i;
      break;
    }
  }
  if (direction == "left") {
    target = initialTarget === 0 ? initialTarget - 1 + max : initialTarget - 1;
    elements[target].style.animationName = "opacityTransitionLeft";
  } else {
    target =
      initialTarget === max - 1 ? initialTarget + 1 - max : initialTarget + 1;
    elements[target].style.animationName = "opacityTransitionRight";
  }
  elements[initialTarget].classList.toggle("flex");
  elements[target].classList.toggle("flex");
  elements[initialTarget].classList.toggle("hidden");
  elements[target].classList.toggle("hidden");
}

function validateEmail(address) {
  return /^[\w._-]+@([\w\-]+\.)+[\w]{2,}$/.test(address);
}

function subscribeSubmit() {
  const email = document.querySelector("#update-container>input").value;
  if (!email) {
    alert("Email address can't be empty.");
  } else if (!validateEmail(email)) {
    alert("Please provide valid email address.");
  }
}

function checkWidthAndSlider() {
  console.log("Called");
  clearInterval(sliderTimer);

  if (window.innerWidth < 720) {
    sliderTimer = setInterval(() => {
      slider("right");
    }, 5000);
  }
}

// Event Listeners
document
  .querySelector("#left-slider > button")
  .addEventListener("click", () => {
    slider("left");
    clearInterval(sliderTimer);
  });
document
  .querySelector("#right-slider > button")
  .addEventListener("click", () => {
    slider("right");
    clearInterval(sliderTimer);
  });
document
  .querySelector("#update-container>button")
  .addEventListener("click", subscribeSubmit);

window.addEventListener("resize", checkWidthAndSlider);

checkWidthAndSlider();
