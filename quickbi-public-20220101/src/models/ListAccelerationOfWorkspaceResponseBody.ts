// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccelerationOfWorkspaceResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * system
   */
  creatorName?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d14e*********fef8de29fd
   */
  cubeId?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * test
   */
  cubeName?: string;
  /**
   * @remarks
   * The time when acceleration was enabled, in the format of YYYYMMDD HH:mm:ss.
   * 
   * @example
   * 20250911 00:00:00
   */
  enableQuickindexTime?: string;
  /**
   * @remarks
   * The task history ID.
   * 
   * @example
   * QWDAASG*******8SAD
   */
  jobHistoryId?: string;
  /**
   * @remarks
   * The acceleration task ID.
   * 
   * @example
   * b30b74**********b3b
   */
  jobId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - 0: pending
   * - 1: running
   * - 2: completed
   * - 3: failed
   * - 4: canceled
   * - 5: warning
   * 
   * @example
   * 0
   */
  jobStatus?: number;
  /**
   * @remarks
   * The last modification time, in the format of YYYYMMDD HH:mm:ss.
   * 
   * @example
   * 20250911 00:00:00
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The size.
   * 
   * @example
   * 47045632
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'CreatorName',
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      enableQuickindexTime: 'EnableQuickindexTime',
      jobHistoryId: 'JobHistoryId',
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      lastModifyTime: 'LastModifyTime',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      cubeId: 'string',
      cubeName: 'string',
      enableQuickindexTime: 'string',
      jobHistoryId: 'string',
      jobId: 'string',
      jobStatus: 'number',
      lastModifyTime: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccelerationOfWorkspaceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The array of acceleration task information.
   */
  data?: ListAccelerationOfWorkspaceResponseBodyResultData[];
  /**
   * @remarks
   * The next page number. A value of NULL or 0 indicates that there is no next page.
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
   * The number of rows per page specified in the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The previous page number. A value of NULL or 0 indicates that there is no previous page.
   * 
   * @example
   * 0
   */
  pre?: number;
  /**
   * @remarks
   * The total number of rows.
   * 
   * @example
   * 18
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
      data: { 'type': 'array', 'itemType': ListAccelerationOfWorkspaceResponseBodyResultData },
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

export class ListAccelerationOfWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E****************05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The acceleration task information model.
   */
  result?: ListAccelerationOfWorkspaceResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
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
      result: ListAccelerationOfWorkspaceResponseBodyResult,
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

