export function foo(numbers: number[], sum: number) {
    return numbers.reduce((acc, num, index, arr) => {
        const findingNumber = sum - num;
        const lastNumbers = arr.slice(index + 1);
        const foundNumberIndex = lastNumbers.indexOf(findingNumber);

        if (foundNumberIndex !== -1) acc.push([index, foundNumberIndex + index + 1]);

        return acc;
    }, []);
}

foo([2,11,7,15], 13);