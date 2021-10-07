// Есть список операций:
const operations = [
{"id": 1, "timestamp": 2, "amount": 1},
{"id": 2, "timestamp": 3, "amount": 8},
{"id": 1, "timestamp": 3, "amount": 2}
]

// В этом списке операции дублируются по id если так случилось, то правильной операцией считается та,
// у которой больше timestamp

// Задача: написать функцию filter, так чтобы она
// возвращала только правильные операции

const filter = (operations) => {
// Здесь нужн код
return operations;
};


console.log(filter(operations));