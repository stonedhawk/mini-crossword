const assert = require('assert');
const { TrieEngine } = require('../trie-engine');
const dictionaryWords = require('../node_modules/@rahulmrx/game-ready-dictionary/data/small_tier.json');

console.log("Running Dictionary Unit Tests...");

try {
  // Test 1: Instantiation and compilation
  const trie = new TrieEngine(dictionaryWords);
  assert.ok(trie.root, "Trie should have a compiled root object");
  console.log("✔ TrieEngine compiled successfully.");

  // Test 2: Word validation
  assert.strictEqual(trie.validate("apple"), true, "'apple' should be a valid word");
  assert.strictEqual(trie.validate("Apple"), true, "Validation should be case-insensitive");
  assert.strictEqual(trie.validate("xyzabc"), false, "'xyzabc' should be invalid");
  assert.strictEqual(trie.validate(""), false, "Empty word should be invalid");
  console.log("✔ Word validation tests passed.");

  // Test 3: Prefix validation
  assert.strictEqual(trie.isPrefix("app"), true, "'app' should be a valid prefix for 'apple'");
  assert.strictEqual(trie.isPrefix("xyz"), false, "'xyz' should be an invalid prefix");
  assert.strictEqual(trie.isPrefix(""), true, "Empty prefix should be valid (root)");
  console.log("✔ Prefix validation tests passed.");

  // Test 4: Pattern matching with wildcards
  // 'heart' and 'heard' should both be matched by 'hea.d' or 'hea..'
  const heartMatches = trie.findPatternMatches("hea.t");
  assert.ok(heartMatches.includes("heart"), "Pattern 'hea.t' should find 'heart'");

  const wildcardMatches = trie.findPatternMatches("h.a.t");
  assert.ok(wildcardMatches.includes("heart"), "Pattern 'h.a.t' should match 'heart'");

  // 'e.e.t' should match 'sweet' or 'sheet' or 'fleet' if present
  const sweetMatches = trie.findPatternMatches("sw.et");
  assert.ok(sweetMatches.includes("sweet"), "Pattern 'sw.et' should match 'sweet'");

  console.log("✔ Wildcard pattern matching tests passed.");
  console.log("All dictionary unit tests passed successfully!");

} catch (err) {
  console.error("❌ Dictionary unit test failed: ", err);
  process.exit(1);
}
