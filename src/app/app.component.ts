import { Component } from '@angular/core';
import { marked } from 'marked';
import { SafeHtml } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import htmlToPdf  from '../assets/JavaScript/html2pdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PrettyMD';

  MarkDown!: string;
  mdPreview!: SafeHtml | null;

  constructor(private _sanitizer: DomSanitizer) {}

  mdPreviewfn() {
    this.mdPreview = this._sanitizer.sanitize(1, marked.parse(this.MarkDown));
  }

  download() {
    htmlToPdf();
  }
}
