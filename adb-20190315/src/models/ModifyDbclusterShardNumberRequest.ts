// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterShardNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL Data Warehouse Edition clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * *   true: sends a request to check whether the cluster meets the prerequisites for changing the number of shards and whether the desired number of shards is valid, but **does not** perform the change operation.
   * *   false (default): sends a request to perform a check and trigger the change operation.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The desired number of shards.
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
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time when you want the system to perform the change operation. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2021-07-09T22:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The mode in which you want the change operation to be performed. Valid values:
   * 
   * *   **Immediate** (default): immediately performs the change operation.
   * *   **MaintainTime**: performs the change operation within the maintenance window of the cluster. You can call the ModifyDBInstanceMaintainTime operation to change the maintenance window.
   * *   **ScheduleTime**: performs the change operation at the point in time that you specify. If you specify this value, you must also specify **SwitchTime**.
   * 
   * @example
   * Immediate
   */
  switchTimeMode?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      dryRun: 'DryRun',
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

