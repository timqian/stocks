import should from 'should'
import allMatches from '../src/utils/allMatches'

describe('allMatches', function () {
  it('return matched array', function () {
    const str = 'hi, i am timqian, 600, 564, 112'
    const regExp = /(\d{3})(,)/ig
    const matchedArr = allMatches(str, regExp)
    matchedArr.should.deepEqual([ [ '600', ',' ], [ '564', ',' ] ])
  })
})
