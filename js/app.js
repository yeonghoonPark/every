"use strict";

/**
 * every()
 *
 * 배열 요소가 어떠한 조건에 모두 만족하는지 판별한다, 모두 만족하면 true, 하나라도 만족하지 않으면 false를 반환한다.
 * 조건에 따라 배열을 순행하는 도중 조건에 충족하지 못하는 경우 순행은 그 즉시 중단된다.(break기능을 충족할 수 있다.)
 *
 * 사용처 : 배열 내부 요소의 모든 값에 대해서 검토가 필요한 경우 사용한다.
 *
 * 🎈. 빈 배열에서 호출할 경우 무조건 true를 반환한다.
 *
 * 1. 첫번째 parameter, currentValue = 배열의 요소
 * 2. 두번째 parameter(Optional), index = 배열의 index
 * 3. 새번째 parameter(Optional), array = 배열 자체
 *
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 *
 */

const isBelowThreshold = (item) => item < 40;

const array1 = [1, 30, 23, 10];

console.log(
  array1.every(isBelowThreshold),
  "array1의 모든 요소는 40보다 작냐?",
); // true
