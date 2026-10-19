// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksStatRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum execution duration used to filter tasks whose execution duration is greater than this value. Unit: seconds. Default value: 0, which indicates no restriction.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The beginning of the query time range. Specify the time in the <i>yyyy-mm-dd</i>t<i>hh:mm</i>z format (UTC).
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
   * The task status. This parameter is used to filter tasks by status. Valid values:
   * - **Scheduled**: Waiting to be executed.
   * - **Running**: Running.
   * - **Succeed**: Succeeded.
   * - **Failed**: Failed.
   * - **Cancelling**: Being stopped.
   * - **Canceled**: Stopped.
   * - **Waiting**: Waiting for the scheduled time.
   * > By default, this parameter is empty, which indicates that tasks in all statuses are queried. To specify multiple statuses, separate them with commas (,).
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * The task ID. This parameter is used to query a task with a known ID. By default, this parameter is empty, which indicates no restriction. To specify multiple task IDs, separate them with commas (,). A maximum of 30 task IDs are supported.
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
   * The maximum execution duration used to filter tasks whose execution duration is not less than this value. Unit: seconds. Default value: 0, which indicates no restriction.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end of the query time range. Specify the time in the <i>yyyy-mm-dd</i>t<i>hh:mm</i>z format (UTC).
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

