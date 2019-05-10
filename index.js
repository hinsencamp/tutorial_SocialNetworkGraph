function Graph() {
  this.graph = {};
}

Graph.prototype.addNode = function(user) {
  const { name } = user;
  this.graph[name] = user;
};

Graph.prototype.get = function(user) {
  return this.graph[user.name];
};

Graph.prototype.getMembers = function() {
  return Object.values(this.graph).map(node => {
    return { ...node };
  });
};

Graph.prototype.getEdges = function() {
  return Object.values(this.graph).reduce((acc, node) => {
    return [
      ...acc,
      ...[...node.friends].map(friendsId => {
        return {
          source: node.name,
          target: friendsId
        };
      })
    ];
  }, []);
};

function Node(user) {
  this.name = user.name;
  this.user = user;
  this.friends = new Set();
}

Node.prototype.addConnection = function(user) {
  if (!this.friends.has(user.name)) {
    this.friends = this.friends.add(user.name);
    user.addConnection(this);
  }
};

Node.prototype.showConnections = function() {
  return [...this.friends];
};

module.exports = { Graph, Node };
