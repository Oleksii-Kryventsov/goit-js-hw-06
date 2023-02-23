const categoriesEl = document.querySelectorAll('li.item');

const numberOfCategoriesEl = categoriesEl.length;

console.log(`Number of categories: ${numberOfCategoriesEl}`);

const categoryEl = categoriesEl.forEach(el => {
    const category = el.firstElementChild.textContent;
    const elements = el.lastElementChild.children.length;

    console.log(`Category: ${category}; Elements: ${elements}`)
});