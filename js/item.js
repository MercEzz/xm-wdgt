const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const product = dummyData.find((item) => item.id === parseInt(productId));
console.log(product);

// best matches section
const bestMatches = document.getElementById("best-matches");

//score - card
const score = document.getElementById("score");
const scoreText = document.getElementById("score-text");
const scoreCard = document.getElementById("score-card");
score.textContent = product.score;
let scoreValue = product.score;
if (scoreValue < 30) {
  scoreText.textContent = "Low";
  score.style.color = "#E33F27";
  scoreText.style.color = "#E33F27";
  scoreCard.style.borderColor = "#E33F27";
} else if (scoreValue >= 30 && scoreValue < 70) {
  scoreText.textContent = "Medium";
  score.style.color = "#FDC038";
  scoreText.style.color = "#FDC038";
  scoreCard.style.borderColor = "#FDC038";
} else {
  scoreText.textContent = "High";
  score.style.color = "#1E9B74";
  scoreText.style.color = "#1E9B74";
  scoreCard.style.borderColor = "#1E9B74";
}

//product name
const productName = document.getElementById("product-name");
productName.textContent = product.title;

//product image
const productImage = document.getElementById("product-img");
// productImage.src = product.img;

//back to search button
const backToSearch = document.getElementById("back-to-search");
backToSearch.addEventListener("click", () => {
  window.location.href = "widget.html";
});

//better matches button
const betterMatches = document.getElementById("better-matches");
betterMatches.addEventListener("click", () => {
  bestMatches.scrollIntoView({ behavior: "smooth" });
});

// ingredients/facts
const ingredientButton = document.getElementById("ingredientButton");
const quickButton = document.getElementById("quickButton");
const ingreSection = document.getElementById("ingredient-section");
const quickSection = document.getElementById("quick-section");

let activeButton = "ingredient";

function handleButtonClick(buttonType) {
  if (buttonType === "ingredient") {
    // Toggle classes for ingredient button
    activeButton = "ingredient";
    ingredientButton.classList.add("bg-xmGreen");
    ingredientButton.classList.remove("bg-black");
    ingreSection.classList.remove("hidden");
    ingreSection.classList.add("flex");

    // Reset classes for quick facts button
    quickButton.classList.remove("bg-xmGreen");
    quickButton.classList.add("bg-black");
    quickSection.classList.add("hidden");
    quickSection.classList.remove("flex");
  } else if (buttonType === "quick") {
    // Toggle classes for quick facts button
    activeButton = "quick";
    quickButton.classList.add("bg-xmGreen");
    quickButton.classList.remove("bg-black");
    quickSection.classList.remove("hidden");
    quickSection.classList.add("flex");
    // Reset classes for ingredient button
    ingredientButton.classList.remove("bg-xmGreen");
    ingredientButton.classList.add("bg-black");
    ingreSection.classList.add("hidden");
    ingreSection.classList.remove("flex");
  }
}

ingredientButton.addEventListener("click", function () {
  handleButtonClick("ingredient");
});

quickButton.addEventListener("click", function () {
  handleButtonClick("quick");
});

// ingredient-section
const ingredientSection = document.getElementById("ingredient-section");
product.ingredients.map((item) => {
  const ingreCirle = document.createElement("div");
  ingreCirle.classList.add(
    "w-full",
    "flex",
    "flex-col",
    "items-center",
    "gap-2.5",
    "lg:gap-5"
  );
  const ingreScore = document.createElement("div");
  ingreScore.classList.add(
    "w-8",
    "h-8",
    "md:w-16",
    "md:h-16",
    "lg:w-32",
    "lg:h-32",
    "border-4",
    "border-gray-300",
    "md:border-10",
    "md:border-gray-300",
    "lg:border-20",
    "lg:border-gray-300",
    "rounded-full",
    "flex",
    "items-center",
    "justify-center"
  );
  const ingreNum = document.createElement("h2");
  ingreNum.classList.add("text-center", "text-xs", "md:text-xl", "lg:text-6xl");
  ingreNum.textContent = item.score;

  const ingreTitle = document.createElement("p");
  ingreTitle.classList.add(
    "text-xxs",
    "text-center",
    "md:text-xs",
    "lg:text-sm"
  );
  ingreTitle.textContent = item.title;

  ingreScore.appendChild(ingreNum);
  ingreCirle.appendChild(ingreScore);
  ingreCirle.appendChild(ingreTitle);
  ingredientSection.appendChild(ingreCirle);
});

// positive-facts section
const posFacts = document.getElementById("pos-facts");
product.posFacts.map((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("mt-2", "list-none");
  const listDiv = document.createElement("div");
  listDiv.classList.add("flex", "items-center", "gap-2");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("fill", "#1E9B74");
  svg.setAttribute("stroke-width", "0");
  svg.setAttribute("viewBox", "0 0 1024 1024");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("height", "1em");
  svg.setAttribute("width", "1em");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"
  );
  svg.appendChild(path);
  const listText = document.createElement("span");
  listText.classList.add("text-[10px]", "md:text-sm", "lg:text-base");
  listText.textContent = item;
  listDiv.appendChild(svg);
  listDiv.appendChild(listText);
  listItem.appendChild(listDiv);
  posFacts.appendChild(listItem);
});

// negative-facts section
const negFacts = document.getElementById("neg-facts");
product.negFacts.map((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("mt-2", "list-none");
  const listDiv = document.createElement("div");
  listDiv.classList.add("flex", "items-center", "gap-2");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("fill", "#E33F27");
  svg.setAttribute("stroke-width", "0");
  svg.setAttribute("viewBox", "0 0 1024 1024");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("height", "1em");
  svg.setAttribute("width", "1em");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"
  );
  svg.appendChild(path);
  const listText = document.createElement("span");
  listText.classList.add("text-[10px]", "md:text-sm", "lg:text-base");
  listText.textContent = item;
  listDiv.appendChild(svg);
  listDiv.appendChild(listText);
  listItem.appendChild(listDiv);
  negFacts.appendChild(listItem);
});

dummyData.map((item) => {
  const proCard = document.createElement("div");
  proCard.classList.add(
    "max-w-fit",
    "px-3",
    "md:px-5",
    "lg:px-6",
    "py-3",
    "md:py-5",
    "lg:py-6",
    "flex",
    "items-start",
    "justify-center",
    "flex-col",
    "gap-2.5",
    "lg:gap-5",
    "rounded-[20px]",
    "lg:rounded-[30px]",
    "bg-[#070707]"
  );
  const div1 = document.createElement("div");
  div1.classList.add("flex", "w-full", "items-start", "gap-2.5", "lg:gap-5");
  const div2 = document.createElement("div");
  div2.classList.add("flex", "w-1/2");
  const proImg = document.createElement("img");
  proImg.classList.add("h-[50px]", "md:h-120px", "lg:h-150px");
  proImg.src = item.img;
  div2.appendChild(proImg);
  div1.appendChild(div2);
  const div3 = document.createElement("div");
  div3.classList.add("flex", "w-1/2", "flex-col", "items-center");
  const div4 = document.createElement("div");
  div4.classList.add(
    "relative",
    "border-[0.15em]",
    "border-[color]",
    "text-center",
    "right-0",
    "top-0",
    "px-1",
    "md:px-3",
    "lg:px-4",
    "flex",
    "items-center",
    "justify-center",
    "text-sm",
    "md:text-3xl",
    "lg:text-4xl",
    "py-1",
    "md:py-3",
    "lg:py-4"
  );
  const span1 = document.createElement("span");
  span1.classList.add(
    "absolute",
    "block",
    "bg-[#070707]",
    "top-[-0.3em]",
    "md:top-[-0.2em]",
    "bottom-[-0.3em]",
    "md:bottom-[-0.2em]",
    "left-[0.5rem]",
    "md:left-[1.3rem]",
    "lg:left-[1rem]",
    "right-[0.5rem]",
    "md:right-[1.3rem]",
    "lg:right-[1rem]"
  );
  const span2 = document.createElement("span");
  span2.classList.add(
    "absolute",
    "block",
    "bg-[#070707]",
    "top-[0.4em]",
    "md:top-[1rem]",
    "lg:top-[0.5em]",
    "bottom-[0.4em]",
    "lg:bottom-[0.5em]",
    "left-[-0.3em]",
    "md:left-[-0.4em]",
    "lg:left-[-0.7rem]",
    "right-[-0.3em]",
    "md:right-[-0.4em]",
    "lg:right-[-0.7rem]"
  );
  const score = document.createElement("p");
  score.classList.add("relative", "z-10", "font-semibold");
  score.textContent = item.score;
  div4.appendChild(span1);
  div4.appendChild(span2);
  div4.appendChild(score);
  const scoreText = document.createElement("p");
  scoreText.classList.add(
    "text-xxs",
    "md:text-xs",
    "lg:text-sm",
    "text-center",
    "pt-1"
  );
  let scoreValue = item.score;
  if (scoreValue < 30) {
    scoreText.textContent = "Low";
    score.style.color = "#E33F27";
    div4.style.borderColor = "#E33F27";
    scoreText.style.color = "#E33F27";
  } else if (scoreValue >= 30 && scoreValue < 70) {
    scoreText.textContent = "Medium";
    score.style.color = "#FDC038";
    div4.style.borderColor = "#FDC038";
    scoreText.style.color = "#FDC038";
  } else {
    scoreText.textContent = "High";
    score.style.color = "#1E9B74";
    div4.style.borderColor = "#1E9B74";
    scoreText.style.color = "#1E9B74";
  }
  div3.appendChild(div4);
  div3.appendChild(scoreText);
  div1.appendChild(div3);
  const title = document.createElement("h2");
  title.classList.add(
    "text-[10px]",
    "md:text-sm",
    "lg:text-lg",
    "text-bold",
    "truncate"
  );
  title.textContent = item.title;

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add(
    "flex",
    "w-full",
    "items-center",
    "justify-between",
    "gap-2.5",
    "lg:gap-5",
    "pt-1"
  );
  const viewButton = document.createElement("button");
  viewButton.classList.add(
    "bg-xmYellow",
    "text-black",
    "h-[15px]",
    "lg:h-[30px]",
    "font-semibold",
    "text-xxs",
    "md:text-xs",
    "lg:text-sm",
    "px-2",
    "md:px-5",
    "rounded-[15px]",
    "lg:rounded-[20px]"
  );
  viewButton.textContent = "View";
  viewButton.addEventListener("click", () => {
    navigateToProductPage(item);
  });
  buttonDiv.appendChild(viewButton);
  const buyButton = document.createElement("button");
  buyButton.classList.add(
    "bg-xmGreen",
    "text-black",
    "h-[15px]",
    "lg:h-[30px]",
    "font-semibold",
    "text-xxs",
    "md:text-xs",
    "lg:text-sm",
    "px-2",
    "md:px-5",
    "rounded-[15px]",
    "lg:rounded-[20px]"
  );
  buyButton.textContent = "Buy";
  buttonDiv.appendChild(buyButton);
  proCard.appendChild(div1);
  proCard.appendChild(title);
  proCard.appendChild(buttonDiv);
  bestMatches.appendChild(proCard);
});

function navigateToProductPage(item) {
  let url = `product.html?id=${item.id}`;
  window.location.href = url;
}
