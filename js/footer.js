export default class Footer{
    constructor(holder){
        this.holder = holder;
        this.init();
    }
    init(){
        this.holder.insertAdjacentHTML("beforeend",
        `<footer>
            <p>Oefening cocktail app - Kei Yamagata</p>
        </footer>`
        )
    }
}
