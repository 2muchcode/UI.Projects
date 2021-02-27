const prevDisplayTextElement = document.querySelector("[data-prev-display]");
const mainDisplayTextElement = document.querySelector("[data-main-display]");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");

class Calculator {
	constructor(prevDisplayTextElement, mainDisplayTextElement) {
		this.prevDisplayTextElement = prevDisplayTextElement;
		this.mainDisplayTextElement = mainDisplayTextElement;
		this.clear();
	}

	clear() {
		this.prevDisplay = "";
		this.mainDisplay = "";
		this.operation = undefined;
	}

	appendNumber(number) {
		if (number === "." && this.mainDisplay.includes(".")) return;
		this.mainDisplay =
			this.mainDisplay.toString() + number.toString();
	}

	delete() {
		this.mainDisplay = this.mainDisplay.toString().slice(0,-1);
	}

	calculate() {
		let compute;
		const prev = parseFloat(this.prevDisplay);
		const main = parseFloat(this.mainDislplay);
		if ( isNaN(prev) || isNaN(main) ) return;

		switch ( this.operation ) {
			case "+":
				compute = prev + main;
				break;
			case "-":
				compute = prev - main;
				break;
			case "x":
				compute = prev * main;
				break;
			case "÷":
				compute = prev / main;
				break;
			default:
				break;
		}
		this.mainDisplay = compute;
		this.operation = undefined;
		this.prevDisplay = "";
	}

	selectOperation(operation) {
		if ( this.mainDisplay === "" ) return;
		if ( this.prevDisplay !== "" ) {
			this.compute()
		}
		this.operation = operation;
		this.prevDisplay = this.mainDisplay;
		this.mainDisplay = "";
	}

	getDisplayNumber(number) {
		const stringNumber = number.toString();
		const integerDigits = parseFloat(stringNumber.split(".")[0])
		const decimalDigits = stringNumber.split(".")[1]
		let integerDisplay;
		if ( isNaN(integerDigits)) {
			integerDisplay = "";
		} else {
			integerDisplay = integerDisplay.toLocaleString("en", {
				maximumFractionDigits: 0})
		}
		if ( decimalDigits != null ) {
			return `${integerDisplay}.${decimalDigits}`;
		} else {
			return integerDisplay;
		}
	}

	updateDisplay() {
		this.mainDisplayTextElement.innerText = this.getDisplayNumber(this.mainDisplay);
		if ( this.operation !== null ) {
		this.prevDisplayTextElement.innerText = `${this.prevDisplay} ${this.operation}`;
		} else {
			this.prevDisplayTextElement.innerText = "";
	}
}
}

const calculator = new Calculator(
	prevDisplayTextElement,
	mainDisplayTextElement
);

numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});

operatorButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.selectOperation(button.innerText);
		calculator.updateDisplay();
	});
});

equalsButton.addEventListener("click", button => {
	calculator.calculate();
	calculator.updateDisplay();
});

allClearButton.addEventListener("click", button => {
	calculator.calculate();
	calculator.updateDisplay();
});

deleteButton.addEventListener("click", button => {
	calculator.delete();
	calculator.updateDisplay();
});
