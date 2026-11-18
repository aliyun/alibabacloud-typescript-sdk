// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum execution duration of the tasks. This parameter is used to filter tasks whose execution duration is greater than the specified value. Unit: seconds. Default value: 0, which means no limit is applied.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The earliest start time of the tasks to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. You can query data from up to 30 days ago.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The ID of the instance, which is used to query tasks of the specified instance. By default, this parameter is empty, which means no limit is applied. To query multiple instances, separate the instance IDs with commas (,). You can specify up to 30 instance IDs.
   * 
   * @example
   * r-uf62br2491p5l****
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
   * The ID of the region to which the pending events belong. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: number;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The task status, which is used to filter tasks by status. Valid values:
   * - **Scheduled**: Pending execution.
   * - **Running**: Running.
   * - **Succeed**: Succeeded.
   * - **Failed**: Failed.
   * - **Cancelling**: Cancelling.
   * - **Canceled**: Canceled.
   * - **Waiting**: Waiting for the scheduled time.
   * By default, this parameter is empty, which means all statuses are selected. To specify multiple statuses, separate them with commas (,).
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task, which is used to query tasks with known IDs. By default, this parameter is empty, which means no limit is applied. To query multiple tasks, separate the task IDs with commas (,). You can specify up to 30 task IDs.
   * 
   * @example
   * t-83br18hloy3faf****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type, which is used to query tasks of a specific type. By default, this parameter is empty, which means no limit is applied. Valid values:
   * - **ModifyInsSpec**: Instance specification change or migration.
   * - **DeleteInsNode**: Shard deletion.
   * - **AddInsNode**: Shard addition.
   * - **HaSwitch**: Primary/secondary switchover.
   * - **RestartIns**: Instance restart.
   * - **CreateIns**: Instance creation.
   * - **ModifyInsConfig**: Configuration change.
   * To query multiple task types, separate them with commas (,).
   * 
   * @example
   * ModifyInsSpec
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum execution duration of the tasks. This parameter is used to filter tasks whose execution duration is not less than the specified value. Unit: seconds. Default value: 0, which means no limit is applied.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The latest start time of the tasks to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The time must be later than the earliest start time of the tasks.
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
      instanceType: 'InstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
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
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
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

