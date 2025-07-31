// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * dds.mongo.standard
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **normal**: replica set instance
   * *   **sharding**: sharded cluster instance
   * 
   * @example
   * sharding
   */
  dbType?: string;
  /**
   * @remarks
   * The major engine version of the instance.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid** (default): subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the latest available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of nodes, only applicable to replica sets.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   local_ssd: local SSD
   * *   cloud_essd1: PL1 enhanced SSD (ESSD)
   * *   cloud_essd2: PL2 ESSD
   * *   cloud_essd3: PL3 ESSD
   * *   cloud_auto: ESSD AutoPL disk
   * 
   * This parameter is empty by default, which indicates all types of storage resources are queried.
   * 
   * @example
   * local_ssd
   * 
   * **if can be null:**
   * true
   */
  storageType?: string;
  /**
   * @remarks
   * The ID of the zone. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the available zones.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClass: 'DBInstanceClass',
      dbType: 'DbType',
      engineVersion: 'EngineVersion',
      instanceChargeType: 'InstanceChargeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageType: 'StorageType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClass: 'string',
      dbType: 'string',
      engineVersion: 'string',
      instanceChargeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageType: 'string',
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

