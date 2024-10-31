export default class Display {
    constructor(displayElement) {
        this._displayElement = displayElement;
    }

    get value() {
        return this._displayElement.innerText;
    }

    set value(value) {
        this._displayElement.innerText = value;
    }

    clear() {
        this.value = "0";
    }
}