// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJob } from "./SubmitJobsResponseBodyJobResultListJobResultJob";


export class SubmitJobsResponseBodyJobResultListJobResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job failed to be created. This parameter is not returned if the job was created.
   * 
   * @example
   * InvalidParameter.NullValue
   */
  code?: string;
  /**
   * @remarks
   * The details of the job. If the job fails to be submitted, no job ID is generated.
   */
  job?: SubmitJobsResponseBodyJobResultListJobResultJob;
  /**
   * @remarks
   * The error message returned if the job failed to be created. This parameter is not returned if the job was created.
   * 
   * @example
   * The specified parameter "%s" cannot be null.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the job was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      job: 'Job',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      job: SubmitJobsResponseBodyJobResultListJobResultJob,
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

