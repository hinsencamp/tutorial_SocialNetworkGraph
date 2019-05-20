// Methods
const { Graph, Node } = require("./graph");
const { writeToJSON, generateRandomNetwork } = require("./helpers");

// (1) Build your own Network
// const fabian = new Node({ name: "Fabian" });
// const rey = new Node({ name: "Rey" });
// const ellie = new Node({ name: "Ellie" });
// const cassi = new Node({ name: "Cassi" });

// const graph = new Graph();

// graph.addNode(fabian);
// graph.addNode(rey);
// graph.addNode(ellie);
// graph.addNode(cassi);

// graph.get("Fabian").addConnection(graph.get("Rey"));
// graph.get("Fabian").addConnection(graph.get("Ellie"));
// graph.get("Fabian").addConnection(graph.get("Cassi"));

// graph.get("Ellie").addConnection(graph.get("Cassi"));

// writeToJSON(graph.graph, "graph");

// (2) Grow the Network
// generateRandomNetwork(graph, 100);
// writeToJSON(graph.graph, "graph");
