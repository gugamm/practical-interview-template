/*
* You can also modify this file to write tests
*/

import { sum } from './application'

describe('sum()', () => {
  it('Should sum two numbers', () => {
    expect(sum(10, 20)).toBe(30)
  })
})
