import {str, getAnagrams} from "./index";

test('функция возвращает массив длиной 6', () => {
  expect(getAnagrams(str).length).toBe(6);
});

test('функция возвращает ответ со структурой', () => {
  expect(getAnagrams(str)).toEqual([["адрес", "среда"], ["карп", "парк"], ["кума", "мука"], ["куст", "стук"], ["мир", "рим"], ["рост", "сорт", "трос"]]);
});
