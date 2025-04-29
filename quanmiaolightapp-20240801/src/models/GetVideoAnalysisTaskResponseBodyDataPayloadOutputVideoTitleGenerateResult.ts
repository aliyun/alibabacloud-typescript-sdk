// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResultUsage } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResultUsage";


export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * xxxx
   */
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResultUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoTitleGenerateResultUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

