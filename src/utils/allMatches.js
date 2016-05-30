/**
 * Find regExp matched item array of given string
 * ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
 *
 * @param regExp - regExp with parentheses
 * @param str - string to search
 * @return matchedArr - mathed Array
 *
 * example:
 *
 * const str = 'hi, i am timqian, 600, 564, 112'
 * const regExp = /(\d{3})(,)/ig
 * allMatches(str, regExp)  ===>  [ [ '600', ',' ], [ '564', ',' ] ]
 *
 */
function allMatches(str, regExp) {
  let matchedArr = []
  let match
  while ((match = regExp.exec(str)) !== null) {
    matchedArr.push(match.slice(1))
  }
  return matchedArr
}

export default allMatches
