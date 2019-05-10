// Methods
const { Graph, Node } = require("./index");
const members = require("./members.json");
const writeToJSON = require("./helpers");

const graph = new Graph();

const paul = new Node(members[0]);
const fabian = new Node(members[1]);

graph.addNode(paul);
graph.addNode(fabian);

// connect;
graph.get(fabian).addConnection(paul);

// console.log(graph.get(fabian));
// create links
const data = {
  nodes: [...graph.getMembers()],
  links: graph.getEdges()
};

console.log(data);

writeToJSON(data, "visual");
