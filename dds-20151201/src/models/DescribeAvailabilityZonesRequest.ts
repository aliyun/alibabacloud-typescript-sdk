// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailabilityZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned **RegionName** and **ZoneName** parameter values. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  acceptLanguage?: string;
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
   * normal
   */
  dbType?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The secondary zone ID that is excluded from the query results. You can configure the ExcludeZoneId and ExcludeSecondaryZoneId parameters to specify the IDs of multiple zones that are excluded from the query results.
   * 
   * @example
   * cn-shanghai-b
   */
  excludeSecondaryZoneId?: string;
  /**
   * @remarks
   * The zone ID that is excluded from the query results.
   * 
   * @example
   * cn-shanghai-g
   */
  excludeZoneId?: string;
  /**
   * @remarks
   * The billing method of the product. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid:** pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **sharding**: sharded cluster instance
   * *   **replicate**: replica set or standalone instance
   * 
   * @example
   * replicate
   */
  instanceType?: string;
  /**
   * @remarks
   * The edition of the instance. High-Available Edition and Preview Edition (dbfs) are supported.
   * 
   * @example
   * dbfs
   */
  mongoType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the latest available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * >  This parameter is available only for replica set instances.
   * 
   * Valid values:
   * 
   * *   1
   * *   3
   * *   5
   * *   7
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmx2m4rqu7pry
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * *   **cloud**: displays only zones available for instances that use cloud disks.
   * *   **local**: only displays zones available for instances that use local disks instances.
   * *   **default** or unspecified: displays zones available for instances that use cloud disks and those that use local disks.
   * 
   * @example
   * local
   */
  storageSupport?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * *   **cloud_essd1**: PL1 Enterprise SSDs (ESSDs)
   * *   **cloud_essd2**: PL2 ESSDs
   * *   **cloud_essd3**: PL3 ESSDs
   * *   **local_ssd**: local SSDs
   * 
   * > *   Instances that run MongoDB 4.4 or later only use cloud disks to store data. If you do not specify this parameter, the value **cloud_essd1** is used by default.
   * > *   Instances that run MongoDB 4.2 and earlier only use local disks to store data. If you do not specify this parameter, the value **local_ssd** is used by default.
   * 
   * @example
   * local_ssd
   */
  storageType?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query available zones.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      DBInstanceClass: 'DBInstanceClass',
      dbType: 'DbType',
      engineVersion: 'EngineVersion',
      excludeSecondaryZoneId: 'ExcludeSecondaryZoneId',
      excludeZoneId: 'ExcludeZoneId',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      mongoType: 'MongoType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageSupport: 'StorageSupport',
      storageType: 'StorageType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      DBInstanceClass: 'string',
      dbType: 'string',
      engineVersion: 'string',
      excludeSecondaryZoneId: 'string',
      excludeZoneId: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      mongoType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageSupport: 'string',
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

