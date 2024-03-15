import add from '../src/index';
import { expect } from 'chai';

describe('add', () => {
  it('should return the sum of two numbers', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('should return 0 when both numbers are 0', () => {
    const result = add(0, 0);
    expect(result).to.equal(0);
  });

  it('should return a negative number when one of the numbers is negative', () => {
    const result = add(-2, 3);
    expect(result).to.equal(1);
  });
});
