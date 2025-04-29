// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultUsage } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultUsage";
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappings } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappings";


export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultUsage;
  videoMindMappings?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappings[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      text: 'text',
      usage: 'usage',
      videoMindMappings: 'videoMindMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultUsage,
      videoMindMappings: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoMindMappingGenerateResultVideoMindMappings },
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

