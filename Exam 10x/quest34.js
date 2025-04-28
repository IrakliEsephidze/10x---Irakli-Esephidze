const registry = [
    { name: 'nodeA', role: 'primary' },
    { name: 'nodeB', role: 'backup' },
    { name: 'nodeC', role: 'backup' }
  ];
  
  const backupNodes = registry.filter(node => node.role === 'backup');
  
  const updatedRegistry = backupNodes.map(node => ({
    ...node,
    status: 'ready'
  }));
  
  const names = updatedRegistry.map(node => node.name).join(', ');
  
  console.log(`Ready backups: ` + names);
