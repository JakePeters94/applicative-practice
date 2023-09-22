/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const yearCounts = {};

  for (const asteroid of data.asteroids) {
    const discoveryYear = asteroid.discoveryYear;
    if (discoveryYear) {
      yearCounts[discoveryYear] = (yearCounts[discoveryYear] || 0) + 1;
    }
  }

  let maxYear = null;
  let maxCount = 0;

  for (const year in yearCounts) {
    if (yearCounts[year] > maxCount) {
      maxYear = year;
      maxCount = yearCounts[year];
    }
  }

  return maxYear ? parseInt(maxYear) : null;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
