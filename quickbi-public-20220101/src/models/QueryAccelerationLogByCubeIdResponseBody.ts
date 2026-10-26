// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccelerationLogByCubeIdResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The duration. Unit: seconds.
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
   * The task status. Valid values:
   * 
   * - 0: pending
   * - 1: running
   * - 2: succeeded
   * - 3: failed
   * - 4: canceled
   * - 5: warning
   * 
   * @example
   * 0
   */
  jobStatus?: string;
  /**
   * @remarks
   * The task start time. Format: yyyy/MM/dd HH:mm:ss. Time zone: UTC+8.
   * 
   * @example
   * 2025/09/10 13:59:19
   */
  jonStartDate?: string;
  /**
   * @remarks
   * The log.
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
   * The array of acceleration task logs.
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
   * The execution result of the operation. Valid values:
   * 
   * - true: The execution succeeded.
   * - false: The execution failed.
   */
  result?: QueryAccelerationLogByCubeIdResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request succeeded.
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

