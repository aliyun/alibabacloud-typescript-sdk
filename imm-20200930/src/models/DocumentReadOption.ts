// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DocumentReadKeywordOption } from "./DocumentReadKeywordOption";
import { DocumentReadNarratorOption } from "./DocumentReadNarratorOption";
import { DocumentReadQuestionOption } from "./DocumentReadQuestionOption";
import { DocumentReadSummaryOption } from "./DocumentReadSummaryOption";


export class DocumentReadOption extends $dara.Model {
  /**
   * @remarks
   * Configuration for extracting keywords from the document.
   */
  keyword?: DocumentReadKeywordOption;
  /**
   * @remarks
   * Configuration for the text-to-speech (TTS) narrator.
   */
  narrator?: DocumentReadNarratorOption;
  /**
   * @remarks
   * Configuration for the question-answering (Q\\&A) feature, which answers questions based on the document\\"s content.
   */
  question?: DocumentReadQuestionOption;
  /**
   * @remarks
   * Configuration for generating a document summary.
   */
  summary?: DocumentReadSummaryOption;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      narrator: 'Narrator',
      question: 'Question',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: DocumentReadKeywordOption,
      narrator: DocumentReadNarratorOption,
      question: DocumentReadQuestionOption,
      summary: DocumentReadSummaryOption,
    };
  }

  validate() {
    if(this.keyword && typeof (this.keyword as any).validate === 'function') {
      (this.keyword as any).validate();
    }
    if(this.narrator && typeof (this.narrator as any).validate === 'function') {
      (this.narrator as any).validate();
    }
    if(this.question && typeof (this.question as any).validate === 'function') {
      (this.question as any).validate();
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

