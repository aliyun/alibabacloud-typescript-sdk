// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum execution duration. This parameter is used to filter tasks whose execution duration is greater than the specified value. Unit: seconds. Default value: 0, which indicates no restriction.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The earliest start time for querying tasks. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format (UTC). You can query data from up to 30 days ago.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The instance ID. This parameter is used to query tasks for the specified instance. The default value is empty, which indicates no restriction. To specify multiple instances, separate them with commas (,). A maximum of 30 instances are supported.
   * 
   * @example
   * r-uf62br2491p5l****
   */
  instanceId?: string;
  /**
   * @remarks
   * Currently fixed as Instance.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  /**
   * @remarks
   * The page number of the query results. Valid values: positive integers. Default value: 1.
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
   * The region ID of the pending event. You can call [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) to query the region ID.
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
   * The task status. This parameter is used to filter tasks by status. Valid values:
   * - **Scheduled**: Waiting for execution.
   * - **Running**: Running.
   * - **Succeed**: Succeeded.
   * - **Failed**: Failed.
   * - **Cancelling**: Being stopped.
   * - **Canceled**: Stopped.
   * - **Waiting**: Waiting for the scheduled time.
   * > The default value is empty, which indicates all statuses. To specify multiple statuses, separate them with commas (,).
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * The task ID. This parameter is used to query tasks with known IDs. The default value is empty, which indicates no restriction. To specify multiple task IDs, separate them with commas (,). A maximum of 30 task IDs are supported.
   * 
   * @example
   * t-83br18hloy3faf****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. This parameter is used to query tasks of a specific type. The default value is empty, which indicates no restriction. Valid values:
   * - **ModifyInsSpec**: Specification change or migration.
   * - **DeleteInsNode**: Shard deletion.
   * - **AddInsNode**: Shard addition.
   * - **HaSwitch**: Primary/secondary switchover.
   * - **RestartIns**: Instance restart.
   * - **CreateIns**: Instance creation.
   * - **ModifyInsConfig**: Configuration change.
   * > To specify multiple task types, separate them with commas (,).
   * 
   * @example
   * ModifyInsSpec
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum execution duration. This parameter is used to filter tasks whose execution duration is not less than the specified value. Unit: seconds. Default value: 0, which indicates no restriction.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The latest start time for querying tasks. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format (UTC). The value must be later than the earliest start time of the task.
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

