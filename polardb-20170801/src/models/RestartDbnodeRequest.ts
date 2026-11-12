// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDBNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster node.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/185342.html) operation to view the details of all clusters under your account, including the node ID.
   * 
   * > Nodes in Serverless (AgileServerless) clusters are not supported. Operation description: This operation does not support nodes in Serverless (AgileServerless) clusters. You can check the ServerlessType field in the DescribeDBClusters response to determine the cluster type. For Serverless clusters, use the alternative management operations.
   * 
   * This parameter is required.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * Specifies whether to execute the node restart task immediately or at a scheduled time. Valid values:
   * 
   * - **false** (default): Executes the task at a scheduled time.
   * 
   * - **true**: Executes the task immediately.
   * 
   * @example
   * false
   */
  fromTimeService?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest time to start the scheduled task. The time must be in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * > * The end time must be at least 30 minutes later than the start time.
   * > * If `PlannedStartTime` is specified but this parameter is not, the latest time to start the task defaults to the start time plus 30 minutes. For example, if `PlannedStartTime` is set to `2021-01-14T09:00:00Z` and this parameter is left empty, the task will start no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled node restart task. The time must be in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * > * The start time must be within the next 72 hours. For example, if the current time is `2021-01-14T09:00:00Z`, the allowed start time ranges from `2021-01-14T09:00:00Z` to `2021-01-17T09:00:00Z`.
   * > * If this parameter is left empty, the node restart task is executed immediately by default.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view the available regions.
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

