/**
 * Automated test script for BDF Lab 01 Express Server
 * Uses built-in fetch to verify routes and HTTP status codes.
 */

const BASE_URL = "http://localhost:3000";

const testCases = [
    { path: "/", expectedStatus: 200, name: "Home Route" },
    { path: "/about", expectedStatus: 200, name: "About Route" },
    { path: "/time", expectedStatus: 200, name: "Time Route" },
    { path: "/random", expectedStatus: 404, name: "404 Not Found Route" }
];

async function runTests() {
    console.log("Starting automated tests against", BASE_URL);
    let passed = 0;

    for (const test of testCases) {
        try {
            const res = await fetch(`${BASE_URL}${test.path}`);
            const text = await res.text();
            const statusMatch = res.status === test.expectedStatus;

            if (statusMatch) {
                console.log(`[PASS] ${test.name} (${test.path}) -> Status: ${res.status}`);
                passed++;
            } else {
                console.error(`[FAIL] ${test.name} (${test.path}) -> Expected: ${test.expectedStatus}, Received: ${res.status}`);
            }
            console.log(`       Response snippet: ${text.substring(0, 80)}\n`);
        } catch (err) {
            console.error(`[ERROR] Failed to connect to ${test.path}:`, err.message);
        }
    }

    console.log(`Test Summary: ${passed}/${testCases.length} tests passed.`);
    if (passed !== testCases.length) {
        process.exit(1);
    }
}

runTests();
