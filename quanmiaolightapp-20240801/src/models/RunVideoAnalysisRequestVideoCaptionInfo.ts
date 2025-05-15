// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisRequestVideoCaptionInfoVideoCaptions } from "./RunVideoAnalysisRequestVideoCaptionInfoVideoCaptions";


export class RunVideoAnalysisRequestVideoCaptionInfo extends $dara.Model {
  videoCaptions?: RunVideoAnalysisRequestVideoCaptionInfoVideoCaptions[];
  static names(): { [key: string]: string } {
    return {
      videoCaptions: 'videoCaptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoCaptions: { 'type': 'array', 'itemType': RunVideoAnalysisRequestVideoCaptionInfoVideoCaptions },
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

