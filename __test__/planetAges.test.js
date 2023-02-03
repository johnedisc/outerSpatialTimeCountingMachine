import { PlanetAges } from './../src/js/planetAges.js';

describe('planetAges class', () => {

  let planetAges;

  beforeEach(() => {
    planetAges = new PlanetAges;
  });

  test('should return propery values when accessed', () => {
    expect(Object.keys(planetAges)).toEqual(['mercury','venus','mars','jupiter']);
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
