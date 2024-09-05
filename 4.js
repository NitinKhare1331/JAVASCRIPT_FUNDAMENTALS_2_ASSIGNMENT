function extractDateParts(regexPattern, inputString) {
    // Create a regex object with the provided pattern
    const regex = new RegExp(regexPattern);

    // Use the regex to test for a match in the input string
    const match = inputString.match(regex);

    if (match) {
        // Extract specific parts using groups
        const day = match[1] || 'N/A';
        const month = match[2] || 'N/A';
        const year = match[3] || 'N/A';

        // Print the extracted parts
        console.log(`Match found! Date parts: Day: ${day}, Month: ${month}, Year: ${year}`);
    } else {
        console.log('No match found');
    }
}

// Get regex pattern and input string as input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the regex pattern: ', (regexPattern) => {
    rl.question('Enter the input string: ', (inputString) => {
        extractDateParts(regexPattern, inputString);
        rl.close();
    });
});
