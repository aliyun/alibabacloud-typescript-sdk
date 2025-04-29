// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResultVideoCaptions } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResultVideoCaptions";


export class RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResult extends $dara.Model {
  /**
   * @example
   * true
   */
  generateFinished?: boolean;
  videoCaptions?: RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResultVideoCaptions[];
  static names(): { [key: string]: string } {
    return {
      generateFinished: 'generateFinished',
      videoCaptions: 'videoCaptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateFinished: 'boolean',
      videoCaptions: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoCaptionResultVideoCaptions },
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

