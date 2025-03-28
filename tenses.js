document.addEventListener("DOMContentLoaded", function () {
    const container = document.body;
    const storageKey = "tensesCards";
    const form = document.createElement("div");
    form.innerHTML = `
        <div class="card">
            <h3>Додати нову картку</h3>
            <input type="text" id="cardTitle" placeholder="Заголовок">
            <textarea id="cardContent" placeholder="Вміст картки"></textarea>
            <button id="addCardBtn">Додати</button>
        </div>
    `;
    document.body.insertBefore(form, container.firstChild);

    document.getElementById("addCardBtn").addEventListener("click", addCard);

    function loadCards() {
        const savedCards = JSON.parse(localStorage.getItem(storageKey)) || [];
        savedCards.forEach(cardData => {
            createCard(cardData.title, cardData.content);
        });
    }

    function addCard() {
        const title = document.getElementById("cardTitle").value;
        const content = document.getElementById("cardContent").value;
        if (title && content) {
            createCard(title, content);
            saveCards();
        }
    }

    function createCard(title, content) {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        addDeleteButton(div);
        container.appendChild(div);
    }

    function addDeleteButton(card) {
        const btn = document.createElement("button");
        btn.textContent = "Видалити";
        btn.onclick = function () {
            card.remove();
            saveCards();
        };
        card.appendChild(btn);
    }

    function saveCards() {
        const cards = Array.from(document.querySelectorAll(".card"))
            .filter(card => !card.contains(document.getElementById("addCardBtn")))
            .map(card => ({
                title: card.querySelector("h3").textContent,
                content: card.querySelector("p").textContent
            }));
        localStorage.setItem(storageKey, JSON.stringify(cards));
    }

    loadCards();
});
