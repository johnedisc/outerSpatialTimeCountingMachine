import { PlanetAges } from './../src/js/planetAges.js';

describe('planetAges class', () => {

  let planetAges;

  beforeEach(() => {
    planetAges = new PlanetAges(56);
  });

  test('should return properties when accessed', () => {
    expect(Object.keys(planetAges)).toEqual(['age','earth','mercury','venus','mars','jupiter']);
  });
  
  test('should reflect age argument passed into function', () => {
    expect(planetAges.age).toEqual(56);
  });

  describe('calcAges() method', () => {

    test('should calculate and set object property to planet ages', () => {
      planetAges.calcAges();
      console.log(planetAges);
      let tmpArray = Object.keys(planetAges).filter(el => el !== 'age');
      expect(tmpArray.map(el => planetAges[el].converted)).toEqual([56,233.33,90.32,29.79,4.72]);
    });

  });
  describe('yearSinceBirthday() method', () => {

    test('should return age - birthday * ratio of planet years', () => {
      expect(planetAges.yearSinceBirthday(43)).toEqual([13,54.16,8.06,6.91,1.09]);
    });

  });
});
