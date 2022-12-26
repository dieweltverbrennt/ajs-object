export default function orderByProps(object, arr) {
  const result = [];
  arr.forEach((element) => {
    if (element in object) {
      result.push({
        key: element,
        value: object[element],
      });
    }
  });

  const result2 = [];
  for (const prop in object) {
    if (!arr.includes(prop)) {
      result2.push({
        key: prop,
        value: object[prop],
      });
      result2.sort((a, b) => {
        if (a.key > b.key) {
          return 1;
        }
        if (a.key < b.key) {
          return -1;
        }
        return 0;
      });
    }
  }
  return [...result, ...result2];
}
