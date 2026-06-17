// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDBNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster node.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/185342.html) operation to query the details of all clusters under your account, including node IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * Specifies whether to restart the node immediately or at a scheduled time. Valid values:
   * 
   * - **false** (default): The node is restarted at a scheduled time.
   * 
   * - **true**: The node is restarted immediately.
   * 
   * @example
   * false
   */
  fromTimeService?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest time to start the scheduled task. The time must be in the `YYYY-MM-DDThh:mm:ssZ` format and in UTC.
   * 
   * > - The latest time must be at least 30 minutes later than the earliest time.
   * >
   * > - If PlannedStartTime is specified but this parameter is not, the latest start time of the task is PlannedStartTime plus 30 minutes by default. For example, if PlannedStartTime is set to `2021-01-14T09:00:00Z` and this parameter is empty, the task starts no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled node restart. The task is executed within a specified time window. The time must be in the `YYYY-MM-DDThh:mm:ssZ` format and in UTC.
   * 
   * > - The start time can be set to any point in time within the next 72 hours. For example, if the current time is `2021-01-14T09:00:00Z`, the start time can be set to a value in the range from `2021-01-14T09:00:00Z` to `2021-01-17T09:00:00Z`.
   * >
   * > - If this parameter is empty, the node is restarted immediately.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      fromTimeService: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

