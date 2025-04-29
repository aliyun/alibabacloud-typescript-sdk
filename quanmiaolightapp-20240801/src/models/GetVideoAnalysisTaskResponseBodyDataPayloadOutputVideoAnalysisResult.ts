// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultUsage } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultUsage";
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultVideoShotAnalysisResults } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultVideoShotAnalysisResults";


export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  /**
   * @example
   * xxx
   */
  text?: string;
  usage?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultUsage;
  videoShotAnalysisResults?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultVideoShotAnalysisResults[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      text: 'text',
      usage: 'usage',
      videoShotAnalysisResults: 'videoShotAnalysisResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      text: 'string',
      usage: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultUsage,
      videoShotAnalysisResults: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultVideoShotAnalysisResults },
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

