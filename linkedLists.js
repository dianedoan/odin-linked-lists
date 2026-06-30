class LinkedList {
	constructor() {
		this.head = null;
	}

	// add a new node containing a value to end of list
	append(value) {
		// create new node
		const newNode = new Node(value);

		// if empty list, set new node as head
		if (!this.head) {
			this.head = newNode;
		} else {
			// start at head node
			let current = this.head;

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
		newNode.nextNode = this.head;

		// set new node as the head
		this.head = newNode;
	}
}

class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

export { LinkedList, Node };
