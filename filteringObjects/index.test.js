import {operations, filterV1, filterV2} from "./index";

test('Решение 1: фильтр возвращает список только правильных операций', () => {
  expect(filterV1(operations)).toEqual([{"amount": 2, "id": 1, "timestamp": 3}, {"amount": 8, "id": 2, "timestamp": 3}]);
});

test('Решение 2: фильтр возвращает список только правильных операций', () => {
  expect(filterV2(operations)).toEqual([{"amount": 2, "id": 1, "timestamp": 3}, {"amount": 8, "id": 2, "timestamp": 3}]);
});