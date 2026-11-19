// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailabilityZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the **RegionName** and **ZoneName** response parameters. Valid values:
   * - **zh**: Chinese. Default value.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * dds.mongo.standard
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The database type of the instance. Valid values:
   * - **normal**: replica set instance.
   * - **sharding**: sharded cluster instance.
   * 
   * @example
   * normal
   */
  dbType?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The secondary zone ID to be excluded from the query results in the current region. This parameter is used together with ExcludeZoneId to filter multiple zones.
   * 
   * @example
   * cn-shanghai-b
   */
  excludeSecondaryZoneId?: string;
  /**
   * @remarks
   * The zone ID to be excluded from the query results in the current region.
   * 
   * @example
   * cn-shanghai-g
   */
  excludeZoneId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - **PrePaid**: subscription. Default value.
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type. Valid values: 
   * - **sharding**: sharded cluster instance.
   * - **replicate**: replica set instance or standalone instance.
   * 
   * @example
   * replicate
   */
  instanceType?: string;
  /**
   * @remarks
   * The MongoDB edition, such as the high-availability edition or the test edition (dbfs).
   * 
   * @example
   * dbfs
   */
  mongoType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * > This parameter is supported only for replica set instances.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
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
   * - **cloud**: displays only the zones that support cloud disk instances.
   * - **local**: displays only the zones that support local disk instances.
   * - **default** or empty: displays the zones that support both local disk and cloud disk instances.
   * 
   * @example
   * local
   */
  storageSupport?: string;
  /**
   * @remarks
   * The storage type. Valid values: 
   * 
   * - **cloud_essd1**: PL1 ESSD.
   * - **cloud_essd2**: PL2 ESSD.
   * - **cloud_essd3**: PL3 ESSD.
   * - **local_ssd**: local SSD.
   * 
   * >- Instances of version 4.4 and later support only cloud disks. If you do not specify this parameter, **cloud_essd1** is selected by default.
   * >- Instances of version 4.2 and earlier support only local disks. If you do not specify this parameter, **local_ssd** is selected by default.
   * 
   * @example
   * local_ssd
   */
  storageType?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the zone ID.
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

