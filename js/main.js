const input = document.querySelector("#inches");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result span");

btn.onclick = function () {
    if (input.value != "") {
        if (input.value >= 90) {
            result.textContent = `Your degree is ${parseInt(
                input.value
            )}, then your grade is A`;
        } else if (input.value >= 80) {
            result.textContent = `Your degree is ${parseInt(
                input.value
            )}, then your grade is B`;
        } else if (input.value >= 70) {
            result.textContent = `Your degree is ${parseInt(
                input.value
            )}, then your grade is C`;
        } else if (input.value >= 60) {
            result.textContent = `Your degree is ${parseInt(
                input.value
            )}, then your grade is D`;
        } else if (input.value >= 50) {
            result.textContent = `Your degree is ${parseInt(
                input.value
            )}, then your grade is E`;
        } else {
            result.textContent = `Your degree is ${parseInt(
                input.value
            )}, then your grade is F`;
        }
    }
};
