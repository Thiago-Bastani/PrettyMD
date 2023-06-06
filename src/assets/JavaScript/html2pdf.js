import { jsPDF } from "jspdf";

export default function htmlToPdf(nomeArquivo) {
  let contentDiv = document.getElementById("Content");

  let pdf = new jsPDF({
    unit: "px",
    format: "a4",
    orientation: "portrait",
  });

  pdf.html(contentDiv, {
    html2canvas: {
      svgRendering: true,
      scale: 0.6,
    },
    margin: [20, 20, 20, 20],
    callback: function (pdf) {
      pdf.save(nomeArquivo);
    },
  });
}
