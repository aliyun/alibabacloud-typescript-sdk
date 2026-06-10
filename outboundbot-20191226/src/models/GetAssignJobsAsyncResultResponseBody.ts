// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssignJobsAsyncResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The task group ID.
   * 
   * @example
   * d3550dd1-360d-4fe5-b4b2-667a4a664dab
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The list of job IDs.
   */
  jobsId?: string[];
  /**
   * @remarks
   * The API message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates whether the asynchronous task timed out.
   * 
   * @example
   * false
   */
  timeout?: boolean;
  /**
   * @remarks
   * Indicates whether the result has been fully generated.
   * 
   * @example
   * true
   */
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroupId: 'JobGroupId',
      jobsId: 'JobsId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      timeout: 'Timeout',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroupId: 'string',
      jobsId: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      timeout: 'boolean',
      valid: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.jobsId)) {
      $dara.Model.validateArray(this.jobsId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

