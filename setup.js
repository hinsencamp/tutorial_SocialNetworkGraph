// Methods
const { Graph, Node } = require("./index");
const members = require("./members.json");

const graph = new Graph();

const paul = new Node(members[0]);
const fabian = new Node(members[1]);

graph.addNode(paul);
graph.addNode(fabian);

// graph.get(fabian);
// connect;
fabian.addConnection(paul);

console.log(graph.get(fabian));
