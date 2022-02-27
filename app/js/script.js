const showerEls = document.querySelectorAll(".fades");
const bottForm = document.querySelector("form");
const inpField = document.querySelector("input");

let options = {
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    entry.isIntersecting && observer.unobserve(entry.target);
  });
}, options);

showerEls.forEach((showerEl) => {
  observer.observe(showerEl);
});

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

bottForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!EMAIL_REGEX.test(inpField.value)) {
    inpField.parentElement.classList.add("failure");
  } else if (inpField.parentElement.classList.contains("failure"))
    inpField.parentElement.classList.remove("failure");
});

if (window.location.reload) inpField.value = "";
