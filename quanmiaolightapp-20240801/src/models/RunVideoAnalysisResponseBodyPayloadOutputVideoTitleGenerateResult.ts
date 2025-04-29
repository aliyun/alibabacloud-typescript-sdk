// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage";


export class RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  modelReduce?: boolean;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage;
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      modelId: 'modelId',
      modelReduce: 'modelReduce',
      text: 'text',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      modelId: 'string',
      modelReduce: 'boolean',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoTitleGenerateResultUsage,
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

