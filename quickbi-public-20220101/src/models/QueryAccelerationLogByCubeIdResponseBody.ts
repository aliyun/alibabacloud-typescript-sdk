// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccelerationLogByCubeIdResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * 123
   */
  duration?: string;
  /**
   * @example
   * REST_A***************6a8
   */
  jobHistoryId?: string;
  /**
   * @example
   * REST_A***************6a8
   */
  jobId?: string;
  /**
   * @example
   * 0
   */
  jobStatus?: string;
  /**
   * @example
   * REST_A***************6a8
   */
  jonStartDate?: string;
  /**
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
  data?: QueryAccelerationLogByCubeIdResponseBodyResultData[];
  /**
   * @example
   * null
   */
  next?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * null
   */
  pre?: number;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
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
   * @example
   * D8749D********80FF3B4
   */
  requestId?: string;
  result?: QueryAccelerationLogByCubeIdResponseBodyResult;
  /**
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

