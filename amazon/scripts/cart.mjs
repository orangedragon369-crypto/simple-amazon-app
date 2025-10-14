class Cart{
    constructor(tax) {
        this.items = [];
        this.prices = [];
        this.cost = 4.99;
        this.taxes = this.cost * tax;
        this.total = this.cost + this.taxes;
    }

    len(){
        if (this.items.length >= 100) return "99+";
        return this.items.length
    }
    
    addItem(item, cost){
        this.items.push(item);
        this.prices.push(cost);
        this.cost += cost;
    }

    pop(item){
        item = this.getItem(item);
        this.items.pop(item[2]);
        cost -= this.prices.pop(item[2]);
        return item;
    }

    getItem(item){
        let toReturn = [];
        item = typeof(items) === "number" ? item : this.items.findIndex(item);
        toReturn.push(this.prices.at(item));
        toReturn.push(this.items.at(item));
        toReturn.push(item);
        return toReturn;
    }

    saveItems(){
        localStorage.setItem("this.items", this.items);
        localStorage.setItem("this.prices", this.prices);
        localStorage.setItem("this.cost", this.cost);
    }

    getInfoStorage(){
        this.items = localStorage.getItem("this.items") !== null? localStorage.getItem("this.items"): this.items;
        this.prices = localStorage.getItem("this.prices") !== null? localStorage.getItem("this.prices"): this.prices;
        this.cost = localStorage.getItem("this.cost") !== null? localStorage.getItem("this.cost"): 0;
    }
}
 const cart = new Cart(.0745);
 cart.getInfoStorage()
export {cart};