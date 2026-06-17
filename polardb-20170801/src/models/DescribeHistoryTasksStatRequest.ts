// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksStatRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum running time. The query returns tasks with a running time greater than this value. Unit: seconds.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The instance ID. This corresponds to the ins_name parameter. You can specify up to 30 instance IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * pc-2zed3m89cw***
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
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
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: number;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **Scheduled**: The task is waiting to be executed.
   * 
   * - **Running**: The task is running.
   * 
   * - **Succeed**: The task is successful.
   * 
   * - **Cancelling**: The task is being canceled.
   * 
   * - **Canceled**: The task is canceled.
   * 
   * - **Waiting**: The task is waiting for a scheduled time.
   * 
   * To query tasks in multiple states, separate the states with commas (,). If you leave this parameter empty, tasks in all states are queried.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task ID. You can specify up to 30 task IDs. Separate multiple IDs with commas (,). If you leave this parameter empty, this parameter is not used as a filter.
   * 
   * @example
   * ec8c4723-eac5-4f12-becb-01ac08******
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. This parameter is used to query tasks of a specific type. You can specify up to 30 task types. Separate multiple types with commas (,). If you leave this parameter empty, this parameter is not used as a filter.
   * 
   * @example
   * DatabaseProxyUpgrading
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum running time. The query returns tasks with a running time less than or equal to this value. Unit: seconds.
   * 
   * @example
   * 10
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-01-03T12:31:03Z
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

