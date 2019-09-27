function calculateMin() {
    const string1 = document.getElementById("string1").value
    const string2 = document.getElementById("string2").value
    const string3 = document.getElementById("string3").value
    const result = document.getElementById("result")

    const minString = Math.min(string1.length, string2.length, string3.length)

    result.innerHTML = `The smallest string is ${minString} characters`
}

document.getElementById("calculateBtn").addEventListener('click', calculateMin)