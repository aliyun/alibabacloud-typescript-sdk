// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobRunResponseBodyJobRun } from "./GetJobRunResponseBodyJobRun";


export class GetJobRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the job.
   */
  jobRun?: GetJobRunResponseBodyJobRun;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobRun: 'jobRun',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRun: GetJobRunResponseBodyJobRun,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobRun && typeof (this.jobRun as any).validate === 'function') {
      (this.jobRun as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

