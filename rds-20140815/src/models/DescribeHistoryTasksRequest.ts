// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum execution duration of the task. This parameter is used to filter tasks whose execution duration is longer than the minimum execution duration. Unit: seconds. The default value is 0, which indicates that no limit is imposed.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Only tasks that have a start time later than or equal to the time specified by this parameter are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The start time can be up to 30 days earlier than the current time. If you set this parameter to a time more than 30 days earlier than the current time, the specified time is automatically converted to a time that is exactly 30 days earlier than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The instance ID. Separate multiple instance IDs with commas (,). You can specify up to 30 instance IDs. This parameter is empty by default, which indicates that you can specify an unlimited number of instance IDs.
   * 
   * @example
   * rm-uf62br2491p5l****
   */
  instanceId?: string;
  /**
   * @remarks
   * Only Instance is supported.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **10 to 100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the pending event. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzbvctytru7ua
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: number;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   **Scheduled**
   * *   **Running**
   * *   **Succeed**
   * *   **Failed**
   * *   **Cancelling**
   * *   **Canceled**
   * *   **Waiting**
   * 
   * Separate multiple values with commas (,). By default, this parameter is left empty, which indicates that tasks in all statuses are queried.
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * The task ID. You can call the DescribeTasks operation to query the task ID. If multiple task IDs exist, separate them with commas (,). You can specify up to 30 task IDs. By default, this parameter is left empty, which indicates that all tasks are queried.
   * 
   * @example
   * t-83br18hloy3faf****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Separate multiple task types with commas (,). You can specify up to 30 task types. This parameter is empty by default, which indicates that you can specify an unlimited number of task types.
   * 
   * @example
   * autotest_dispatch_cases
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum execution duration of a task. This parameter is used to filter tasks whose execution duration is shorter than or equal to the maximum execution duration. Unit: seconds. The default value is 0, which indicates that no limit is imposed.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end of the time range to query. Only tasks that have a start time earlier than or equal to the time specified by this parameter are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
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
      resourceOwnerAccount: 'number',
      resourceOwnerId: 'number',
      securityToken: 'string',
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

