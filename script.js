const verbs = [
    { base: "be", past: "was/were", participle: "been", translation: "бути" },
    { base: "become", past: "became", participle: "become", translation: "ставати" },
    { base: "begin", past: "began", participle: "begun", translation: "починати" },
    { base: "break", past: "broke", participle: "broken", translation: "ламати" },
    { base: "bring", past: "brought", participle: "brought", translation: "приносити" },
    { base: "build", past: "built", participle: "built", translation: "будувати" },
    { base: "buy", past: "bought", participle: "bought", translation: "купувати" },
    { base: "catch", past: "caught", participle: "caught", translation: "ловити" },
    { base: "choose", past: "chose", participle: "chosen", translation: "вибирати" },
    { base: "come", past: "came", participle: "come", translation: "приходити" },
    { base: "cost", past: "cost", participle: "cost", translation: "коштувати" },
    { base: "cut", past: "cut", participle: "cut", translation: "різати" },
    { base: "do", past: "did", participle: "done", translation: "робити" },
    { base: "draw", past: "drew", participle: "drawn", translation: "малювати" },
    { base: "drink", past: "drank", participle: "drunk", translation: "пити" },
    { base: "drive", past: "drove", participle: "driven", translation: "водити" },
    { base: "eat", past: "ate", participle: "eaten", translation: "їсти" },
    { base: "fall", past: "fell", participle: "fallen", translation: "падати" },
    { base: "feel", past: "felt", participle: "felt", translation: "відчувати" },
    { base: "find", past: "found", participle: "found", translation: "знаходити" },
    { base: "fly", past: "flew", participle: "flown", translation: "літати" },
    { base: "forget", past: "forgot", participle: "forgotten", translation: "забувати" },
    { base: "forgive", past: "forgave", participle: "forgiven", translation: "прощати" },
    { base: "freeze", past: "froze", participle: "frozen", translation: "замерзати" },
    { base: "get", past: "got", participle: "got/gotten", translation: "отримувати" },
    { base: "give", past: "gave", participle: "given", translation: "давати" },
    { base: "go", past: "went", participle: "gone", translation: "йти" },
    { base: "grow", past: "grew", participle: "grown", translation: "рости" },
    { base: "have", past: "had", participle: "had", translation: "мати" },
    { base: "hear", past: "heard", participle: "heard", translation: "чути" },
    { base: "know", past: "knew", participle: "known", translation: "знати" }
];
let tableBody = document.getElementById("verbs-table");

function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach(verb => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${verb.base}</td><td>${verb.past}</td><td>${verb.participle}</td><td>${verb.translation}</td>`;
        tableBody.appendChild(row);
    });
}

function filterVerbs() {
    let searchTerm = document.getElementById("search").value.toLowerCase();
    let filteredVerbs = verbs.filter(verb => 
        verb.base.toLowerCase().includes(searchTerm) ||
        verb.past.toLowerCase().includes(searchTerm) ||
        verb.participle.toLowerCase().includes(searchTerm)
    );
    renderTable(filteredVerbs);
}

renderTable(verbs);

