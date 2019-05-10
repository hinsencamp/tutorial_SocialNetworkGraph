function Graph() {
  this.graph = {};
}

Graph.prototype.addNode = function(user) {
  const { name } = user;
  const id = Object.keys(this.graph).length + 1;
  this.graph[name] = new Node({ ...user, id });
};

Graph.prototype.get = function(user) {
  return this.graph[user.name];
};

function Node(user) {
  this.name = user.name;
  this.user = user;
  this.friends = new Map();
}

Node.prototype.addConnection = function(user) {
  if (!this.friends.get(user.name)) {
    this.friends = this.friends.set(user.name, user);
    user.addConnection(this);
  }
};

Node.prototype.showConnections = function() {
  return [...this.friends].map(([name, _]) => name);
};

module.exports = { Graph, Node };
