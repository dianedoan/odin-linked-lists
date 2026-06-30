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
}

class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

export { LinkedList, Node };
