#!/usr/bin/env node

// Simple Metro starter script
const path = require('path');

console.log('Metro Starter Script');
console.log('Current directory:', __dirname);
console.log('Node version:', process.version);

try {
  const {makeMetroConfig} = require('@react-native/metro-config');
  console.log('Metro config loaded successfully');

  const Metro = require('metro');
  console.log('Metro loaded successfully');

  const config = makeMetroConfig();
  console.log('Config created, starting Metro...');

  Metro.runMetro(config).then(() => {
    console.log('Metro started!');
  }).catch(err => {
    console.error('Metro error:', err);
    process.exit(1);
  });
} catch (error) {
  console.error('Error loading Metro:', error.message);
  console.error(error.stack);
  process.exit(1);
}
