// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotUpdateJobFailureInfo } from "./HotUpdateJobFailureInfo";


export class HotUpdateJobStatus extends $dara.Model {
  failure?: HotUpdateJobFailureInfo;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failure: 'failure',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failure: HotUpdateJobFailureInfo,
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.failure && typeof (this.failure as any).validate === 'function') {
      (this.failure as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

