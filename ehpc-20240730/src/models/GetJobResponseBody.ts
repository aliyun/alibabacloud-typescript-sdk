// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResponseBodyJobInfo } from "./GetJobResponseBodyJobInfo";


export class GetJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job details.
   */
  jobInfo?: GetJobResponseBodyJobInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0****-1335-****-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: GetJobResponseBodyJobInfo,
      requestId: 'string',
      success: 'string',
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

