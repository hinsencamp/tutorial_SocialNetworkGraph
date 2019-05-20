function Graph() {
  this.graph = {};
}

Graph.prototype.addNode = function(user) {
  this.graph[user.name] = user;
};

Graph.prototype.get = function(name) {
  return this.graph[name];
};

/*
 * Transform for Data Visualisation
 */

Graph.prototype.getNodes = function() {
  return [
    ...Object.values(this.graph).map(node => {
      return { ...node, friends: Object.keys(node.friends) };
    })
  ];
};

Graph.prototype.getEdges = function(linkedNodes) {
  return Object.values(this.graph).reduce((acc, node) => {
    return [
      ...acc,
      ...[...Object.keys(node[linkedNodes])].map(id => {
        return {
          source: node.name,
          target: id
        };
      })
    ];
  }, []);
};

function Node(user) {
  this.name = user.name;
  this.friends = {};
}

Node.prototype.addConnection = function(user) {
  if (!this.friends[user.name]) {
    this.friends[user.name] = { name: user.name };
    user.addConnection(this);
  }
};

module.exports = { Graph, Node };
