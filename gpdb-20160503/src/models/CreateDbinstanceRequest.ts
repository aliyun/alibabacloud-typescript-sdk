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
   * The tag key. Limits:
   * 
   * - It cannot be an empty string.
   * - It can be up to 128 characters in length.
   * - It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Limits:
   * 
   * - It can be an empty string.
   * - It can be up to 128 characters in length.
   * - It cannot start with `acs:`, and cannot contain `http://` or `https://`.
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
   * Specifies whether to enable auto-renewal for the instance. This parameter is valid only when you create a subscription instance. Valid values:
   * - **true**
   * - **false**
   * 
   * > - If you purchase the instance on a monthly basis, the auto-renewal epoch is one month.
   * > - If you purchase the instance on a yearly basis, the auto-renewal epoch is one year.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * > You can call the [DescribeDataBackups](https://help.aliyun.com/document_detail/210093.html) operation to query the IDs of all backup sets for the target instance.
   * 
   * @example
   * 1111111111
   */
  backupId?: string;
  /**
   * @remarks
   * The cache space for Serverless mode. Valid values: 800 to 102400. Step size: 32. Unit: GB.
   * 
   * @example
   * 800
   */
  cacheStorageSize?: string;
  /**
   * @remarks
   * The client token that is used to ensure idempotence. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/327176.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88**********
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to load the sample dataset after the instance is created. Valid values:
   * 
   * - **true**: Load the sample dataset.
   * - **false**: Do not load the sample dataset.
   * 
   * > If you do not specify this parameter, the default value false is used.
   * 
   * @example
   * false
   */
  createSampleData?: boolean;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * - **HighAvailability**: High-availability Edition.
   * - **Basic**: Basic Edition.
   * 
   * > This parameter is required when you create an instance in the elastic storage pattern.
   * 
   * @example
   * HighAvailability
   */
  DBInstanceCategory?: string;
  /**
   * @remarks
   * The instance type. For more information, see the supplementary description of the DBInstanceClass parameter.
   * 
   * > This parameter is required when you create an instance in reserved storage mode.
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
   * > This parameter is required when you create an instance in reserved storage mode.
   * 
   * @example
   * 2
   */
  DBInstanceGroupCount?: string;
  /**
   * @remarks
   * The resource type of the instance. Valid values:
   * 
   * - **StorageElastic**: elastic storage mode.
   * - **Serverless**: Serverless mode.
   * - **ServerlessPro**: Serverless Pro mode.
   * - **Classic**: reserved storage mode.
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
   * > - If you do not specify this parameter, the default value single is used.
   * > - Only single-zone deployment is supported.
   * 
   * @example
   * single
   */
  deployMode?: string;
  /**
   * @remarks
   * Specifies whether to enable Secure Sockets Layer (SSL) encryption. Valid values:
   * - **true**: enables Secure Sockets Layer (SSL) encryption.
   * - **false**: disables Secure Sockets Layer (SSL) encryption. This is the default value.
   * 
   * @example
   * false
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * The ID of the encryption key.
   * 
   * > If **EncryptionType** is set to **CloudDisk**, you must use this parameter to specify the ID of the encryption key in the same region. Otherwise, leave this parameter empty.
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
   * - **CloudDisk**: enables cloud disk encryption and specifies the key by using the **EncryptionKey** parameter.
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
   * The DPI engine version. Valid values:
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
   * The waiting duration before the instance is released due to idleness. After the instance has no service traffic for the specified duration, it enters the idle state. Unit: seconds. Minimum value: 60. Default value: 600.
   * 
   * > This parameter is required only for instances in the Serverless auto-scheduling pattern.
   * 
   * @example
   * 600
   */
  idleTime?: number;
  /**
   * @remarks
   * The network type of the instance. Set the value to **VPC**.
   * 
   * > - Only VPCs are supported in Alibaba Cloud public cloud.
   * > - If you do not specify this parameter, the default value VPC is used.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The compute node specifications.
   * 
   * Valid values for the High-availability Edition in the elastic storage pattern:
   * - **2C16G**
   * - **4C32G**
   * - **16C128G**
   * 
   * Valid values for the Basic Edition in the elastic storage pattern:
   * - **2C8G**
   * - **4C16G**
   * - **8C32G**
   * - **16C64G**
   * 
   * Valid values for the Serverless pattern:
   * - **4C16G**
   * - **8C32G**
   * 
   * > This parameter is required when you create an instance in the elastic storage pattern or Serverless pattern.
   * 
   * @example
   * 2C16G
   */
  instanceSpec?: string;
  /**
   * @remarks
   * If you want to change the master node to a MasterAI node, specify this parameter.
   * > - This parameter and MasterCU cannot be specified at the same time.
   * > - Changing the master node to a MasterAI node is supported only in specific regions and zones.
   * > - MasterAI nodes are supported only for Basic Edition instances of AnalyticDB for PostgreSQL V7.0.
   * > - You can query all possible values of this parameter on the buy page for changing the specifications of the master node.
   * 
   * @example
   * ADB.AIMedium.2
   */
  masterAISpec?: string;
  /**
   * @remarks
   * The resources for the master node. Valid values: 
   * - 2 CUs 
   * - 4 CUs 
   * - 8 CUs 
   * - 16 CUs 
   * - 32 CUs 
   * > Master resources of more than 8 CUs incur fees.
   * 
   * @example
   * 8
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
   * > - If you do not specify this parameter, the default value Postpaid is used.
   * > - In subscription mode, a discount is offered if you purchase resources for one year or longer. We recommend that you select a billing method based on your business requirements.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
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
   * > If you do not specify this parameter, the default value standard is used.
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
   * The ID of the resource group to which the instance belongs.
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
   * The performance level (PL) of the ESSD standard SSD. Valid values:
   * 
   * - **pl0**: PL0.
   * - **pl1**: PL1.
   * - **pl2**: PL2.
   * 
   * > - This parameter takes effect only when the disk storage type is set to ESSD standard SSD.
   * > - If you do not specify this parameter, the default value PL1 is used.
   * 
   * @example
   * pl1
   */
  segDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The number of compute nodes. Valid values:
   * 
   * - For High-availability Edition in elastic storage mode: 4 to 512. The value must be a multiple of 4.
   * - For Basic Edition in elastic storage mode: 2 to 512. The value must be a multiple of 2.
   * - For Serverless mode: 2 to 512. The value must be a multiple of 2.
   * 
   * > This parameter is required when you create an instance in elastic storage mode or Serverless mode.
   * 
   * @example
   * 4
   */
  segNodeNum?: string;
  /**
   * @remarks
   * The disk storage type. Only ESSD standard SSDs are supported. Set the value to **cloud_essd**.
   * 
   * > This parameter is required when you create an instance in the elastic storage pattern.
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
   * - **Auto**: auto-scheduling.
   * 
   * > - This parameter is required only for instances in Serverless mode.
   * > - The Serverless auto-scheduling mode of AnalyticDB for PostgreSQL is in invitational preview. To use this mode, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket?product=rds) to apply for the preview qualification.
   * 
   * @example
   * Auto
   */
  serverlessMode?: string;
  /**
   * @remarks
   * The threshold for compute resources. Valid values: 16 to 1024. Step size: 8. Unit: ACU.
   * 
   * > This parameter is required only for instances in Serverless auto-scheduling mode.
   * 
   * @example
   * 16
   */
  serverlessResource?: number;
  /**
   * @remarks
   * The ID of the source instance to be cloned.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in the target region, including the instance IDs.
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
   * > - The zone of the vSwitch in the secondary zone must be the same as the value of StandbyZoneId.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The ID of the secondary zone.
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
   * > This parameter is required when you create an instance in elastic storage mode.
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
   * The subscription period. Valid values:
   * - Valid values when **Period** is set to **Month**: 1 to 9.
   * - Valid values when **Period** is set to **Year**: 1 to 3.
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
   * > - The region of the **VPC** must be the same as the value of **RegionId**.
   * 
   * @example
   * vpc-bp19ame5m1r3oejns****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * > - **VSwitchId** is required.
   * > - The zone of the **vSwitch** must be the same as the value of **ZoneId**.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Specifies whether to enable vector DPI engine optimization. Valid values:
   * - **enabled**: enables vector DPI engine optimization.
   * - **disabled**: disables vector DPI engine optimization. This is the default value.
   * 
   * > - Disable vector DPI engine optimization for mainstream analytics, data warehousing, and real-time data warehousing scenarios.
   * > - Enable vector DPI engine optimization if you use the vector analytics DPI engine for AIGC and vector retrieve scenarios.
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
      autoRenew: 'AutoRenew',
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
      autoRenew: 'string',
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

