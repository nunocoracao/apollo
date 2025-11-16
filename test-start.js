#!/usr/bin/env node

console.log('Starting test script...');
console.log('CWD:', process.cwd());
console.log('Node version:', process.version);

console.log('Trying to load @react-native-community/cli...');
try {
  const cli = require('@react-native-community/cli');
  console.log('CLI loaded successfully:', Object.keys(cli));

  console.log('Trying to run CLI...');
  cli.run();
} catch (e) {
  console.error('Error:', e.message);
  console.error(e.stack);
  process.exit(1);
}
