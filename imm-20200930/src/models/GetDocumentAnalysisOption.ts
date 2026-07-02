// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DocumentChapterSummarizeOption } from "./DocumentChapterSummarizeOption";


export class GetDocumentAnalysisOption extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve chapter-by-chapter summaries of the document.
   * 
   * @example
   * false
   */
  chapterSummary?: boolean;
  /**
   * @remarks
   * The options for retrieving chapter-by-chapter summaries of the document.
   */
  chapterSummaryOption?: DocumentChapterSummarizeOption;
  /**
   * @remarks
   * Specifies whether to retrieve images extracted from the document, such as pictures, tables, and formulas.
   * 
   * @example
   * false
   */
  images?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve keywords.
   * 
   * @example
   * false
   */
  keyword?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the layout.jsonl file.
   * 
   * @example
   * false
   */
  layouts?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the document reading guide results.
   * 
   * @example
   * false
   */
  narrator?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the generated questions and corresponding answers.
   * 
   * @example
   * false
   */
  question?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the full-text summary.
   * 
   * @example
   * true
   */
  summary?: boolean;
  static names(): { [key: string]: string } {
    return {
      chapterSummary: 'ChapterSummary',
      chapterSummaryOption: 'ChapterSummaryOption',
      images: 'Images',
      keyword: 'Keyword',
      layouts: 'Layouts',
      narrator: 'Narrator',
      question: 'Question',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chapterSummary: 'boolean',
      chapterSummaryOption: DocumentChapterSummarizeOption,
      images: 'boolean',
      keyword: 'boolean',
      layouts: 'boolean',
      narrator: 'boolean',
      question: 'boolean',
      summary: 'boolean',
    };
  }

  validate() {
    if(this.chapterSummaryOption && typeof (this.chapterSummaryOption as any).validate === 'function') {
      (this.chapterSummaryOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

