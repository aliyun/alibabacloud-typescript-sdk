// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobStatusResponseBodyJobStatus } from "./GetJobStatusResponseBodyJobStatus";


export class GetJobStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The real-time status information of the asynchronous task.
   */
  jobStatus?: GetJobStatusResponseBodyJobStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E2BFE96-C0E0-5A98-85C8-633EC803198D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: GetJobStatusResponseBodyJobStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobStatus && typeof (this.jobStatus as any).validate === 'function') {
      (this.jobStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

