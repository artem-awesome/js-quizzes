/**
 Напишите функцию, которая найдет все наборы анаграмм в строке.
 Анаграммы - слова, составленные из одного и того же набора букв (рост-сорт-трос)
 */

export const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос';
const findAnagrams = (word, words) => {
  return words.filter(item => item.length === word.length &&
    item.split('').sort().join() === word.split('').sort().join()
  );
};
export function getAnagrams(str) {
  return str.split(' ').reduce((acc, word, index, words) => {
    if (!acc.flat().includes(word)) {
      const nextWords = words.slice(index + 1);
      const anagrams = findAnagrams(word, nextWords);

      if (Array.isArray(anagrams) && anagrams.length > 0) acc.push([word, ...anagrams]);
    }
    return acc;
  }, []);
}

getAnagrams(str);