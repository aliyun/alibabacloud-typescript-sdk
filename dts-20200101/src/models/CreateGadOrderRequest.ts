// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGadOrderRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the smart pause and start feature for the Serverless instance. Valid values:
   * * **true**: enables the feature.
   * * **false**: disables the feature. This is the default value.
   * 
   * > This parameter is required only for MySQL and PostgreSQL Serverless instances. If no connections are established within 10 minutes, the instance enters the paused state. When a connection is established, the instance is automatically woken up.
   * 
   * @example
   * false
   */
  autoPause?: boolean;
  /**
   * @remarks
   * The maximum number of RDS capacity units (RCUs) for automatic scaling of the instance. Valid values:
   * 
   * - MySQL: **1 to 32**
   * - SQL Server: **2 to 16**
   * - PostgreSQL: **1 to 14**
   * 
   * > The value of this parameter must be greater than or equal to the value of **MinCapacity**. Only **integers** are supported.
   * 
   * @example
   * 10
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The minimum number of RCUs for automatic scaling of the instance. Valid values:
   * 
   * - MySQL: **0.5 to 32**
   * - SQL Server: **2 to 16** (only integers are supported)
   * - PostgreSQL: **0.5 to 14**
   * 
   * > The value of this parameter must be less than or equal to the value of **MaxCapacity**.
   * 
   * @example
   * 1
   */
  minCapacity?: number;
  /**
   * @remarks
   * Specifies whether to enable forced elastic scaling for the Serverless instance. Valid values:
   * * **true**: enables forced elastic scaling.
   * * **false**: disables forced elastic scaling. This is the default value.
   * 
   * > * This parameter is required only for MySQL and PostgreSQL Serverless instances. After this parameter is enabled, the instance will be unavailable for 30 to 120 seconds during forced scaling. Use this feature with caution based on your business requirements.
   * > * Elastic scaling of instance RCUs usually takes effect immediately. However, in some special cases (such as during the execution of large transactions), scaling cannot be completed immediately. In this case, you can enable this parameter to perform forced scaling.
   * 
   * @example
   * false
   */
  switchForce?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPause: 'AutoPause',
      maxCapacity: 'MaxCapacity',
      minCapacity: 'MinCapacity',
      switchForce: 'SwitchForce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPause: 'boolean',
      maxCapacity: 'number',
      minCapacity: 'number',
      switchForce: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGadOrderRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can call the [ListTagResources](https://help.aliyun.com/document_detail/191187.html) operation to query the tag key.
   * 
   * > - N indicates the sequence number of the tag key. For example, Tag.1.Key indicates the key of the first tag, and Tag.2.Key indicates the key of the second tag. You can specify 1 to 20 tag keys at a time.
   * - This parameter cannot be set to an empty string.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can call the [ListTagResources](https://help.aliyun.com/document_detail/191187.html) operation to query the tag value.
   * > - N indicates the sequence number of the tag value. For example, Tag.1.Value indicates the value of the first tag, and Tag.2.Value indicates the value of the second tag. You can specify 1 to 20 tag values at a time.
   * - This parameter can be set to an empty string.
   * 
   * @example
   * testvalue1
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

export class CreateGadOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances to be created. This parameter is applicable only when you create multiple ApsaraDB RDS for MySQL instances at a time.
   * 
   * Valid values: 1 to 20. Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to automatically create a proxy. Valid values:
   * 
   * - **true**: enables automatic creation. By default, a general-purpose proxy is created.
   * 
   * - **false**: disables automatic creation.
   * 
   * @example
   * false
   */
  autoCreateProxy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal upon expiration. Valid values:
   * - **false**: no. This is the default value.
   * - **true**: yes.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - true: enables auto-renewal.
   * - false: disables auto-renewal.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The configuration information of Babelfish for ApsaraDB RDS for PostgreSQL.
   * 
   * Configuration format: {"babelfishEnabled":"true","migrationMode":"xxxxxxx","masterUsername":"xxxxxxx","masterUserPassword":"xxxxxxxx"}
   * 
   * Parameter descriptions:
   * - **babelfishEnabled**: specifies whether to enable Babelfish. Set the value to **true** to enable Babelfish. By default, Babelfish is disabled if this parameter is not configured.
   * - **migrationMode**: the database mode. Set the value to **single-db** for the single-database mode or **multi-db** for the multi-database mode.
   * - **masterUsername**: the initial administrator account. The username must be 1 to 63 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit. It cannot start with pg.
   * - **masterUserPassword**: the password of the administrator account. The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include `! @ # $ % ^ & * () _ + - =`.
   * 
   * > This parameter is applicable only to ApsaraDB RDS for PostgreSQL instances. For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see [Babelfish overview](https://help.aliyun.com/document_detail/428613.html).
   * 
   * @example
   * {\\"isAnalyticReadOnlyIns\\":\\"true\\"}
   */
  babelfishConfig?: string;
  bpeEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the I/O performance burst feature for ESSD AutoPL cloud disks. Valid values:
   * 
   * - **true**: enables the feature.
   * - **false**: disables the feature. This is the default value.
   * 
   * > This parameter is supported only when StorageType is set to ESSDAUTOPL.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The additional parameter that specifies business information.
   * 
   * @example
   * ***
   */
  businessInfo?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * General instances:
   * Basic: Basic Edition.
   * HighAvailability: high-availability series.
   * cluster: Cluster Edition for MySQL or PostgreSQL.
   * AlwaysOn: Cluster Edition for SQL Server.
   * Finance: RDS Enterprise Edition.
   * Note: This parameter is required when you create an ApsaraDB RDS for SQL Server instance of the RDS Enterprise Edition, Basic Edition Standard, or Basic Edition Enterprise. For example, when you create a Basic Edition instance of the 2022 RDS Enterprise Edition (2022_ent), you must set this parameter to Basic.
   * Serverless instances:
   * serverless_basic: Serverless Basic Edition. This edition is active only for MySQL and PostgreSQL.
   * 
   * serverless_standard: Serverless high availability series. This edition is active only for MySQL and PostgreSQL.
   * 
   * serverless_ha: SQL Server Serverless high availability series.
   * 
   * Note: This parameter is required when PayType is set to Serverless.
   * 
   * @example
   * AlwaysOn
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The portal rewrites this parameter as a random UUID.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gad-x32115vv105f427
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the [data archiving](https://help.aliyun.com/document_detail/2701832.html) feature for premium performance disks. Valid values:
   * 
   * - **true**: enables the feature.
   * - **false**: disables the feature.
   * 
   * @example
   * false
   */
  coldDataEnabled?: boolean;
  /**
   * @remarks
   * The access mode of the instance. Valid values:
   * * **Standard**: standard access mode.
   * * **Safe**: database proxy mode.
   * 
   * Default value: allocated by the RDS system.
   * > SQL Server 2012, 2016, and 2017 support only the standard access mode.
   * 
   * @example
   * Standard
   */
  connectionMode?: string;
  /**
   * @remarks
   * The database connection address.
   * 
   * @example
   * Mid-end service
   */
  connectionString?: string;
  /**
   * @remarks
   * The policy for creating multiple instances at a time. This parameter takes effect only when the **Amount** parameter is set to a value greater than 1. Valid values:
   * * **Atomicity** (default): atomicity. All instances in the same batch are created successfully, or if one instance fails to be created, all instances fail to be created.
   * * **Partial**: non-atomicity. The creation of an instance is not affected by other instances in the same batch.
   * 
   * @example
   * Atomicity
   */
  createStrategy?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - **selectdb.xlarge**: 4 cores, 32 GB.
   * - **selectdb.2xlarge**: 8 cores, 64 GB.
   * - **selectdb.4xlarge**: 16 cores, 128 GB.
   * - **selectdb.8xlarge**: 32 cores, 256 GB.
   * - **selectdb.16xlarge**: 64 cores, 512 GB.
   * - **selectdb.24xlarge**: 96 cores, 768 GB.
   * - **selectdb.32xlarge**: 128 cores, 1024 GB.
   * 
   * @example
   * mssql.x4.medium.e2
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 255 characters in length. It must start with a letter or Chinese character and can contain letters, Chinese characters, digits, and hyphens (-).
   * 
   * @example
   * testInstance
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The network connection type of the instance. Set the value to Intranet, which indicates an internal network connection.
   * 
   * @example
   * Intranet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * Instance storage capacity of the instance. Instance storage capacity of a read-only instance must be greater than or equal to that of the primary instance. Valid values: See the **Storage Capacity** column in [Read-only instance types](https://help.aliyun.com/document_detail/145759.html). The value must be a multiple of 5. Unit: GB.
   * 
   * @example
   * 100
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * * **local_ssd**: premium local SSD.
   * * **cloud_ssd**: standard SSD.
   * * **cloud_essd**: PL1 ESSD.
   * * **cloud_essd2**: PL2 ESSD.
   * * **cloud_essd3**: PL3 ESSD.
   * * **general_essd**: premium performance disk.
   * 
   * 
   * > * If the primary ApsaraDB RDS for MySQL instance uses premium local SSDs, you can set this parameter only to **local_ssd**. If the primary instance uses cloud disks, you can set this parameter only to a cloud disk storage type.
   * > * ApsaraDB RDS for SQL Server supports only cloud disk storage types.
   * 
   * @example
   * cloud_auto
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * Specifies whether table names are case-sensitive. Valid values:
   * * **true**: Table names are not case-sensitive. This is the default value.
   * * **false**: Table names are case-sensitive.
   * 
   * @example
   * true
   */
  DBIsIgnoreCase?: string;
  /**
   * @remarks
   * The ID of the parameter template. You can call the DescribeParameterGroups operation to query the ID.
   * > This parameter is supported only for MySQL and PostgreSQL. If you do not specify this parameter, the default parameter template is used. You can also create a custom parameter template and use it here.
   * 
   * @example
   * rpg-sys-01040402010***
   */
  DBParamGroupId?: string;
  /**
   * @remarks
   * The time zone of the instance. This parameter takes effect only when **Engine** is set to **MySQL** or **PostgreSQL**.
   * 
   * - When **Engine** is set to **MySQL**:
   *     - The parameter settings configure the UTC time zone. Valid values: **-12:59** to **+13:00**.
   *     - An instance with Premium Local SSDs can use a named time zone, such as Asia/Hong_Kong. For more information about named time zones, see [Named time zones](https://help.aliyun.com/document_detail/297356.html).
   * - When **Engine** is set to **PostgreSQL**:
   *     - The parameter settings configure a named time zone. UTC time zones are not supported. For more information about named time zones, see [Named time zones](https://help.aliyun.com/document_detail/297356.html).
   *     - This parameter can be configured only for PostgreSQL instances that use cloud disks.
   * 
   * > - You can make parameter settings for the time zone when you purchase a primary instance. Read-only instances do not support time zone Settings and inherit the time zone of the primary instance.
   * > - If you do not make parameter settings for this parameter, the system selects the default time zone based on the region where the instance is created.
   * 
   * @example
   * +08:00
   */
  DBTimeZone?: string;
  /**
   * @remarks
   * The objects to be migrated or synchronized, in JSON format. For more information, see [Description of migration, synchronization, or change tracking objects](https://help.aliyun.com/document_detail/209545.html).
   * 
   * - The DbList parameter supports up to 1 MB of data.
   * - If DbList contains filter conditions, the total length of DbList, including the filter conditions, cannot exceed 1 MB.
   * - For distributed tasks (such as migration or synchronization tasks with PolarDB-X 1.0 as the source), DbList is split based on physical table shards to generate multiple subtasks. The DbList of each subtask supports up to 1 MB of data.
   * 
   * @example
   * {\\"dtstest\\":{\\"name\\":\\"dtstest\\",\\"all\\":true,\\"conflict\\":\\"overwrite\\"}}
   */
  dbList?: string;
  /**
   * @remarks
   * The DbList mode for SQL Server disaster recovery. Set this parameter to 0. Valid values are 0, 1, and 2, and the value must be consistent within the same group.
   * 
   * @example
   * 0
   */
  dbListMode?: number;
  /**
   * @remarks
   * The ID of the existing dedicated cluster.
   * 
   * @example
   * dhg-4kv98863455z***
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the resource stack. Valid values:
   * - Enabled: enables deletion protection for the resource stack.
   * - Disabled (default): disables deletion protection for the resource stack. In this case, you can release the resource stack by using the console or calling the DeleteStack operation.
   * 
   * > The deletion protection settings for a nested resource stack are the same as those for the root resource stack.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to perform only a precheck. Valid values:
   * 
   * - **true**: yes. After the precheck succeeds, no changes are made to the instance.
   * - **false** (default): no. After the precheck succeeds, the database instance of the DTS task is modified and the task is run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the encryption key. If encryption is disabled, this parameter is empty.
   * 
   * > After disk encryption is enabled for a cloud disk instance, it cannot be disabled.
   * 
   * @example
   * 07609cc3-3109-408f-a35e-c548e776***
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * This parameter is required.
   * 
   * @example
   * SQLServer
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. The valid values vary based on the database engine type.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The network type of the instance. Set the value to **VPC**.
   * 
   * > - Only VPCs are supported in Alibaba Cloud.
   * > - If you do not specify this parameter, the default value VPC is used.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * Specifies whether to enable the Buffer Pool Extension (BPE) feature for premium performance disks. Valid values:
   * 
   *  - **1**: enables the feature.
   *  - **0**: disables the feature.
   * 
   * > For more information about the Buffer Pool Extension (BPE) feature, see [Buffer Pool Extension (BPE)](https://help.aliyun.com/document_detail/2527067.html).
   * 
   * @example
   * 1
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * Specifies whether the primary instance account exists.
   * 
   * @example
   * true
   */
  masterAccountExist?: boolean;
  /**
   * @remarks
   * The privileged account of the primary instance.
   * 
   * @example
   * gadtest
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The password of the primary instance account.
   * 
   * @example
   * <password>
   */
  masterAccountPassword?: string;
  /**
   * @remarks
   * This parameter is specific to MongoDB. The architecture type of the primary database. Valid values:
   * - 1: replica set.
   * - 2: sharded cluster.
   * 
   * @example
   * 1
   */
  masterDatabaseName?: string;
  /**
   * @remarks
   * This parameter is specific to MongoDB. The architecture type of the primary database. Valid values:
   * - 1: replica set.
   * - 2: sharded cluster.
   * 
   * @example
   * 1
   */
  masterEngineArchType?: string;
  /**
   * @remarks
   * The primary instance.
   * 
   * @example
   * rm-j6c685vh0j0y1k***
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The region where the primary instance resides.
   * 
   * @example
   * cn-hongkong
   */
  masterRegion?: string;
  /**
   * @remarks
   * The shard account.
   * 
   * @example
   * db_test
   */
  masterShardAccountName?: string;
  /**
   * @remarks
   * The password of the shard account.
   * 
   * @example
   * <password>
   */
  masterShardAccountPassword?: string;
  /**
   * @remarks
   * Specifies whether to purchase a new secondary instance. If this parameter is set to false, an existing instance is used.
   * 
   * @example
   * false
   */
  needCreateSlave?: boolean;
  ownerId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * > This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The billing method for subscription instances. Valid values:
   * 
   * - **Year**: yearly.
   * - **Month**: monthly.
   * 
   * > This parameter is valid and required only when the billing method is **PrePaid** (subscription).
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The database service port of the destination instance.
   * 
   * @example
   * 5432
   */
  port?: string;
  /**
   * @remarks
   * Settings for the internal network IP address of the instance. The IP address must be within the IP address range of the specified vSwitch. By default, the system automatically allocates an IP address based on the VpcId and VSwitchId parameters.
   * 
   * @example
   * 10.60.22.91
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID of the primary instance.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmx4gs2dcym***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The global resource descriptor (ARN) for the authorization of the RDS cloud service account by the primary account to access KMS. You can call the CheckCloudResourceAuthorized operation to query the ARN.
   * >Notice: When you enable cloud disk encryption, you must specify **RoleARN**.</notice>
   * 
   * @example
   * acs:ram::1929332604914597:role/aliyunr***tanceencryptiondefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The IP addresses that are added to the whitelist of the instance. Separate multiple IP addresses with commas (,). Note: If you set this parameter to 127.0.0.1, access from all IP addresses is denied. If you set this parameter to 192.168.0.0/24, access from all IP addresses in the 192.168.0.XX format is allowed.
   * 
   * @example
   * 172.16.0.0/12
   */
  securityIPList?: string;
  /**
   * @remarks
   * The settings of the Serverless instance. This parameter is required when you create a Serverless instance.
   */
  serverlessConfig?: CreateGadOrderRequestServerlessConfig;
  /**
   * @remarks
   * Specifies whether the secondary instance account exists.
   * 
   * @example
   * true
   */
  slaveAccountExist?: boolean;
  /**
   * @remarks
   * The account with the same name on the secondary instance.
   * 
   * @example
   * gadtest
   */
  slaveAccountName?: string;
  /**
   * @remarks
   * The password of the secondary instance account.
   * 
   * @example
   * <password>
   */
  slaveAccountPassword?: string;
  /**
   * @remarks
   * The name of the secondary database.
   * 
   * @example
   * slave_database
   */
  slaveDatabaseName?: string;
  /**
   * @remarks
   * This parameter is specific to MongoDB. The architecture type of the secondary database. Valid values:
   * - 1: replica set.
   * - 2: sharded cluster.
   * 
   * @example
   * 1
   */
  slaveEngineArchType?: string;
  /**
   * @remarks
   * The secondary instance.
   * 
   * @example
   * rm-t4nb481a8qn0b3***
   */
  slaveInstanceId?: string;
  /**
   * @remarks
   * Specifies whether the secondary instance is read-only.
   * 
   * @example
   * true
   */
  slaveReadOnly?: boolean;
  /**
   * @remarks
   * The region where the secondary instance resides.
   * 
   * @example
   * ap-southeast-1
   */
  slaveRegion?: string;
  /**
   * @remarks
   * Specifies whether to enable Automatic storage scaling for the Standard Edition cluster. Valid values:
   * 
   * - Enable: enables Automatic storage scaling.
   * - Disable: shutdown Automatic storage scaling.
   * 
   * @example
   * Disable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The threshold (in percentage) that triggers automatic storage expansion. Valid values:
   * * **10**
   * * **20**
   * * **30**
   * * **40**
   * * **50**
   * 
   * > This parameter is required when **StorageAutoScale** is set to **Enable**.
   * 
   * @example
   * 60
   */
  storageThreshold?: number;
  /**
   * @remarks
   * The Settings for the upper limit of Automatic storage scaling for the Standard Edition cluster. Unit: GB.
   * 
   * > The maximum value is 32000.
   * 
   * @example
   * 64000
   */
  storageUpperBound?: number;
  /**
   * @remarks
   * The synchronization account type.
   * 
   * @example
   * user
   */
  syncAccountType?: string;
  /**
   * @remarks
   * The synchronization topology. Valid values:
   * 
   * - **oneway**: one-way synchronization. This is the default value.
   * - **bidirectional**: two-way synchronization.
   * 
   * @example
   * oneway
   */
  syncArchitecture?: string;
  /**
   * @remarks
   * The conflict resolution policy.
   * 
   * @example
   * ignore
   */
  syncConflict?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be configured.
   * 
   * @example
   * utf8
   */
  systemDBCharset?: string;
  /**
   * @remarks
   * The tags of the data migration instance. This parameter is used as a filter. If this parameter is not empty, only the instance tasks that have the specified tags are returned.
   */
  tag?: CreateGadOrderRequestTag[];
  /**
   * @remarks
   * The ID of the host on which the logger instance is created in the dedicated cluster.
   * 
   * This parameter is required when you create an RDS Enterprise Edition instance in a dedicated cluster. If you do not specify this parameter, the system automatically allocates a host by default.
   * 
   * - You can invoke the DescribeDedicatedHosts operation to query the host information in the dedicated cluster.
   * - If no hosts are active, you can invoke the CreateDedicatedHost operation to create a host.
   * 
   * @example
   * i-bp****
   */
  targetDedicatedHostIdForLog?: string;
  /**
   * @remarks
   * The ID of the host on which the primary instance is created in the dedicated cluster.
   * 
   * This parameter is required when you create an instance in a dedicated cluster. If you do not specify this parameter, the system automatically assigns a host.
   * 
   * You can call the DescribeDedicatedHosts operation to query the host information in the dedicated cluster.
   * If no hosts are available, you can call the CreateDedicatedHost operation to create a host.
   * 
   * @example
   * i-bp****
   */
  targetDedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * The ID of the host on which the secondary instance is created in the dedicated cluster.
   * 
   * This parameter is required when you create a high availability series or RDS Enterprise Edition instance in a dedicated cluster. If you do not specify this parameter, the system automatically allocates a host by default.
   * 
   * - You can invoke the DescribeDedicatedHosts operation to query the host information in the dedicated cluster.
   * - If no hosts are active, you can invoke the CreateDedicatedHost operation to create a host.
   * 
   * @example
   * i-bp****
   */
  targetDedicatedHostIdForSlave?: string;
  /**
   * @remarks
   * The minor engine version of the ApsaraDB RDS instance. This parameter is required only when you create a MySQL or PostgreSQL instance.
   * 
   * @example
   * rds_postgres_1700_20260***
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The purchase duration for subscription instances.
   * - When **Period** is set to **Month**, valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * - When **Period** is set to **Year**, valid values are 1, 2, 3, and 5.
   * > - This parameter is valid and required only when **PayType** is set to **PrePaid**.
   * - For the billing method of subscription instances, you can specify it in the **Period** parameter.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The ID of the user backup. You can call the ListUserBackupFiles operation to query the ID. If you specify this parameter, the instance is created based on the user backup.
   * 
   * If you specify this parameter, the following limits apply:
   * 
   * - The PayType parameter must be set to Postpaid.
   * - The Engine parameter must be set to MySQL.
   * - The EngineVersion parameter must be set to 5.7.
   * - The Category parameter must be set to Basic.
   * 
   * @example
   * 67798****
   */
  userBackupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC.
   * 
   * @example
   * vsw-wz9gttyapd3i9dmzn***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-m5ehjekt8mzvyyx5a1***
   */
  vpcId?: string;
  /**
   * @remarks
   * The whitelist. To configure multiple IP addresses, separate the IP addresses or CIDR blocks with commas (,) without spaces before or after the commas. Example: `192.168.0.1,172.16.213.9`.
   * 
   * @example
   * 192.168.0.1,172.16.213.9
   */
  whitelistTemplateList?: string;
  /**
   * @remarks
   * The zone ID of the primary node.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone ID of the secondary node.
   * 
   * - If you set this parameter to **Auto**, it indicates a multi-zone deployment and the system automatically selects an active zone for the secondary node.
   * - If you set this parameter to the same value as **ZoneId**, it is a single-zone deployment.
   * - If you set this parameter to a value different from **ZoneId**, it is a multi-zone deployment.
   * 
   * @example
   * cn-beijing-i
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * The secondary zone 2.
   * > This parameter is active only for instances of the RDS Enterprise Edition.
   * 
   * @example
   * cn-chengdu-b
   */
  zoneIdSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoCreateProxy: 'AutoCreateProxy',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      babelfishConfig: 'BabelfishConfig',
      bpeEnabled: 'BpeEnabled',
      burstingEnabled: 'BurstingEnabled',
      businessInfo: 'BusinessInfo',
      category: 'Category',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      coldDataEnabled: 'ColdDataEnabled',
      connectionMode: 'ConnectionMode',
      connectionString: 'ConnectionString',
      createStrategy: 'CreateStrategy',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBIsIgnoreCase: 'DBIsIgnoreCase',
      DBParamGroupId: 'DBParamGroupId',
      DBTimeZone: 'DBTimeZone',
      dbList: 'DbList',
      dbListMode: 'DbListMode',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      deletionProtection: 'DeletionProtection',
      dryRun: 'DryRun',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceNetworkType: 'InstanceNetworkType',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      masterAccountExist: 'MasterAccountExist',
      masterAccountName: 'MasterAccountName',
      masterAccountPassword: 'MasterAccountPassword',
      masterDatabaseName: 'MasterDatabaseName',
      masterEngineArchType: 'MasterEngineArchType',
      masterInstanceId: 'MasterInstanceId',
      masterRegion: 'MasterRegion',
      masterShardAccountName: 'MasterShardAccountName',
      masterShardAccountPassword: 'MasterShardAccountPassword',
      needCreateSlave: 'NeedCreateSlave',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      port: 'Port',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      roleARN: 'RoleARN',
      securityIPList: 'SecurityIPList',
      serverlessConfig: 'ServerlessConfig',
      slaveAccountExist: 'SlaveAccountExist',
      slaveAccountName: 'SlaveAccountName',
      slaveAccountPassword: 'SlaveAccountPassword',
      slaveDatabaseName: 'SlaveDatabaseName',
      slaveEngineArchType: 'SlaveEngineArchType',
      slaveInstanceId: 'SlaveInstanceId',
      slaveReadOnly: 'SlaveReadOnly',
      slaveRegion: 'SlaveRegion',
      storageAutoScale: 'StorageAutoScale',
      storageThreshold: 'StorageThreshold',
      storageUpperBound: 'StorageUpperBound',
      syncAccountType: 'SyncAccountType',
      syncArchitecture: 'SyncArchitecture',
      syncConflict: 'SyncConflict',
      systemDBCharset: 'SystemDBCharset',
      tag: 'Tag',
      targetDedicatedHostIdForLog: 'TargetDedicatedHostIdForLog',
      targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
      targetDedicatedHostIdForSlave: 'TargetDedicatedHostIdForSlave',
      targetMinorVersion: 'TargetMinorVersion',
      usedTime: 'UsedTime',
      userBackupId: 'UserBackupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      whitelistTemplateList: 'WhitelistTemplateList',
      zoneId: 'ZoneId',
      zoneIdSlave1: 'ZoneIdSlave1',
      zoneIdSlave2: 'ZoneIdSlave2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoCreateProxy: 'boolean',
      autoPay: 'boolean',
      autoRenew: 'string',
      babelfishConfig: 'string',
      bpeEnabled: 'string',
      burstingEnabled: 'boolean',
      businessInfo: 'string',
      category: 'string',
      clientToken: 'string',
      clusterId: 'string',
      coldDataEnabled: 'boolean',
      connectionMode: 'string',
      connectionString: 'string',
      createStrategy: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceNetType: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      DBIsIgnoreCase: 'string',
      DBParamGroupId: 'string',
      DBTimeZone: 'string',
      dbList: 'string',
      dbListMode: 'number',
      dedicatedHostGroupId: 'string',
      deletionProtection: 'boolean',
      dryRun: 'boolean',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceNetworkType: 'string',
      ioAccelerationEnabled: 'string',
      masterAccountExist: 'boolean',
      masterAccountName: 'string',
      masterAccountPassword: 'string',
      masterDatabaseName: 'string',
      masterEngineArchType: 'string',
      masterInstanceId: 'string',
      masterRegion: 'string',
      masterShardAccountName: 'string',
      masterShardAccountPassword: 'string',
      needCreateSlave: 'boolean',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      port: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      roleARN: 'string',
      securityIPList: 'string',
      serverlessConfig: CreateGadOrderRequestServerlessConfig,
      slaveAccountExist: 'boolean',
      slaveAccountName: 'string',
      slaveAccountPassword: 'string',
      slaveDatabaseName: 'string',
      slaveEngineArchType: 'string',
      slaveInstanceId: 'string',
      slaveReadOnly: 'boolean',
      slaveRegion: 'string',
      storageAutoScale: 'string',
      storageThreshold: 'number',
      storageUpperBound: 'number',
      syncAccountType: 'string',
      syncArchitecture: 'string',
      syncConflict: 'string',
      systemDBCharset: 'string',
      tag: { 'type': 'array', 'itemType': CreateGadOrderRequestTag },
      targetDedicatedHostIdForLog: 'string',
      targetDedicatedHostIdForMaster: 'string',
      targetDedicatedHostIdForSlave: 'string',
      targetMinorVersion: 'string',
      usedTime: 'string',
      userBackupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      whitelistTemplateList: 'string',
      zoneId: 'string',
      zoneIdSlave1: 'string',
      zoneIdSlave2: 'string',
    };
  }

  validate() {
    if(this.serverlessConfig && typeof (this.serverlessConfig as any).validate === 'function') {
      (this.serverlessConfig as any).validate();
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

