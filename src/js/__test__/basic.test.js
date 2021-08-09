/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
import orderByProps from '../app';

test('should sort data with correct order', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const order = ['name', 'level'];
  const equalData = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, order)).toEqual(equalData);
});

test('wrong name sort', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const order = ['name', 'money'];
  const equalData = [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ];
  expect(orderByProps(obj, order)).toEqual(equalData);
});

test('test for property from Object.prototype', () => {
  const obj = Object.create({ name: 'inherited' });
  const order = ['name', 'money'];
  expect(orderByProps(obj, order)).toEqual([undefined]);
});