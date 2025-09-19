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
   * The interval between two release batches. Unit: hours.
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
   * test
   */
  batchName?: string;
  /**
   * @remarks
   * The current batch number during a batch release.
   * 
   * @example
   * 2147483647
   */
  batchNo?: number;
  /**
   * @remarks
   * The progress of the release batch. This parameter indicates the number of servers that are upgraded in the release batch.
   * 
   * @example
   * 12
   */
  batchProcess?: number;
  /**
   * @remarks
   * The total number of batches.
   * 
   * @example
   * 3
   */
  batchTotal?: number;
  /**
   * @remarks
   * The asset selection dimension. Valid values:
   * 
   * *   **0**: instance.
   * *   **1**: machine group.
   * *   **2**: Virtual Private Cloud (VPC) ID.
   * 
   * @example
   * 0
   */
  operationBase?: number;
  /**
   * @remarks
   * The publish status of the Security Center agent. Valid values:
   * 
   * *   **0**: not started.
   * *   **1**: publishing.
   * *   **2**: published.
   * *   **3**: publish suspended.
   * *   **4**: forcibly upgrading.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The destination version of the Security Center agent.
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
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The information about the release batches.
   */
  batchList?: ListPublishBatchResponseBodyBatchList[];
  /**
   * @remarks
   * The page information.
   */
  pageInfo?: ListPublishBatchResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
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

