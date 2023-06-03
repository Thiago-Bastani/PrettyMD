import { Component } from '@angular/core';
import { marked } from 'marked';
import htmlToPdf  from '../assets/JavaScript/html2pdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PrettyMD';

  MarkDown!: string;
  mdPreview!: string;

  mdPreviewfn() {
    this.mdPreview = marked.parse(this.MarkDown);
  }

  download() {
    htmlToPdf();
  }
}
