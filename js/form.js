export default class Form{
    constructor(holder,data){
        this.holder = holder;
        this.data = data;
        this.form = this.init();
        this.gridEl = this.holder.querySelector(".grid");
        this.setUpEvents();
    }
    init(){
        this.holder.insertAdjacentHTML("beforeend",
        `<div class="container">   
            <form>
                <input
                    type="text"
                    name="searchString"
                    id="searchString"
                    placeholder="Search your cocktail"
                />
                <input type="submit" id="submitButton" value="search" />
            </form>
            <div class="grid"></div>
        </div>`
        );
        return this.holder.querySelector("form");
    }
    setUpEvents(){
        this.form.addEventListener("submit",this.getData);
    }
    getData = (e) => {
        e.preventDefault();
        const val = this.form.querySelector("#searchString").value;
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${val}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.drinks)
            this.generateList(data.drinks);
        })
        .catch(errorObj => {
            console.log(errorObj);
        });
    }
    generateList = (cocktails) => {
        this.gridEl.innerHTML = cocktails.map(cocktail => 
            `<div>
                <img src="${cocktail.strDrinkThumb}">
                <p>${cocktail.strDrink}</p>
            </div>`
        ).join("");
    }
}