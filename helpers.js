var fs = require("fs");
const mockData = require("./mock_data.json");
const { Node } = require("./graph");

function writeToJSON(jsonData, title) {
  fs.writeFile(`./${title}.json`, JSON.stringify(jsonData), function(err) {
    if (err) {
      console.log(err);
    }
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function generateRandomNetwork(graph, numberOfUsers) {
  const subset = mockData.splice(0, numberOfUsers);
  subset.forEach((member, index) => {
    graph.addNode(new Node(member));
    const number = getRandomInt(1, index);

    const friend = graph.get(subset[number].name);

    const self = graph.get(member.name);
    if (friend !== self) {
      self.addConnection(friend);
    }
  });
}

function transfromForVisualisation(graph) {
  return {
    nodes: graph.getNodes(),
    links: graph.getEdges("friends")
  };
}

module.exports = {
  writeToJSON,
  generateRandomNetwork,
  transfromForVisualisation
};
