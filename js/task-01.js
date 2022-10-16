const numOfCategoriesEl = document.querySelectorAll('li.item');
const qtyOfCategoriesEl = numOfCategoriesEl.length;
console.log('Number of categories: ', qtyOfCategoriesEl);

numOfCategoriesEl.forEach((element) => {
    let nameOfSubCategoryEl = element.querySelector('h2').textContent;
    let qtyOfSubCategoriesEl = element.querySelectorAll('li');
    let qryEl = qtyOfSubCategoriesEl.length;

    console.log('Category: ', nameOfSubCategoryEl);
    console.log('Elements: ', qryEl);
});







