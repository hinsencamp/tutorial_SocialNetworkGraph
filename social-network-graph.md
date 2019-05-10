---
title: "Learn Graphs by building your own social media network"
description: "Let's build a social network 💪!"
author: "Fabian Hinsenkamp"
published_at: 2019-04-15 15:06:30.486476
categories: [JavaScript, Tutorial]
---

How would you design the data structures for a very large social network like Facebook or Linkedln?

##Intro
###What is a social media network at it's core?
//
###What are the challenges which come with it?

## how to I store connections between people

## how do I recommend people users might know.

## Vision

We build a graph data structure with each user being a node. Friendships are undirected edges between nodes.
Part I

1. Create user Nodes connect them to each other

Part II

1. Let's show the connection between multiple people from the network. How am I connected with paul?
   I -- Florian --- Max --- Paul

Part III

2. How can I recommend users new people they might know?

## What we will learn?

Part I - Graphs Data Structures
Part II - breath-first Search & depth-first Search

great learning resources:
[hackerRank video](https://www.youtube.com/watch?v=zaBhtODEL0w)

## Graph Implementation

### Create Graph

```
function Graph() {
  this.graph = {};
};

Graph.prototype.addNode = function(user) {
  const { name } = user;
  this.graph[name] = user;
};
```

### Create Node && Edges

```
function Node(user) {
  this.name = user.name;
  this.user = user;
  this.friends = new Map();
}

Node.prototype.addConnection = function(user) {

  if(!this.friends.get(user.name)){
    this.friends = this.friends.set(user.name, user);
    user.addConnection(this);
  }
};

Node.prototype.showConnections = function(){
  return [...this.friends].map(([name,_]) => name);
}
```

### Representing Graphs

Adjacency List or Matrix?

### use the implementation to create a small network.

## Search Implementation

### Add properties to Node

-- visited

- breath-first search

-- visited flag vs. array of visits
There could be multiple searches going on at the same time, so it’s a bad idea to just edit our data.
Instead, we could mimic the marking of nodes with a hash table to look up a node id and determine whether it’s been visited.

- bidirectional breath-first search

* depth-first search

### Let's talk performance!
