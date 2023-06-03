import { Component } from '@angular/core';
import { marked } from 'marked';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrettyMD';
  filename:string = '';
  error: string = '';
  MarkDown!: string;
  mdPreview!: string;

  mdPreviewfn(){
    this.mdPreview = marked.parse(this.MarkDown);
  }

  download() {
    this.error = '';
    this.filename = this.filename.trim();
    if(!this.filename){
      this.error = 'Nome do arquivo é obrigatório';
      return
    }
    const element = document.getElementById('htmlData');

    html2pdf()
      .set({
        margin: [20, 20, 20, 20], 
        filename: this.filename, 
        image: { type: 'jpeg', quality: 0.98 }, 
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } 
      })
      .from(element)
      .save()
  }

}
