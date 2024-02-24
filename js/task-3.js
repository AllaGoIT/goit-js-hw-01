function getElementWidth(content, padding, border) {
    const result = content + padding + padding + border + border;
    return result;
}


console.log(getElementWidth(50, 8, 4));
console.log(getElementWidth(60, 12, 8.5));
console.log(getElementWidth(200, 0, 0));
