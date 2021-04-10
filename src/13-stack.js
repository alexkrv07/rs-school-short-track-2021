/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  // arr = [];

  push() {
    throw new Error('Not implemented');
    // this.arr.push(element);
  }

  pop() {
    throw new Error('Not implemented');
    // return this.arr.pop();
  }

  peek() {
    throw new Error('Not implemented');
    // return this.arr[this.arr.length - 1];
  }
}

module.exports = Stack;
