import orderByProps from '../app';

const obj = {
  name: 'daemon',
  health: 70,
  level: 3,
  attack: 120,
  defence: 10,
};

test('The order of the elements must be correct', () => {
  const expected = [
    { key: 'name', value: 'daemon' },
    { key: 'level', value: 3 },
    { key: 'attack', value: 120 },
    { key: 'defence', value: 10 },
    { key: 'health', value: 70 },
  ];
  expect(orderByProps(obj, ['name', 'level'])).toEqual(expected);
});
