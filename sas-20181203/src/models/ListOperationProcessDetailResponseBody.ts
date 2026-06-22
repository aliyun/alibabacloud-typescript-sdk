// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationProcessDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 19
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class ListOperationProcessDetailResponseBodyProcessDetailsChecks extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item associated with the operation subtask.
   * 
   * @example
   * 133
   */
  checkId?: number;
  /**
   * @remarks
   * The name of the check item associated with the operation subtask.
   * 
   * @example
   * Check for Security Center Agent Status
   */
  checkShowName?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkShowName: 'CheckShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkShowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationProcessDetailResponseBodyProcessDetails extends $dara.Model {
  /**
   * @remarks
   * The asset subtype associated with the operation subtask.
   * 
   * @example
   * 1
   */
  assetSubType?: number;
  /**
   * @remarks
   * The asset type associated with the operation subtask.
   * 
   * @example
   * 8
   */
  assetType?: number;
  /**
   * @remarks
   * The asset vendor associated with the operation subtask.
   * 
   * @example
   * 0
   */
  assetVendor?: number;
  /**
   * @remarks
   * The list of check items associated with the operation subtask.
   */
  checks?: ListOperationProcessDetailResponseBodyProcessDetailsChecks[];
  /**
   * @remarks
   * The timestamp when the task was created, in milliseconds.
   * 
   * @example
   * 1706544199000
   */
  createTime?: number;
  /**
   * @remarks
   * The operation subtask ID.
   * 
   * @example
   * fb4bcd41-a916-46bc-ab1a-65fd383be***
   */
  detailTaskId?: string;
  /**
   * @remarks
   * The timestamp when the operation subtask ended, in milliseconds.
   * 
   * @example
   * 1706544199000
   */
  endTime?: number;
  /**
   * @remarks
   * The timestamp when the operation subtask started, in milliseconds.
   * 
   * @example
   * 1730335622000
   */
  startTime?: number;
  /**
   * @remarks
   * The operation subtask status code. Valid values:
   * - 0: not started.
   * - 1: checking.
   * - 2: succeeded.
   * - 3: timed out.
   * - 4: failed.
   * 
   * @example
   * 0
   */
  statusCode?: number;
  /**
   * @remarks
   * The operation subtask ID.
   * 
   * @example
   * v34578b8-e567-47ec-2345-3e5b077ca***
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      assetVendor: 'AssetVendor',
      checks: 'Checks',
      createTime: 'CreateTime',
      detailTaskId: 'DetailTaskId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSubType: 'number',
      assetType: 'number',
      assetVendor: 'number',
      checks: { 'type': 'array', 'itemType': ListOperationProcessDetailResponseBodyProcessDetailsChecks },
      createTime: 'number',
      detailTaskId: 'string',
      endTime: 'number',
      startTime: 'number',
      statusCode: 'number',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checks)) {
      $dara.Model.validateArray(this.checks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationProcessDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListOperationProcessDetailResponseBodyPageInfo;
  /**
   * @remarks
   * The list of operation subtask information.
   */
  processDetails?: ListOperationProcessDetailResponseBodyProcessDetails[];
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F3***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      processDetails: 'ProcessDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListOperationProcessDetailResponseBodyPageInfo,
      processDetails: { 'type': 'array', 'itemType': ListOperationProcessDetailResponseBodyProcessDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.processDetails)) {
      $dara.Model.validateArray(this.processDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

