const encryptedHints = [[0, 0, 0, 0, 10, 7747, 7, 71, 84, 0, 7733, 0, 15, 304, 7874, 136, 78, 0, 7849, 377, 212, 29, 82, 143, 143, 6, 376, 7809, 27, 7929, 6, 7876, 73, 77, 7851, 120, 204, 78, 72, 304], [344, 7746, 16, 0, 30, 7747, 6, 0, 0, 0, 141, 0, 15, 304, 7894, 12, 66, 72, 7873, 0, 84, 90, 30, 149, 65, 48, 345, 7908, 43, 97, 58, 7811, 31, 192, 84, 28, 132, 7875, 6, 304, 8112, 473, 7875, 11, 7811, 14, 7875, 29, 82, 17, 79], [300, 7875, 87, 65, 4, 7884, 85, 15, 22, 76], [362, 7885, 17, 75, 2, 7893, 6, 69, 6, 27, 134]]

function cyclicXOR(arr, str) {
    const len1 = arr.length;
    const len2 = str.length;
    let result = "";

    for (let i = 0; i < len1; i++) {
        const char1 = arr[i % len1];
        const char2 = str.charAt(i % len2);
        const xorValue = char1 ^ char2.charCodeAt(0);
        result += String.fromCharCode(xorValue);
    }

    return result;
}

function validateKey() {
    document.getElementById("result").innerText = cyclicXOR(encryptedHints[parseInt(document.getElementById("dropdown").value.match(/\d+/)[0]) - 1], document.getElementById("inputKey").value);
}