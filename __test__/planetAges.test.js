import { PlanetAges } from './../src/js/planetAges.js';
import { Person } from './../src/js/planetAges.js';

describe('planetAges class', () => {

  let planetAges;

  beforeEach(() => {
    planetAges = new PlanetAges;
  });

  test('should return propery values when accessed', () => {
    console.log(Object.keys(planetAges));
    expect(Object.keys(planetAges)).toEqual(['mercury','venus','mars','jupiter']);
  });

  describe('Person class', () => {

    let person;

    beforeEach(() => {
      person = new Person;
    });

    test('should return properties of planet ages via inheritance', () => {
      console.log(Object.keys(person));
      expect(Object.keys(person)).toEqual(['mercury','venus','mars','jupiter']);
    });
    
  });
  
});

