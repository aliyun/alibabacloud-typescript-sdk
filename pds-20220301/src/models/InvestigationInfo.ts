// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvestigationInfoVideoDetail } from "./InvestigationInfoVideoDetail";


export class InvestigationInfo extends $dara.Model {
  status?: number;
  suggestion?: string;
  videoDetail?: InvestigationInfoVideoDetail;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      suggestion: 'suggestion',
      videoDetail: 'video_detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      suggestion: 'string',
      videoDetail: InvestigationInfoVideoDetail,
    };
  }

  validate() {
    if(this.videoDetail && typeof (this.videoDetail as any).validate === 'function') {
      (this.videoDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

