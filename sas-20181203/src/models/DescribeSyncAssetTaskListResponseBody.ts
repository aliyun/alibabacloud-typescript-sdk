// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncAssetTaskListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of IDC scan tasks on the current page.
   * 
   * @example
   * 10
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
   * The number of IDC scan tasks per page. Default value: 20. If you leave this parameter empty, 20 IDC scan tasks are returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of IDC scan tasks returned.
   * 
   * @example
   * 110
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

export class DescribeSyncAssetTaskListResponseBodyTaskRecords extends $dara.Model {
  /**
   * @remarks
   * The number of assets that are detected by the task.
   * 
   * @example
   * 100
   */
  assetCount?: number;
  /**
   * @remarks
   * The CIDR blocks that are used for scanning. Multiple CIDR blocks are separated by commas (,).
   * 
   * @example
   * 1.1.1.1/24,1.1.1.1/24
   */
  ipSegments?: string;
  /**
   * @remarks
   * The progress of the task, in percentage.
   * 
   * @example
   * 100
   */
  processRate?: number;
  /**
   * @remarks
   * The ID of the root task.
   * 
   * @example
   * 73c392f9c505129a257472a3f911d65d
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The timestamp when the task ended.
   * 
   * @example
   * 1653965680000
   */
  taskEndTime?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * IDC_PROBE_SCAN-1.1.1..124-lse_ubuntu_test1
   */
  taskName?: string;
  /**
   * @remarks
   * The timestamp when the task started. Unit: milliseconds.
   * 
   * @example
   * 1633746651715
   */
  taskStartTime?: number;
  /**
   * @remarks
   * The status of the IDC scan task. Valid Values:
   * 
   * *   **INIT**: The task is not started.
   * *   **START**: The task is started.
   * *   **MESSAGE_SEND**: The command is sent.
   * *   **SUCCESS**: The task is complete.
   * *   **FAIL**: The task failed.
   * *   **TIMEOUT**: The task timed out.
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the task. The value is fixed as **IDC_PROBE_SCAN**, which indicates an IDC scan task.
   * 
   * @example
   * IDC_PROBE_SCAN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      assetCount: 'AssetCount',
      ipSegments: 'IpSegments',
      processRate: 'ProcessRate',
      rootTaskId: 'RootTaskId',
      taskEndTime: 'TaskEndTime',
      taskName: 'TaskName',
      taskStartTime: 'TaskStartTime',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetCount: 'number',
      ipSegments: 'string',
      processRate: 'number',
      rootTaskId: 'string',
      taskEndTime: 'number',
      taskName: 'string',
      taskStartTime: 'number',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncAssetTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeSyncAssetTaskListResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  /**
   * @remarks
   * The IDC scan tasks.
   */
  taskRecords?: DescribeSyncAssetTaskListResponseBodyTaskRecords[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      taskRecords: 'TaskRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeSyncAssetTaskListResponseBodyPageInfo,
      requestId: 'string',
      taskRecords: { 'type': 'array', 'itemType': DescribeSyncAssetTaskListResponseBodyTaskRecords },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.taskRecords)) {
      $dara.Model.validateArray(this.taskRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

