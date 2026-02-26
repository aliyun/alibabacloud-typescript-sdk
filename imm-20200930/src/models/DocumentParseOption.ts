// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DocumentParseKeywordOption } from "./DocumentParseKeywordOption";
import { DocumentParseNarratorOption } from "./DocumentParseNarratorOption";
import { DocumentParseQuestionOption } from "./DocumentParseQuestionOption";
import { DocumentParseSummaryOption } from "./DocumentParseSummaryOption";


export class DocumentParseOption extends $dara.Model {
  keyword?: DocumentParseKeywordOption;
  narrator?: DocumentParseNarratorOption;
  question?: DocumentParseQuestionOption;
  summary?: DocumentParseSummaryOption;
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
      keyword: DocumentParseKeywordOption,
      narrator: DocumentParseNarratorOption,
      question: DocumentParseQuestionOption,
      summary: DocumentParseSummaryOption,
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

