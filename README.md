# Linked Lists
This project consists of two classes / factories:
- `LinkedList` which represents the full list
- `Node` which contains a `value` property and a `nextNode` property set both as `null` by default

The `LinkedList` class / factory contains the following functions:
- `append(value)` adds a new node containing value to the end of the list
- `prepend(value)` adds a new node containing value to the start of the list
- `size()` returns the total number of nodes in the list
- `head()` returns the value of the first node in the list
  - If the list is empty, it returns `undefined`
- `tail()` returns the value of the final node in the list
  - If the list is empty, it returns `undefined`
- `at(index)` returns the value of the node at the given index
  - If there is no node at the given index, it returns `undefined`
- `pop()` removes the head node from the list and return its value
  - If it's used on an empty list, it just returns `undefined`
- `contains(value)` returns true if the passed in value is in the list and otherwise returns false
- `findIndex(value)` returns the index of the node containing the given value
  - If the value can't be found in the list, it returns `-1`
  - If more than one node has a value matching the given value, it returns the index of the first node with the matching value
- `toString()` represents the `LinkedList` objects as strings, so you can print them out and preview them in the console with the format: `( value ) -> ( value ) -> ( value ) -> null`
  - If the list is empty, it returns an empty string

## Description
This project demonstrates the skills learnt from the JavaScript Course in The Odin Project up until the [Common Data Structures and Algorithms](https://www.theodinproject.com/lessons/javascript-common-data-structures-and-algorithms) topic.
