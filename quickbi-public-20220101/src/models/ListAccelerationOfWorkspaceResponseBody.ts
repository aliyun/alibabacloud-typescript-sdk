// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccelerationOfWorkspaceResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * system
   */
  creatorName?: string;
  /**
   * @example
   * d14e*********fef8de29fd
   */
  cubeId?: string;
  cubeName?: string;
  /**
   * @example
   * 20250911 00:00:00
   */
  enableQuickindexTime?: string;
  /**
   * @example
   * QWDAASG*******8SAD
   */
  jobHistoryId?: string;
  /**
   * @example
   * b30b74**********b3b
   */
  jobId?: string;
  /**
   * @example
   * 0
   */
  jobStatus?: number;
  /**
   * @example
   * 20250911 00:00:00
   */
  lastModifyTime?: string;
  /**
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
  data?: ListAccelerationOfWorkspaceResponseBodyResultData[];
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
   * 0
   */
  pre?: number;
  /**
   * @example
   * 18
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
   * @example
   * D787E****************05DF8D885
   */
  requestId?: string;
  result?: ListAccelerationOfWorkspaceResponseBodyResult;
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

