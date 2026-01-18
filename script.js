const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const type = document.getElementById("type");
const angle = document.getElementById("angle");
const angleValue = document.getElementById("angleValue");
const preview = document.getElementById("preview");
const cssCode = document.getElementById("cssCode");
const copyBtn = document.getElementById("copyBtn");

function updateGradient() {
  angleValue.textContent = angle.value + "°";

  let gradient;
  if (type.value === "linear") {
    angle.parentElement.style.display = "flex";
    angleValue.style.display = "inline";
    gradient = `linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`;
  } else {
    angle.parentElement.style.display = "none";
    gradient = `radial-gradient(circle, ${color1.value}, ${color2.value})`;
  }

  preview.style.background = gradient;
  cssCode.textContent = `background: ${gradient};`;
}

[color1, color2, type, angle].forEach(el =>
  el.addEventListener("input", updateGradient)
);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(cssCode.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy CSS"), 1500);
});

updateGradient();
