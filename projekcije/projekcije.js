/*
    autor : Nikola Jovanovic
    indeks : 2019/0440
*/
const rate = () => {
    alert('rate');
}

const addCategoryTag = (tagName) => {
    document.getElementById("tags").append(tagName+",");
    console.log(tagName);
}



const reservCard = () => {
    window.location.href = "../kupovina/kupovina.html"
}