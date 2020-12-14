export default class Header{
    constructor(holder){
        this.holder = holder;
        this.init();
    }
    init(){
        this.holder.insertAdjacentHTML("beforeend",
        `<header>
            <h1>Cocktail Finder</h1>
        </header>`
        )
    }
}
