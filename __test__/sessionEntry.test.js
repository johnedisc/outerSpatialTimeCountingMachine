import entry from './../src/sessionEntry.js';

describe('entry', () => {

  let reusableTest;

  beforeEach(() => {
    reusableTest = new Entry('3.2');
  });

  afterEach(() => {
    reusableTest = '';
  });

  test('should correctly create a entry object with three lengths', () => {
    const entry = new entry('2.3');
    expect(entry.date).toEqual('2.3');
  });
});
