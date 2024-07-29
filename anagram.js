function groupAnagrams(strings) {
    const groups = {}; 

    for (let i = 0; i < strings.length; i++) {
        const word = strings[i];
        const sortedWord = sortWord(word);

        if (!groups[sortedWord]) {
            groups[sortedWord] = [];
        }

        groups[sortedWord].push(word);
    }

    const result = [];
    for (let key in groups) {
        if (groups.hasOwnProperty(key)) {
            result.push(groups[key]);
        }
    }

    return result;
}

function sortWord(word) {
    const characters = word.split(''); 
    const n = characters.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (characters[j] > characters[j + 1]) {
                // Tukar posisi karakter
                const temp = characters[j];
                characters[j] = characters[j + 1];
                characters[j + 1] = temp;
            }
        }
    }
    
    return characters.join(''); 
}

// Contoh penggunaan
const strings = ['join', 'iojn', 'taste', 'aves', 'vase', 'state', 'map'];
const anagramGroups = groupAnagrams(strings);
console.log(anagramGroups);
