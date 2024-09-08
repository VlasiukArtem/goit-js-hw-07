const categoriesEl = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories : ${categoriesEl.length}`);

categoriesEl.forEach((category) => {
  const titleEl = category.querySelector("h2").textContent;
  const itemsCountEl = category.querySelectorAll("ul li").length;

  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${itemsCountEl}`);
});
