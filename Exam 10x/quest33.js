function isValidNode(nodeId) {
    if (nodeId.startsWith('ND')) {
      const numberPart = nodeId.slice(2);
      return !isNaN(Number(numberPart));
    }
    return false;
  }
  
  const valid1 = isValidNode('ND404');
  
  console.log(`Node valid: ` + valid1);
