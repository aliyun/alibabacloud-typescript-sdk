// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterShardNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) API to query the IDs of all AnalyticDB for MySQL clusters in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Sends a check request to verify prerequisites and the validity of the specified number of shards. The number of shards is **not** modified.
   * 
   * - **false** (default): Sends a standard request. After the request passes the check, the system triggers a backend task to modify the number of shards for the cluster.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  isRollback?: boolean;
  /**
   * @remarks
   * The new number of shards.
   * 
   * @example
   * 256
   */
  newShardNumber?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) API to query the most recent list of regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduled time to apply the modification. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2021-07-09T22:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * Specifies when to modify the number of shards. Valid values:
   * 
   * - **Immediate**: The modification takes effect immediately. This is the default value.
   * 
   * - **MaintainTime**: The modification takes effect during the cluster\\"s maintenance window. You can call the ModifyDBInstanceMaintainTime API to change the maintenance window.
   * 
   * - **ScheduleTime**: The modification takes effect at a specified time. If you set this parameter to ScheduleTime, you must also specify the **SwitchTime** parameter.
   * 
   * @example
   * Immediate
   */
  switchTimeMode?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      dryRun: 'DryRun',
      isRollback: 'IsRollback',
      newShardNumber: 'NewShardNumber',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      dryRun: 'boolean',
      isRollback: 'boolean',
      newShardNumber: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      switchTimeMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

