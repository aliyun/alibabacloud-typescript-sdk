// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Minimum task execution time. Used to filter tasks with execution time greater than this value, in seconds. Default 0, meaning no limit.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * Start time of task start time, indicating querying tasks whose start time is after this time. Expressed according to ISO8601 standard, and must use UTC +0 time, format: yyyy-MM-ddTHH:mm:ssZ. Earliest supports 30 days ago, automatically converts to 30 days ago if more than 30 days from current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The cluster ID. Separate multiple cluster IDs with commas (,). Maximum 30 cluster IDs. If not filled, defaults to querying historical tasks of all clusters in that region.
   * 
   * @example
   * amv-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. The value is fixed to Instance.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Valid range: positive integers. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-ae****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   **Scheduled**
   * *   **Running**
   * *   **Succeed**
   * *   **Failed**: The task failed.
   * *   **Cancelling**
   * *   **Canceled**
   * *   **Waiting**
   * 
   * If querying multiple statuses, separate them with English commas. Default is empty, meaning select all.
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * The job IDs. Separate multiple task IDs with commas (,). Maximum 30 task IDs. If not filled, defaults to querying historical tasks of all clusters.
   * 
   * @example
   * t-83br18hloy3faf****
   */
  taskId?: string;
  /**
   * @remarks
   * Task type, used to query specific type task situations. If multiple, separate with English commas (,), maximum 30 supported. Default is empty, meaning no restriction.
   * 
   * @example
   * autotest_dispatch_cases
   */
  taskType?: string;
  /**
   * @remarks
   * Maximum task execution time. Used to filter tasks with execution time not less than this value, in seconds. Default 0, meaning no limit.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * End time of task start time, indicating querying tasks whose start time is before this time. Expressed according to ISO8601 standard, and must use UTC +0 time, format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-03-02T11:31:03Z
   */
  toStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      fromExecTime: 'FromExecTime',
      fromStartTime: 'FromStartTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      toExecTime: 'ToExecTime',
      toStartTime: 'ToStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromExecTime: 'number',
      fromStartTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      toExecTime: 'number',
      toStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

