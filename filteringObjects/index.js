// Есть список операций:
export const operations = [
  {"id": 1, "timestamp": 2, "amount": 1},
  {"id": 2, "timestamp": 3, "amount": 8},
  {"id": 1, "timestamp": 3, "amount": 2}
]

// В этом списке операции дублируются по id если так случилось, то правильной операцией считается та,
// у которой больше timestamp

// Задача: написать функцию filter, так чтобы она
// возвращала только правильные операции

export const filterV1 = (operations) => {
  return operations.reduce((acc, operation) => {
    const existOperationIndex = acc.findIndex((item) => item.id === operation.id);
    if (existOperationIndex === -1) {
      acc.push(operation);
    } else {
      if (acc[existOperationIndex].timestamp < operation.timestamp) {
        acc[existOperationIndex] = operation;
      }
    }
    return acc;
  }, [])
};

export const filterV2 = (operations) => {
  const sortedOperation = [...operations].sort((a,b) => {
   if (a.id < b.id) return -1;
   if (a.id > b.id) return 1;
   return a.timestamp < b.timestamp ? -1 : 1;
  });

  let filteredOperations = [];
  for (let i = 0, size = sortedOperation.length; i < size; i += 1) {
    if (i !== size - 1) {
      if (sortedOperation[i].id !== sortedOperation[i + 1].id) {
        filteredOperations.push(sortedOperation[i]);
      }
    } else {
      if (sortedOperation[i - 1].id !== sortedOperation[i].id) {
        filteredOperations.push(sortedOperation[i]);
      }
    }
  }
  return filteredOperations;
}