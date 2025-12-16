const calcDiv = document.getElementById("builtin-calculator");
const toggle = document.getElementById("calc-toggle");
const input = document.getElementById("calc-input");
const result = document.getElementById("calc-result");

let open = false;

toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    open = !open;
    input.style.display = open ? "inline-block" : "none";
    result.style.display = open ? "inline-block" : "none";
    if(open) input.focus();
});

input.addEventListener("input", () => {
    const val = input.value.trim();
    if (!val) {
        result.textContent = "";
        return;
    }
    try {
        result.textContent = eval(val);
    } catch {
        result.textContent = "Errore";
    }
});
