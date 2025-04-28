
const nodes = ['node1', 'node2', 'node3'];

function processNodes(list, callback) {
  for (let item of list) {
    callback(item);
  }
}

processNodes(nodes, function(node) {
  console.log(`Processed: ${node}`);
});