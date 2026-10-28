// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksStatRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum execution duration of the task, in seconds. This parameter is used to filter tasks whose execution duration is greater than the specified value. Default value: 0, which indicates no limit.
   * 
   * @example
   * 1
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-08T07:04:17Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-********
   */
  instanceId?: string;
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
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @example
   * abc
   */
  securityToken?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **Scheduled**: Pending execution.
   * 
   * - **Running**: Running.
   * 
   * - **Succeed**: Succeeded.
   * 
   * - **Failed**: Failed.
   * 
   * - **Cancelling**: Cancelling.
   * 
   * - **Canceled**: Canceled.
   * 
   * - **Waiting**: Waiting for the scheduled time.
   * 
   * Separate multiple values with commas (,). By default, this parameter is left empty, which indicates that all statuses are queried.
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1564657730
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
   * The maximum execution duration of the task, in seconds. This parameter is used to filter tasks whose execution duration is less than or equal to the specified value. Default value: 0, which indicates no limit.
   * 
   * @example
   * 10
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end time of the query. Only tasks whose start time is earlier than the specified end time are returned. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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

