// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitVideoAnalysisTaskRequestVideoCaptionInfoVideoCaptions } from "./SubmitVideoAnalysisTaskRequestVideoCaptionInfoVideoCaptions";


export class SubmitVideoAnalysisTaskRequestVideoCaptionInfo extends $dara.Model {
  videoCaptions?: SubmitVideoAnalysisTaskRequestVideoCaptionInfoVideoCaptions[];
  static names(): { [key: string]: string } {
    return {
      videoCaptions: 'videoCaptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

