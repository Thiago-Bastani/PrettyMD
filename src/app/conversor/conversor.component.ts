import { Component } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
})
export class ConversorComponent {
  title = 'PrettyMD';

  MarkDown!: string;
  mdPreview!: string;

  mdPreviewfn() {
    this.mdPreview = marked.parse(this.MarkDown);
  }
}
