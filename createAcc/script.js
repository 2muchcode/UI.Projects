const form = document.getElementById("form");
const email = document.getElementById("email");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

console.log("its loading");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// getting values from inputs
	const emailVal = email.value.trim();
	const userNameVal = userName.value.trim();
	const passwordVal = password.value.trim();
	const passwordVal2 = password2.value.trim();

	if (userNameVal === "") {
		// show error
		// add error class
		setErrorFor(username, "Username cannot be blank");
	} else {
		// add success class
		setSuccessFor(username);
	}

	if (emailVal === "") {
		setErrorFor(email, "Email cannot be blank");
	} else if (!isEmail(emailVal)) {
		setErrorFor(email, "Email is not valid");
	} else {
		setSuccessFor(email);
	}

	if (passwordVal === "") {
		setErrorFor(password, "Password cannot be blank");
	} else {
		setSuccessFor(password);
	}

	if (passwordVal2 === "") {
		setErrorFor(password2, "Password cannot be blank");
	} else if (passwordVal2 !== passwordVal) {
		setErrorFor(password2, "Password is not same");
	} else {
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement; // .form-control
	console.log(formControl);
	const small = formControl.querySelector("small");

	// adding error message inside small tag
	small.innerText = message;

	//adding error class
	formControl.className = "form-control error";
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

function isEmail(email) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}
