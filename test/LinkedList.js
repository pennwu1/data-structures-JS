const expect = require('chai').expect;
const { Node, LinkedList } = require('../structures/LinkedList');

let LinkedListA;

describe('Linked List', () => {
  beforeEach(() => {
    LinkedListA = new LinkedList();
  });
  describe('insert()', () => {
    it('should create head and tail when linked list is empty', () => {
      LinkedListA.insert(5);

      const head = LinkedListA.head;
      const tail = LinkedListA.tail;

      expect(head.value).to.equal(5);
      expect(tail.value).to.equal(5);
    });
    it('should append node and update tail when new node is added', () => {
      LinkedListA.insert(5);
      LinkedListA.insert(10);

      const node = LinkedListA.head.next;
      const tail = LinkedListA.tail;

      expect(node.value).to.equal(10);
      expect(tail.value).to.equal(10);
    });
  });
  describe('search()', () => {
    it('should throw error when linked list is empty', () => {
      const searched = LinkedListA.search.bind(LinkedListA);

      expect(searched).to.throw(Error, 'Linked List is empty');
    });
    it('should return head when searching for head', () => {
      LinkedListA.insert(5);
      
      const searched = LinkedListA.search(5);

      expect(searched.value).to.equal(5);
    });
    it('should return node when searching for node', () => {
      LinkedListA.insert(5);
      LinkedListA.insert(10);

      const searched = LinkedListA.search(10);

      expect(searched.value).to.equal(10);
    });
    it('should return not found when searching for invalid node', () => {
      LinkedListA.insert(5);

      const searched = LinkedListA.search(10);

      expect(searched).to.equal('not found');
    });
  });
  describe('delete()', () => {
    it('should throw error when linked list is empty', () => {
      const error = LinkedListA.delete.bind(LinkedListA);

      expect(error).to.throw(Error, 'Linked List is empty');
    });
    it('should remove pointer to head', () => {
      LinkedListA.insert(5);
      LinkedListA.insert(10);

      LinkedListA.delete(5);
      const head = LinkedListA.head;

      expect(head.value).to.equal(10);
    });
    it('should remove pointer to body node', () => {
      LinkedListA.insert(5);
      LinkedListA.insert(10);
      LinkedListA.insert(15);

      LinkedListA.delete(10);
      const node = LinkedListA.head.next;

      expect(node.value).to.equal(15);
    });
  });
});