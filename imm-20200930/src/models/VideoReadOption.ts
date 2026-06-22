// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoReadKeywordOption } from "./VideoReadKeywordOption";
import { VideoReadPPTOption } from "./VideoReadPptoption";
import { VideoReadQuestionOption } from "./VideoReadQuestionOption";
import { VideoReadSummaryOption } from "./VideoReadSummaryOption";


export class VideoReadOption extends $dara.Model {
  keyword?: VideoReadKeywordOption;
  PPT?: VideoReadPPTOption;
  question?: VideoReadQuestionOption;
  summary?: VideoReadSummaryOption;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      PPT: 'PPT',
      question: 'Question',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: VideoReadKeywordOption,
      PPT: VideoReadPPTOption,
      question: VideoReadQuestionOption,
      summary: VideoReadSummaryOption,
    };
  }

  validate() {
    if(this.keyword && typeof (this.keyword as any).validate === 'function') {
      (this.keyword as any).validate();
    }
    if(this.PPT && typeof (this.PPT as any).validate === 'function') {
      (this.PPT as any).validate();
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

