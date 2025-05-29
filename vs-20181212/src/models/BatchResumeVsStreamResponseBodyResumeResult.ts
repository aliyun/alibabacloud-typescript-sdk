// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchResumeVsStreamResponseBodyResumeResultResumeResultInfo } from "./BatchResumeVsStreamResponseBodyResumeResultResumeResultInfo";


export class BatchResumeVsStreamResponseBodyResumeResult extends $dara.Model {
  resumeResultInfo?: BatchResumeVsStreamResponseBodyResumeResultResumeResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resumeResultInfo: 'ResumeResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resumeResultInfo: { 'type': 'array', 'itemType': BatchResumeVsStreamResponseBodyResumeResultResumeResultInfo },
    };
  }

  validate() {
    if(Array.isArray(this.resumeResultInfo)) {
      $dara.Model.validateArray(this.resumeResultInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

