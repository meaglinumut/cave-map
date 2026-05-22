fetch("map.svg")
  .then(response => response.text())
  .then(svgText => {
    document.getElementById("map-wrapper").innerHTML = svgText;

    document.querySelectorAll("[data-layer]").forEach(input => {
      input.addEventListener("change", () => {
        const layer = document.getElementById(input.dataset.layer);

        if (layer) {
          layer.style.display = input.checked ? "inline" : "none";
        }
      });
    });
  });
const zoomSlider = document.getElementById("zoom-slider");
const zoomValue = document.getElementById("zoom-value");
const mapWrapper = document.getElementById("map-wrapper");

zoomSlider.addEventListener("input", () => {
  const zoom = zoomSlider.value;
  zoomValue.textContent = zoom + "%";
  mapWrapper.style.transform = `scale(${zoom / 100})`;
  mapWrapper.style.transformOrigin = "top left";
});