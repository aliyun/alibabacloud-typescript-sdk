// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify this parameter to add a tag to the instance.
   * 
   * * If the specified tag key already exists, the tag key is directly added to the instance. You can call the ListTagResources operation to query existing tags.
   * * If the specified tag key does not exist, the tag key is created and then added to the instance.
   * * Empty strings are not allowed.
   * * This parameter must be used together with **Tag.Value**.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key. You can specify this parameter to add a tag to the instance.
   * 
   * * If the specified tag value exists for the corresponding tag key, the tag value is directly added to the instance. You can call the ListTagResources operation to query existing tags.
   * * If the specified tag value does not exist for the corresponding tag key, the tag value is created and then added to the instance.
   * * This parameter must be used together with **Tag.Key**.
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

export class CreateDBInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances to create. This parameter is applicable only when you create multiple ApsaraDB RDS for MySQL instances at a time.
   * 
   * Valid values: **1** to **20**. Default value: **1**.
   * 
   * > - When you create multiple ApsaraDB RDS for MySQL instances, you can use the **Tag.Key** and **Tag.Value** parameters to add tags to the instances in the same batch. This facilitates instance management by tag after creation.
   * > - After multiple instances are created, the operation returns only the **TaskId**, **RequestId**, and **Message** parameters, and does not return other detail parameters. To query the details of a specific instance, you can call the DescribeDBInstanceAttribute operation.
   * > - If **Engine** is not set to **MySQL** and the value of this parameter is greater than **1**, the operation fails and returns the error code `InvalidParam.Engine`.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to automatically create a proxy. Valid values:
   * 
   * - **true**: enables automatic creation. By default, a general-purpose proxy is created.
   * - **false**: disables automatic creation.
   * 
   * @example
   * false
   */
  autoCreateProxy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: enables automatic payment. You must ensure that your account balance is sufficient.
   * - **false**: generates an order without deducting fees.
   * 
   * > The default value is true. If your payment method has an insufficient balance, you can set AutoPay to false. In this case, an unpaid order is generated, and you can log on to the ApsaraDB RDS console to pay the order manually.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
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
   * Specifies whether to enable or disable automatic minor version upgrades. Valid values:
   * - **Auto**: Enabled.
   * - **Manual**: Disabled.
   * 
   * @example
   * Auto
   */
  autoUpgradeMinorVersion?: string;
  /**
   * @remarks
   * Specifies whether to use vouchers. Valid values:
   * * **true**: uses vouchers.
   * * **false**: does not use vouchers. This is the default value.
   * 
   * > If you use vouchers and later need to downgrade the instance configuration, the amount deducted by the vouchers will not be refunded.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The configuration information of Babelfish for ApsaraDB RDS for PostgreSQL.
   * 
   * Configuration format: {"babelfishEnabled":"true","migrationMode":"xxxxxxx","masterUsername":"xxxxxxx","masterUserPassword":"xxxxxxxx"}
   * 
   * Parameter description:
   * - **babelfishEnabled**: specifies whether to enable Babelfish. Set the value to **true** to enable Babelfish. By default, Babelfish is disabled.
   * - **migrationMode**: the database mode. Set the value to **single-db** for the single-database mode or **multi-db** for the multi-database mode.
   * - **masterUsername**: the initial administrator account. The username must be 1 to 63 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit. It cannot start with pg.
   * - **masterUserPassword**: the password of the administrator account. The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include `! @ # $ % ^ & * () _ + - =`.
   * 
   * > This parameter is applicable only to ApsaraDB RDS for PostgreSQL instances. For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see [Babelfish overview](https://help.aliyun.com/document_detail/428613.html).
   * 
   * @example
   * {"babelfishEnabled":"true","migrationMode":"single-db","masterUsername":"babelfish_user","masterUserPassword":"Babelfish123!"}
   */
  babelfishConfig?: string;
  bpeEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the I/O performance burst feature for premium cloud disks. Valid values:
   * * **true**: enables the feature.
   * * **false**: disables the feature.
   * > For more information about the I/O performance burst feature for premium cloud disks, see [What is a premium cloud disk?](https://help.aliyun.com/document_detail/2340501.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The extended business parameters.
   * 
   * @example
   * 121436975448952
   */
  businessInfo?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * * Regular instances
   *     * **Basic**: Basic Edition.
   *     * **HighAvailability**: high-availability series.
   *     * **cluster**: Cluster Edition for MySQL or PostgreSQL.
   *     * **AlwaysOn**: Cluster Edition for SQL Server.
   *     * **Finance**: RDS Enterprise Edition.
   *     > This parameter is required when you create a SQL Server RDS Enterprise Edition<props="china">, Basic Edition Standard Edition, or Basic Edition Enterprise Edition instance. For example, when you create a Basic Edition 2022 RDS Enterprise Edition (2022_ent) instance, you must set this parameter to Basic.
   * * Serverless instances
   *     * **serverless_basic**: Serverless Basic Edition. This value is applicable only to MySQL and PostgreSQL.
   *     * **serverless_standard**: Serverless high-availability series. This value is applicable only to MySQL and PostgreSQL.
   *     * **serverless_ha**: Serverless high-availability series for SQL Server.
   * 
   *     > This parameter is required when PayType is set to Serverless.
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, but you must ensure that the value is unique across different requests. The value can contain a maximum of 64 ASCII characters and cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the [data archiving](https://help.aliyun.com/document_detail/2701832.html) feature for premium cloud disks. Valid values:
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
   * The default value is allocated by the RDS system.
   * > SQL Server 2012, 2016, and 2017 instances support only the standard access mode.
   * 
   * @example
   * Standard
   */
  connectionMode?: string;
  /**
   * @remarks
   * The internal endpoint of the database.
   * 
   * Endpoint format: `xxx.mysql.rds.aliyuncs.com`, where `xxx` is the prefix of the instance ID, such as rm-uf6wjk5***.
   * 
   * @example
   * rm-uf6wjk5****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The strategy for creating multiple instances at a time. This parameter takes effect only when **Amount** is greater than 1. Valid values:
   * * **Atomicity**: atomicity. All instances in the same batch are created successfully, or if one instance fails to be created, all instances fail to be created. This is the default value.
   * * **Partial**: non-atomicity. The creation of an instance is not affected by other instances in the same batch.
   * 
   * @example
   * Atomicity
   */
  createStrategy?: string;
  customExtraInfo?: string;
  /**
   * @remarks
   * The instance type. You can specify a standard or YiTian instance type. For details, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * To create a Serverless instance, specify one of the following values:
   * 
   * - MySQL Basic Edition: **mysql.n2.serverless.1c**
   * - MySQL high-availability series: **mysql.n2.serverless.2c**
   * - SQL Server: **mssql.mem2.serverless.s2**
   * - PostgreSQL Basic Edition: **pg.n2.serverless.1c**
   * - PostgreSQL high-availability series: **pg.n2.serverless.2c**
   * 
   * This parameter is required.
   * 
   * @example
   * mysql.n2.medium.2c
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The description of the instance. The description must be 2 to 255 characters in length. It must start with a letter and can contain letters, digits, Chinese characters, and hyphens (-).
   * > The description cannot start with http:// or https://.
   * 
   * @example
   * testInstance
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The network connectivity type of the instance. Set the value to **Intranet**, which indicates an internal network connection.
   * 
   * This parameter is required.
   * 
   * @example
   * Intranet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * Instance storage capacity of the instance. Unit: GB. Instance storage capacity increases in increments of 5 GB. For more information about the valid values, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance storage type. Valid values:
   * * **local_ssd**: premium local SSD (recommended).
   * * **general_essd**: premium cloud disk (recommended).
   * * **cloud_essd**: PL1 ESSD.
   * * **cloud_essd2**: PL2 ESSD.
   * * **cloud_essd3**: PL3 ESSD.
   * * **cloud_ssd**: standard SSD (not recommended, and no longer available in some regions).
   * 
   * The default value of this parameter is automatically determined based on the instance type specified by **DBInstanceClass**:
   * * If the instance type code indicates a premium local SSD, the default value is **local_ssd**.
   * * If the instance type code indicates a cloud disk, the default value is **cloud_essd**.
   * 
   * > Serverless instances support only PL1 ESSDs and premium cloud disks.
   * 
   * @example
   * general_essd
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
   * The ID of the parameter template. You can call the DescribeParameterGroups operation to query the parameter template ID.
   * > This parameter is supported only by MySQL and PostgreSQL. If you do not specify this parameter, the default parameter template is used. You can also create a custom parameter template and specify it here.
   * 
   * @example
   * rpg-sys-****
   */
  DBParamGroupId?: string;
  /**
   * @remarks
   * The time zone of the instance. This parameter takes effect only when **Engine** is set to **MySQL** or **PostgreSQL**.
   * 
   * - If **Engine** is set to **MySQL**:
   *     - This parameter configures the UTC time zone. Valid values: **-12:59** to **+13:00**.
   *     - For an instance with premium local SSDs, you can specify a named time zone, such as Asia/Hong_Kong. For more information about named time zones, see [Named time zones](https://help.aliyun.com/document_detail/297356.html).
   * - If **Engine** is set to **PostgreSQL**:
   *     - This parameter configures a named time zone. UTC time zones are not supported. For more information about named time zones, see [Named time zones](https://help.aliyun.com/document_detail/297356.html).
   *     - This parameter can be configured only for ApsaraDB RDS for PostgreSQL instances with cloud disks.
   * 
   * > - You can set the time zone when you purchase a primary instance. Read-only instances do not support time zone settings and inherit the time zone of the primary instance.
   * > - If you do not specify this parameter, the system selects the default time zone based on the region where the instance is created.
   * 
   * @example
   * +08:00
   */
  DBTimeZone?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster host group.
   * 
   * This parameter is required when you create an instance in a dedicated cluster.
   * 
   * - You can call the DescribeDedicatedHostGroups operation to query the host group information.
   * - If you have not created a host group, you can call the CreateDedicatedHostGroup operation to create one.
   * 
   * @example
   * dhg-4n****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the release protection feature for the ApsaraDB RDS instance. This feature is supported only for pay-as-you-go instances. Valid values:
   * * **true**: enables the feature.
   * * **false**: disables the feature. This is the default value.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to perform a precheck for the instance creation operation. Valid values:
   * * **true**: performs a precheck but does not create the instance. The check items include request parameters, request format, business limits, and inventory.
   * * **false**: sends a normal request and creates the instance directly after the check passes. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the key used for cloud disk encryption in the same region. If you specify this parameter, cloud disk encryption is enabled and cannot be disabled. You must also specify **RoleARN**.
   * 
   * You can view the key ID in the Key Management Service (KMS) console or create a new key. For more information, see [Create a CMK](https://help.aliyun.com/document_detail/181610.html).
   * 
   * > - For ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and ApsaraDB RDS for SQL Server instances, you do not need to specify this parameter. You only need to specify **RoleARN** to use the service key to create an instance with cloud disk encryption enabled.
   * > - If RAM authorization requires RAM users to enable cloud disk encryption when creating instances, the instances cannot be created if cloud disk encryption is not enabled. Configure the following RAM policy for the RAM user:
   * `{"Version":"1","Statement":[{"Effect":"Deny","Action":"rds:CreateDBInstance","Resource":"*","Condition":{"StringEquals":{"rds:DiskEncryptionRequired":"false"}}}]}`
   * >Warning: This configuration also affects the CreateOrder operation for creating instances in the console.
   * 
   * @example
   * 0d24*****-da7b-4786-b981-9a164dxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * * **MySQL**
   * * **SQLServer**
   * * **PostgreSQL**
   * * **MariaDB**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version. Valid values:
   * * Regular instances
   *     * MySQL: **5.5**, **5.6**, **5.7**, and **8.0**
   *     * SQL Server: **08r2_ent_ha** (cloud disk edition, discontinued), **2008r2** (premium local SSD, discontinued), **2012** (Enterprise Edition standalone), **2012_ent_ha**, **2012_std_ha**, **2012_web**, **2014_ent_ha**, **2014_std_ha**, **2016_ent_ha**, **2016_std_ha**, **2016_web**, **2017_ent**, **2017_std_ha**, **2017_web**, **2019_ent**, **2019_std_ha**, **2019_web**, **2022_ent**, **2022_std_ha**, **2022_web**, **2025_ent**, and **2025_std**
   *     * PostgreSQL: **10.0**, **11.0**, **12.0**, **13.0**, **14.0**, **15.0**, **16.0**, **17.0**, and **18.0**
   *     * MariaDB: **10.3** and **10.6**
   * * Serverless instances
   *     * MySQL: **5.7** and **8.0**
   *     * SQL Server: **2016_std_sl**, **2017_std_sl**, and **2019_std_sl**
   *     * PostgreSQL: **14.0**, **15.0**, **16.0**, **17.0**, and **18.0**
   * 
   * > - MariaDB does not support Serverless instances.
   * > - For SQL Server instances, `_ent` indicates Enterprise Cluster Edition, `_ent_ha` indicates Enterprise Edition, `_std_ha` indicates Standard Edition, and `_web` indicates Web Edition.
   * > - SQL Server 2014 instances are not available on the international site.
   * > - Babelfish for ApsaraDB RDS for PostgreSQL instances support only major version 15.0.
   * 
   * This parameter is required.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable [native replication for ApsaraDB RDS for MySQL](https://help.aliyun.com/document_detail/2856526.html). Valid values:
   * - **ON**: enables the feature.
   * - **OFF**: disables the feature.
   * 
   * @example
   * ON
   */
  externalReplication?: boolean;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * * **VPC**: VPC.
   * * **Classic**: classic network.
   * 
   * > * ApsaraDB RDS for MySQL cloud disk instances support only VPCs. You must set this parameter to **VPC**.
   * > * ApsaraDB RDS for PostgreSQL and ApsaraDB RDS for MariaDB instances support only VPCs. You must set this parameter to **VPC**.
   * > * ApsaraDB RDS for SQL Server Basic Edition and Web Edition instances support both the classic network and VPCs. Other instances support only VPCs. You must set this parameter to **VPC**.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * Specifies whether to enable the [Buffer Pool Extension (BPE)](https://help.aliyun.com/document_detail/2527067.html) feature for premium cloud disks. Valid values:
   * 
   *  - **1**: enables the feature.
   *  - **0**: disables the feature.
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the [16KB atomic write](https://help.aliyun.com/document_detail/2858761.html) feature. Valid values:
   * 
   * - **optimized**: enables the feature.
   * - **none**: disables the feature. This is the default value.
   * 
   * @example
   * optimized
   */
  optimizedWrites?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * - **Serverless**: serverless billing method. MariaDB instances are not supported. For more information, see [Overview of ApsaraDB RDS for MySQL Serverless instances](https://help.aliyun.com/document_detail/411291.html), [Overview of ApsaraDB RDS for SQL Server Serverless instances](https://help.aliyun.com/document_detail/604344.html), and [Overview of ApsaraDB RDS for PostgreSQL Serverless instances](https://help.aliyun.com/document_detail/607742.html).
   * > The system automatically generates an order and completes the payment. You do not need to manually confirm the payment.
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription period of the subscription instance. Valid values:
   * * **Year**: yearly subscription.
   * * **Month**: monthly subscription.
   * 
   * > This parameter is required when **PayType** is set to **Prepaid**.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The port used to initialize the instance during creation. Valid values:
   * - MySQL: 1000 to 65534
   * - PostgreSQL, SQL Server, and MariaDB: 1000 to 5999
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The internal IP address of the instance. The IP address must be within the address range of the specified vSwitch. By default, the system automatically allocates an IP address based on **VPCId** and **VSwitchId**.
   * 
   * @example
   * 172.16.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * aliwood-1688-mobile-promotion
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The global resource descriptor (ARN) used for the authorization of the ApsaraDB RDS service account to access KMS. You can invoke the CheckCloudResourceAuthorized operation to query the ARN.
   * >Notice: When you enable cloud disk encryption, you must specify **RoleARN**.
   * 
   * @example
   * acs:ram::1406****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The [IP address whitelist](https://help.aliyun.com/document_detail/43185.html) of the instance. Separate multiple IP addresses or CIDR blocks with commas (,). Duplicate IP addresses or CIDR blocks are not allowed. You can add up to 1,000 IP addresses or CIDR blocks to the whitelist of a single instance. The following formats are supported:
   * * IP addresses, such as 10.10.XX.XX.
   * * CIDR blocks, such as 10.10.XX.XX/24. In this example, 24 indicates the length of the prefix in the CIDR block, and the prefix length ranges from 1 to 32.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.10.XX.XX/24
   */
  securityIPList?: string;
  /**
   * @remarks
   * The settings for the ApsaraDB RDS Serverless instance. This parameter is required when you create a Serverless instance.
   * > MariaDB does not support Serverless instances.
   */
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic storage expansion. This parameter is supported only by MySQL and PostgreSQL. Valid values:
   * * **Enable**: enables automatic storage expansion.
   * * **Disable**: disables automatic storage expansion. This is the default value.
   * 
   * > You can also call the ModifyDasInstanceConfig operation to adjust this setting after the instance is created. For more information, see [Enable automatic storage expansion](https://help.aliyun.com/document_detail/173826.html).
   * 
   * @example
   * Disable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The threshold percentage that triggers automatic storage expansion. Valid values:
   * * **10**
   * * **20**
   * * **30**
   * * **40**
   * * **50**
   * 
   * > This parameter is required when **StorageAutoScale** is set to **Enable**.
   * 
   * @example
   * 50
   */
  storageThreshold?: number;
  /**
   * @remarks
   * The upper limit of the total storage capacity for automatic storage expansion. The automatic expansion does not cause the total storage capacity of the instance to exceed this value. Unit: GB.
   * 
   * > - The value must be greater than or equal to 0.
   * > - This parameter is required when **StorageAutoScale** is set to **Enable**.
   * 
   * @example
   * 2000
   */
  storageUpperBound?: number;
  /**
   * @remarks
   * Deprecated. You do not need to configure this parameter.
   * 
   * @example
   * gbk
   */
  systemDBCharset?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateDBInstanceShrinkRequestTag[];
  /**
   * @remarks
   * The ID of the host on which the logger instance is created in the dedicated cluster.
   * 
   * This parameter is required when you create an RDS Enterprise Edition instance in a dedicated cluster. If you do not specify this parameter, the system automatically allocates a host by default.
   * 
   * - You can invoke the DescribeDedicatedHosts operation to query the host information in the dedicated cluster.
   * - If you do not have a host, you can invoke the CreateDedicatedHost operation to add one.
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
   * - You can call the DescribeDedicatedHosts operation to query the host information in the host group.
   * - If you do not have a host, you can call the CreateDedicatedHost operation to add one.
   * 
   * @example
   * i-bp****
   */
  targetDedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * The ID of the host on which the secondary instance is created in the dedicated cluster.
   * 
   * This parameter is required when you create a high-availability series or RDS Enterprise Edition instance in a dedicated cluster. If you do not specify this parameter, the system automatically allocates a host by default.
   * 
   * - You can invoke the DescribeDedicatedHosts operation to query the host information in the dedicated cluster.
   * - If you do not have a host, you can invoke the CreateDedicatedHost operation to add one.
   * 
   * @example
   * i-bp****
   */
  targetDedicatedHostIdForSlave?: string;
  /**
   * @remarks
   * The minor engine version of the ApsaraDB RDS instance. This parameter is required only when you create a MySQL or PostgreSQL instance.
   * Format:
   * * MySQL: `<Instance version>_<Numeric version number>`. Examples: `rds_20200229`, `xcluster_20200229`, and `xcluster80_20200229`. Description:
   *     * rds: high-availability series or Basic Edition.
   *     * xcluster: MySQL 5.7 RDS Enterprise Edition.
   *     * xcluster80: MySQL 8.0 RDS Enterprise Edition.
   * 
   *     > You can invoke the DescribeDBMiniEngineVersions operation to query the numeric version number. For more information about the differences between versions, see [AliSQL release notes](https://help.aliyun.com/document_detail/96060.html).
   * * PostgreSQL: `rds_postgres_<Major version>00_<Minor version number>`. Example: `rds_postgres_1400_20220830`. Description:
   *     * 1400: PostgreSQL major version 14.
   *     * 20220830: AliPG minor engine version. You can invoke the DescribeDBMiniEngineVersions operation to query the minor engine version. For more information about the differences between versions, see [PostgreSQL release notes](https://help.aliyun.com/document_detail/126002.html).
   * 
   *     > If Babelfish is enabled in **BabelfishConfig**, the minor engine version format for the ApsaraDB RDS for PostgreSQL instance is `rds_postgres_<Major version>00_<AliPG minor engine version>_babelfish`.
   * 
   * @example
   * rds_20200229
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * If **Period** is set to **Year**, the valid values of **UsedTime** are **1** to **5**.
   * * If **Period** is set to **Month**, the valid values of **UsedTime** are **1** to **11**.
   * 
   * > This parameter is required when **PayType** is set to **Prepaid**.
   * 
   * @example
   * 2
   */
  usedTime?: string;
  /**
   * @remarks
   * The ID of the user backup. You can call the ListUserBackupFiles operation to query the backup ID. If you specify this parameter, the instance is created based on the user backup.
   * 
   * If you specify this parameter, the following limits apply:
   * - **PayType** must be set to **Postpaid**.
   * - **Engine** must be set to **MySQL**.
   * - **EngineVersion** must be set to **5.7**.
   * - **Category** must be set to **Basic**.
   * 
   * @example
   * 67798****
   */
  userBackupId?: string;
  /**
   * @remarks
   * The VPC ID.
   * > This parameter takes effect only when the network type **InstanceNetworkType** is set to **VPC**.
   * 
   * @example
   * vpc-****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * - **Zone mapping**: The zone of the vSwitch specified by VSwitchId must correspond to the zone of the primary node (ZoneId) and the zone of the secondary node (ZoneIdSlave1). If you specify two vSwitch IDs, their sequence must match the sequence of ZoneId and ZoneIdSlave1.
   * - **Network type limit**: **InstanceNetworkType** must be set to **VPC**.
   * - **Multiple vSwitches**: If you specify **ZoneIdSlave1** and the value is not **Auto**, you must specify two vSwitch IDs and separate them with a comma (,).
   * - **Character limit**: VSwitchId cannot contain special characters such as spaces, exclamation marks (!), number signs (#), yen signs (¥), ampersands (&), or percent signs (%).
   * 
   * @example
   * vsw-****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The whitelist templates.
   * When you need to configure multiple IP addresses, separate multiple IP addresses or CIDR blocks with commas (,). Do not include spaces before or after the commas. Example: `192.168.0.1,172.16.213.9`.
   * 
   * @example
   * 192.168.0.1,172.16.213.9
   */
  whitelistTemplateList?: string;
  /**
   * @remarks
   * The zone ID of the primary node.
   * 
   * - If you specify a VPC and a vSwitch, you must specify the zone ID of the target vSwitch. Otherwise, the instance cannot be created.
   * - For a high-availability series instance, you must also specify **ZoneIdSlave1** to determine whether the instance uses a single-zone deployment or a multi-zone deployment.
   * - For an RDS Enterprise Edition instance, you must also specify **ZoneIdSlave1** and **ZoneIdSlave2** to determine whether the instance uses a single-zone deployment or a multi-zone deployment.
   * - For an ApsaraDB RDS for MySQL Cluster Edition instance, you must also specify **ZoneIdSlave1** for a two-node instance, and **ZoneIdSlave1** and **ZoneIdSlave2** for a three-node instance.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone ID of the secondary node.
   * 
   * - If you set this parameter to **Auto**, the instance uses a multi-zone deployment, and the system automatically selects a zone for the secondary node.
   * - If you set this parameter to the same value as **ZoneId**, the instance uses a single-zone deployment.
   * - If you set this parameter to a value different from **ZoneId**, the instance uses a multi-zone deployment.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * The zone ID of the second secondary node. ApsaraDB RDS for MySQL Cluster Edition instances support the creation of one or two secondary nodes when you create the instance. If you want to create a second secondary node, you can use this parameter to specify the zone of the second secondary node.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneIdSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoCreateProxy: 'AutoCreateProxy',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
      autoUseCoupon: 'AutoUseCoupon',
      babelfishConfig: 'BabelfishConfig',
      bpeEnabled: 'BpeEnabled',
      burstingEnabled: 'BurstingEnabled',
      businessInfo: 'BusinessInfo',
      category: 'Category',
      clientToken: 'ClientToken',
      coldDataEnabled: 'ColdDataEnabled',
      connectionMode: 'ConnectionMode',
      connectionString: 'ConnectionString',
      createStrategy: 'CreateStrategy',
      customExtraInfo: 'CustomExtraInfo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBIsIgnoreCase: 'DBIsIgnoreCase',
      DBParamGroupId: 'DBParamGroupId',
      DBTimeZone: 'DBTimeZone',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      deletionProtection: 'DeletionProtection',
      dryRun: 'DryRun',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      externalReplication: 'ExternalReplication',
      instanceNetworkType: 'InstanceNetworkType',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      optimizedWrites: 'OptimizedWrites',
      payType: 'PayType',
      period: 'Period',
      port: 'Port',
      privateIpAddress: 'PrivateIpAddress',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      roleARN: 'RoleARN',
      securityIPList: 'SecurityIPList',
      serverlessConfigShrink: 'ServerlessConfig',
      storageAutoScale: 'StorageAutoScale',
      storageThreshold: 'StorageThreshold',
      storageUpperBound: 'StorageUpperBound',
      systemDBCharset: 'SystemDBCharset',
      tag: 'Tag',
      targetDedicatedHostIdForLog: 'TargetDedicatedHostIdForLog',
      targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
      targetDedicatedHostIdForSlave: 'TargetDedicatedHostIdForSlave',
      targetMinorVersion: 'TargetMinorVersion',
      usedTime: 'UsedTime',
      userBackupId: 'UserBackupId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
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
      autoUpgradeMinorVersion: 'string',
      autoUseCoupon: 'boolean',
      babelfishConfig: 'string',
      bpeEnabled: 'string',
      burstingEnabled: 'boolean',
      businessInfo: 'string',
      category: 'string',
      clientToken: 'string',
      coldDataEnabled: 'boolean',
      connectionMode: 'string',
      connectionString: 'string',
      createStrategy: 'string',
      customExtraInfo: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceNetType: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      DBIsIgnoreCase: 'string',
      DBParamGroupId: 'string',
      DBTimeZone: 'string',
      dedicatedHostGroupId: 'string',
      deletionProtection: 'boolean',
      dryRun: 'boolean',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      externalReplication: 'boolean',
      instanceNetworkType: 'string',
      ioAccelerationEnabled: 'string',
      optimizedWrites: 'string',
      payType: 'string',
      period: 'string',
      port: 'string',
      privateIpAddress: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      roleARN: 'string',
      securityIPList: 'string',
      serverlessConfigShrink: 'string',
      storageAutoScale: 'string',
      storageThreshold: 'number',
      storageUpperBound: 'number',
      systemDBCharset: 'string',
      tag: { 'type': 'array', 'itemType': CreateDBInstanceShrinkRequestTag },
      targetDedicatedHostIdForLog: 'string',
      targetDedicatedHostIdForMaster: 'string',
      targetDedicatedHostIdForSlave: 'string',
      targetMinorVersion: 'string',
      usedTime: 'string',
      userBackupId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      whitelistTemplateList: 'string',
      zoneId: 'string',
      zoneIdSlave1: 'string',
      zoneIdSlave2: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

