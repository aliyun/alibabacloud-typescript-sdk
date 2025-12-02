// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksStatRequest extends $dara.Model {
  /**
   * @remarks
   * Minimum task execution time, used to filter tasks with execution time greater than this value, in seconds. Default 0, meaning no limit
   * 
   * @example
   * 1
   */
  fromExecTime?: number;
  /**
   * @remarks
   * Query start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-08T07:04:17Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * amv-********
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
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
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: number;
  resourceOwnerId?: number;
  securityToken?: string;
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
   * Separate multiple states with commas (,). This parameter is empty by default, which indicates that tasks in all states are queried.
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 1564657730
   */
  taskId?: string;
  /**
   * @remarks
   * Task type.
   * 
   * @example
   * all
   */
  taskType?: string;
  /**
   * @remarks
   * Maximum task execution time, used to filter tasks with execution time not less than this value, in seconds. Default 0, meaning no limit
   * 
   * @example
   * 10
   */
  toExecTime?: number;
  /**
   * @remarks
   * Represents tasks whose start time is before this time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-24T10:01:37Z
   */
  toStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      fromExecTime: 'FromExecTime',
      fromStartTime: 'FromStartTime',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
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
      ownerId: 'number',
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

