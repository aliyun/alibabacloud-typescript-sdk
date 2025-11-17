// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLastAccelerationEngineJobResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Execution time, in the format yyyy-MM-dd hh:mm:ss.
   * 
   * @example
   * 2025-06-18 17:07:43
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Completion time, in the format yyyy-MM-dd hh:mm:ss.
   * 
   * @example
   * 2025-06-18 17:08:26
   */
  gmtModified?: string;
  /**
   * @remarks
   * Acceleration task ID.
   * 
   * @example
   * 46e53********5464564
   */
  jobHistoryId?: string;
  /**
   * @remarks
   * Task status. Possible values:
   * 
   * - TODO -- To be run
   * - RUNNING -- Running
   * - SUCCESS -- Successfully completed
   * - FAILURE -- Abnormally terminated
   * - CANCELED -- Canceled
   * - CHECK_DEPENDENCY -- Checking dependencies
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      jobHistoryId: 'JobHistoryId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      jobHistoryId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLastAccelerationEngineJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 46e53*********92704c8
   */
  requestId?: string;
  /**
   * @remarks
   * The entity of the most recent acceleration task.
   */
  result?: QueryLastAccelerationEngineJobResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryLastAccelerationEngineJobResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

