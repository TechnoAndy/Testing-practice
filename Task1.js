const stringLength = (string) => {
    if (stringLength.length > 1 && stringLength.length < 10) return string.length;
    else {throw Error ('The string exceeds the expected length')};
}

module.exports = stringLength
