// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequestAINodeSpecInfos extends $dara.Model {
  /**
   * @remarks
   * The number of AI nodes.
   * 
   * @example
   * 1
   */
  AINodeNum?: string;
  /**
   * @remarks
   * The AI node specifications.
   * 
   * @example
   * ADB.AIMedium.2
   */
  AINodeSpec?: string;
  static names(): { [key: string]: string } {
    return {
      AINodeNum: 'AINodeNum',
      AINodeSpec: 'AINodeSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AINodeNum: 'string',
      AINodeSpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The following limits apply:
   * 
   * - The tag key cannot be an empty string.
   * - The tag key can be up to 128 characters in length.
   * - The tag key cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The following limits apply:
   * 
   * - The tag value can be an empty string.
   * - The tag value can be up to 128 characters in length.
   * - The tag value cannot start with `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The AI node specifications information.
   */
  AINodeSpecInfos?: CreateDBInstanceRequestAINodeSpecInfos[];
  /**
   * @remarks
   * The backup set ID.
   * 
   * > You can call the [DescribeDataBackups](https://help.aliyun.com/document_detail/210093.html) operation to query the backup set IDs of all backup sets for the target instance.
   * 
   * @example
   * 1111111111
   */
  backupId?: string;
  /**
   * @remarks
   * The Serverless cache storage size. Valid values: 800 to 102400. The step size is 32 GB. Unit: GB.
   * 
   * @example
   * 800
   */
  cacheStorageSize?: string;
  /**
   * @remarks
   * The client token used for idempotence checks. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/327176.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to load a sample dataset after the instance is created. Valid values:
   * 
   * - **true**: Load a sample dataset.
   * - **false**: Do not load a sample dataset.
   * 
   * > If you do not specify this parameter, the default value is false.
   * 
   * @example
   * false
   */
  createSampleData?: boolean;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * - **HighAvailability**: high-availability edition.
   * - **Basic**: basic edition.
   * 
   * > This parameter is required when you create a storage elastic mode instance.
   * 
   * @example
   * HighAvailability
   */
  DBInstanceCategory?: string;
  /**
   * @remarks
   * The instance specifications. For more information, see the supplementary description of the DBInstanceClass parameter.
   * 
   * > This parameter is required when you create a storage reservation mode instance.
   * 
   * @example
   * gpdb.group.segsdx1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The number of compute groups. Valid values: 2, 4, 8, 12, 16, 24, 32, 64, 96, and 128.
   * 
   * > This parameter is required when you create a storage reservation mode instance.
   * 
   * @example
   * 2
   */
  DBInstanceGroupCount?: string;
  /**
   * @remarks
   * The resource type of the instance. Valid values:
   * 
   * - **StorageElastic**: storage elastic mode.
   * - **Serverless**: Serverless mode.
   * - **ServerlessPro**: Serverless Pro mode.
   * - **Classic**: storage reservation mode.
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
   * The deployment mode. Valid values:
   * - multiple: multi-zone deployment.
   * - single: single-zone deployment.
   * 
   * > 
   * > - If you do not specify this parameter, the default value is single-zone deployment.
   * > - Currently, only single-zone deployment is supported.
   * 
   * @example
   * single
   */
  deployMode?: string;
  /**
   * @remarks
   * Indicates whether to enable Secure Sockets Layer (SSL) encryption. Valid values:
   * - **true**: Enable SSL encryption.
   * - **false** (default): Do not enable SSL encryption.
   * 
   * @example
   * false
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * The encryption key ID.
   * 
   * > If the **EncryptionType** parameter is set to **CloudDisk**, specify the encryption key ID in the same region. Otherwise, leave this parameter empty.
   * 
   * @example
   * 0d2470df-da7b-4786-b981-88888888****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Valid values:
   * 
   * - **NULL**: Encryption is not enabled. This is the default value.
   * - **CloudDisk**: Cloud disk encryption is enabled. Use the **EncryptionKey** parameter to specify the encryption key.
   * 
   * > Cloud disk encryption cannot be disabled after it is enabled.
   * 
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  /**
   * @remarks
   * The database engine. Set the value to **gpdb**.
   * 
   * This parameter is required.
   * 
   * @example
   * gpdb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version. Valid values:
   * - **6.0**: version 6.0.
   * - **7.0**: version 7.0.
   * 
   * This parameter is required.
   * 
   * @example
   * 6.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The idle release wait time. The instance transitions to an idle state after no service traffic is detected for the specified duration. Unit: seconds. Minimum value: 60. Default value: 600.
   * 
   * > This parameter is required only for Serverless instances in automatic scheduling mode.
   * 
   * @example
   * 600
   */
  idleTime?: number;
  /**
   * @remarks
   * The network type of the instance. Set the value to **VPC**.
   * 
   * > - Only VPC is supported on the public cloud.
   * > - If you do not specify this parameter, the default value is VPC.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The node specifications of compute nodes.
   * 
   * Valid values for storage elastic mode (high-availability edition):
   * - **2C16G**
   * - **4C32G**
   * - **16C128G**
   * 
   * Valid values for storage elastic mode (basic edition):
   * - **2C8G**
   * - **4C16G**
   * - **8C32G**
   * - **16C64G**
   * 
   * Valid values for Serverless mode:
   * - **4C16G**
   * - **8C32G**
   * 
   * > This parameter is required when you create a storage elastic mode instance or a Serverless mode instance.
   * 
   * @example
   * 2C16G
   */
  instanceSpec?: string;
  /**
   * @remarks
   * Specify this parameter if you want to change the master node to a MasterAI node.
   * > - This parameter and MasterCU cannot be specified at the same time.
   * > - Only specific regions and zones support changing the master node to a MasterAI node.
   * > - Only basic edition instances of AnalyticDB for PostgreSQL 7.0 support MasterAI nodes.
   * > - You can view all valid values of this parameter on the specification change page for the master node.
   * 
   * @example
   * ADB.AIMedium.2
   */
  masterAISpec?: string;
  /**
   * @remarks
   * The master resources. Valid values: 
   * - 2 CU 
   * - 4 CU 
   * - 8 CU 
   * - 16 CU 
   * - 32 CU 
   * > Master resources above 8 CU incur additional fees.
   * 
   * @example
   * 8 CU
   */
  masterCU?: number;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  masterNodeNum?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * > - If you do not specify this parameter, the default value is pay-as-you-go.
   * > - Discounts are available for subscription instances when you purchase them for one year or longer. Select a billing method based on your business requirements.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * - **Month**: month.
   * - **Year**: year.
   * 
   * > This parameter is required when you create a subscription instance.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * - **standard**: Standard Edition.
   * - **cost-effective**: Economy Edition.
   * 
   * > If you do not specify this parameter, the default value is Standard Edition.
   * 
   * @example
   * standard
   */
  prodType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group to which the instance belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * A value of 127.0.0.1 indicates that no external IP addresses are allowed to access the instance. After the instance is created, you can call the [ModifySecurityIps](https://help.aliyun.com/document_detail/86928.html) operation to modify the IP address whitelist.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The performance level (PL) of the ESSD cloud disk. Valid values:
   * 
   * - **pl0**: PL0.
   * - **pl1**: PL1.
   * - **pl2**: PL2.
   * 
   * > - This parameter takes effect only when the cloud disk storage type is ESSD cloud disk.
   * > - If you do not specify this parameter, the default value is PL1.
   * 
   * @example
   * pl1
   */
  segDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The number of compute nodes. Valid values:
   * 
   * - Storage elastic mode (high-availability edition): 4 to 512. The value must be a multiple of 4.
   * - Storage elastic mode (basic edition): 2 to 512. The value must be a multiple of 2.
   * - Serverless mode: 2 to 512. The value must be a multiple of 2.
   * 
   * > This parameter is required when you create a storage elastic mode instance or a Serverless mode instance.
   * 
   * @example
   * 4
   */
  segNodeNum?: string;
  /**
   * @remarks
   * The cloud disk storage type. Currently, only ESSD cloud disks are supported. Set the value to **cloud_essd**.
   * 
   * > This parameter is required when you create a storage elastic mode instance.
   * 
   * @example
   * cloud_essd
   */
  segStorageType?: string;
  /**
   * @remarks
   * The mode of the Serverless instance. Valid values:
   * 
   * - **Manual**: manual scheduling. This is the default value.
   * - **Auto**: automatic scheduling.
   * 
   * > - This parameter is required only for Serverless mode instances.
   * > - The automatic scheduling mode for AnalyticDB for PostgreSQL Serverless is in invitational preview. To use this feature, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket?product=rds) to apply for access.
   * 
   * @example
   * Auto
   */
  serverlessMode?: string;
  /**
   * @remarks
   * The compute resource threshold. Valid values: 16 to 1024. The step size is 8. Unit: ACU.
   * 
   * > This parameter is required only for Serverless instances in automatic scheduling mode.
   * 
   * @example
   * 16
   */
  serverlessResource?: number;
  /**
   * @remarks
   * The ID of the source instance to clone.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in the target region, including instance IDs.
   * 
   * @example
   * gp-bp***************
   */
  srcDbInstanceName?: string;
  /**
   * @remarks
   * The vSwitch ID in the secondary zone.
   * 
   * > 
   * > - This parameter is required only for multi-zone deployment.
   * > - The vSwitch must be in the same zone as the value specified by StandbyZoneId.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The secondary zone ID.
   * 
   * > 
   * > - This parameter is required only for multi-zone deployment.
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available zone IDs.
   * > - The secondary zone ID must be different from the primary zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The storage capacity. Unit: GB. Valid values: <props="china">50 to 8000<props="intl">50 to 6000.
   * 
   * > This parameter is required when you create a storage elastic mode instance.
   * 
   * @example
   * 200
   */
  storageSize?: number;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  storageType?: string;
  /**
   * @remarks
   * The Nth tag. Valid values of N: 1 to 20.
   */
  tag?: CreateDBInstanceRequestTag[];
  /**
   * @remarks
   * The subscription duration. Valid values:
   * - If **Period** is set to **Month**, valid values are 1 to 9.
   * - If **Period** is set to **Year**, valid values are 1 to 3.
   * 
   * > This parameter is required when you create a subscription instance.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * > - **VPCId** is required.
   * > - The VPC must be in the same region as the value specified by **RegionId**.
   * 
   * @example
   * vpc-bp19ame5m1r3oejns****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * > - **vSwitchId** is required.
   * > - The vSwitch must be in the same zone as the value specified by **ZoneId**.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Specifies whether to enable vector engine optimization. Valid values:
   * - **enabled**: Enable vector engine optimization.
   * - **disabled** (default): Do not enable vector engine optimization.
   * 
   * > - For mainstream analytics, data warehousing, and real-time data warehouse scenarios, **do not enable** vector engine optimization.
   * > - For scenarios that use the vector analysis engine for AIGC and AISearch, **enable** vector engine optimization.
   * 
   * @example
   * enabled
   */
  vectorConfigurationStatus?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available zone IDs.
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

