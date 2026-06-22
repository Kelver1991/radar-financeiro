const formatPercent = (value) => `${value}%`;

function renderRiskQueue() {
  const list = document.querySelector("#riskList");
  list.innerHTML = riskQueue
    .map(
      (item) => `
        <div class="risk-item">
          <div class="risk-top">
            <strong>${item.name}</strong>
            <span class="tag ${item.level}">${item.priority}</span>
          </div>
          <small>${item.detail}</small>
          <div class="bar" aria-label="Score de prioridade ${item.score}%">
            <span style="width: ${formatPercent(item.score)}"></span>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderSegments() {
  const list = document.querySelector("#segments");
  list.innerHTML = segments
    .map(
      (segment) => `
        <div class="segment">
          <div class="segment-top">
            <strong>${segment.title}</strong>
            <small>${segment.metric}</small>
          </div>
          <div class="bar" aria-label="Nível de oportunidade ${segment.progress}%">
            <span style="width: ${formatPercent(segment.progress)}"></span>
          </div>
        </div>
      `,
    )
    .join("");
}

function setupCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  return { ctx, width: rect.width, height: rect.height };
}

function drawRadar() {
  const canvas = document.querySelector("#radarCanvas");
  const { ctx, width, height } = setupCanvas(canvas);
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.34;
  const labels = ["Crédito", "Fraude", "SLA", "NPS", "LGPD", "Custo"];
  const values = [0.86, 0.74, 0.91, 0.68, 0.96, 0.81];

  ctx.clearRect(0, 0, width, height);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(255,255,255,0.16)";

  for (let ring = 1; ring <= 4; ring += 1) {
    ctx.beginPath();
    labels.forEach((_, index) => {
      const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2;
      const pointRadius = (radius * ring) / 4;
      const x = centerX + Math.cos(angle) * pointRadius;
      const y = centerY + Math.sin(angle) * pointRadius;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.stroke();
  }

  ctx.beginPath();
  values.forEach((value, index) => {
    const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2;
    const x = centerX + Math.cos(angle) * radius * value;
    const y = centerY + Math.sin(angle) * radius * value;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(47, 120, 255, 0.42)";
  ctx.fill();
  ctx.strokeStyle = "#f6c700";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#dce8ff";
  ctx.font = "700 12px Inter, sans-serif";
  ctx.textAlign = "center";
  labels.forEach((label, index) => {
    const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2;
    const x = centerX + Math.cos(angle) * (radius + 32);
    const y = centerY + Math.sin(angle) * (radius + 32);
    ctx.fillText(label, x, y);
  });
}

function drawPixChart() {
  const canvas = document.querySelector("#pixCanvas");
  const { ctx, width, height } = setupCanvas(canvas);
  const padding = 34;
  const max = Math.max(...pixSeries);
  const stepX = (width - padding * 2) / (pixSeries.length - 1);

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#dce4f0";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#687489";
  ctx.font = "600 11px Inter, sans-serif";

  for (let index = 0; index < 4; index += 1) {
    const y = padding + ((height - padding * 2) / 3) * index;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  const points = pixSeries.map((value, index) => ({
    x: padding + index * stepX,
    y: height - padding - (value / max) * (height - padding * 2),
  }));

  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.lineTo(points.at(-1).x, height - padding);
  ctx.lineTo(points[0].x, height - padding);
  ctx.closePath();
  ctx.fillStyle = "rgba(15, 98, 254, 0.12)";
  ctx.fill();

  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.strokeStyle = "#0f62fe";
  ctx.lineWidth = 4;
  ctx.stroke();

  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, index === points.length - 1 ? 6 : 4, 0, Math.PI * 2);
    ctx.fillStyle = index === points.length - 1 ? "#f3b000" : "#0f62fe";
    ctx.fill();
  });
}

function redraw() {
  drawRadar();
  drawPixChart();
}

renderRiskQueue();
renderSegments();
redraw();
window.addEventListener("resize", redraw);

document.querySelector(".icon-button").addEventListener("click", () => {
  pixSeries.push(pixSeries.shift());
  redraw();
});

lucide.createIcons();
