// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage";
import { RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults";


export class RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * qwen-vl-max
   */
  modelId?: string;
  text?: string;
  usage?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage;
  videoShotAnalysisResults?: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      modelId: 'modelId',
      text: 'text',
      usage: 'usage',
      videoShotAnalysisResults: 'videoShotAnalysisResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      modelId: 'string',
      text: 'string',
      usage: RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultUsage,
      videoShotAnalysisResults: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoAnalysisResultVideoShotAnalysisResults },
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    if(Array.isArray(this.videoShotAnalysisResults)) {
      $dara.Model.validateArray(this.videoShotAnalysisResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

