import { Component } from '@angular/core';
import { marked } from 'marked';
import { SafeHtml } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import htmlToPdf from '../../assets/JavaScript/html2pdf';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
})
export class ConversorComponent {
  title = 'PrettyMD';

  MarkDown!: string;
  mdPreview!: SafeHtml | null;
  nomeArquivo: string = "Nome do arquivo";

  constructor(private _sanitizer: DomSanitizer) {}

  mdPreviewfn() {
    this.mdPreview = this._sanitizer.sanitize(1, marked.parse(this.MarkDown));
  }

  download() {
    htmlToPdf(this.nomeArquivo);
  }
}
