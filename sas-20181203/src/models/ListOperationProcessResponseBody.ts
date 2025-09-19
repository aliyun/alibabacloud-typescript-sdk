// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationProcessResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
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
   * The time when the task was created. Unit: milliseconds.
   * 
   * @example
   * 1674388824000
   */
  createTime?: number;
  detailTaskReadyCount?: number;
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
   * The number of tasks that are complete.
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
   * The task status code. Valid values:
   * 
   * *   0: not started.
   * *   1: running.
   * *   2: complete.
   * *   3: times out.
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
  taskSource?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   CHECK_ALL: full check.
   * *   CHECK_POLICY: policy-based check for which check items are configured.
   * *   CHECK_SCHEDULE: scheduled check.
   * *   CHECK_ITEM: specific check item-based check.
   * *   CHECK_INSTANCE: specific check item-based check on specific instances.
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
   * The information about the operation tasks.
   */
  processes?: ListOperationProcessResponseBodyProcesses[];
  /**
   * @remarks
   * The request ID.
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

