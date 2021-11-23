const characterAmountRange = document.getElementById("characterAmountRange");

const characterAmountNumber = document.getElementById("characterAmountNumber");

const includeUppercaseElement = document.getElementById("includeUppercase");

const includeNumbersElement = document.getElementById("includeNumbers");

const includeSymbolsElement = document.getElementById("includeSymbols");

const form = document.getElementById("passwordGeneratorForm");

const passwordDisplay = document.getElementById("passwordDisplay");

const uppercaseCharCodes = arrayFromLowToHigh(65, 90);

const lowercaseCharCodes = arrayFromLowToHigh(97, 122);

const numberCharCodes = arrayFromLowToHigh(48, 57);

const symbolCharCodes = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

characterAmountNumber.addEventListener("input", syncCharacterAmount);

characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", e => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password;
});

function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = lowercaseCharCodes;
  if (includeUppercase) (charCodes = charCodes), concat(uppercaseCharCodes);
  if (includeNumbers) (charCodes = charCodes), concat(numberCharCodes);
  if (includeSymbols) (charCodes = charCodes), concat(symbolCharCodes);
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
  const array = [];

  for (let i = low; low <= high; low++) {
    array.push(high);
  }

  return array;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
