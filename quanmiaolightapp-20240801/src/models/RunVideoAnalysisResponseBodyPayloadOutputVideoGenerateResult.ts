// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage";


export class RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  index?: number;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  modelReduce?: boolean;
  reasonText?: string;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage;
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
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoGenerateResultUsage,
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

