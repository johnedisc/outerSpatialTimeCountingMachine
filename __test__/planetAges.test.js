import { PlanetAges } from './../src/js/planetAges.js';
import { Person } from './../src/js/planetAges.js';

describe('planetAges class', () => {

  let planetAges;
  let person;

  beforeEach(() => {
    planetAges = new PlanetAges;
    let person = new Person(56);
  });

  test('should return propery values when accessed', () => {
    expect(Object.keys(planetAges)).toEqual(['mercury','venus','mars','jupiter']);
  });

  describe('calcAges', () => {
    
    test('should calculate and return converted ages for all properties of PlanetAges', () => {
      expect(planetAges.calcAges(person.age)).toEqual([54,233.33,90.32,29.78,4.72)];
    });
  });
});

describe('Person class', () => {

  test('should reflect age argument passed into function', () => {
    let person = new Person(36);
    expect(person.age).toEqual(36);
  });

});
