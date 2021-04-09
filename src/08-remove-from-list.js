/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  function ListNode(x) {
    this.value = x;
    this.next = null;
  }
  let head = new ListNode(l[0]);
  let tail = head;
  for (let i = 1; i < l.length; i++) {
    const temp = new ListNode(l[i]);
    tail.next = temp;
    tail = temp;
  }

  let current = head;
  let prev = head;
  while (current !== null) {
    if (current.value !== k) {
      prev = current;
    } else {
      if (head.value === k) {
        head = head.next;
      }
      prev.next = current.next;
    }
    current = current.next;
  }

  const result = [];
  current = head;
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  return result;
}

module.exports = removeKFromList;
