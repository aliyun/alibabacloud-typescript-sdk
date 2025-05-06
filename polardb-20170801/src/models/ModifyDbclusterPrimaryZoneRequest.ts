// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterPrimaryZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/173433.html) operation to query information about all clusters that are deployed in a specified region, such as the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to change the primary zone immediately. Valid values:
   * 
   * *   false (default): changes the primary zone as scheduled.
   * *   true: changes the primary zone immediately.
   * 
   * @example
   * false
   */
  fromTimeService?: boolean;
  /**
   * @remarks
   * Specifies whether to switch back to the original primary zone.
   * 
   * *   true: switches back to the original primary zone.
   * *   false: does not switch back to the original primary zone.
   * 
   * @example
   * false
   */
  isSwitchOverForDisaster?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest start time to switch the primary zone within the scheduled time period. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > *   The latest start time must be at least 30 minutes later than the earliest start time.
   * >*   If you specify the `PlannedStartTime` parameter but do not specify the PlannedEndTime parameter, the latest start time of the task is set to a value that is calculated by `the value of the PlannedEndTime parameter + 30 minutes` by default. For example, if you set the `PlannedStartTime` parameter to `2021-01-14T09:00:00Z` and you do not specify the PlannedEndTime parameter, the latest start time of the task is set to `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The start time to change the primary zone within the scheduled time period. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > *   The start time of the task can be a point in time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can specify a point in time from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * >*   If you leave this parameter empty, the primary zone is immediately changed.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the destination primary zone.
   * 
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the destination primary zone.
   * 
   * > *   For a PolarDB for PostgreSQL (Compatible with Oracle) cluster or a PolarDB for PostgreSQL cluster, this parameter is required.
   * >*   For a PolarDB for MySQL cluster, the default vSwitch is used if no vSwitches are created in the destination zone. If a vSwitch is in the destination zone, this parameter is required.
   * 
   * @example
   * vsw-**************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination primary zone.
   * 
   * >  You can call the DescribeRegions operation to query available zones.[](~~98041~~)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone type. Valid values:
   * 
   * *   **Primary**: primary zone
   * *   **Standby**: secondary zone
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

