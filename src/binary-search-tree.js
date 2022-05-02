const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data,
    this.left = null,
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addItem(this.rootTree, data);

    function addItem(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addItem(node.left, data);
      }

      else {
        node.right = addItem(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchItem(this.rootTree, data);

    function searchItem(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? searchItem(node.left, data) : searchItem(node.right, data);
    }

  }

  find(data) {
    return findItem(this.rootTree, data);

    function findItem(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? findItem(node.left, data) : findItem(node.right, data);
    }
  }

  remove(data) {
    this.rootTree = removeItem(this.rootTree, data);

    function removeItem(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeItem(node.left, data);
        return node;
      }

      else if (data > node.data) {
        node.right = removeItem(node.right, data);
        return node;
      }

      else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeItem(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) {
      return null;
    }

    let node = this.rootTree;
    while (node.left) {
      node = node.left
    }
    return node.data;
  }

  max() {
    if (!this.rootTree) {
      return null;
    }

    let node = this.rootTree;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};