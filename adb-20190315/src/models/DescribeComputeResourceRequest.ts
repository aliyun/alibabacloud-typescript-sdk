// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComputeResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The version of the AnalyticDB for MySQL Data Warehouse Edition cluster. Set the value to **3.0**.
   * 
   * @example
   * 3.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * Specifies whether to query the specifications of the available computing resources that are migrated from AnalyticDB for MySQL Data Warehouse Edition to Data Lakehouse Edition. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  migrate?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/129857.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBClusterVersion: 'DBClusterVersion',
      migrate: 'Migrate',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBClusterVersion: 'string',
      migrate: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

