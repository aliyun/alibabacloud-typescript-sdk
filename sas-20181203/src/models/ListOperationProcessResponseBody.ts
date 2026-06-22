// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationProcessResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page to display in a paged query. This parameter is used for paging.
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
   * The total number of entries.
   * 
   * @example
   * 263
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

export class ListOperationProcessResponseBodyProcesses extends $dara.Model {
  /**
   * @remarks
   * The creation time of the task. Unit: milliseconds.
   * 
   * @example
   * 1674388824000
   */
  createTime?: number;
  /**
   * @remarks
   * The number of completed subtasks.
   * 
   * @example
   * 5
   */
  detailTaskReadyCount?: number;
  /**
   * @remarks
   * The total number of subtasks.
   * 
   * @example
   * 10
   */
  detailTaskTotalCount?: number;
  /**
   * @remarks
   * The end time of the task. Unit: milliseconds.
   * 
   * @example
   * 1705467559000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of completed items.
   * 
   * @example
   * 197
   */
  finishCount?: number;
  /**
   * @remarks
   * The start time of the task. Unit: milliseconds.
   * 
   * @example
   * 1705457102000
   */
  startTime?: number;
  /**
   * @remarks
   * The check task status code. Valid values:
   * 
   * - 0: not started.
   * - 1: checking.
   * - 2: check completed.
   * - 3: timed out.
   * 
   * @example
   * 1
   */
  statusCode?: number;
  /**
   * @remarks
   * The ID of the operation task.
   * 
   * @example
   * 3d7a1b68-599f-4e16-9b45-e920a183b***
   */
  taskId?: string;
  /**
   * @remarks
   * The task source. Valid values:
   * 
   * - **YAO_CHI**: ApsaraDB.
   * 
   * @example
   * YAO_CHI
   */
  taskSource?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - CHECK_ALL: full check.
   * - CHECK_POLICY: check performed based on check items in the configured policy.
   * - CHECK_SCHEDULE: scheduled check.
   * - CHECK_ITEM: check performed based on specified check items.
   * - CHECK_INSTANCE: check performed based on specified check items and instances.
   * 
   * @example
   * CHECK_POLICY
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 337
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      detailTaskReadyCount: 'DetailTaskReadyCount',
      detailTaskTotalCount: 'DetailTaskTotalCount',
      endTime: 'EndTime',
      finishCount: 'FinishCount',
      startTime: 'StartTime',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
      taskSource: 'TaskSource',
      taskType: 'TaskType',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      detailTaskReadyCount: 'number',
      detailTaskTotalCount: 'number',
      endTime: 'number',
      finishCount: 'number',
      startTime: 'number',
      statusCode: 'number',
      taskId: 'string',
      taskSource: 'string',
      taskType: 'string',
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

export class ListOperationProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListOperationProcessResponseBodyPageInfo;
  /**
   * @remarks
   * The list of operation task information.
   */
  processes?: ListOperationProcessResponseBodyProcesses[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      processes: 'Processes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListOperationProcessResponseBodyPageInfo,
      processes: { 'type': 'array', 'itemType': ListOperationProcessResponseBodyProcesses },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.processes)) {
      $dara.Model.validateArray(this.processes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

