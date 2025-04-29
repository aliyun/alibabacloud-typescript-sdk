// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResultVideoCaptions } from "./GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResultVideoCaptions";


export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  videoCaptions?: GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResultVideoCaptions[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      videoCaptions: 'videoCaptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      videoCaptions: { 'type': 'array', 'itemType': GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoCaptionResultVideoCaptions },
    };
  }

  validate() {
    if(Array.isArray(this.videoCaptions)) {
      $dara.Model.validateArray(this.videoCaptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

