// FOR SECTION FAQ
const items = document.querySelectorAll(".faq--accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (hasItem = 0; hasItem < items.length; hasItem++) {
    items[hasItem].setAttribute("aria-expanded", false);
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
