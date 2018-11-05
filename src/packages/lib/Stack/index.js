class Node {
  constructor(data) {
    this._data = data;
    this._next = null;
  }

  set next(next) {
    this._next = next;
  }

  get next() {
    return this._next;
  }

  set data(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }
}

/**
 * Stack with linked list impl
 */
class Stack {
  constructor() {
    this.head = null;
  }

  add(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    }
    else {
      const nextNode = this.head;
      node.next = nextNode;
      this.head = node;
    }
  }

  pop() {
    const next = this.head.next;
    this.head = next;
    return this;
  }

  traverse(callback) {
    let n = this.head;
    let idx = 0;
    while(n) {
      callback(n.data, idx);
      n = n.next;
      idx++;
    }
  }

  toArray() {
    const nodes = [];
    this.traverse(data => nodes.push(data));
    return nodes;
  }
}

export default Stack;
