'use strict';
function atom1() {
  alert("atom1 함수 호출 :");
}
function atom2(msg) {
  alert("atom2 함수 호출 : " + msg);
}
function atom3(su) {
  alert("atom3 함수 호출 : " + su + 100);
}
function atom4(su1, su2) {
  alert("atom4 함수 호출 : " + (su1 + su2) + "\n" + (su1 - su2) 
                    + "\n" + (su1 * su2) + "\n" + (su1 / su2) + "\n");
}
function atom5(name, age) {
  let intAge = parseInt(age);
  alert("atom4 함수 호출 : " + "성명 : " + name +" 나이 : " + (intAge + 1))
}