// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum execution duration. Filters tasks whose execution duration is greater than this value. Unit: seconds. Default value: 0, which indicates no restriction.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The beginning of the time range for the task start time. Tasks whose start time is later than this time are queried. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in `UTC+0`. The earliest supported time is 30 days before the current time. A value earlier than 30 days is automatically converted to 30 days before the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The resource ID. Specify this parameter to query tasks for the corresponding resource. Separate multiple IDs with commas (,). A maximum of 30 IDs are supported. Default value: empty, which indicates no restriction.
   * 
   * > Currently, only cluster IDs are supported.
   * 
   * @example
   * pc-2zed3m89cw***
   */
  instanceId?: string;
  /**
   * @remarks
   * Currently, only Instance is supported.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  ownerId?: number;
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
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query region information.
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
   * * **Scheduled**: Waiting for execution.
   * * **Running**: Running.
   * * **Succeed**: Succeeded.
   * * **Cancelling**: Being canceled.
   * * **Canceled**: Canceled.
   * * **Waiting**: Waiting for the scheduled time.
   * 
   * Separate multiple statuses with commas (,). Default value: empty, which indicates all statuses.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task ID. Separate multiple task IDs with commas (,). A maximum of 30 IDs are supported. Default value: empty, which indicates no restriction.
   * 
   * @example
   * t-0mqi38ho0cgjv***
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Specify this parameter to query tasks of a specific type. Separate multiple types with commas (,). A maximum of 30 types are supported. Default value: empty, which indicates no restriction.
   * 
   * @example
   * ChangeVariable
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum execution duration. Filters tasks whose execution duration is not less than this value. Unit: seconds. Default value: 0, which indicates no restriction.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end of the time range for the task start time. Tasks whose start time is earlier than this time are queried. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in `UTC+0`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-01-03T11:31:03Z
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

