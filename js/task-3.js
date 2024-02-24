function getElementWidth(content, padding, border) {
    const result = content + padding + padding + border + border;
    return result;
}


console.log(getElementWidth(Number.parseFloat("50px"), Number.parseFloat("8px"), Number.parseFloat("4px")));
console.log(getElementWidth(Number.parseFloat("60px"), Number.parseFloat("12px"), Number.parseFloat("8.5px")));
console.log(getElementWidth(Number.parseFloat("200px"), Number.parseFloat("0px"), Number.parseFloat("0px")));
