// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable intelligent pause and resume for the serverless instance. Valid values:
   * * **true**: enabled.
   * * **false**: disabled (default).
   * 
   * > This parameter applies only to MySQL and PostgreSQL serverless instances. If no connections are established within 10 minutes, the instance enters the paused state and automatically resumes when a connection is initiated.
   * 
   * @example
   * true
   */
  autoPause?: boolean;
  /**
   * @remarks
   * The maximum RCU (RDS Capacity Unit) value for automatic scaling of the instance. Valid values:
   * 
   * - MySQL: **1 to 32**
   * - SQL Server: **2 to 16**
   * - PostgreSQL: **1 to 14**
   * 
   * >The value of this parameter must be greater than or equal to **MinCapacity** and must be an **integer**.
   * 
   * @example
   * 8
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The minimum RCU value for automatic scaling of the instance. Valid values:
   * 
   * - MySQL: **0.5 to 32**
   * - SQL Server: **2 to 16** (integers only)
   * - PostgreSQL: **0.5 to 14**
   * 
   * >The value of this parameter must be less than or equal to **MaxCapacity**.
   * 
   * @example
   * 0.5
   */
  minCapacity?: number;
  /**
   * @remarks
   * Specifies whether to enable forced elastic scaling for the serverless instance. Valid values:
   * * **true**: enabled.
   * * **false**: disabled (default).
   * 
   * > * This parameter applies only to MySQL and PostgreSQL serverless instances. After you enable this parameter, forced scaling causes 30 to 120 seconds of service unavailability. Use this parameter with caution based on your actual situation.
   * > * RCU elastic scaling usually takes effect immediately. However, in certain special situations (such as during a large transaction), scaling cannot complete immediately. In such cases, you can enable this parameter to force scaling.
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

export class CreateDBInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Specifying this parameter binds a tag to the instance.
   * 
   * * If the specified tag key already exists, the tag is directly bound to the instance. You can call ListTagResources to query existing tags.
   * * If the specified tag key does not exist, the tag key is created and then bound to the instance.
   * * Empty strings are not allowed.
   * * This parameter must be used together with **Tag.Value**.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value corresponding to the tag key. Specifying this parameter binds a tag to the instance.
   * 
   * * If the specified tag value already exists under the corresponding tag key, the tag value is directly bound to the instance. You can call ListTagResources to query existing tags.
   * * If the specified tag value does not exist under the corresponding tag key, the tag value is created and then bound to the instance.
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

export class CreateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances to create. This parameter applies only to batch creation of ApsaraDB RDS for MySQL instances.
   * 
   * Valid values: **1** to **20**. Default value: **1**.
   * 
   * > - When creating multiple ApsaraDB RDS for MySQL instances, consider using **Tag.Key** and **Tag.Value** to tag all instances in the same batch, so that you can manage them by tag after creation.
   * > - After multiple ApsaraDB RDS for MySQL instances are created, the operation returns only **TaskId**, **RequestId**, and **Message**. Other details are not returned. To query the details of individual instances, call DescribeDBInstanceAttribute.
   * > - If **engine** is not set to **MySQL** and this parameter is set to a value greater than **1**, the operation fails and returns the error code `InvalidParam.Engine`.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to automatically create a proxy. Valid values:
   * 
   * - **true**: enables automatic automatic creation. The default proxy type is general-purpose.
   * 
   * - **false**: disables automatic automatic creation.
   * 
   * @example
   * false
   */
  autoCreateProxy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: enables automatic payment. Make sure that your account balance is sufficient.
   * - **false**: generates an order without deducting fees.
   * 
   * 
   * 
   * 
   * > The default value is true. If your payment method has insufficient balance, set AutoPay to false. This generates an unpaid order, which you can pay for in the ApsaraDB RDS console.
   * >
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. This parameter is valid only for subscription instances. Valid values:
   * - **true**
   * - **false**
   * 
   * > - If you purchase the instance on a monthly basis, the auto-renewal cycle is one month.
   * > - If you purchase the instance on a yearly basis, the auto-renewal cycle is one year.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * * **true**: uses a coupon.
   * * **false** (default): does not use a coupon.
   * 
   * > If you use a coupon and then perform a downgrade, the amount offset by the coupon is not refunded.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The Babelfish configuration for ApsaraDB RDS for PostgreSQL instances.
   * 
   * Configuration format: {"babelfishEnabled":"true","migrationMode":"xxxxxxx","masterUsername":"xxxxxxx","masterUserPassword":"xxxxxxxx"}
   * 
   * The parameters are described as follows:
   * - **babelfishEnabled**: specifies whether to enable Babelfish. Set to **true** to enable. Babelfish is disabled by default if this parameter is not configured.
   * - **migrationMode**: the database mode. Set to **single-db** for single-database mode or **multi-db** for multi-database mode.
   * - **masterUsername**: the initial administrator account name. The name can contain lowercase letters, digits, and underscores (_), must start with a letter, must end with a letter or digit, can be up to 63 characters in length, and cannot start with pg.
   * - **masterUserPassword**: the password of the administrator account. The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The password must be 8 to 32 characters in length. Special characters include `! @ # $ % ^ & * () _ + - =`.
   * 
   * > This parameter applies only to ApsaraDB RDS for PostgreSQL instances. For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see [Introduction to Babelfish](https://help.aliyun.com/document_detail/428613.html).
   * 
   * @example
   * {"babelfishEnabled":"true","migrationMode":"single-db","masterUsername":"babelfish_user","masterUserPassword":"Babelfish123!"}
   */
  babelfishConfig?: string;
  bpeEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the I/O performance burst feature for premium performance disks (cloud disks). Valid values:
   * * **true**: enabled.
   * * **false**: disabled.
   * > For more information about the I/O performance burst feature for premium performance disks, see [What is a premium performance disk](https://help.aliyun.com/document_detail/2340501.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The business extension parameter.
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
   *     * **HighAvailability**: High-availability Edition.
   *     * **cluster**: MySQL or PostgreSQL Cluster Edition.
   *     * **AlwaysOn**: SQL Server Cluster Edition.
   *     * **Finance**: RDS Enterprise Edition.
   *     > This parameter is required when you create a SQL Server Enterprise Cluster Edition<props="china">, Basic Edition Standard Edition, or Basic Edition Enterprise Edition instance. For example, to create a Basic Edition 2022 Enterprise Cluster Edition (2022_ent) instance, set this parameter to Basic.
   * * Serverless instances
   *     * **serverless_basic**: Serverless Basic Edition. (Applicable to MySQL and PostgreSQL only.)
   *     * **serverless_standard**: Serverless High-availability Edition. (Applicable to MySQL and PostgreSQL only.)
   *     * **serverless_ha**: SQL Server Serverless High-availability Edition.
   * 
   *     > This parameter is required when PayType is set to Serverless.
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. The token is generated by the client and must be unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the [cold data archiving](https://help.aliyun.com/document_detail/2701832.html) feature for premium performance disks (cloud disks). Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
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
   * > SQL Server 2012, 2016, and 2017 support only standard access mode.
   * 
   * @example
   * Standard
   */
  connectionMode?: string;
  /**
   * @remarks
   * The internal endpoint of the database.
   * 
   * The endpoint format is `xxx.mysql.rds.aliyuncs.com`, where `xxx` is the prefix of the instance ID, such as rm-uf6wjk5***.
   * 
   * @example
   * rm-uf6wjk5****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The batch instance creation strategy. This parameter takes effect only when **Amount** is greater than 1. Valid values:
   * * **Atomicity** (default): atomic. All instances in the same batch must be created successfully. If any instance fails to be created, all instances in the batch fail.
   * * **Partial**: non-atomic. The creation of each instance is independent of other instances in the same batch.
   * 
   * @example
   * Atomicity
   */
  createStrategy?: string;
  customExtraInfo?: string;
  /**
   * @remarks
   * The instance type. You can specify a standard or YiTian instance type. For details, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * To create a serverless instance, use one of the following values:
   * 
   * - MySQL Basic Edition: **mysql.n2.serverless.1c**
   * - MySQL High-availability Edition: **mysql.n2.serverless.2c**
   * - SQL Server: **mssql.mem2.serverless.s2**
   * - PostgreSQL Basic Edition: **pg.n2.serverless.1c**
   * - PostgreSQL High-availability Edition: **pg.n2.serverless.2c**
   * 
   * This parameter is required.
   * 
   * @example
   * mysql.n2.medium.2c
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 255 characters in length. It must start with a Chinese character or an English letter, and can contain digits, Chinese characters, English letters, and hyphens (-).
   * >The name cannot start with http:// or https://.
   * 
   * @example
   * testInstance
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The network connectivity type of the instance. Set this parameter to **Intranet**, which indicates an internal network connection.
   * 
   * This parameter is required.
   * 
   * @example
   * Intranet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The instance storage capacity. Unit: GB. The value increments in steps of 5 GB. For the valid values, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
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
   * * **local_ssd**: instance with Premium Local SSDs (recommended).
   * * **general_essd**: premium performance disk (recommended).
   * * **cloud_essd**: PL1 ESSD.
   * * **cloud_essd2**: PL2 ESSD.
   * * **cloud_essd3**: PL3 ESSD.
   * * **cloud_ssd**: standard SSD (not recommended. No longer available in some regions).
   * 
   * The default value of this parameter is automatically determined based on the instance type specified in **DBInstanceClass**:
   * * If the instance type is an instance with Premium Local SSDs, the default value is **local_ssd**.
   * * If the instance type is a cloud disk type, the default value is **cloud_essd**.
   * 
   * > Serverless instances support only PL1 ESSDs and premium performance disks.
   * 
   * @example
   * general_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * Specifies whether table names are case-insensitive. Valid values:
   * * **true**: case-insensitive (default).
   * * **false**: case-sensitive.
   * 
   * @example
   * true
   */
  DBIsIgnoreCase?: string;
  /**
   * @remarks
   * The parameter template ID. You can call DescribeParameterGroups to query the ID.
   * > This parameter is supported only for MySQL and PostgreSQL instances. If you do not specify this parameter, the system default parameter template is used. You can also create a custom parameter template and specify it here.
   * 
   * @example
   * rpg-sys-****
   */
  DBParamGroupId?: string;
  /**
   * @remarks
   * The time zone of the instance. This parameter takes effect only when **Engine** is set to **MySQL** or **PostgreSQL**.
   * 
   * - When **Engine** is **MySQL**:
   *     - This parameter configures the UTC time zone. Valid values: **-12:59** to **+13:00**.
   *     - Instances with Premium Local SSDs support named time zones, such as Asia/Hong_Kong. For more information about named time zones, see [Named time zone reference](https://help.aliyun.com/document_detail/297356.html).
   * - When **Engine** is **PostgreSQL**:
   *     - This parameter configures a named time zone. UTC time zones are not supported. For more information about named time zones, see [Named time zone reference](https://help.aliyun.com/document_detail/297356.html).
   *     - This parameter can be configured only for PostgreSQL instances with cloud disks.
   * 
   * > - You can configure the time zone when creating a primary instance. Read-only instances do not support custom time zones and inherit the time zone of the primary instance.
   * > - If you do not specify this parameter, the system selects a default time zone based on the region where you purchase the instance.
   * 
   * @example
   * +08:00
   */
  DBTimeZone?: string;
  /**
   * @remarks
   * The ID of the dedicated host group.
   * 
   * This parameter is required when you create an ApsaraDB RDS instance in a dedicated cluster.
   * 
   * - You can call DescribeDedicatedHostGroups to query the host group information.
   * - If you have not created a host group, call CreateDedicatedHostGroup to create one.
   * 
   * @example
   * dhg-4n****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the release protection feature for the RDS instance. This parameter is supported only for pay-as-you-go instances. Valid values:
   * * **true**: enables release protection.
   * * **false**: disables release protection (default).
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this instance creation operation. Valid values:
   * * **true**: performs a dry run without creating the instance. The dry run checks the request parameters, request format, business limits, and resource availability.
   * * **false**: sends a normal request and creates the instance directly after the check passes (default).
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the cloud disk encryption key in the same region. Specifying this parameter enables cloud disk encryption (which cannot be disabled after it is enabled) and requires you to also specify **RoleARN**.
   * 
   * You can view the key ID in the Key Management Service console or create a new key. For more information, see [Create a key](https://help.aliyun.com/document_detail/181610.html).
   * 
   * > - For ApsaraDB RDS for MySQL, ApsaraDB RDS for PostgreSQL, and ApsaraDB RDS for SQL Server instances, you can omit this parameter and specify only **RoleARN** to create a cloud disk-encrypted instance using a service key.
   * > - To allow RAM users to create instances only when cloud disk encryption is enabled, configure the following RAM authorization policy. If cloud disk encryption is not enabled, the RAM user cannot create instances:
   * `{"Version":"1","Statement":[{"Effect":"Deny","Action":"rds:CreateDBInstance","Resource":"*","Condition":{"StringEquals":{"rds:DiskEncryptionRequired":"false"}}}]}`
   * >Warning: This configuration also affects the CreateOrder operation that is called when you create an instance in the console.
   * 
   * @example
   * 0d24*****-da7b-4786-b981-9a164dxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine type. Valid values:
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
   *     * MySQL: **5.5**, **5.6**, **5.7**, **8.0**
   *     * SQL Server: **08r2_ent_ha** (cloud disk, discontinued), **2008r2** (Premium Local SSD, discontinued), **2012** (Enterprise Edition single-node), **2012_ent_ha**, **2012_std_ha**, **2012_web**, **2014_ent_ha**, **2014_std_ha**, **2016_ent_ha**, **2016_std_ha**, **2016_web**, **2017_ent**, **2017_std_ha**, **2017_web**, **2019_ent**, **2019_std_ha**, **2019_web**, **2022_ent**, **2022_std_ha**, **2022_web**, **2025_ent**, **2025_std**
   *     * PostgreSQL: **10.0**, **11.0**, **12.0**, **13.0**, **14.0**, **15.0**, **16.0**, **17.0**, **18.0**
   *     * MariaDB: **10.3**, **10.6**
   * * Serverless instances
   *     * MySQL: **5.7**, **8.0**
   *     * SQL Server: **2016_std_sl**, **2017_std_sl**, **2019_std_sl**
   *     * PostgreSQL: **14.0**, **15.0**, **16.0**, **17.0**, **18.0**
   * 
   * > - MariaDB does not support serverless instances.
   * > - In SQL Server instance versions, `_ent` indicates Enterprise Cluster Edition, `_ent_ha` indicates Enterprise Edition, `_std_ha` indicates Standard Edition, and `_web` indicates Web Edition.
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
   * Specifies whether to enable [ApsaraDB RDS for MySQL native replication](https://help.aliyun.com/document_detail/2856526.html). Valid values:
   * - **ON**: enabled.
   * - **OFF**: disabled.
   * 
   * @example
   * ON
   */
  externalReplication?: boolean;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * * **VPC**: virtual private cloud.
   * * **Classic**: classic network.
   * 
   * > * ApsaraDB RDS for MySQL cloud disk instances support only VPCs. Set this parameter to **VPC**.
   * > * ApsaraDB RDS for PostgreSQL and MariaDB instances support only VPCs. Set this parameter to **VPC**.
   * > * ApsaraDB RDS for SQL Server Basic Edition and Web Edition instances support both classic networks and VPCs. All other instances support only VPCs. Set this parameter to **VPC**.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * Specifies whether to enable the [Buffer Pool Extension (BPE)](https://help.aliyun.com/document_detail/2527067.html) feature for premium performance disks (cloud disks). Valid values:
   * 
   *  - **1**: enabled.
   *  - **0**: disabled.
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the [16KB atomic write](https://help.aliyun.com/document_detail/2858761.html) feature. Valid values:
   * 
   * - **optimized**: enabled.
   * - **none** (default): disabled.
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
   * - **Serverless**: serverless billing method. MariaDB instances do not support this billing method. For more information, see [Overview of MySQL Serverless instances](https://help.aliyun.com/document_detail/411291.html), [Overview of SQL Server Serverless instances](https://help.aliyun.com/document_detail/604344.html), and [Overview of PostgreSQL Serverless instances](https://help.aliyun.com/document_detail/607742.html).
   * >The system automatically generates and pays for the order. No manual payment confirmation is required.
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type of the prepaid instance. Valid values:
   * * **Year**: subscription on a yearly basis.
   * * **Month**: subscription on a monthly basis.
   * 
   * > This parameter is required if the billing method is **Prepaid**.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The port to initialize when creating the ApsaraDB RDS instance. Valid values:
   * - MySQL: 1000 to 65534
   * - PostgreSQL, SQL Server, MariaDB: 1000 to 5999
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * Settings for the internal network IP address of the instance. The IP address must be within the address range of the specified vSwitch. By default, the system automatically allocates an IP address based on **VPCId** and **vSwitchId**.
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
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) to query the region ID.
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
   * The global resource descriptor (ARN) that grants the RDS service account authorization to access KMS on behalf of the primary account. You can call CheckCloudResourceAuthorized to query the ARN information.
   * >Notice: You must specify **RoleARN** when you enable cloud disk encryption.
   * 
   * @example
   * acs:ram::1406****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The [IP whitelist](https://help.aliyun.com/document_detail/43185.html) of the instance. Separate multiple entries with commas (,). Duplicate entries are not allowed. You can add up to 1,000 IP addresses or CIDR blocks to a single instance. The following formats are supported:
   * * IP address format, for example: 10.10.XX.XX.
   * * CIDR block format, for example: 10.10.XX.XX/24 (classless inter-domain routing, where 24 indicates the length of the prefix in the address, ranging from 1 to 32).
   * 
   * This parameter is required.
   * 
   * @example
   * 10.10.XX.XX/24
   */
  securityIPList?: string;
  /**
   * @remarks
   * The settings for the serverless ApsaraDB RDS instance. This parameter is required when you create a serverless instance.
   * >MariaDB does not support serverless instances.
   */
  serverlessConfig?: CreateDBInstanceRequestServerlessConfig;
  /**
   * @remarks
   * Specifies whether to enable automatic storage expansion. This parameter is supported only for MySQL and PostgreSQL instances. Valid values:
   * * **Enable**: enables automatic storage expansion.
   * * **Disable**: disables automatic storage expansion (default).
   * 
   * >You can also call ModifyDasInstanceConfig after the instance is created to adjust this setting. For more information, see [Configure automatic storage expansion](https://help.aliyun.com/document_detail/173826.html).
   * 
   * @example
   * Disable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The threshold (percentage) that triggers automatic storage expansion. Valid values:
   * * **10**
   * * **20**
   * * **30**
   * * **40**
   * * **50**
   * 
   * >This parameter is required when **StorageAutoScale** is set to **Enable**.
   * 
   * @example
   * 50
   */
  storageThreshold?: number;
  /**
   * @remarks
   * The maximum total storage capacity allowed for automatic storage expansion. Automatic storage expansion does not cause the total storage capacity of the instance to exceed this value. Unit: GB.
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
   * This parameter is deprecated. You do not need to configure it.
   * 
   * @example
   * gbk
   */
  systemDBCharset?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateDBInstanceRequestTag[];
  /**
   * @remarks
   * The host ID of the logger instance in the dedicated cluster.
   * 
   * This parameter is required when you create an ApsaraDB RDS Enterprise Edition instance in a dedicated cluster. If you do not specify this parameter, the system automatically assigns a host.
   * 
   * - You can call DescribeDedicatedHosts to query the host information in the dedicated cluster.
   * - If you have not added a host, call CreateDedicatedHost to add one.
   * 
   * @example
   * i-bp****
   */
  targetDedicatedHostIdForLog?: string;
  /**
   * @remarks
   * The host ID of the primary instance in the dedicated cluster.
   * 
   * This parameter is required when you create an ApsaraDB RDS instance in a dedicated cluster. If you do not specify this parameter, the system automatically assigns a host.
   * 
   * - You can call DescribeDedicatedHosts to query the host information in the host group.
   * - If you have not added a host, call CreateDedicatedHost to add one.
   * 
   * @example
   * i-bp****
   */
  targetDedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * The host ID of the secondary instance in the dedicated cluster.
   * 
   * This parameter is required when you create an ApsaraDB RDS High-availability Edition or RDS Enterprise Edition instance in a dedicated cluster. If you do not specify this parameter, the system automatically allocates a host by default.
   * 
   * - You can call DescribeDedicatedHosts to query the host information in the dedicated cluster.
   * - If you have not added a host, call CreateDedicatedHost to add one.
   * 
   * @example
   * i-bp****
   */
  targetDedicatedHostIdForSlave?: string;
  /**
   * @remarks
   * The minor engine version of the RDS instance to create. This parameter is required only when you create a MySQL or PostgreSQL instance.
   * Format:
   * * MySQL: `<instance version>_<numeric version number>`. For example, `rds_20200229`, `xcluster_20200229`, or `xcluster80_20200229`. The prefixes are described as follows:
   *     * rds: high availability series or Basic Edition.
   *     * xcluster: MySQL 5.7 RDS Enterprise Edition.
   *     * xcluster80: MySQL 8.0 RDS Enterprise Edition.
   * 
   *     > You can call DescribeDBMiniEngineVersions to query the numeric version number. For differences between versions, see [AliSQL minor version release notes](https://help.aliyun.com/document_detail/96060.html).
   * * PostgreSQL: `rds_postgres_<major version>00_<minor version number>`. For example, `rds_postgres_1400_20220830`. The fields are described as follows:
   *     * 1400: PostgreSQL major version 14.
   *     * 20220830: AliPG minor engine version. You can call DescribeDBMiniEngineVersions to query the minor version number. For differences between versions, see [PostgreSQL minor version release notes](https://help.aliyun.com/document_detail/126002.html).
   * 
   *     > If Babelfish is enabled in **BabelfishConfig**, the minor version format for ApsaraDB RDS for PostgreSQL instances is: `rds_postgres_<major version>00_<AliPG minor version>_babelfish`.
   * 
   * @example
   * rds_20200229
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * If **Period** is set to **Year**, **UsedTime** can be set to **1 to 5**.
   * * If **Period** is set to **Month**, **UsedTime** can be set to **1 to 11**.
   * 
   * > This parameter is required if the billing method is **Prepaid**.
   * 
   * @example
   * 2
   */
  usedTime?: string;
  /**
   * @remarks
   * The user backup ID. You can call ListUserBackupFiles to query the ID. Specifying this parameter creates an instance from a user backup.
   * 
   * The following restrictions apply when you specify this parameter:
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
   * >This parameter takes effect only when **InstanceNetworkType** is set to **VPC**, which indicates the network type is VPC.
   * 
   * @example
   * vpc-****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * - **Zone correspondence**: The zone of the vSwitch must correspond to the zone of the primary node (ZoneId) and the zone of the secondary node (ZoneIdSlave1). If you specify two vSwitch IDs, their order must match the order of ZoneId and ZoneSlaveId1.
   * - **Network type requirement**: **InstanceNetworkType** must be set to **VPC**.
   * - **Multiple vSwitch requirement**: If you specify **ZoneSlaveId1** (the zone ID of the secondary node) and it is not set to **Auto**, you must specify two vSwitch IDs separated by a comma (,).
   * - **Character restriction**: VSwitchId cannot contain special characters such as spaces, `!`, `#`, `￥`, `&`, or `%`.
   * 
   * @example
   * vsw-****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The whitelist. If you need to configure multiple IP addresses, separate them with commas (,) without spaces before or after the commas. Example: `192.168.0.1,172.16.213.9`.
   * 
   * @example
   * 192.168.0.1,172.16.213.9
   */
  whitelistTemplateList?: string;
  /**
   * @remarks
   * The zone ID of the primary node.
   * 
   * - If you specify a VPC and a vSwitch, you must set this parameter to the zone ID of the vSwitch. Otherwise, the instance cannot be created.
   * - For high availability series instances, you must also specify **ZoneIdSlave1** to determine whether the instance uses single-zone or multi-zone deployment.
   * - For RDS Enterprise Edition instances, you must also specify **ZoneIdSlave1** and **ZoneIdSlave2** to determine whether the instance uses single-zone or multi-zone deployment.
   * - For RDS Cluster Edition instances, two-node clusters require **ZoneIdSlave1**, and three-node clusters require both **ZoneIdSlave1** and **ZoneIdSlave2**.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone ID of the secondary node.
   * 
   * - If you set this parameter to **Auto**, the instance uses multi-zone deployment and the system automatically selects a zone for the secondary node.
   * - If this parameter is the same as **ZoneId**, the instance uses single-zone deployment.
   * - If this parameter is different from **ZoneId**, the instance uses multi-zone deployment.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * The zone ID of the second secondary node. ApsaraDB RDS for MySQL Cluster Edition instances support creating one or two secondary nodes when you create the instance. If you need this, use this parameter to specify the zone of the second secondary node.
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
      serverlessConfig: 'ServerlessConfig',
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
      serverlessConfig: CreateDBInstanceRequestServerlessConfig,
      storageAutoScale: 'string',
      storageThreshold: 'number',
      storageUpperBound: 'number',
      systemDBCharset: 'string',
      tag: { 'type': 'array', 'itemType': CreateDBInstanceRequestTag },
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

