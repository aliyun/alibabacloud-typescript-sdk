// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDBInstanceShrinkRequestTag } from "./CreateDbinstanceShrinkRequestTag";


export class CreateDBInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of ApsaraDB RDS for MySQL instances that you want to create. The parameter takes effect only when you create multiple ApsaraDB RDS for MySQL instances at a time by using a single request.
   * 
   * Valid values: **1** to **20**. Default value: **1**.
   * 
   * > *   If you want to create multiple ApsaraDB RDS for MySQL instances at a time by using a single request, you can add tags to all the instances by using the **Tag.Key** parameter and the **Tag.Value** parameter. After the instances are created, you can manage the instances based on the tags.
   * > *   After you submit a request to create multiple ApsaraDB RDS for MySQL instances, this operation returns **TaskId**, **RequestId**, and **Message**. You can call the DescribeDBInstanceAttribute operation to query the information about an instance.
   * > *   If the value of the **Engine** parameter is not **MySQL** and the value of the Amount parameter is greater than **1**, this operation fails and returns an error code `InvalidParam.Engine`.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to automatically create a database proxy. Valid values:
   * 
   * *   **true**: automatically creates a database proxy. By default, a general-purpose database proxy is created.
   * *   **false**: does not automatically create a database proxy.
   * 
   * @example
   * false
   */
  autoCreateProxy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the automatic payment feature. Valid values:
   * 
   * *   **true**: enables the feature. Make sure that your account balance is sufficient.
   * *   **false**: disables the feature. An unpaid order is generated.
   * 
   * >  Default value: true. If your account balance is insufficient, you can set the AutoPay parameter to false to generate an unpaid order. Then, you can log on to the ApsaraDB RDS console to complete the payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. You must specify this parameter only if the instance uses the subscription billing method. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > *   The auto-renewal cycle is one month for a monthly subscription.
   * > *   The auto-renewal cycle is one year for a yearly subscription.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Default value: false. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If you downgrade the specifications of an instance after you use coupons, the used coupons cannot be refunded.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The configuration of the Babelfish feature for the instance that runs PostgreSQL.
   * 
   * Format:{"babelfishEnabled":"true","migrationMode":"xxxxxxx","masterUsername":"xxxxxxx","masterUserPassword":"xxxxxxxx"}
   * 
   * The following list describes the fields in the format:
   * 
   * *   **babelfishEnabled**: specifies whether to enable Babelfish for the instance. If you set this field to **true**, you enable Babelfish for the instance. If you leave this parameter empty, Babelfish is disabled for the instance.
   * *   **migrationMode**: The migration mode of the instance. Valid values: **single-db** and **multi-db**.
   * *   **masterUsername**: The username of the administrator account. The username can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit. It can be up to 63 characters in length and cannot start with pg.
   * *   **masterUserPassword**: The password of the administrator account. The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. It must be 8 to 32 characters in length. The password can contain any of the following characters: `! @ # $ % ^ & * ( ) _ + - =`.
   * 
   * > This parameter applies only to ApsaraDB RDS for PostgreSQL instances. For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see [Introduction to Babelfish](https://help.aliyun.com/document_detail/428613.html).
   * 
   * @example
   * {"babelfishEnabled":"true","migrationMode":"single-db","masterUsername":"babelfish_user","masterUserPassword":"Babelfish123!"}
   */
  babelfishConfig?: string;
  /**
   * @remarks
   * A deprecated parameter. You do not need to specify this parameter.
   * 
   * @example
   * false
   */
  bpeEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the I/O burst feature of general ESSDs. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  For more information about the I/O burst feature of general ESSDs, see [What are general ESSDs?](https://help.aliyun.com/document_detail/2340501.html)
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The additional business information about the instance.
   * 
   * @example
   * 121436975448952
   */
  businessInfo?: string;
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   Regular RDS instance
   * 
   *     *   **Basic**: RDS Basic Edition
   *     *   **HighAvailability**: RDS High-availability Edition
   *     *   **cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL or PostgreSQL
   *     *   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server
   *     *   **Finance**: RDS Basic Edition for serverless instances
   * 
   * *   Serverless RDS instance
   * 
   *     *   **serverless_basic**: RDS Basic Edition for serverless instances. This edition is available only for instances that run MySQL and PostgreSQL.
   *     *   **serverless_standard**: RDS High-availability Edition for serverless instances. This edition is available only for instances that run MySQL and PostgreSQL.
   *     *   **serverless_ha**: RDS High-availability Edition for serverless instances. This edition is available only for instances that run SQL Server.
   * 
   *     **
   * 
   *     **Note** This parameter is required if PayType is set to Serverless.
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz*****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the data archiving feature of general ESSDs. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  For more information about the data archiving feature of general ESSDs, see [Use the data archiving feature of general ESSDs](https://help.aliyun.com/document_detail/2701832.html).
   * 
   * @example
   * false
   */
  coldDataEnabled?: boolean;
  /**
   * @remarks
   * The connection mode of the instance. Valid values:
   * 
   * *   **Standard**: standard mode
   * *   **Safe**: database proxy mode
   * 
   * ApsaraDB RDS automatically assigns a connection mode to the instance.
   * 
   * > SQL Server 2012, SQL Server 2016, and SQL Server 2017 support only the standard mode.
   * 
   * @example
   * Standard
   */
  connectionMode?: string;
  /**
   * @remarks
   * The internal endpoint that is used to connect to the instance.
   * 
   * @example
   * rm-uf6wjk5*****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The policy based on which multiple instances are created. The parameter takes effect only when the value of the **Amount** parameter is greater than 1. Valid values:
   * 
   * *   **Atomicity** (default): atomicity. The instances are all created together. If one instance cannot be created, none of the instances are created.
   * *   **Partial**: non-atomicity. Each instance is independently created. The failure in creating an instance does not affect the creation of the other instances.
   * 
   * @example
   * Atomicity
   */
  createStrategy?: string;
  /**
   * @remarks
   * The instance type of the instance. You can specify an instance type of the standard or YiTian product type. For more information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * To create a serverless instance, set this parameter to one of the following values:
   * 
   * *   If you want to create a serverless instance that runs MySQL on RDS Basic Edition, set this parameter to **mysql.n2.serverless.1c**.
   * *   If you want to create a serverless instance that runs MySQL on RDS High-availability Edition, set this parameter to **mysql.n2.serverless.2c**.
   * *   If you want to create a serverless instance that runs SQL Server, set this parameter to **mssql.mem2.serverless.s2**.
   * *   If you want to create a serverless instance that runs PostgreSQL on RDS Basic Edition, set this parameter to **pg.n2.serverless.1c**.
   * *   If you want to create a serverless instance that runs PostgreSQL on RDS High-availability Edition, set this parameter to **pg.n2.serverless.2c**.
   * 
   * This parameter is required.
   * 
   * @example
   * rds.mysql.s1.small
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 255 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * > The name cannot start with http:// or https://.
   * 
   * @example
   * Test database
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The network connection type of the instance. The value of this parameter is fixed as **Intranet**, indicating an internal network connection.
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB. The storage capacity increases in increments of 5 GB. For more information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **local_ssd**: local SSD. This is the recommended storage type.
   * *   **general_essd**: general Enterprise SSD (ESSD). This is the recommended storage type.
   * *   **cloud_essd**: PL1 ESSD
   * *   **cloud_essd2**: PL2 ESSD
   * *   **cloud_essd3**: PL3 ESSD
   * *   **cloud_ssd**: standard SSD. This storage type is not recommended. Standard SSDs are no longer available for purchase in some Alibaba Cloud regions.
   * 
   * The default value of this parameter is determined by the instance type specified by the **DBInstanceClass** parameter.
   * 
   * *   If the instance type specifies the local SSD storage type, the default value of this parameter is **local_ssd**.
   * *   If the instance type specifies the standard SSD or ESSD storage type, the default value of this parameter is **cloud_essd**.
   * 
   * >  Serverless instances support only PL1 ESSDs and general ESSDs.
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * Specifies whether the table name is case-sensitive. Valid values:
   * 
   * *   **true**: Table names are not case-sensitive. This is the default value.
   * *   **false**: Table names are case-sensitive.
   * 
   * @example
   * true
   */
  DBIsIgnoreCase?: string;
  /**
   * @remarks
   * The parameter template ID. You can call the DescribeParameterGroups operation to query the parameter template ID.
   * 
   * >  This parameter is available if you want to create an instance that runs MySQL or PostgreSQL. If you do not configure this parameter, the default parameter template is used. If you want to use a custom parameter template, you can customize a parameter template and set this parameter to the ID of the custom template.
   * 
   * @example
   * rpg-sys-*****
   */
  DBParamGroupId?: string;
  /**
   * @remarks
   * The time zone of the instance. This parameter takes effect only when you set the **Engine** parameter to **MySQL** or **PostgreSQL**.
   * 
   * *   If you set **Engine** to **MySQL**:
   * 
   *     *   The time zone of the instance is in UTC. Valid values: **-12:59** to **+13:00**.
   *     *   If the instance uses local SSDs, you can specify the name of the time zone. Example: Asia/Hong_Kong. For more information, see [Time zones](https://help.aliyun.com/document_detail/297356.html).
   * 
   * *   If you set **Engine** to **PostgreSQL**:
   * 
   *     *   The time zone of the instance is not in UTC. For more information, see [Time zones](https://help.aliyun.com/document_detail/297356.html).
   *     *   You can specify this parameter only when the instance runs PostgreSQL with standard SSDs or ESSDs.
   * 
   * > *   You can specify the time zone when you create a primary instance. You cannot specify the time zone when you create a read-only instance. Read-only instances inherit the time zone of their primary instance.
   * > *   If you do not specify this parameter, the system automatically assigns the default time zone of the region in which the instance resides.
   * 
   * @example
   * +08:00
   */
  DBTimeZone?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster to which the instance belongs.
   * 
   * If you create the instance in a dedicated cluster, you must specify this parameter.
   * 
   * *   You can call the DescribeDedicatedHostGroups operation to query the information about the dedicated cluster.
   * *   If no dedicated clusters are created, you can call the CreateDedicatedHostGroup operation to create a dedicated cluster.
   * 
   * @example
   * dhg-4n*****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the release protection feature for the instance. This feature is available only for pay-as-you-go instances. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run but does not create the instance. The system checks items such as the request parameters, request format, service limits, and available resources.
   * *   **false** (default): performs a dry run and sends the request. If the request passes the dry run, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the key that is used for cloud disk encryption in the region in which the instance is deployed. If this parameter is specified, cloud disk encryption is enabled and you must also specify the **RoleARN** parameter. Cloud disk encryption cannot be disabled after it is enabled.
   * 
   * You can obtain the ID of the key in the Key Management Service (KMS) console or create a key. For more information, see [Create a key](https://help.aliyun.com/document_detail/181610.html).
   * 
   * > *   This parameter is not required when you create an instance that runs MySQL, PostgreSQL, or SQL Server. You need to only specify the **RoleARN** parameter to create an instance that has cloud disk encryption enabled by using the obtained key ID.
   * > *   You can configure RAM authorization to require a RAM user to enable cloud disk encryption when the RAM user is used to create an instance. If cloud disk encryption is disabled during the instance creation, the creation operation fails. To complete the configuration, you can attach the following policy to the RAM user: `{"Version":"1","Statement":[{"Effect":"Deny","Action":"rds:CreateDBInstance","Resource":"*","Condition":{"StringEquals":{"rds:DiskEncryptionRequired":"false"}}}]}`
   * 
   * 
   * >Warning: The configuration also affects the CreateOrder operation that is called to create instances in the console.
   * 
   * @example
   * 0d24*****-da7b-4786-b981-9a164dxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * *   **MariaDB**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values:
   * 
   * *   Regular RDS instance
   * 
   *     *   Valid values when you set Engine to MySQL: **5.5**, **5.6**, **5.7**, and **8.0**
   *     *   Valid values when you set Engine to SQLServer: **08r2_ent_ha** (cloud disks, discontinued), **2008r2** (local disks, discontinued), **2012** (SQL Server EE Basic), **2012_ent_ha**, **2012_std_ha**, **2012_web**, **2014_ent_ha**, **2014_std_ha**, **2016_ent_ha**, **2016_std_ha**, **2016_web**, **2017_ent**, **2017_std_ha**, **2017_web**, **2019_ent**, **2019_std_ha**, **2019_web**, **2022_ent**, **2022_std_ha**, and **2022_web**
   *     *   Valid values when you set Engine to PostgreSQL: **10.0**, **11.0**, **12.0**, **13.0**, **14.0**, **15.0**, **16.0**, and **17.0**
   *     *   Valid values when you set Engine to MariaDB: **10.3** and **10.6**
   * 
   * *   Serverless RDS instance
   * 
   *     *   Valid values when you set Engine to MySQL: **5.7** and **8.0**
   *     *   Valid values when you set Engine to SQLServer: **2016_std_sl**, **2017_std_sl**, and **2019_std_sl**
   *     *   Valid values when you set Engine to PostgreSQL: **14.0**, **15.0**, **16.0**, and **17.0**
   * 
   * > 
   * 
   * *   ApsaraDB RDS for MariaDB does not support serverless instances.
   * 
   * *   RDS instances that run SQL Server: `_ent` specifies SQL Server EE (Always On), `_ent_ha` specifies SQL Server EE, `_std_ha` specifies SQL Server SE, and `_web` specifies SQL Server Web.
   * 
   * *   RDS instances that run SQL Server 2014 are not available for purchase on the international site (alibabacloud.com).
   * 
   * *   Babelfish is supported only for RDS instances that run PostgreSQL 15.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.6
   */
  engineVersion?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **VPC**
   * *   **Classic**
   * 
   * > 
   * 
   * *   If the instance runs MySQL and uses cloud disks, you must set this parameter to **VPC**.
   * 
   * *   If the instance runs PostgreSQL or MariaDB, you must set this parameter to **VPC**.
   * 
   * *   If the instance runs SQL Server Basic or SQL Server Web, you can set this parameter to VPC or Classic. If the instance runs other database engine, you must set this parameter to **VPC**.
   * 
   * @example
   * Classic
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * Specifies whether to enable the I/O acceleration feature of general ESSDs. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * >  For more information about the I/O acceleration feature of general ESSDs, see [Introduction](https://help.aliyun.com/document_detail/2527067.html).
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the write optimization feature. Valid values:
   * 
   * *   **optimized**
   * *   **none** (default)
   * 
   * >  For more information about the write optimization feature, see [Write optimization](https://help.aliyun.com/document_detail/2858761.html).
   * 
   * @example
   * optimized
   */
  optimizedWrites?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * *   **Serverless**: serverless. This value is not supported for instances that run MariaDB. For more information, see [Overview of serverless ApsaraDB RDS for MySQL instances](https://help.aliyun.com/document_detail/411291.html), [Overview of serverless ApsaraDB RDS for SQL Server instances](https://help.aliyun.com/document_detail/604344.html), and [Overview of serverless ApsaraDB RDS for PostgreSQL instances](https://help.aliyun.com/document_detail/607742.html).
   * 
   * > The system automatically generates a purchase order and completes the payment.
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * >  If you set the PayType parameter to **Prepaid**, you must also specify this parameter.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The port. You can initialize the port when you create the instance.
   * 
   * *   Valid values if the instance runs MySQL: 1000 to 65534
   * *   Valid values if the instance runs PostgreSQL, SQL Server, or MariaDB: 1000 to 5999
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The private IP address of the instance. The private IP address must be within the CIDR block that is supported by the specified vSwitch. ApsaraDB RDS automatically assigns a private IP address to the instance based on the values of the **VPCId** and **vSwitchId** parameters.
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) that is provided by your Alibaba Cloud account for Resource Access Management (RAM) users. RAM users can use the ARN to connect to ApsaraDB RDS to Key Management Service (KMS). You can call the CheckCloudResourceAuthorized operation to query the ARN.
   * 
   * >  When you enable the encryption, you must specify the RoleARN.
   * 
   * @example
   * acs:ram::1406xxxxxx:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The IP address whitelist of the instance. For more information, see [Configure an IP address whitelist](https://help.aliyun.com/document_detail/43185.html). Separate multiple IP addresses or CIDR blocks with commas (,). You can add up to 1,000 IP addresses or CIDR blocks to the whitelist. The entries in the IP address whitelist must be in one of the following formats:
   * 
   * *   IP addresses, such as 10.10.XX.XX.
   * *   CIDR blocks, such as 10.10.XX.XX/24. In this example, 24 indicates that the prefix of each IP address in the IP address whitelist is 24 bits in length. You can replace 24 with a value within the range of 1 to 32.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.10.XX.XX/24
   */
  securityIPList?: string;
  /**
   * @remarks
   * The settings of the serverless instance. This parameter is required when you create a serverless instance.
   * 
   * >  ApsaraDB RDS for MariaDB does not support serverless instances.
   */
  serverlessConfigShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable the automatic storage expansion feature for the instance. If the instance runs MySQL or PostgreSQL, this feature is supported. Valid values:
   * 
   * *   **Enable**
   * *   **Disable** (default)
   * 
   * >  After the instance is created, you can call the ModifyDasInstanceConfig operation to adjust the settings. For more information, see [Configure automatic storage expansion](https://help.aliyun.com/document_detail/173826.html).
   * 
   * @example
   * Disable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The threshold in percentage based on which automatic storage expansion is triggered. Valid values:
   * 
   * *   **10**
   * *   **20**
   * *   **30**
   * *   **40**
   * *   **50**
   * 
   * >  If you set the **StorageAutoScale** parameter to **Enable**, you must also specify this parameter.
   * 
   * @example
   * 50
   */
  storageThreshold?: number;
  /**
   * @remarks
   * The maximum storage capacity that is allowed for automatic storage expansion. The storage capacity of the instance cannot exceed the maximum storage capacity. Unit: GB.
   * 
   * > *   Valid values: an integer greater than or equal to 0.
   * > *   If you set **StorageAutoScale** to **Enable**, you must specify this parameter.
   * 
   * @example
   * 2000
   */
  storageUpperBound?: number;
  /**
   * @remarks
   * A deprecated parameter. You do not need to specify this parameter.
   * 
   * @example
   * gbk
   */
  systemDBCharset?: string;
  /**
   * @remarks
   * The tags that are added to instances.
   */
  tag?: CreateDBInstanceShrinkRequestTag[];
  /**
   * @remarks
   * The ID of the host to which the logger instance belongs in the specified dedicated cluster.
   * 
   * If you want to create an instance that runs RDS Enterprise Edition in a dedicated cluster, you must specify this parameter. If you do not specify this parameter, the system automatically assigns a host.
   * 
   * *   You can call the DescribeDedicatedHosts operation to query the host in the dedicated cluster.
   * *   If no hosts are created, you can call the CreateDedicatedHost operation to create a host.
   * 
   * @example
   * i-bp*****3
   */
  targetDedicatedHostIdForLog?: string;
  /**
   * @remarks
   * The ID of the host to which the instance belongs in the specified dedicated cluster.
   * 
   * If you create the instance in a dedicated cluster, you must specify this parameter. If you do not specify this parameter, the system automatically assigns a host.
   * 
   * *   You can call the DescribeDedicatedHosts operation to query the host in the dedicated cluster.
   * *   If no hosts are created, you can call the CreateDedicatedHost operation to create a host.
   * 
   * @example
   * i-bp*****1
   */
  targetDedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * The ID of the host to which the secondary instance belongs in the specified dedicated cluster.
   * 
   * If you want to create an instance that runs RDS High-availability Edition or RDS Enterprise Edition in a dedicated cluster, you must specify this parameter. If you do not specify this parameter, the system automatically assigns a host.
   * 
   * *   You can call the DescribeDedicatedHosts operation to query the host in the dedicated cluster.
   * *   If no hosts are created, you can call the CreateDedicatedHost operation to create a host.
   * 
   * @example
   * i-bp*****2
   */
  targetDedicatedHostIdForSlave?: string;
  /**
   * @remarks
   * The minor engine version of the instance. This parameter is required only when you create an instance that runs MySQL or PostgreSQL. The value format varies based on the database engine of the instance.
   * 
   * *   If you create an instance that runs MySQL, the value is in the following format: `<RDS edition>_<Minor engine version>`. Examples: `rds_20200229`, `xcluster_20200229`, and `xcluster80_20200229`.
   * 
   *     *   rds: The instance runs RDS Basic Edition or RDS High-availability Edition.
   *     *   xcluster: The instance runs MySQL 5.7 on RDS Enterprise Edition.
   *     *   xcluster80: The instance runs MySQL 8.0 on RDS Enterprise Edition.
   * 
   *     > You can call the DescribeDBMiniEngineVersions operation to query the minor engine version. For more information about the differences between minor engine versions of AliSQL, see [Release notes](https://help.aliyun.com/document_detail/96060.html).
   * 
   * *   If you create an instance that runs PostgreSQL, the value is in the following format: `rds_postgres_<Major engine version>00_<Minor engine version>`. Example: `rds_postgres_1400_20220830`.
   * 
   *     *   1400: The major engine version is PostgreSQL 14.
   *     *   20220830: the AliPG version. You can call the DescribeDBMiniEngineVersions operation to query the AliPG version. For more information about minor engine versions, see [Release notes for AliPG](https://help.aliyun.com/document_detail/126002.html).
   * 
   *     > If you configure the **BabelfishConfig** parameter for your instance that runs PostgreSQL and set the babelfishEnabled field to true, the value of this parameter is in the following format: `rds_postgres_Major engine version00_AliPG version_babelfish`.
   * 
   * @example
   * rds_20200229
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * *   If you set the **Period** parameter to **Year**, the value of the **UsedTime** parameter ranges from **1 to 5**.
   * *   If you set the **Period** parameter to **Month**, the value of the **UsedTime** parameter ranges from **1 to 11**.
   * 
   * >  If you set the PayType parameter to **Prepaid**, you must also specify this parameter.
   * 
   * @example
   * 2
   */
  usedTime?: string;
  /**
   * @remarks
   * The ID of the full backup file. You can call the ListUserBackupFiles operation to query the ID of the full backup file. If you want to create an instance by using the data of a backup file, you must specify this parameter.
   * 
   * This parameter is supported only when the following requirements are met:
   * 
   * *   The **PayType** parameter is set to **Postpaid**.
   * *   The **Engine** parameter is set to **MySQL**.
   * *   The **EngineVersion** parameter is set to **5.7**.
   * *   The **Category** parameter is set to **Basic**.
   * 
   * @example
   * 67798*****
   */
  userBackupId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * > This parameter is available when you set the **InstanceNetworkType** parameter to **VPC**.
   * 
   * @example
   * vpc-*****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * *   **Relations with zones**: Specify the vSwitch ID based on the zones in which the vSwitch belongs to. If you specify two vSwitch IDs, make sure that the vSwitch IDs match the zone IDs specified by the ZoneId and ZoneIdSlave1 parameters.
   * *   **Limits on the network type**: Set **InstanceNetworkType** to **VPC**.
   * *   **Limits on multiple vSwitch IDs**: If you set **ZoneSlaveId1** to a value that is not **Auto**, you must specify the IDs of two vSwitches for this parameter and separate the IDs with a comma (,).
   * *   **Limits on characters**: The value cannot contain `spaces` or the following characters: `!` `#` `￥` `&` `%`
   * 
   * @example
   * vsw-*****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The entries in the whitelist. If you enter multiple IP addresses or CIDR blocks, you must separate the IP addresses or CIDR blocks with commas (,). Do not add spaces preceding or following the commas. Example: `192.168.0.1,172.16.213.9`.
   * 
   * @example
   * 192.XXX.XX.1,172.XXX.XX.9
   */
  whitelistTemplateList?: string;
  /**
   * @remarks
   * The zone ID of the primary instance.
   * 
   * *   If you specify a virtual private cloud (VPC) and a vSwitch, you must specify the ID of the zone to which the specified vSwitch belongs. Otherwise, the instance cannot be created.
   * *   If the instance runs RDS High-availability Edition, you must specify the **ZoneIdSlave1** parameter. The ZoneIdSlave1 parameter specifies whether to use the single-zone deployment method or the multi-zone deployment method.
   * *   If the instance runs RDS Enterprise Edition, you must specify the **ZoneIdSlave1** and **ZoneIdSlave2** parameters. The ZoneIdSlave1 and ZoneIdSlave2 parameters specify whether to use the single-zone deployment method or the multi-zone deployment method.
   * *   If the instance runs MySQL on RDS Cluster Edition, you must specify the **ZoneIdSlave1** parameter for the RDS cluster that has two nodes and the **ZoneIdSlave1** and **ZoneIdSlave2** parameters for the RDS cluster that has three nodes.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone ID of the secondary instance.
   * 
   * *   If you set this parameter to **Auto**, the multi-zone deployment method is used and the zone of the secondary instance is automatically configured.
   * *   If you set this parameter to the same value as the **ZoneId** parameter, the single-zone deployment method is used.
   * *   If you set this parameter to a value that is different from the value of the **ZoneId** parameter, the multiple-zone deployment method is used.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * The zone ID of the other secondary node. When you create an ApsaraDB RDS for MySQL cluster, you can create one to two secondary nodes for the cluster. This parameter applies if you create a cluster that contains two secondary nodes.
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

