fetch("sukirildigi.svg")
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
const mapContainer = document.getElementById("map-container");
const mapWrapper = document.getElementById("map-wrapper");

mapWrapper.dataset.zoom = 1;

zoomSlider.addEventListener("input", () => {
  const oldZoom = Number(mapWrapper.dataset.zoom);
  const newZoom = Number(zoomSlider.value) / 100;

  const centerX = mapContainer.scrollLeft + mapContainer.clientWidth / 2;
  const centerY = mapContainer.scrollTop + mapContainer.clientHeight / 2;

  const mapX = centerX / oldZoom;
  const mapY = centerY / oldZoom;

  mapWrapper.style.transform = `scale(${newZoom})`;
  mapWrapper.style.transformOrigin = "top left";

  mapContainer.scrollLeft = mapX * newZoom - mapContainer.clientWidth / 2;
  mapContainer.scrollTop = mapY * newZoom - mapContainer.clientHeight / 2;

  mapWrapper.dataset.zoom = newZoom;
  zoomValue.textContent = Math.round(newZoom * 100) + "%";
});
