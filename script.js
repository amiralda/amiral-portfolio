const namef = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function storeValues() {
	const obj = {
		name: namef.value,
		email: email.value,
		message: message.value,
	};
	window.localStorage.setItem("myObject", JSON.stringify(obj));
}

namef.addEventListener("input", storeValues);
email.addEventListener("input", storeValues);
message.addEventListener("input", storeValues);

window.addEventListener("load", () => {
	const myObject = localStorage.getItem("myObject");
	const newObj = JSON.parse(myObject);

	namef.value = newObj.name || "";
	email.value = newObj.email || "";
	message.value = newObj.message || "";
});