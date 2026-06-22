// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DocumentChapterSummarizeOption } from "./DocumentChapterSummarizeOption";


export class DocumentReadSummaryOption extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate a summary for each chapter. This setting applies only if the service can identify chapters.
   * 
   * **Default value**: `false`.
   */
  chapterSummarize?: boolean;
  chapterSummarizeOption?: DocumentChapterSummarizeOption;
  /**
   * @remarks
   * Specifies whether to generate a summary for the entire document.
   * 
   * **Default value**: `false`.
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

