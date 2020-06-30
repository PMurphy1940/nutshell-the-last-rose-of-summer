//HTML DOM building for News Articles 
//David Bruce

//Adds html to 
const renderArticles = (article) => {
    const articleSection = document.querySelector(".container__main__middle--news").innerHTML += 
    `<section class="section__itemCard article--${article.id}">
    <p class="header__itemCard">Title:  ${article.title}<button id="button__article__delete--${article.id}">Delete</button></p>
    <p><strong>Synopsis:</strong>  ${article.synopsis}</p>
    <p><strong>URL:</strong>  <a href="${article.url}" target="_blank">${article.url}</a></p>
    <p><strong>Timestamp:</strong>  ${article.timestamp}</p>
</section>`
}

export default renderArticles;