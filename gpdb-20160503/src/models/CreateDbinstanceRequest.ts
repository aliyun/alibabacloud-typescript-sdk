// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceRequestAINodeSpecInfos } from "./CreateDbinstanceRequestAinodeSpecInfos";
import { CreateDBInstanceRequestTag } from "./CreateDbinstanceRequestTag";


export class CreateDBInstanceRequest extends $dara.Model {
  AINodeSpecInfos?: CreateDBInstanceRequestAINodeSpecInfos[];
  /**
   * @remarks
   * Backup set ID.
   * 
   * > You can call the [DescribeDataBackups](https://help.aliyun.com/document_detail/210093.html) interface to view the backup set IDs of all backup sets under the target instance.
   * 
   * @example
   * 1111111111
   */
  backupId?: string;
  cacheStorageSize?: string;
  /**
   * @remarks
   * Idempotence check. For more information, see [How to Ensure Idempotence](https://help.aliyun.com/document_detail/327176.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  /**
   * @remarks
   * Whether to load sample datasets after the instance is created. The values are as follows:
   * 
   * - **true**: Load sample datasets.
   * - **false**: Do not load sample datasets.
   * 
   * > If this parameter is not specified, it defaults to not loading sample datasets.
   * 
   * @example
   * false
   */
  createSampleData?: boolean;
  /**
   * @remarks
   * Instance series. The value description is as follows:
   * 
   * - **HighAvailability**: High availability version.
   * - **Basic**: Basic version.
   * 
   * > This parameter is required when creating an instance in the storage elastic mode.
   * 
   * @example
   * HighAvailability
   */
  DBInstanceCategory?: string;
  /**
   * @remarks
   * Instance type. For more details, see the supplementary description of the DBInstanceClass parameter.
   * 
   * > This parameter is required when creating a reserved storage mode instance.
   * 
   * @example
   * gpdb.group.segsdx1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * Instance description.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * Number of compute groups. The values are: 2, 4, 8, 12, 16, 24, 32, 64, 96, 128.
   * 
   * > This parameter is required when creating a reserved storage mode instance.
   * 
   * @example
   * 2
   */
  DBInstanceGroupCount?: string;
  /**
   * @remarks
   * Instance resource type. The value description is as follows:
   * 
   * - **StorageElastic**: Storage elastic mode.
   * - **Serverless**: Serverless mode.
   * - **Classic**: Storage reserved mode.
   * 
   * > This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * StorageElastic
   */
  DBInstanceMode?: string;
  /**
   * @remarks
   * Deployment mode. The values are as follows:
   * - multiple: Multi-zone deployment.
   * - single: Single-zone deployment.
   * 
   * > 
   * > - If this parameter is not specified, the default value is single-zone deployment.
   * > - Currently, only single-zone deployment is supported.
   * 
   * @example
   * single
   */
  deployMode?: string;
  /**
   * @remarks
   * Specifies whether to enable SSL encryption. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * Key ID.
   * 
   * > If the value of the **EncryptionType** parameter is **CloudDisk**, you need to specify the encryption key ID within the same region through this parameter; otherwise, it should be empty.
   * 
   * @example
   * 0d2470df-da7b-4786-b981-88888888****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * Encryption type. The value description is as follows:
   * 
   * - **NULL**: No encryption (default).
   * - **CloudDisk**: Enable cloud disk encryption and specify the key through the **EncryptionKey** parameter.
   * 
   * > Once cloud disk encryption is enabled, it cannot be disabled.
   * 
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  /**
   * @remarks
   * Database engine, with the value **gpdb**.
   * 
   * This parameter is required.
   * 
   * @example
   * gpdb
   */
  engine?: string;
  /**
   * @remarks
   * Engine version. The values are as follows:
   * - **6.0**: Version 6.0.
   * - **7.0**: Version 7.0.
   * 
   * This parameter is required.
   * 
   * @example
   * 6.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The idle release wait time. When the duration without business traffic reaches the specified time, the instance will enter the idle state. The unit is seconds, with a minimum value of 60, and the default value is 600.
   * 
   * > This parameter is required only for Serverless auto-scheduling mode instances.
   * 
   * @example
   * 600
   */
  idleTime?: number;
  /**
   * @remarks
   * Instance network type, with the value **VPC**.
   * 
   * > - Only VPC networks are supported in public cloud.
   * > - If not specified, it defaults to VPC type.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * Compute node specifications.
   * 
   * For high-availability versions of the elastic storage mode, the values are as follows:
   * - **2C16G**
   * - **4C32G**
   * - **16C128G**
   * 
   * For basic versions of the elastic storage mode, the values are as follows:
   * - **2C8G**
   * - **4C16G**
   * - **8C32G**
   * - **16C64G**
   * 
   * For Serverless mode, the values are as follows:
   * - **4C16G**
   * - **8C32G**
   * 
   * > This parameter is required when creating an elastic storage mode instance or a Serverless mode instance.
   * 
   * @example
   * 2C16G
   */
  instanceSpec?: string;
  /**
   * @remarks
   * This parameter must be specified if you want to change coordinator nodes to AI coordinator nodes.
   * 
   * >-  You cannot specify the MasterAISpec and MasterCU parameters at the same time.
   * >- You can change coordinator nodes to AI coordinator nodes only in specific regions and zones.
   * >- Only AnalyticDB for PostgreSQL V7.0 instances of Basic Edition support AI coordinator nodes.
   * >- You can view the valid values of this parameter on the configuration change page of coordinator nodes.
   * 
   * @example
   * ADB.AIMedium.2
   */
  masterAISpec?: string;
  /**
   * @remarks
   * Master resources, with the following values: 
   * - 2 CU 
   * - 4 CU 
   * - 8 CU 
   * - 16 CU 
   * - 32 CU 
   * > Master resources above 8 CU will incur charges.
   * 
   * @example
   * 8 CU
   */
  masterCU?: number;
  /**
   * @remarks
   * This parameter is deprecated and should not be passed.
   * 
   * @example
   * null
   */
  masterNodeNum?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, Postpaid is used.
   * 
   * *   You can obtain more cost savings if you create a subscription instance for one year or longer. We recommend that you select the billing method that best suits your needs.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * Unit of the duration for which resources are purchased. The values are as follows:
   * - **Month**: Month
   * - **Year**: Year
   * 
   * > This parameter is required when creating a subscription-billed instance.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * This parameter is deprecated and should not be passed.
   * 
   * @example
   * null
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * Product type. The values are as follows:
   * - **standard**: Standard Edition.
   * - **cost-effective**: Cost-Effective Edition.
   * 
   * > If this parameter is not specified, the default value is Standard Edition.
   * 
   * @example
   * standard
   */
  prodType?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) interface to view available region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group where the instance is located.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IP address whitelist of the instance.
   * 
   * A value of 127.0.0.1 denies access from any external IP address. You can call the [ModifySecurityIps](https://help.aliyun.com/document_detail/86928.html) operation to modify the IP address whitelist after you create an instance.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The performance level of ESSDs. Valid values:
   * 
   * *   **pl0**
   * *   **pl1**
   * *   **pl2**
   * 
   * > 
   * 
   * *   This parameter takes effect only when SegStorageType is set to cloud_essd.
   * 
   * *   If you do not specify this parameter, pl1 is used.
   * 
   * @example
   * pl1
   */
  segDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The number of compute nodes. The value description is as follows:
   * 
   * - For the high-availability version of the storage elastic mode, the value range is 4 to 512, and the value must be a multiple of 4.
   * - For the basic version of the storage elastic mode, the value range is 2 to 512, and the value must be a multiple of 2.
   * - For the Serverless mode, the value range is 2 to 512, and the value must be a multiple of 2.
   * 
   * > This parameter is required when creating instances in the storage elastic mode or Serverless mode.
   * 
   * @example
   * 4
   */
  segNodeNum?: string;
  /**
   * @remarks
   * Disk storage type, currently only ESSD cloud disks are supported, with the value **cloud_essd**.
   * 
   * > This parameter is required when creating an elastic storage mode instance.
   * 
   * @example
   * cloud_essd
   */
  segStorageType?: string;
  /**
   * @remarks
   * The mode of the Serverless instance. The values are as follows:
   * 
   * - **Manual**: Manual scheduling (default).
   * - **Auto**: Auto scheduling.
   * 
   * > This parameter is required only for Serverless mode instances.
   * 
   * @example
   * Auto
   */
  serverlessMode?: string;
  /**
   * @remarks
   * The threshold for computing resources. The value range is 8 to 32, with a step of 8, and the unit is ACU. The default value is 32.
   * 
   * > This parameter is required only for Serverless auto-scheduling mode instances.
   * 
   * @example
   * 32
   */
  serverlessResource?: number;
  /**
   * @remarks
   * ID of the source instance to be cloned.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) interface to view details of all AnalyticDB for PostgreSQL instances in the target region, including the instance ID.
   * 
   * @example
   * gp-bp***************
   */
  srcDbInstanceName?: string;
  /**
   * @remarks
   * VSwitch ID of the standby zone.
   * 
   * > 
   * > - This parameter is required for multi-zone deployment.
   * > - The VSwitch ID of the standby zone must be in the same zone as the StandbyZoneId.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * ID of the standby zone.
   * 
   * > 
   * > - This parameter is required for multi-zone deployment.
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) interface to view available zone IDs.
   * > - The ID of the standby zone must be different from the ID of the primary zone.
   * 
   * @example
   * cn-hangzhou-j
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The size of the storage space, in GB, with a value range of <props="china">50~8000<props="intl">50~6000.
   * 
   * > This parameter is required when creating an instance in the storage elastic mode.
   * 
   * @example
   * 200
   */
  storageSize?: number;
  /**
   * @remarks
   * This parameter is deprecated and should not be passed.
   * 
   * @example
   * null
   */
  storageType?: string;
  /**
   * @remarks
   * The Nth tag. The value of N ranges from 1 to 20.
   */
  tag?: CreateDBInstanceRequestTag[];
  /**
   * @remarks
   * Duration for which resources are purchased. The values are as follows:
   * - When **Period** is **Month**, the value ranges from 1 to 9.
   * - When **Period** is **Year**, the value ranges from 1 to 3.
   * 
   * > This parameter is required when creating a subscription-billed instance.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * VPC ID.
   * 
   * > - **VPCId** is required.
   * > - The region of the **VPC** must be consistent with **RegionId**.
   * 
   * @example
   * vpc-bp19ame5m1r3oejns****
   */
  VPCId?: string;
  /**
   * @remarks
   * vSwitch ID.
   * 
   * > - **vSwitchId** is required.
   * > - The availability zone of the **vSwitch** must be consistent with **ZoneId**.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Whether to enable vector engine optimization. The value description is as follows:
   * - **enabled**: Enable vector engine optimization.
   * - **disabled** (default): Do not enable vector engine optimization.
   * 
   * > - For mainstream analysis scenarios, data warehouse scenarios, and real-time data warehouse scenarios, it is recommended to **not enable** vector engine optimization.
   * > - For users using the vector analysis engine for AIGC, vector retrieval, and other scenarios, it is recommended to **enable** vector engine optimization.
   * 
   * @example
   * enabled
   */
  vectorConfigurationStatus?: string;
  /**
   * @remarks
   * Zone ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) interface to view available zone IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      AINodeSpecInfos: 'AINodeSpecInfos',
      backupId: 'BackupId',
      cacheStorageSize: 'CacheStorageSize',
      clientToken: 'ClientToken',
      createSampleData: 'CreateSampleData',
      DBInstanceCategory: 'DBInstanceCategory',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      DBInstanceMode: 'DBInstanceMode',
      deployMode: 'DeployMode',
      enableSSL: 'EnableSSL',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      idleTime: 'IdleTime',
      instanceNetworkType: 'InstanceNetworkType',
      instanceSpec: 'InstanceSpec',
      masterAISpec: 'MasterAISpec',
      masterCU: 'MasterCU',
      masterNodeNum: 'MasterNodeNum',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      privateIpAddress: 'PrivateIpAddress',
      prodType: 'ProdType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
      segDiskPerformanceLevel: 'SegDiskPerformanceLevel',
      segNodeNum: 'SegNodeNum',
      segStorageType: 'SegStorageType',
      serverlessMode: 'ServerlessMode',
      serverlessResource: 'ServerlessResource',
      srcDbInstanceName: 'SrcDbInstanceName',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      tag: 'Tag',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vectorConfigurationStatus: 'VectorConfigurationStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AINodeSpecInfos: { 'type': 'array', 'itemType': CreateDBInstanceRequestAINodeSpecInfos },
      backupId: 'string',
      cacheStorageSize: 'string',
      clientToken: 'string',
      createSampleData: 'boolean',
      DBInstanceCategory: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceGroupCount: 'string',
      DBInstanceMode: 'string',
      deployMode: 'string',
      enableSSL: 'boolean',
      encryptionKey: 'string',
      encryptionType: 'string',
      engine: 'string',
      engineVersion: 'string',
      idleTime: 'number',
      instanceNetworkType: 'string',
      instanceSpec: 'string',
      masterAISpec: 'string',
      masterCU: 'number',
      masterNodeNum: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      privateIpAddress: 'string',
      prodType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityIPList: 'string',
      segDiskPerformanceLevel: 'string',
      segNodeNum: 'string',
      segStorageType: 'string',
      serverlessMode: 'string',
      serverlessResource: 'number',
      srcDbInstanceName: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
      storageSize: 'number',
      storageType: 'string',
      tag: { 'type': 'array', 'itemType': CreateDBInstanceRequestTag },
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vectorConfigurationStatus: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AINodeSpecInfos)) {
      $dara.Model.validateArray(this.AINodeSpecInfos);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

