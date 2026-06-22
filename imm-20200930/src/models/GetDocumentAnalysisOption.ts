// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DocumentChapterSummarizeOption } from "./DocumentChapterSummarizeOption";


export class GetDocumentAnalysisOption extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate summaries for each chapter. Set to `true` to enable this feature. Use `ChapterSummaryOption` to configure detailed options. Defaults to `false`.
   */
  chapterSummary?: boolean;
  chapterSummaryOption?: DocumentChapterSummarizeOption;
  /**
   * @remarks
   * Specifies whether to analyze each image within the document. Set to `true` to enable this feature. Defaults to `false`.
   */
  images?: boolean;
  /**
   * @remarks
   * Specifies whether to extract keywords from the document. Set to `true` to enable this feature. Defaults to `false`.
   */
  keyword?: boolean;
  /**
   * @remarks
   * Specifies whether to analyze the document layout. Set to `true` to enable this feature. Defaults to `false`.
   */
  layouts?: boolean;
  /**
   * @remarks
   * Specifies whether to identify the narrator in the document. Set to `true` to enable this feature. Defaults to `false`.
   */
  narrator?: boolean;
  /**
   * @remarks
   * Specifies whether to generate questions based on the document content. Set to `true` to enable this feature. Defaults to `false`.
   */
  question?: boolean;
  /**
   * @remarks
   * Specifies whether to generate a summary for the document. Set to `true` to enable this feature. Defaults to `false`.
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

