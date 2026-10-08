// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMarketingActivityResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The instance edition. Valid values:
   * * **Basic**: Basic Edition.
   * * **HighAvailability**: High-availability Edition.
   * * **AlwaysOn**: Cluster Edition.
   * * **Finance**: RDS Enterprise Edition.
   * 
   * @example
   * Basic
   */
  category?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - POSTPAY: pay-as-you-go.
   * - PREPAY: subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html) and [Read-only instance types](https://help.aliyun.com/document_detail/145759.html).
   * 
   * @example
   * rds.mysql.s3.large
   */
  classCode?: string;
  /**
   * @remarks
   * The instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/57184.html).
   * 
   * @example
   * x
   */
  classGroup?: string;
  /**
   * @remarks
   * The number of CPU cores for the instance type. Unit: cores.
   * 
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @remarks
   * The disk storage size per node. Unit: GB.
   * 
   * @example
   * 900
   */
  diskSize?: number;
  /**
   * @remarks
   * The database engine. Valid values:
   * - MySQL
   * - SQLServer
   * - PostgreSQL
   * - PPAS
   * - MariaDB
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf62br2491p5l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rm-uf62br2491p5l****
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum number of concurrent connections.
   * 
   * @example
   * 60
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum I/O bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  maxIombps?: number;
  /**
   * @remarks
   * The maximum IOPS.
   * 
   * @example
   * 30
   */
  maxIops?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The instance storage type. Valid values:
   * * **local_ssd**: local SSD.
   * * **cloud_ssd**: standard SSD cloud disk.
   * * **cloud_essd**: PL1 ESSD cloud disk.
   * * **cloud_essd2**: PL2 ESSD cloud disk.
   * * **cloud_essd3**: PL3 ESSD cloud disk.
   * 
   * @example
   * cloud_essd
   */
  storageType?: string;
  /**
   * @remarks
   * The upgrade instance edition.
   * 
   * @example
   * HighAvailability
   */
  upgradeCategory?: string;
  /**
   * @remarks
   * The upgrade instance type.
   * 
   * @example
   * rds.mysql.s3.large
   */
  upgradeClassCode?: string;
  /**
   * @remarks
   * The upgrade instance family.
   * 
   * @example
   * d
   */
  upgradeClassGroup?: string;
  /**
   * @remarks
   * The number of CPU cores after the upgrade.
   * 
   * @example
   * 8
   */
  upgradeCpu?: string;
  /**
   * @remarks
   * The upgrade description.
   * 
   * @example
   * test
   */
  upgradeDescContent?: string;
  /**
   * @remarks
   * The disk size after the upgrade.
   * 
   * @example
   * 1024
   */
  upgradeDiskSize?: number;
  /**
   * @remarks
   * The maximum number of concurrent connections after the upgrade.
   * 
   * @example
   * 70
   */
  upgradeMaxConnections?: number;
  /**
   * @remarks
   * The maximum I/O bandwidth after the upgrade. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  upgradeMaxIombps?: number;
  /**
   * @remarks
   * The maximum IOPS after the upgrade.
   * 
   * @example
   * 70
   */
  upgradeMaxIops?: number;
  /**
   * @remarks
   * The memory size after the upgrade.
   * 
   * @example
   * 1024
   */
  upgradeMemory?: number;
  /**
   * @remarks
   * The reference price for the upgrade.
   * 
   * @example
   * 23333.1
   */
  upgradeReferencePrice?: string;
  /**
   * @remarks
   * The instance storage type after the upgrade.
   * 
   * @example
   * cloud_essd
   */
  upgradeStorageType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      chargeType: 'ChargeType',
      classCode: 'ClassCode',
      classGroup: 'ClassGroup',
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxConnections: 'MaxConnections',
      maxIombps: 'MaxIombps',
      maxIops: 'MaxIops',
      memory: 'Memory',
      storageType: 'StorageType',
      upgradeCategory: 'UpgradeCategory',
      upgradeClassCode: 'UpgradeClassCode',
      upgradeClassGroup: 'UpgradeClassGroup',
      upgradeCpu: 'UpgradeCpu',
      upgradeDescContent: 'UpgradeDescContent',
      upgradeDiskSize: 'UpgradeDiskSize',
      upgradeMaxConnections: 'UpgradeMaxConnections',
      upgradeMaxIombps: 'UpgradeMaxIombps',
      upgradeMaxIops: 'UpgradeMaxIops',
      upgradeMemory: 'UpgradeMemory',
      upgradeReferencePrice: 'UpgradeReferencePrice',
      upgradeStorageType: 'UpgradeStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      chargeType: 'string',
      classCode: 'string',
      classGroup: 'string',
      cpu: 'string',
      diskSize: 'number',
      engine: 'string',
      engineVersion: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxConnections: 'number',
      maxIombps: 'number',
      maxIops: 'number',
      memory: 'number',
      storageType: 'string',
      upgradeCategory: 'string',
      upgradeClassCode: 'string',
      upgradeClassGroup: 'string',
      upgradeCpu: 'string',
      upgradeDescContent: 'string',
      upgradeDiskSize: 'number',
      upgradeMaxConnections: 'number',
      upgradeMaxIombps: 'number',
      upgradeMaxIops: 'number',
      upgradeMemory: 'number',
      upgradeReferencePrice: 'string',
      upgradeStorageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMarketingActivityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1979008652307170
   */
  aliUid?: number;
  /**
   * @remarks
   * - Chinese site: 26842
   * - International site: 26888
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The campaign parameters.
   */
  items?: DescribeMarketingActivityResponseBodyItems[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * This parameter is required.
   * 
   * @example
   * 7D8F09DB-1124-5D78-A520-FF88FAF4351B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      items: 'Items',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bid: 'string',
      items: { 'type': 'array', 'itemType': DescribeMarketingActivityResponseBodyItems },
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

