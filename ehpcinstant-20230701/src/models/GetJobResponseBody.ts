// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResponseBodyJobInfo } from "./GetJobResponseBodyJobInfo";


export class GetJobResponseBody extends $dara.Model {
  jobInfo?: GetJobResponseBodyJobInfo;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: GetJobResponseBodyJobInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobInfo && typeof (this.jobInfo as any).validate === 'function') {
      (this.jobInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

