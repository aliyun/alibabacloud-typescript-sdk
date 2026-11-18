// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksStatRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum execution duration of a task. This parameter is used to filter tasks whose execution duration is greater than the specified value. Unit: seconds. Default value: 0. A value of 0 indicates that no limit is applied.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The start time of the query period. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format (UTC).
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
   * The ID of the region to which the pending events belong. You can call the DescribeRegions operation to query region IDs.
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
   * The task status. This parameter is used to filter tasks by status. Valid values:
   * - **Scheduled**: Pending execution.
   * - **Running**: Running.
   * - **Succeed**: Succeeded.
   * - **Failed**: Failed.
   * - **Cancelling**: Cancelling.
   * - **Canceled**: Canceled.
   * - **Waiting**: Waiting for the scheduled time.
   * Default value: empty. An empty value indicates that all statuses are selected. Separate multiple statuses with commas (,).
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * The task ID. This parameter is used to query tasks with known IDs. Default value: empty. An empty value indicates that no limit is applied. Separate multiple task IDs with commas (,). You can specify up to 30 task IDs.
   * 
   * @example
   * t-0mq1yyhm3ffl2bxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * all
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum execution duration of a task. This parameter is used to filter tasks whose execution duration is less than or equal to the specified value. Unit: seconds. Default value: 0. A value of 0 indicates that no limit is applied.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end time of the query period. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format (UTC).
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

