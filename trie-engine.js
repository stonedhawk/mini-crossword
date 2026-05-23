/**
 * TrieEngine - High-performance word validation for game development.
 * Designed for O(m) lookups and memory-efficient prefix searching.
 *Sourced from @rahulmrx/game-ready-dictionary
 */
class TrieEngine {
  /**
   * @param {string[]} words - Word list to compile into Trie.
   */
  constructor(words = []) {
    this.root = {};
    this.buildTrie(words);
  }

  /**
   * Builds the Trie data structure from a flat array of words.
   * @param {string[]} words 
   */
  buildTrie(words) {
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      let node = this.root;
      for (let j = 0; j < word.length; j++) {
        const char = word[j];
        if (!node[char]) node[char] = {};
        node = node[char];
      }
      node._ = 1;
    }
  }

  /**
   * Validates if a word exists in the dictionary.
   * @param {string} word - The word to validate.
   * @returns {boolean}
   */
  validate(word) {
    if (!word) return false;
    let node = this.root;
    const lowerWord = word.toLowerCase();
    
    for (let i = 0; i < lowerWord.length; i++) {
      const char = lowerWord[i];
      if (!node[char]) return false;
      node = node[char];
    }
    
    return node._ === 1;
  }

  /**
   * Checks if a prefix exists in the dictionary.
   * Useful for pruning recursive search paths or active clue prefix checking.
   * @param {string} prefix - The prefix to check.
   * @returns {boolean}
   */
  isPrefix(prefix) {
    if (!prefix) return true;
    let node = this.root;
    const lowerPrefix = prefix.toLowerCase();

    for (let i = 0; i < lowerPrefix.length; i++) {
      const char = lowerPrefix[i];
      if (!node[char]) return false;
      node = node[char];
    }

    return true;
  }

  /**
   * Returns all words matching a given prefix.
   * @param {string} prefix - The search prefix.
   * @param {number} limit - Maximum results to return.
   * @returns {string[]}
   */
  getPrefixMatches(prefix, limit = 50) {
    let node = this.root;
    const lowerPrefix = prefix.toLowerCase();
    const results = [];

    // Navigate to the end of the prefix
    for (let i = 0; i < lowerPrefix.length; i++) {
      const char = lowerPrefix[i];
      if (!node[char]) return [];
      node = node[char];
    }

    // Depth-first search to find all leaf nodes
    const dfs = (currentNode, currentPath) => {
      if (results.length >= limit) return;
      if (currentNode._ === 1) results.push(currentPath);

      for (const char in currentNode) {
        if (char === '_') continue;
        dfs(currentNode[char], currentPath + char);
      }
    };

    dfs(node, lowerPrefix);
    return results;
  }

  /**
   * Finds all words in the dictionary matching a pattern with wildcards (e.g. "s.a.e")
   * @param {string} pattern - The pattern with dots for wildcards (e.g. "h.a.t")
   * @param {number} limit - Maximum results to return
   * @returns {string[]}
   */
  findPatternMatches(pattern, limit = 20) {
    if (!pattern) return [];
    const results = [];
    const lowerPattern = pattern.toLowerCase();
    const len = lowerPattern.length;

    const search = (node, index, currentWord) => {
      if (results.length >= limit) return;
      if (index === len) {
        if (node._ === 1) {
          results.push(currentWord);
        }
        return;
      }

      const char = lowerPattern[index];
      if (char === '.' || char === '?' || char === ' ') {
        // Wildcard: explore all branches at this level
        for (const key in node) {
          if (key === '_') continue;
          search(node[key], index + 1, currentWord + key);
        }
      } else {
        // Specific character
        if (node[char]) {
          search(node[char], index + 1, currentWord + char);
        }
      }
    };

    search(this.root, 0, "");
    return results;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TrieEngine };
}
