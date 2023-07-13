const categoryButton = document.getElementById("categoryButton");
const productButton = document.getElementById("productButton");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// for search filter
let activeButton = "category";

function handleButtonClick(buttonType) {
  if (buttonType === "category") {
    // Toggle classes for category button
    activeButton = "category";
    categoryButton.classList.add("bg-xmGreen");
    categoryButton.classList.remove("bg-black");
    searchInput.placeholder = "Search by Category";

    // Reset classes for product button
    productButton.classList.remove("bg-xmGreen");
    productButton.classList.add("bg-black");
  } else if (buttonType === "product") {
    // Toggle classes for product button
    activeButton = "product";
    productButton.classList.add("bg-xmGreen");
    productButton.classList.remove("bg-black");
    searchInput.placeholder = "Search by Product";
    // Reset classes for category button
    categoryButton.classList.remove("bg-xmGreen");
    categoryButton.classList.add("bg-black");
  }
}

// Add event listeners to the buttons
categoryButton.addEventListener("click", function () {
  handleButtonClick("category");
});

productButton.addEventListener("click", function () {
  handleButtonClick("product");
});

let filtered;

function handleInputChange(event) {
  searchResults.innerHTML = ""; // Clear previous results
  const input = event.target.value.trim();

  if (input === "") {
    return;
  }

  filtered = filterDataByTitleAndType(activeButton, input);
  filtered.forEach((item) => {
    const listItem = document.createElement("a");
    listItem.classList.add(
      "w-full",
      "font-semibold",
      "text-xs",
      "lg:text-base",
      "px-1",
      "py-1",
      "lg:px-2",
      "border-b-2",
      "border-white",
      "border-opacity-50",
      "hover:cursor-pointer"
    );
    listItem.textContent = `${item.title}`;
    listItem.addEventListener("click", () => {
      navigateToProductPage(item);
    });

    searchResults.appendChild(listItem);
  });
  console.log(filtered);
}

function navigateToProductPage(item) {
  let url = `product.html?id=${item.id}`;
  window.location.href = url;
}

// Function to filter results based on search input
function filterDataByTitleAndType(activeButton, inputValue) {
  const lowerCaseInput = inputValue.toLowerCase();

  const filteredData = dummyData.filter((item) => {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseType = item.type.toLowerCase();

    return (
      lowerCaseTitle.startsWith(lowerCaseInput) &&
      (activeButton.toLowerCase() === "category"
        ? lowerCaseType === "category"
        : true)
    );
  });

  return filteredData;
}
