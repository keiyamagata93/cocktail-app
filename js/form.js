export default class Form{
    constructor(holder){
        this.holder = holder;
        this.form = this.init();
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
            console.log(data);
        })
        .catch(console.log("error"));
    }
}