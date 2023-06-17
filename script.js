//your code here!
document.addEventListener("DOMContentLoaded", function () {
  // Get the list element
  const list = document.getElementById("infi-list");

  // Function to add new list items
  function addItems() {
    for (let i = 0; i < 2; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = "List Item";
      list.appendChild(listItem);
    }
  }

  // Add initial list items
  for (let i = 0; i < 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "List Item";
    list.appendChild(listItem);
  }

  // Check if user has reached the bottom of the list
  function checkScroll() {
    const listBottom = list.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (listBottom <= windowHeight) {
      // Add more items
      addItems();
    }
  }

  // Attach scroll event listener
  window.addEventListener("scroll", checkScroll);
});

