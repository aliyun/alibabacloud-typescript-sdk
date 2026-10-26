// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum execution duration of the task. This parameter is used to filter tasks whose execution duration is greater than the specified value. Unit: seconds. Default value: 0, which indicates no limit.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The start time of the time range to query the task start time. This parameter specifies that the start time of the task is later than the specified time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The earliest supported time is 30 days ago. If the specified time is more than 30 days ago, it is automatically converted to 30 days ago.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The instance ID, which is used to query the tasks of the corresponding instance. Separate multiple instance IDs with commas (,). You can specify up to 30 instance IDs. If this parameter is left empty, no limit is applied.
   * 
   * @example
   * rm-uf62br2491p5l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Only Instance is supported.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the query result. Valid values: positive integers.
   * Default value: **1**.
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
   * The region ID of the pending event. You can call the DescribeRegions operation to obtain the region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-ae****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **Scheduled**: Pending execution.
   * - **Running**: Running.
   * - **Succeed**: Succeeded.
   * - **Failed**: Failed.
   * - **Cancelling**: Cancelling.
   * - **Canceled**: Canceled.
   * - **Waiting**: Waiting for the scheduled time.
   * 
   * Separate multiple values with commas (,). If this parameter is left empty, all statuses are queried.
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * The task ID. You can call the DescribeTasks operation to query the task ID. Separate multiple task IDs with commas (,). You can specify up to 30 task IDs. If this parameter is left empty, no limit is applied.
   * 
   * @example
   * t-83br18hloy3faf****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type, which is used to query tasks of a specific type. Separate multiple task types with commas (,). You can specify up to 30 task types. If this parameter is left empty, no limit is applied.
   * 
   * @example
   * autotest_dispatch_cases
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum execution duration of the task. This parameter is used to filter tasks whose execution duration is greater than or equal to the specified value. Unit: seconds. Default value: 0, which indicates no limit.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end time of the time range to query the task start time. This parameter specifies that the start time of the task is earlier than the specified time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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
      resourceOwnerAccount: 'string',
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

