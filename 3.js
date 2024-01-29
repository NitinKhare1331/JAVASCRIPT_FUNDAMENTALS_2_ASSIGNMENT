function stringCharacterClasses(string,character_class){
    const regex = new RegExp(`[${character_class}]`,'g');
    return string.match(regex) || [];
}
const demo_string = 'Nitinkare@1331';

const digit_matches = stringCharacterClasses(demo_string,'0-9');
const upper_case_matches = stringCharacterClasses(demo_string,'A-Z');
const lower_case_matches = stringCharacterClasses(demo_string,'a-z');
const special_character_matches = stringCharacterClasses(demo_string,'!@#$%^&*()-');

console.log('Digit Matches: ',digit_matches);
console.log('Upper case matches: ',upper_case_matches);
console.log('Lower case matches: ',lower_case_matches);
console.log('Special character matches: ',special_character_matches);