/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
export default function orderByProps(data, order) {
    const orderSort = [];
    for (let j = 0; j < order.length; j += 1) {
      if (order[j] in data) {
        orderSort.push(order[j]);
      }
    }
    const result = [];
    for (const prop in data) {
      if (Object.prototype.hasOwnProperty.call(data, prop)) {
        result.push({ key: prop, value: data[prop] });
      }
    }
    result.sort((prev, next) => (prev.key > next.key ? 1 : -1));
    for (let i = 0; i < orderSort.length; i += 1) {
      const index = result.findIndex((item) => item.key === orderSort[i]);
      result.splice(i, 0, result.splice(index, 1)[0]);
    }
    return result;
  }