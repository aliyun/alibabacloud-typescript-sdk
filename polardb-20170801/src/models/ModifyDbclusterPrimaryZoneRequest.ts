// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterPrimaryZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/173433.html) operation to query the details of all clusters in a destination region, including their cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to perform the zone change immediately or at a scheduled time. Valid values:
   * 
   * - false (default): The zone change is performed at the scheduled time.
   * 
   * - true: The zone change is performed immediately.
   * 
   * @example
   * false
   */
  fromTimeService?: boolean;
  /**
   * @remarks
   * Specifies whether to fail back to the original zone. Valid values:
   * 
   * - true: Fails back to the original zone.
   * 
   * - false: Does not fail back to the original zone.
   * 
   * @example
   * false
   */
  isSwitchOverForDisaster?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest time to start the scheduled task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > - The latest start time must be at least 30 minutes later than the earliest start time.
   * >
   * > - If you specify `PlannedStartTime` but not this parameter, the latest start time of the task is the value of `PlannedStartTime` plus 30 minutes by default. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task starts no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled task to change the zone. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > - The start time must be a point in time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can set the start time to a value from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * >
   * > - If you do not specify this parameter, the zone change task is performed immediately.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the destination zone.
   * 
   * > - This parameter is required for PolarDB for Oracle and PolarDB for PostgreSQL clusters.
   * >
   * > - For PolarDB for MySQL clusters, this parameter is required if a vSwitch is created in the destination zone. If no vSwitch is created, the default vSwitch is used and this parameter is optional.
   * 
   * @example
   * vsw-**************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the new zone.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available zones.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  /**
   * @remarks
   * The type of the zone. Valid values:
   * 
   * - **Primary**: The primary zone.
   * 
   * - **Standby**: The secondary zone.
   * 
   * @example
   * Primary
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fromTimeService: 'FromTimeService',
      isSwitchOverForDisaster: 'IsSwitchOverForDisaster',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fromTimeService: 'boolean',
      isSwitchOverForDisaster: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      zoneType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

