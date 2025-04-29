// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage";
import { RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings";


export class RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * true
   */
  modelId?: string;
  modelReduce?: boolean;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage;
  videoMindMappings?: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      modelId: 'modelId',
      modelReduce: 'modelReduce',
      text: 'text',
      usage: 'usage',
      videoMindMappings: 'videoMindMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      modelId: 'string',
      modelReduce: 'boolean',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultUsage,
      videoMindMappings: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoMindMappingGenerateResultVideoMindMappings },
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    if(Array.isArray(this.videoMindMappings)) {
      $dara.Model.validateArray(this.videoMindMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

