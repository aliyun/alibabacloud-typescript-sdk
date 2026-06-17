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
   * The specifications of the AI nodes.
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
   * - The tag key cannot be empty.
   * 
   * - The tag key can be up to 128 characters in length.
   * 
   * - The tag key cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The following limits apply:
   * 
   * - The tag value can be empty.
   * 
   * - The tag value can be up to 128 characters in length.
   * 
   * - The tag value cannot start with `acs:` and cannot contain `http://` or `https://`.
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
   * The AI node specifications.
   */
  AINodeSpecInfos?: CreateDBInstanceRequestAINodeSpecInfos[];
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * > You can call the [DescribeDataBackups](https://help.aliyun.com/document_detail/210093.html) operation to query the backup set IDs for the source instance.
   * 
   * @example
   * 1111111111
   */
  backupId?: string;
  /**
   * @remarks
   * The cache size for a serverless instance, in GB.
   * 
   * @example
   * 800
   */
  cacheStorageSize?: string;
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/327176.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to load a sample dataset after the instance is created. Valid values:
   * 
   * - **true**: A sample dataset is loaded.
   * 
   * - **false**: A sample dataset is not loaded.
   * 
   * > If this parameter is not specified, a sample dataset is not loaded.
   * 
   * @example
   * false
   */
  createSampleData?: boolean;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * - **HighAvailability**: High-availability Edition
   * 
   * - **Basic**: Basic Edition
   * 
   * > This parameter is required for instances in elastic storage mode.
   * 
   * @example
   * HighAvailability
   */
  DBInstanceCategory?: string;
  /**
   * @remarks
   * The instance type. For more information, see the description of the `DBInstanceClass` parameter.
   * 
   * > This parameter is required for instances in reserved storage mode.
   * 
   * @example
   * gpdb.group.segsdx1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The number of compute groups. Valid values: 2, 4, 8, 12, 16, 24, 32, 64, 96, and 128.
   * 
   * > This parameter is required for instances in reserved storage mode.
   * 
   * @example
   * 2
   */
  DBInstanceGroupCount?: string;
  /**
   * @remarks
   * The instance resource mode. Valid values:
   * 
   * - **StorageElastic**: elastic storage mode
   * 
   * - **Serverless**: serverless mode
   * 
   * - **Classic**: reserved storage mode
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
   * 
   * - multiple: multi-AZ deployment.
   * 
   * - single: single-AZ deployment.
   * 
   * > * If this parameter is not specified, the default value is single.
   * >
   * > * Defaults to `single` (single-AZ deployment), which is the only mode currently supported.
   * 
   * @example
   * single
   */
  deployMode?: string;
  /**
   * @remarks
   * Specifies whether to enable SSL encryption. Valid values:
   * 
   * - **true**: SSL encryption is enabled.
   * 
   * - **false** (default): SSL encryption is disabled.
   * 
   * @example
   * false
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * The ID of the encryption key.
   * 
   * > If `EncryptionType` is set to `CloudDisk`, you must specify the ID of an encryption key in the same region. Otherwise, leave this parameter empty.
   * 
   * @example
   * 0d2470df-da7b-4786-b981-88888888****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Valid values:
   * 
   * - **NULL**: disables encryption. This is the default value.
   * 
   * - **CloudDisk**: Enables cloud disk encryption. If you select this option, you must also specify a value for `EncryptionKey`.
   * 
   * > After cloud disk encryption is enabled, it cannot be disabled.
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
   * 
   * - **6.0**
   * 
   * - **7.0**
   * 
   * This parameter is required.
   * 
   * @example
   * 6.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The period of inactivity, in seconds, after which the instance is considered idle. Minimum value: 60. Default value: 600.
   * 
   * > This parameter is required only for serverless instances that use auto-scheduling.
   * 
   * @example
   * 600
   */
  idleTime?: number;
  /**
   * @remarks
   * The instance network type. Set the value to **VPC**.
   * 
   * > - Only VPCs are supported.
   * >
   * > - If this parameter is not specified, VPC is used by default.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type for the compute nodes.
   * 
   * Valid values for a High-availability Edition instance in elastic storage mode:
   * 
   * - **2C16G**
   * 
   * - **4C32G**
   * 
   * - **16C128G**
   * 
   * Valid values for a Basic Edition instance in elastic storage mode:
   * 
   * - **2C8G**
   * 
   * - **4C16G**
   * 
   * - **8C32G**
   * 
   * - **16C64G**
   * 
   * Valid values for a serverless instance:
   * 
   * - **4C16G**
   * 
   * - **8C32G**
   * 
   * > This parameter is required for instances in elastic storage mode or serverless mode.
   * 
   * @example
   * 2C16G
   */
  instanceSpec?: string;
  /**
   * @remarks
   * Use this parameter to configure the coordinator node as a MasterAI node.
   * 
   * > - This parameter and `MasterCU` are mutually exclusive.
   * >
   * > - This feature is available only in some regions and zones.
   * >
   * > - MasterAI nodes are supported only for AnalyticDB for PostgreSQL V7.0 Basic Edition instances.
   * >
   * > - For a list of all possible values, see the coordinator node specification change page in the console.
   * 
   * @example
   * ADB.AIMedium.2
   */
  masterAISpec?: string;
  /**
   * @remarks
   * The resources for the coordinator node. Valid values:
   * 
   * - 2 CU
   * 
   * - 4 CU
   * 
   * - 8 CU
   * 
   * - 16 CU
   * 
   * - 32 CU
   * 
   * > You are charged for coordinator node resources of 8 CUs or more.
   * 
   * @example
   * 8 CU
   */
  masterCU?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * null
   */
  masterNodeNum?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method for the instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: subscription.
   * 
   * > * If this parameter is not specified, the default billing method is pay-as-you-go.
   * >
   * > * Discounts are available for subscriptions of one year or longer. Select a billing method based on your business needs.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * - **Month**
   * 
   * - **Year**
   * 
   * > This parameter is required for subscription instances.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * null
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * - **standard**: Standard Edition.
   * 
   * - **cost-effective**: Cost-effective Edition.
   * 
   * > If this parameter is not specified, the default value is standard.
   * 
   * @example
   * standard
   */
  prodType?: string;
  /**
   * @remarks
   * The ID of the region for the instance.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the IDs of available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group for the instance.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IP address whitelist for the instance.
   * 
   * A value of 127.0.0.1 blocks all external access. After you create the instance, you can call the [ModifySecurityIps](https://help.aliyun.com/document_detail/86928.html) operation to modify the IP address whitelist.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The performance level of the ESSDs. Valid values:
   * 
   * - **pl0**: PL0
   * 
   * - **pl1**: PL1
   * 
   * - **pl2**: PL2
   * 
   * > * This parameter applies only if the segment node storage type is ESSD.
   * >
   * > * If this parameter is not specified, pl1 is used by default.
   * 
   * @example
   * pl1
   */
  segDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The number of compute nodes. Valid values:
   * 
   * - For a High-availability Edition instance in elastic storage mode, the value must be a multiple of 4, from 4 to 512.
   * 
   * - For a Basic Edition instance in elastic storage mode, the value must be a multiple of 2, from 2 to 512.
   * 
   * - For a serverless instance, the value must be a multiple of 2, from 2 to 512.
   * 
   * > This parameter is required for instances in elastic storage mode or serverless mode.
   * 
   * @example
   * 4
   */
  segNodeNum?: string;
  /**
   * @remarks
   * The storage type for the segment nodes. Only ESSDs are supported. Set the value to **cloud_essd**.
   * 
   * > This parameter is required for instances in elastic storage mode.
   * 
   * @example
   * cloud_essd
   */
  segStorageType?: string;
  /**
   * @remarks
   * The mode of the serverless instance. Valid values:
   * 
   * - **Manual**: manual scheduling. This is the default value.
   * 
   * - **Auto**: auto-scheduling.
   * 
   * > * This parameter is required only for instances in serverless mode.
   * >
   * > * Auto-scheduling for AnalyticDB for PostgreSQL instances in serverless mode is in preview. To use this feature, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket?product=rds) to be added to the whitelist.
   * 
   * @example
   * Auto
   */
  serverlessMode?: string;
  /**
   * @remarks
   * The threshold for computing resources, in AnalyticDB Compute Units (ACUs). The value must be a multiple of 8, ranging from 8 to 32. The default value is 32.
   * 
   * > This parameter is required only for serverless instances that use auto-scheduling.
   * 
   * @example
   * 32
   */
  serverlessResource?: number;
  /**
   * @remarks
   * The ID of the source instance to be cloned.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in the destination region, including instance IDs.
   * 
   * @example
   * gp-bp***************
   */
  srcDbInstanceName?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the standby zone.
   * 
   * > - This parameter is required only for a multi-AZ deployment.
   * >
   * > - The vSwitch must be in the standby zone specified in `StandbyZoneId`.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The ID of the standby zone.
   * 
   * > - This parameter is required only for a multi-AZ deployment.
   * >
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the IDs of available zones.
   * >
   * > - The standby zone must be different from the primary zone.
   * 
   * @example
   * cn-hangzhou-j
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The storage capacity for the instance, in GB. Valid values: <props="china">50 to 8000<props="intl">50 to 6000.
   * 
   * > This parameter is required for instances in elastic storage mode.
   * 
   * @example
   * 200
   */
  storageSize?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * null
   */
  storageType?: string;
  /**
   * @remarks
   * The tags to add to the instance. You can add up to 20 tags.
   */
  tag?: CreateDBInstanceRequestTag[];
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * - If **Period** is **Month**, the value can be an integer from 1 to 9.
   * 
   * - If **Period** is **Year**, the value can be an integer from 1 to 3.
   * 
   * > This parameter is required for subscription instances.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * > - This parameter is required.
   * >
   * > - The VPC must be in the region specified by `RegionId`.
   * 
   * @example
   * vpc-bp19ame5m1r3oejns****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * > - This parameter is required.
   * >
   * > - The vSwitch must be in the zone specified by `ZoneId`.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Specifies whether to enable vector engine optimization. Valid values:
   * 
   * - **enabled**: enables vector engine optimization.
   * 
   * - **disabled** (default): disables vector engine optimization.
   * 
   * > * For mainstream analytics, data warehousing, and real-time data warehousing scenarios, we recommend that you **disable** vector engine optimization.
   * >
   * > * For AIGC and vector search scenarios, we recommend that you **enable** vector engine optimization.
   * 
   * @example
   * enabled
   */
  vectorConfigurationStatus?: string;
  /**
   * @remarks
   * The ID of the zone for the instance.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the IDs of available zones.
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

