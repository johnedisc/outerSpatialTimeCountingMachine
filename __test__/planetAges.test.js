import { PlanetAges } from './../src/js/planetAges.js';
import { Person } from './../src/js/planetAges.js';

describe('planetAges class', () => {

  let planetAges;

  beforeEach(() => {
    planetAges = new PlanetAges;
  });

  test('should return propery values when accessed', () => {
    expect(Object.keys(planetAges)).toEqual(['mercury','venus','mars','jupiter']);
  });


});

describe('Person class', () => {

  test('should reflect age argument passed into function', () => {
    let person = new Person(36);
    expect(person.age).toEqual(36);
  });

});
