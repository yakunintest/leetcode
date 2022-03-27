


// reverse tree in js
const reverseTree = (tree) => {
  if (!tree) return null;
  if (!tree.children) return tree;
  tree.children.reverse();
  tree.children.forEach(child => reverseTree(child));
  return tree;
};
