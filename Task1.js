const stringLength = (string) => {
    if (string.length > 1 && string.length < 10) return string.length;
    else {throw Error ('The string exceeds the expected length')};
}

module.exports = stringLength
