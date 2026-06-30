class LinkedList {
	constructor() {
		this.headNode = null;
	}

	// add a new node containing a value to end of list
	append(value) {
		// create new node
		const newNode = new Node(value);

		// if empty list, set new node as headNode
		if (!this.headNode) {
			this.headNode = newNode;
		} else {
			// start at head node
			let current = this.headNode;

			// find the end of the list
			while (current.nextNode !== null) {
				current = current.nextNode;
			}

			// last node in list points to new node
			current.nextNode = newNode;
		}
	}

	// adds a new node containing a value to the start of the list
	prepend(value) {
		// create new node
		const newNode = new Node(value);

		// set current head node as the next node for new node
		newNode.nextNode = this.headNode;

		// set new node as the head
		this.headNode = newNode;
	}

	// return the total number of nodes in the list
	size() {
		// counter
		let size = 0;
		
		// start at head node
		let current = this.headNode;

		// keep moving until the end of the list
		while (current !== null) {
			size++;
			current = current.nextNode // move to next node
		}

		return size;
	}

	// return the value of the first node in the list
	head() {
		// empty list
		if (!this.headNode) {
			return undefined;
		}

		return this.headNode.value;
	}

	// returns the value of the final node in the list
	tail() {
		// empty list
		if (!this.headNode) {
			return undefined;
		}

		let current = this.headNode;

		// go to end of list
		while (current.nextNode !== null) {
			current = current.nextNode;
		}

		return current.value;
	}

	// returns the value of the node at the given index
	at(index) {
		// no nde at the given index
		if (index >= this.size()) {
			return undefined;
		}

		let currentIndex = 0;

		// start at head node
		let current = this.headNode;

		// go to node at index
		while (currentIndex < index) {
			currentIndex++;
			// move to next node
			current = current.nextNode;
		}

		return current.value;
	}
}

class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

export { LinkedList, Node };
