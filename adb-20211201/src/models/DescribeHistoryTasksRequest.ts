// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum execution duration of the task. This parameter is used to filter tasks whose execution duration is greater than this value. Unit: seconds. Default value: 0, which indicates no limit.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The start time of the time range to query task start times. Tasks that start after this time are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The earliest supported time is 30 days ago. If the specified time is more than 30 days before the current time, it is automatically changed to 30 days ago.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The cluster ID. You can specify multiple cluster IDs separated by commas (,). You can specify up to 30 cluster IDs. If this parameter is left empty, historical tasks of all clusters in the region are queried by default.
   * 
   * @example
   * amv-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. Set the value to Instance.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  /**
   * @remarks
   * The page number of the query result. Valid values: positive integers. Default value: 1.
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
   * The region ID.
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
   * - **Cancelling**: Being canceled.
   * 
   * - **Canceled**: Canceled.
   * 
   * - **Waiting**: Waiting for the scheduled time.
   * 
   * You can specify multiple values separated by commas (,). If this parameter is left empty, all statuses are queried by default.
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * The task ID. You can specify multiple task IDs separated by commas (,). You can specify up to 30 task IDs. If this parameter is left empty, historical tasks of all clusters are queried by default.
   * 
   * @example
   * t-83br18hloy3faf****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. This parameter is used to query tasks of a specific type. You can specify multiple task types separated by commas (,). You can specify up to 30 task types. If this parameter is left empty, no limit is applied.
   * 
   * @example
   * autotest_dispatch_cases
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum execution duration of the task. This parameter is used to filter tasks whose execution duration does not exceed this value. Unit: seconds. Default value: 0, which indicates no limit.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end time of the time range to query task start times. Tasks that start before this time are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
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
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
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

