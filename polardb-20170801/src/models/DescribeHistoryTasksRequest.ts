// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum task execution time in seconds. Filters for tasks that took longer than this value. Default value: 0.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The start of the time range to query, based on task start time. The time follows the ISO8601 standard and must be in `UTC+0` time. Format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * The earliest supported time is 30 days ago. If the specified time is more than 30 days ago, it will be automatically converted to 30 days ago.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-01-02T11:31:03Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The resource ID to filter by. You can provide a comma-separated list of up to 30 IDs. Default value: empty, indicating no restriction.
   * 
   * > Currently, only PolarDB cluster IDs are supported.
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
   * The page number. Valid values: positive integers. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/98041.html).
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
   * - **Scheduled**: waiting for execution
   * 
   * - **Running**: executing
   * 
   * - **Succeed**: executed successfully
   * 
   * - **Cancelling**: stopping
   * 
   * - **Canceled**: stopped
   * 
   * - **Waiting**: waiting for preset time
   * 
   * You can provide a comma-separated list. Default value: empty, which indicates all statuses.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task ID. You can provide a comma-separated list of up to 30 IDs. Default value: empty, indicating no restriction.
   * 
   * @example
   * t-0mqi38ho0cgjv***
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. You can provide a comma-separated list of up to 30 task types. Default value: empty, indicating no restriction.
   * 
   * @example
   * ChangeVariable
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum task execution time in seconds. Filters for tasks that took less than this value. Default value: 0.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end of the time range to query, based on task start time. The time follows the ISO8601 standard and must be in `UTC+0` time. Format: `yyyy-MM-ddTHH:mm:ssZ`.
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

