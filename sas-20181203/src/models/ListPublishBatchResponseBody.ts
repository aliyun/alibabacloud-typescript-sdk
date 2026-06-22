// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishBatchResponseBodyBatchList extends $dara.Model {
  /**
   * @remarks
   * The ID of the release batch.
   * 
   * @example
   * 1371
   */
  batchId?: number;
  /**
   * @remarks
   * The interval between the completion of the current batch and the start of the next batch. Unit: hours.
   * 
   * @example
   * 12
   */
  batchInterval?: number;
  /**
   * @remarks
   * The name of the release batch.
   * 
   * @example
   * 发布批次1
   */
  batchName?: string;
  /**
   * @remarks
   * The number of the current batch in a phased release.
   * 
   * @example
   * 2147483647
   */
  batchNo?: number;
  /**
   * @remarks
   * The release progress of the current batch, indicating the number of machines that have been released.
   * 
   * @example
   * 12
   */
  batchProcess?: number;
  /**
   * @remarks
   * The total number of batches in the release.
   * 
   * @example
   * 3
   */
  batchTotal?: number;
  /**
   * @remarks
   * The dimension for asset selection. Valid values:
   * 
   * - **0**: machine instance
   * - **1**: machine group
   * - **2**: VPC-connected instance ID.
   * 
   * @example
   * 0
   */
  operationBase?: number;
  /**
   * @remarks
   * The release status of the client. Valid values:
   * - **0**: not started
   * - **1**: releasing
   * - **2**: release completed
   * - **3**: release paused
   * - **4**: force upgrading.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The target version to upgrade to.
   * 
   * @example
   * 0.0.9
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      batchInterval: 'BatchInterval',
      batchName: 'BatchName',
      batchNo: 'BatchNo',
      batchProcess: 'BatchProcess',
      batchTotal: 'BatchTotal',
      operationBase: 'OperationBase',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      batchInterval: 'number',
      batchName: 'string',
      batchNo: 'number',
      batchProcess: 'number',
      batchTotal: 'number',
      operationBase: 'number',
      status: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishBatchResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page when paging is used.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page when paging is used.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 25
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishBatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the batch release tasks.
   */
  batchList?: ListPublishBatchResponseBodyBatchList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListPublishBatchResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID. The China Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DDCAE1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      batchList: 'BatchList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchList: { 'type': 'array', 'itemType': ListPublishBatchResponseBodyBatchList },
      pageInfo: ListPublishBatchResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.batchList)) {
      $dara.Model.validateArray(this.batchList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

