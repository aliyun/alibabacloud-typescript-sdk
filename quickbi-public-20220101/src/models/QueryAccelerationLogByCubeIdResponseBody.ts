// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccelerationLogByCubeIdResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The task duration in seconds.
   * 
   * @example
   * 123
   */
  duration?: string;
  /**
   * @remarks
   * The task history ID.
   * 
   * @example
   * REST_A***************6a8
   */
  jobHistoryId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * REST_A***************6a8
   */
  jobId?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * - 0: Pending
   * 
   * - 1: Running
   * 
   * - 2: Succeeded
   * 
   * - 3: Failed
   * 
   * - 4: Canceled
   * 
   * - 5: Warning
   * 
   * @example
   * 0
   */
  jobStatus?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * REST_A***************6a8
   */
  jonStartDate?: string;
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * asdav************
   */
  log?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      jobHistoryId: 'JobHistoryId',
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      jonStartDate: 'JonStartDate',
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      jobHistoryId: 'string',
      jobId: 'string',
      jobStatus: 'string',
      jonStartDate: 'string',
      log: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccelerationLogByCubeIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * An array of acceleration task logs.
   */
  data?: QueryAccelerationLogByCubeIdResponseBodyResultData[];
  /**
   * @remarks
   * The next page. A value of NULL or 0 indicates that no next page exists.
   * 
   * @example
   * null
   */
  next?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The previous page. A value of NULL or 0 indicates that no previous page exists.
   * 
   * @example
   * null
   */
  pre?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      next: 'Next',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pre: 'Pre',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryAccelerationLogByCubeIdResponseBodyResultData },
      next: 'number',
      pageNum: 'number',
      pageSize: 'number',
      pre: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccelerationLogByCubeIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D8749D********80FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the API request.
   * 
   * - true: The execution succeeded.
   * 
   * - false: The execution failed.
   */
  result?: QueryAccelerationLogByCubeIdResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
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
      result: QueryAccelerationLogByCubeIdResponseBodyResult,
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

