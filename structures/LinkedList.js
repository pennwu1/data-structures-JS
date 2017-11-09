class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // add node to end of the linked list
  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      return 'created head';
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  // search for node and return reference
  search(value) {
    if (!this.head) throw Error('Linked List is empty');
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return curr;
      curr = curr.next;
    }
    return 'not found';
  }
  // delete node
  delete(value) {
    if (!this.head) throw Error('Linked List is empty');
    let curr = this.head;
    if (curr.value === value) {
      this.head = curr.next;
      return 'replaced head';
    }
    while (curr.next) {
      if (curr.next.value === value) {
        if (curr.next === this.tail) this.tail = curr;
        curr.next = curr.next.next;
        return 'replaced node';
      }
      curr = curr.next;
    }
  }
}

module.exports = {
  Node,
  LinkedList
}