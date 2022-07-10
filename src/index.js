module.exports = function toReadable(number) {
    let arrayOfNumbers_1_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrayOfNumbers_20_100 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    let digits = number.toString().split('');
    let digitsLength = digits.length;
    let array = [];

    if (!number) return 'zero';

    switch (digitsLength) {
        case 3:
            let firstDigit = digits[digits.length - 3];
            firstDigit = arrayOfNumbers_1_19[+firstDigit];
            array.push(`${firstDigit} hundred`);
        case 2:
            let middleDigit = digits[digits.length - 2];
            if (middleDigit == 1) {
                middleDigit += digits[digits.length - 1];
                middleDigit = arrayOfNumbers_1_19[+middleDigit];
                array.push(middleDigit);
                return array.join(' ');
            }
            if (middleDigit > 1) {
                middleDigit = arrayOfNumbers_20_100[+middleDigit - 2];
                array.push(middleDigit);
            }
        case 1:
            let lastDigit = digits[digits.length - 1];
            lastDigit = arrayOfNumbers_1_19[+lastDigit];
            if (lastDigit == 'zero') {
                return array.join(' ');
            } else {
                array.push(lastDigit);
                return array.join(' ');
            }
    }
    return array.join(' ');
}
