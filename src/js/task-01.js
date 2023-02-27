const categoriesEl = document.querySelectorAll('li.item');

const numberOfCategoriesEl = categoriesEl.length;

console.log(`Number of categories: ${numberOfCategoriesEl}`);

const categoryEl = categoriesEl.forEach(element => {
    const category = element.firstElementChild.textContent;
    const elements = element.lastElementChild.children.length;

    console.log(`Category: ${category}; Elements: ${elements}`)
});