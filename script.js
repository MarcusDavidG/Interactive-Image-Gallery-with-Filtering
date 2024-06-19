// JavaScript for filtering images
const filterButtons = document.querySelectorAll(".filter-btn");
const images = document.querySelectorAll(".image");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.dataset.filter;
    images.forEach((image) => {
      if (filterValue === "all" || image.classList.contains(filterValue)) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
    // Toggle active class
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
