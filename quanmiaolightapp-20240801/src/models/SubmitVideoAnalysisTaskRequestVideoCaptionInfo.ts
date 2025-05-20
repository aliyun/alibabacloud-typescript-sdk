// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitVideoAnalysisTaskRequestVideoCaptionInfoVideoCaptions } from "./SubmitVideoAnalysisTaskRequestVideoCaptionInfoVideoCaptions";


export class SubmitVideoAnalysisTaskRequestVideoCaptionInfo extends $dara.Model {
  /**
   * @example
   * oss:// | http://
   */
  videoCaptionFileUrl?: string;
  videoCaptions?: SubmitVideoAnalysisTaskRequestVideoCaptionInfoVideoCaptions[];
  static names(): { [key: string]: string } {
    return {
      videoCaptionFileUrl: 'videoCaptionFileUrl',
      videoCaptions: 'videoCaptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoCaptionFileUrl: 'string',
      videoCaptions: { 'type': 'array', 'itemType': SubmitVideoAnalysisTaskRequestVideoCaptionInfoVideoCaptions },
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

