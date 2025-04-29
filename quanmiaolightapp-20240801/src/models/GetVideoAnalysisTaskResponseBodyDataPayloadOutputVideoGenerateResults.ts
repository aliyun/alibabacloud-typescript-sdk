// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultsUsage } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultsUsage";


export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResults extends $dara.Model {
  generateFinished?: boolean;
  index?: number;
  modelId?: string;
  reasonText?: string;
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultsUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      index: 'index',
      modelId: 'modelId',
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
      reasonText: 'string',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoGenerateResultsUsage,
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

