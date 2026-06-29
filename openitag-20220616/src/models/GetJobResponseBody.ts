// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Job } from "./Job";


export class GetJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * Total amount of data under the conditions of this request. This parameter is optional and does not need to be returned by default.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details
   * 
   * @example
   * null
   */
  details?: string;
  /**
   * @remarks
   * error code
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * Job
   */
  job?: Job;
  /**
   * @remarks
   * Return message of the request
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1F29E
   */
  requestId?: string;
  /**
   * @remarks
   * is succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      job: Job,
      message: 'string',
      requestId: 'string',
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

