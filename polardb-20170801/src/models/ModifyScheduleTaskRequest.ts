// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters in your account, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest time to start the scheduled task. The time is in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * > - The latest start time must be at least 30 minutes later than the earliest start time.
   * 
   * - If you specify `PlannedStartTime` but not this parameter, the latest start time of the task is `PlannedStartTime + 30 minutes` by default. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task will be executed no later than `2021-01-14T09:30:00Z`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-18T19:20:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled task. The time is in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * > - The start time can be any point in time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can set the start time to a value in the range of `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * 
   * - If you leave this parameter empty, the task is executed immediately.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-15T20:00:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 53879cdb-9a00-428e-acaf-ff4cff******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

