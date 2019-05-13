// Addition

const $formsum = document.getElementById("addition");

function handleAddition(event) {
  event.preventDefault();
  console.log(event);
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements["sum-result"];
  $output.innerHTML = +$first.value + +$second.value;
}

$formsum.addEventListener("submit", handleAddition);

// Substraction

const $formminus = document.getElementById("substraction");

function handleSubstraction(event) {
  event.preventDefault();
  console.log(event);
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements["sub-result"];
  $output.innerHTML = +$first.value - +$second.value;
}

$formminus.addEventListener("submit", handleSubstraction);

// Multiplication

const $formmul = document.getElementById("multiplication");

function handleMultiplication(event) {
  event.preventDefault();
  console.log(event);
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements["mul-result"];
  $output.innerHTML = +$first.value * +$second.value;
}

$formmul.addEventListener("submit", handleMultiplication);

// Division

const $formdivide = document.getElementById("division");

function handleDivision(event) {
  event.preventDefault();
  console.log(event);
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements["divide-result"];
  $output.innerHTML = +$first.value / +$second.value;
}

$formdivide.addEventListener("submit", handleDivision);

// Square root

const $formsqr = document.getElementById("sqr");

function handleSquareRoot(event) {
  event.preventDefault();
  console.log(event);
  const $first = event.target.elements.first;
  const $output = event.target.elements["sqr-result"];
  $output.innerHTML = Math.sqrt(+$first.value);
}

$formsqr.addEventListener("submit", handleSquareRoot);

// Power

const $formpow = document.getElementById("power");

function handlePower(event) {
  event.preventDefault();
  console.log(event);
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements["pow-result"];
  $output.innerHTML = (+$first.value) ** +$second.value;
}

$formpow.addEventListener("submit", handlePower);
