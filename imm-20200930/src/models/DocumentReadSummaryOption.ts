// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DocumentChapterSummarizeOption } from "./DocumentChapterSummarizeOption";


export class DocumentReadSummaryOption extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to extract the chapter-level summary of the article.
   * 
   * @example
   * true
   */
  chapterSummarize?: boolean;
  /**
   * @remarks
   * The chapter-level summary options for the article.
   */
  chapterSummarizeOption?: DocumentChapterSummarizeOption;
  /**
   * @remarks
   * Specifies whether to extract the article summary.
   * 
   * @example
   * true
   */
  summarize?: boolean;
  static names(): { [key: string]: string } {
    return {
      chapterSummarize: 'ChapterSummarize',
      chapterSummarizeOption: 'ChapterSummarizeOption',
      summarize: 'Summarize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chapterSummarize: 'boolean',
      chapterSummarizeOption: DocumentChapterSummarizeOption,
      summarize: 'boolean',
    };
  }

  validate() {
    if(this.chapterSummarizeOption && typeof (this.chapterSummarizeOption as any).validate === 'function') {
      (this.chapterSummarizeOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

