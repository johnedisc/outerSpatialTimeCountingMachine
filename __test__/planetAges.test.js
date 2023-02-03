import PlanetAges from './../src/planetAges.js';

describe('planetAges class', () => {

  test('should return propery values when accessed', () => {
    const planetAges = new PlanetAges();
    expect(planetAges.mercury).toEqual(.24);
  });
});

//describe('entry', () => {
//
//  let reusableTest;
//
//  beforeEach(() => {
//    reusableTest = new Entry('3.2');
//  });
//
//  afterEach(() => {
//    reusableTest = '';
//  });
//
//  test('should correctly create a entry object with three lengths', () => {
//    const entry = new entry('2.3');
//    expect(entry.date).toEqual('2.3');
//  });
//});
