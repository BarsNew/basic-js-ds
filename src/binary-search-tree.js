const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addValue(this.rootNode, data); 

    function addValue (nod, data) {
        if(!nod) return new Node(data);

        if (data === nod.data) return nod;

        if (data < nod.data) {
            nod.left = addValue(nod.left, data);
        } 
        else {
            nod.right = addValue(nod.right, data);
        }

        return nod;
    }
}

  has(data) {
    return searchValue(this.rootNode, data); 

    function searchValue(nod, data) {
        if (!nod) return false; 

        if (data === nod.data) return true;

        return (data < nod.data) ?
            searchValue(nod.left, data) :
            searchValue(nod.right, data);
    }
}

  find(data) {
    if (!this.rootNode) return null; 

    let current = this.rootNode;
    while (current) {
      if (data < current.data) {
        current = current.left;
      }
      else if (data > current.data) {
        current = current.right;
      }
      else {
        return current;
      }
    }

    return null; 
  }

  remove(data) {
   this.rootNode = removeNod(this.rootNode, data);

   function removeNod(nod, data) {
    if (!nod) return null;

    if (data < nod.data) {
      nod.left = removeNod(nod.left, data);
      return nod;
    }
    else if (data > nod.data) {
      nod.right = removeNod(nod.right, data);
      return nod;
    }
    else {
      if (!nod.left && !nod.right) return null;

      if (!nod.left) {
        nod = nod.right;
        return nod;
      }

      if (!nod.right) {
        nod = nod.left;
        return nod;
      }

      let minNodRight = nod.right;
      while(minNodRight.left) {
        minNodRight = minNodRight.left;
      }

      nod.data = minNodRight.data;

      nod.right = removeNod(nod.right, minNodRight.data);

      return nod;
    }
   }
  }

  min() {
    if (!this.rootNode) return;

    let nod = this.rootNode;
    while(nod.left) {
      nod = nod.left;
    }  

    return nod.data;
  }

  max() {
    if (!this.rootNode) return;

    let nod = this.rootNode;
    while(nod.right) {
      nod = nod.right;
    }  

    return nod.data;
  }
}

module.exports = {
  BinarySearchTree
};