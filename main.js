import { LinkedList } from "./linkedLists.js";

const list = new LinkedList();

list.append("dog");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list);
list.prepend("cat");
console.log(list);
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(4));
console.log(list.pop());
console.log(list);
console.log(list.contains("snake"));
console.log(list.findIndex("hamster"));
console.log(list.toString());