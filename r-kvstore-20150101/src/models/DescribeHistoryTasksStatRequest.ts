// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksStatRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum execution duration of a task. This parameter is used to filter tasks whose execution duration is longer than the minimum execution duration. Unit: seconds. Default value: 0. This value indicates that the minimum execution duration is unlimited.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The time must be in UTC and formatted as *yyyy-MM-dd*t*hh:mm*Z.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the pending event. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
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
   * >  This parameter is empty by default, which indicates that tasks in all states are queried. Separate multiple states with commas (,).
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * The task IDs. You can specify this parameter to query specific tasks. This parameter is empty by default, which indicates that all tasks are queried. Separate multiple task IDs with commas (,). You can specify up to 30 task IDs.
   * 
   * @example
   * t-0mq1yyhm3ffl2bxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * all
   */
  taskType?: string;
  /**
   * @remarks
   * Maximum task execution time. This parameter is used to filter tasks whose execution duration is shorter than or equal to the maximum execution duration. Unit: seconds. Default value: 0. This value indicates that the minimum execution duration is unlimited.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end of the time range to query. The time must be in UTC and formatted as *yyyy-MM-dd*t*hh:mm*Z.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-02-02T11:31:03Z
   */
  toStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      fromExecTime: 'FromExecTime',
      fromStartTime: 'FromStartTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
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
      regionId: 'string',
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

