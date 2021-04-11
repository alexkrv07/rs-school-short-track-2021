const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.sizeOfQueue = 0;
  }

  get size() {
    return this.sizeOfQueue;
  }

  enqueue(element) {
    const temp = new ListNode(element);
    if (!this.head) {
      this.head = temp;
      this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = this.tail.next;
    }
    this.sizeOfQueue++;
  }

  dequeue() {
    const temp = this.head;
    this.head = this.head.next;
    this.sizeOfQueue--;
    return temp.value;
  }
}

module.exports = Queue;
