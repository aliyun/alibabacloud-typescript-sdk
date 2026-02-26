// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentParseSummaryOption extends $dara.Model {
  chapterSummarize?: boolean;
  summarize?: boolean;
  static names(): { [key: string]: string } {
    return {
      chapterSummarize: 'ChapterSummarize',
      summarize: 'Summarize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chapterSummarize: 'boolean',
      summarize: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

