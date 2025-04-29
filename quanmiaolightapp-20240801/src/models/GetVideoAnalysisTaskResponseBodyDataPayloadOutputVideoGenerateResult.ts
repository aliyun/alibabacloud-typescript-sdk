// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultUsage } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultUsage";


export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  index?: number;
  modelId?: string;
  modelReduce?: boolean;
  reasonText?: string;
  /**
   * @example
   * xxx
   */
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      index: 'index',
      modelId: 'modelId',
      modelReduce: 'modelReduce',
      reasonText: 'reasonText',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      index: 'number',
      modelId: 'string',
      modelReduce: 'boolean',
      reasonText: 'string',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultUsage,
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

