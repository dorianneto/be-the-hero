const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate an unique ID', () => {
  it('should genereate a unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
