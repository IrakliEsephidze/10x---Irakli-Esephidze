const rawConfig = '{"sector":"Z","power":100,';
function loadSectorConfig() {
  try {
    return JSON.parse(rawConfig);
  } catch (error) {
    return null;
  }
}

const config = loadSectorConfig();

if (config) {
  console.log('Config loaded');
} else {
  console.log('Config failed');
}