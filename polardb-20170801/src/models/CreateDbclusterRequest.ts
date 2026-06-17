// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > You can add up to 20 tags at a time. The Nth tag is a key-value pair, where `Tag.N.Key` is the key and `Tag.N.Value` is the value.
   * 
   * @example
   * type
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * > You can add up to 20 tags at a time. The Nth tag is a key-value pair, where `Tag.N.Key` is the key and `Tag.N.Value` is the value.
   * 
   * @example
   * test
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

export class CreateDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable pause on inactivity. Valid values:
   * 
   * - **true**: enables pause on inactivity.
   * 
   * - **false** (default): disables pause on inactivity.
   * 
   * > This parameter is supported only for serverless clusters.
   * 
   * @example
   * true
   */
  allowShutDown?: string;
  /**
   * @remarks
   * The CPU architecture. Valid values:
   * 
   * - X86
   * 
   * - ARM
   * 
   * @example
   * X86
   */
  architecture?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **true**: enables auto-renewal.
   * 
   * - **false**: disables auto-renewal.
   * 
   * Default value: **false**.
   * 
   * > This parameter takes effect only when **PayType** is set to **Prepaid**.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically use a coupon. Valid values:
   * 
   * - true (default): Automatically uses a coupon.
   * 
   * - false: does not use a coupon.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The backup retention policy to apply when the cluster is deleted. Valid values:
   * 
   * - **ALL**: retains all backup sets.
   * 
   * - **LATEST**: retains only the last backup set. An automatic backup is performed before the cluster is deleted.
   * 
   * - **NONE**: does not retain backup sets.
   * 
   * Default value: **NONE**.
   * 
   * > - This parameter is valid only if **DBType** is set to **MySQL**.
   * >
   * > - Serverless clusters do not support this parameter.
   * 
   * @example
   * NONE
   */
  backupRetentionPolicyOnClusterDeletion?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the ESSD AutoPL cloud disk. Valid values:
   * 
   * - **true**: enables the performance burst feature.
   * 
   * - **false** (default): disables the performance burst feature.
   * 
   * > This parameter is supported only when **StorageType** is set to ESSDAUTOPL.
   * 
   * @example
   * false
   */
  burstingEnabled?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. This token must be unique across all requests and is case-sensitive. It can contain up to 64 ASCII characters.
   * 
   * @example
   * 6000170000591aed949d0f5********************
   */
  clientToken?: string;
  /**
   * @remarks
   * The point in time for the clone. Valid values:
   * 
   * - **LATEST**: The latest point in time.
   * 
   * - **BackupID**: The ID of a historical backup set.
   * 
   * - **Timestamp**: A specific point in time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * Default value: **LATEST**.
   * 
   * > If you set **CreationOption** to **CloneFromRDS**, you can set this parameter only to **LATEST**.
   * 
   * @example
   * LATEST
   */
  cloneDataPoint?: string;
  /**
   * @remarks
   * The cloud service provider of the instance.
   * 
   * @example
   * ENS
   */
  cloudProvider?: string;
  /**
   * @remarks
   * The network type of the cluster. Only **VPC** is supported.
   * 
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * - **Normal**: Cluster Edition (default)
   * 
   * - **Basic**: Single-node Edition
   * 
   * - **ArchiveNormal**: X-Engine Edition
   * 
   * - **NormalMultimaster**: Multi-master Cluster Edition
   * 
   * - **SENormal**: Standard Edition
   * 
   * > * The **Basic** edition is supported for PolarDB for MySQL **5.6**, **5.7**, and **8.0**; PolarDB for PostgreSQL **14**; and PolarDB for PostgreSQL (compatible with Oracle) **2.0**.
   * >
   * > * The **ArchiveNormal** and **NormalMultimaster** editions are supported for PolarDB for MySQL **8.0**.
   * >
   * > * The **SENormal** edition is supported for PolarDB for MySQL **5.6**, **5.7**, and **8.0** and PolarDB for PostgreSQL **14**.
   * 
   * For more information about product editions, see [Editions](https://help.aliyun.com/document_detail/183258.html).
   * 
   * @example
   * Normal
   */
  creationCategory?: string;
  /**
   * @remarks
   * The method to create the cluster. Valid values:
   * 
   * - **Normal**: Creates a new PolarDB cluster. For more information, see the following topics:
   * 
   *   - [Create a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/58769.html)
   * 
   *   - [Create a PolarDB for PostgreSQL cluster](https://help.aliyun.com/document_detail/118063.html)
   * 
   *   - [Create a PolarDB for PostgreSQL (compatible with Oracle) cluster](https://help.aliyun.com/document_detail/118182.html)
   * 
   * - **CloneFromPolarDB**: Clones data from an existing PolarDB cluster. For more information, see the following topics:
   * 
   *   - [Clone a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/87966.html)
   * 
   *   - [Clone a PolarDB for PostgreSQL cluster](https://help.aliyun.com/document_detail/118108.html)
   * 
   *   - [Clone a PolarDB for PostgreSQL (compatible with Oracle) cluster](https://help.aliyun.com/document_detail/118221.html)
   * 
   * - **RecoverFromRecyclebin**: Restores a PolarDB cluster from the recycle bin. For more information, see the following topics:
   * 
   *   - [Restore a released PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/164880.html)
   * 
   *   - [Restore a released PolarDB for PostgreSQL cluster](https://help.aliyun.com/document_detail/432844.html)
   * 
   *   - [Restore a released PolarDB for PostgreSQL (compatible with Oracle) cluster](https://help.aliyun.com/document_detail/424632.html)
   * 
   * - **CloneFromRDS**: Clones data from an existing ApsaraDB RDS instance to a new PolarDB cluster. For more information, see [One-click cloning from ApsaraDB RDS for MySQL to PolarDB for MySQL](https://help.aliyun.com/document_detail/121812.html).
   * 
   * - **MigrationFromRDS**: Migrates data from an existing ApsaraDB RDS instance. The created PolarDB cluster is in read-only mode and has binary logging enabled by default. For more information, see [One-click upgrade from ApsaraDB RDS for MySQL to PolarDB for MySQL](https://help.aliyun.com/document_detail/121582.html).
   * 
   * - **CreateGdnStandby**: Creates a secondary cluster in a Global Database Network (GDN). For more information, see [Add a secondary cluster](https://help.aliyun.com/document_detail/160381.html).
   * 
   * - **UpgradeFromPolarDB**: Upgrades the major version of a PolarDB cluster. For more information, see [Perform a major version upgrade](https://help.aliyun.com/document_detail/459712.html).
   * 
   * Default value: **Normal**.
   * 
   * > If **DBType** is set to **MySQL** and **DBVersion** is set to **8.0**, you can set this parameter to **CreateGdnStandby**.
   * 
   * @example
   * Normal
   */
  creationOption?: string;
  /**
   * @remarks
   * The description of the cluster. The description must meet the following requirements:
   * 
   * - It cannot start with `http://` or `https://`.
   * 
   * - It must be 2 to 256 characters in length.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The minor version of the database engine. Valid values:
   * 
   * - **8.0.2**
   * 
   * - **8.0.1**
   * 
   * > This parameter is valid only if **DBType** is set to **MySQL** and **DBVersion** is set to **8.0**.
   * 
   * @example
   * 8.0.1
   */
  DBMinorVersion?: string;
  /**
   * @remarks
   * The node specification. For more information, see the following topics:
   * 
   * - PolarDB for MySQL: [Compute node specifications](https://help.aliyun.com/document_detail/102542.html)
   * 
   * - PolarDB for PostgreSQL (compatible with Oracle): [Compute node specifications](https://help.aliyun.com/document_detail/207921.html)
   * 
   * - PolarDB for PostgreSQL: [Compute node specifications](https://help.aliyun.com/document_detail/209380.html)
   * 
   * > * To create a PolarDB for MySQL Cluster Edition serverless cluster, set this parameter to **polar.mysql.sl.small**.
   * >
   * > * To create a PolarDB for MySQL Standard Edition serverless cluster, set this parameter to **polar.mysql.sl.small.c**.
   * >
   * > * To create a PolarDB for PostgreSQL Cluster Edition serverless cluster, set this parameter to **polar.pg.sl.small**.
   * >
   * > * To create a PolarDB for PostgreSQL Standard Edition serverless cluster, set this parameter to **polar.pg.sl.small.c**.
   * >
   * > * To create a PolarDB for PostgreSQL (compatible with Oracle) serverless cluster, set this parameter to **polar.o.sl.small**.
   * 
   * @example
   * polar.mysql.x4.medium
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of nodes for a Standard Edition or Enterprise Edition cluster. Valid values:
   * 
   * - Standard Edition: 1 to 8. A cluster of this edition includes one read/write node and up to seven read-only nodes.
   * 
   * - Enterprise Edition: 1 to 16. A cluster of this edition includes one read/write node and up to 15 read-only nodes.
   * 
   * > * By default, an Enterprise Edition cluster has two nodes and a Standard Edition cluster has one node.
   * >
   * > * This parameter is supported only for PolarDB for MySQL.
   * >
   * > * You cannot change the number of nodes in a Multi-master Cluster Edition cluster.
   * 
   * @example
   * 1
   */
  DBNodeNum?: number;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **MySQL**
   * 
   * - **PostgreSQL**
   * 
   * - **Oracle**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * - Valid values for MySQL:
   * 
   *   - **5.6**
   * 
   *   - **5.7**
   * 
   *   - **8.0**
   * 
   * - Valid values for PostgreSQL:
   * 
   *   - **11**
   * 
   *   - **14**
   * 
   *   - **15**<props="china">
   * 
   * > If you create a serverless cluster for PolarDB for PostgreSQL, you must set this parameter to `14`.
   * 
   * \\* Valid values for Oracle:
   * \\* **11**
   * \\* **14**
   * 
   * This parameter is required.
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * Cluster time zone (UTC). The value can be any full-hour offset from **-12:00 to +13:00**, such as **00:00**. The default value is **SYSTEM**, which uses the region\\"s time zone.
   * 
   * > This parameter takes effect only when **DBType** is **MySQL**.
   * 
   * @example
   * SYSTEM
   */
  defaultTimeZone?: string;
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node. This parameter is required if you want to create an ENS database instance.
   * 
   * @example
   * vn-hanoi-3
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the Global Database Network (GDN).
   * 
   * > This parameter is required if **CreationOption** is set to **CreateGdnStandby**.
   * 
   * @example
   * gdn-***********
   */
  GDNId?: string;
  /**
   * @remarks
   * Specifies whether to enable the hot standby cluster feature. Valid values:
   * 
   * - **ON** (default): enables a hot standby storage cluster.
   * 
   * - **OFF**: disables the hot standby cluster feature.
   * 
   * - **STANDBY**: enables a hot standby cluster.
   * 
   * - **EQUAL**: enables hot standby for both storage and computing resources.
   * 
   * - **3AZ**: enables multi-AZ strong consistency.
   * 
   * > The value **STANDBY** is valid only for PolarDB for PostgreSQL.
   * 
   * @example
   * ON
   */
  hotStandbyCluster?: string;
  /**
   * @remarks
   * Specifies whether to enable binary logging. Valid values:
   * 
   * - **ON**: enables binary logging.
   * 
   * - **OFF**: disables binary logging.
   * 
   * > This parameter is valid only if **DBType** is set to **MySQL**.
   * 
   * @example
   * ON
   */
  loosePolarLogBin?: string;
  /**
   * @remarks
   * Specifies whether to enable the X-Engine storage engine. Valid values:
   * 
   * - **ON**: enables the X-Engine storage engine.
   * 
   * - **OFF**: disables the X-Engine storage engine.
   * 
   * > This parameter is valid only if the **CreationOption** parameter is not set to **CreateGdnStandby**, **DBType** is set to **MySQL**, and **DBVersion** is set to **8.0**. To enable the X-Engine storage engine, the node must have at least 8 GB of memory.
   * 
   * @example
   * ON
   */
  looseXEngine?: string;
  /**
   * @remarks
   * The percentage of memory allocated to the X-Engine storage engine. Valid values: integers from 10 to 90.
   * 
   * > This parameter is valid only if **LooseXEngine** is set to **ON**.
   * 
   * @example
   * 50
   */
  looseXEngineUseMemoryPct?: string;
  /**
   * @remarks
   * The time zone of the cluster. The value must be a UTC offset in the `±HH:mm` format. Valid values: from **-12:00** to **+13:00** on the hour. For example, **00:00**. The default value **SYSTEM** indicates that the cluster uses the time zone of its region.
   * 
   * - **1**: Case-insensitive
   * 
   * - **0**: Case-sensitive
   * 
   * The default value is **1**.
   * 
   * > This parameter is valid only if **DBType** is set to **MySQL**.
   * 
   * @example
   * 1
   */
  lowerCaseTableNames?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the parameter template.
   * 
   * > You can call the [DescribeParameterGroups](https://help.aliyun.com/document_detail/207178.html) operation to query the parameter templates in a specific region, including the IDs of the parameter templates.
   * 
   * @example
   * pcpg-**************
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is required if you set the **PayType** parameter to **Prepaid**. Valid values:
   * 
   * - **Year**: The subscription duration is measured in years.
   * 
   * - **Month**: The subscription duration is measured in months.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The promotion code. If you do not specify this parameter, the default coupon is used.
   * 
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The provisioned read/write IOPS of the ESSD AutoPL cloud disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.
   * 
   * 
   * 
   * <props="china">
   * 
   * Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * 
   * 
   * <props="china">
   * 
   * > This parameter is supported only when **StorageType** is set to ESSDAUTOPL.
   * 
   * @example
   * 1000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The specification of the database proxy for a Standard Edition cluster. Valid values:
   * 
   * - **polar.maxscale.g2.medium.c**: 2 cores
   * 
   * - **polar.maxscale.g2.large.c**: 4 cores
   * 
   * - **polar.maxscale.g2.xlarge.c**: 8 cores
   * 
   * - **polar.maxscale.g2.2xlarge.c**: 16 cores
   * 
   * - **polar.maxscale.g2.3xlarge.c**: 24 cores
   * 
   * - **polar.maxscale.g2.4xlarge.c**: 32 cores
   * 
   * - **polar.maxscale.g2.8xlarge.c**: 64 cores
   * 
   * @example
   * polar.maxscale.g2.medium.c
   */
  proxyClass?: string;
  /**
   * @remarks
   * The type of the database proxy. Valid values:
   * 
   * - **EXCLUSIVE**: Enterprise Dedicated
   * 
   * - **GENERAL**: Enterprise General-purpose
   * 
   * > The proxy type must be consistent with the type that corresponds to the node specification of the cluster:
   * >
   * > - If the node specification is general-purpose, the proxy type must be Enterprise General-purpose.
   * >
   * > - If the node specification is dedicated, the proxy type must be Enterprise Dedicated.
   * 
   * @example
   * Exclusive
   */
  proxyType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
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
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum number of PCUs for a single-node serverless cluster to scale up to. Valid values: 1 to 32.
   * 
   * > This parameter is supported only for serverless clusters.
   * 
   * @example
   * 3
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum number of PolarDB compute units (PCUs) for a single-node serverless cluster to scale down to. Valid values: 1 to 31.
   * 
   * > This parameter is supported only for serverless clusters.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * The maximum number of read-only nodes that the serverless cluster scales up to. Valid values: 0 to 15.
   * 
   * > This parameter is supported only for serverless clusters.
   * 
   * @example
   * 4
   */
  scaleRoNumMax?: string;
  /**
   * @remarks
   * The minimum number of read-only nodes that the serverless cluster scales down to. Valid values: 0 to 15.
   * 
   * > This parameter is supported only for serverless clusters.
   * 
   * @example
   * 2
   */
  scaleRoNumMin?: string;
  /**
   * @remarks
   * The IP whitelist of the PolarDB cluster.
   * 
   * > You can specify multiple IP addresses in the IP whitelist. Separate the IP addresses with commas (,).
   * 
   * @example
   * 10.***.***.***
   */
  securityIPList?: string;
  /**
   * @remarks
   * The type of the serverless cluster. Set the value to **AgileServerless**.
   * 
   * > This parameter is supported only for serverless clusters.
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The ID of the source ApsaraDB RDS instance or source PolarDB cluster. This parameter is required only if **CreationOption** is set to **MigrationFromRDS**, **CloneFromRDS**, **CloneFromPolarDB**, or **RecoverFromRecyclebin**.
   * 
   * - If **CreationOption** is set to **MigrationFromRDS** or **CloneFromRDS**, specify the ID of the source ApsaraDB RDS instance. The source ApsaraDB RDS instance must be ApsaraDB RDS for MySQL 5.6, 5.7, or 8.0 High-availability Edition.
   * 
   * - If **CreationOption** is set to **CloneFromPolarDB**, specify the ID of the source PolarDB cluster. The new cluster must use the same database engine as the source cluster. For example, if the source cluster runs MySQL 8.0, you must set **DBType** to **MySQL** and **DBVersion** to **8.0** for the new cluster.
   * 
   * - If **CreationOption** is set to **RecoverFromRecyclebin**, specify the ID of the released source PolarDB cluster. The restored cluster must use the same database engine as the source cluster. For example, if the source cluster runs MySQL 8.0, you must set **DBType** to **MySQL** and **DBVersion** to **8.0** for the restored cluster.
   * 
   * @example
   * rm-*************
   */
  sourceResourceId?: string;
  /**
   * @remarks
   * The UID of the source backup set owner in cross-account backup and restoration scenarios.
   * 
   * @example
   * 1022xxxxxxxx
   */
  sourceUid?: number;
  /**
   * @remarks
   * The zone for the hot standby cluster.
   * 
   * > This parameter is valid only when the hot standby cluster feature or multi-AZ strong consistency is enabled.
   * 
   * @example
   * cn-hangzhou-g
   */
  standbyAZ?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic storage scaling for a Standard Edition cluster. Valid values:
   * 
   * - Enable: enables automatic storage scaling.
   * 
   * - Disable: disables automatic storage scaling.
   * 
   * @example
   * Enable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * Specifies whether to enable cloud disk encryption. Valid values:
   * 
   * - **true**: enables cloud disk encryption.
   * 
   * - **false** (default): disables cloud disk encryption.
   * 
   * > This parameter is valid only if **DBType** is set to **MySQL**.
   * 
   * > This parameter is valid only if **StorageType** is set to a Standard Edition storage type.
   */
  storageEncryption?: boolean;
  /**
   * @remarks
   * The ID of a custom key from Key Management Service (KMS) for cloud disk encryption. The key must be in the same region as the cluster. If you specify this parameter, cloud disk encryption is automatically enabled and cannot be disabled. If this parameter is empty, the default service key is used.
   * 
   * You can view the key ID or create a new key in the Key Management Service (KMS) console.
   * 
   * > This parameter is valid only if **DBType** is set to **MySQL**.
   * 
   * > This parameter is valid only if **StorageType** is set to a Standard Edition storage type.
   * 
   * @example
   * 1022xxxxxxxx
   */
  storageEncryptionKey?: string;
  /**
   * @remarks
   * The billing method for storage. Valid values:
   * 
   * - Postpaid: pay-by-capacity (a pay-as-you-go method).
   * 
   * - Prepaid: pay-by-space (a subscription method).
   * 
   * @example
   * Prepaid
   */
  storagePayType?: string;
  /**
   * @remarks
   * The storage space for a pay-by-space (subscription) cluster. Unit: GB.
   * 
   * > - Valid values for a PolarDB for MySQL Enterprise Edition cluster: 10 to 50000.
   * >
   * > - Valid values for a PolarDB for MySQL Standard Edition cluster: 20 to 64000.
   * >
   * > - If the storage type of a Standard Edition cluster is ESSD AutoPL, the storage space must be a multiple of 10 between 40 and 64000.
   * 
   * @example
   * 50
   */
  storageSpace?: number;
  /**
   * @remarks
   * Valid values for Enterprise Edition:
   * 
   * - **PSL5**
   * 
   * - **PSL4**
   * 
   * Valid values for Standard Edition:
   * 
   * - **ESSDPL0**
   * 
   * - **ESSDPL1**
   * 
   * - **ESSDPL2**
   * 
   * - **ESSDPL3**
   * 
   * - **ESSDAUTOPL**
   * 
   * @example
   * PSL4
   */
  storageType?: string;
  /**
   * @remarks
   * The maximum storage capacity for a Standard Edition cluster when automatic storage scaling is enabled. Unit: GB.
   * 
   * > The maximum value is 32000.
   * 
   * @example
   * 800
   */
  storageUpperBound?: number;
  /**
   * @remarks
   * Specifies whether to enable multi-AZ strong consistency for the cluster. Valid values:
   * 
   * - **ON**: enables multi-AZ strong consistency. This feature is applicable to Standard Edition clusters that are deployed across three zones.
   * 
   * - **OFF**: disables multi-AZ strong consistency.
   * 
   * @example
   * ON
   */
  strictConsistency?: string;
  /**
   * @remarks
   * Specifies whether to enable transparent data encryption (TDE). Valid values:
   * 
   * - **true**: enables TDE.
   * 
   * - **false** (default): disables TDE.
   * 
   * > * This parameter is valid only when **DBType** is set to **PostgreSQL** or **Oracle**.
   * >
   * > * You can call the [ModifyDBClusterTDE](https://help.aliyun.com/document_detail/167982.html) operation to enable TDE for a PolarDB for MySQL cluster.
   * >
   * > * TDE cannot be disabled after it is enabled.
   * 
   * @example
   * true
   */
  TDEStatus?: boolean;
  /**
   * @remarks
   * The tags to add to the cluster.
   */
  tag?: CreateDBClusterRequestTag[];
  /**
   * @remarks
   * The target minor engine version.
   * 
   * @example
   * 8.0.1.1.54
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is required if you set the **PayType** parameter to **Prepaid**.
   * 
   * - If **Period** is set to **Month**, **UsedTime** must be an integer from `[1-9]`.
   * 
   * - If **Period** is set to **Year**, **UsedTime** must be an integer from `[1-3]`.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the VSwitch.
   * 
   * > If you specify the VPCId parameter, you must also specify this parameter.
   * 
   * @example
   * vsw-**********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available zones.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allowShutDown: 'AllowShutDown',
      architecture: 'Architecture',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      burstingEnabled: 'BurstingEnabled',
      clientToken: 'ClientToken',
      cloneDataPoint: 'CloneDataPoint',
      cloudProvider: 'CloudProvider',
      clusterNetworkType: 'ClusterNetworkType',
      creationCategory: 'CreationCategory',
      creationOption: 'CreationOption',
      DBClusterDescription: 'DBClusterDescription',
      DBMinorVersion: 'DBMinorVersion',
      DBNodeClass: 'DBNodeClass',
      DBNodeNum: 'DBNodeNum',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      defaultTimeZone: 'DefaultTimeZone',
      ensRegionId: 'EnsRegionId',
      GDNId: 'GDNId',
      hotStandbyCluster: 'HotStandbyCluster',
      loosePolarLogBin: 'LoosePolarLogBin',
      looseXEngine: 'LooseXEngine',
      looseXEngineUseMemoryPct: 'LooseXEngineUseMemoryPct',
      lowerCaseTableNames: 'LowerCaseTableNames',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      payType: 'PayType',
      period: 'Period',
      promotionCode: 'PromotionCode',
      provisionedIops: 'ProvisionedIops',
      proxyClass: 'ProxyClass',
      proxyType: 'ProxyType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      scaleRoNumMax: 'ScaleRoNumMax',
      scaleRoNumMin: 'ScaleRoNumMin',
      securityIPList: 'SecurityIPList',
      serverlessType: 'ServerlessType',
      sourceResourceId: 'SourceResourceId',
      sourceUid: 'SourceUid',
      standbyAZ: 'StandbyAZ',
      storageAutoScale: 'StorageAutoScale',
      storageEncryption: 'StorageEncryption',
      storageEncryptionKey: 'StorageEncryptionKey',
      storagePayType: 'StoragePayType',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      storageUpperBound: 'StorageUpperBound',
      strictConsistency: 'StrictConsistency',
      TDEStatus: 'TDEStatus',
      tag: 'Tag',
      targetMinorVersion: 'TargetMinorVersion',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowShutDown: 'string',
      architecture: 'string',
      autoRenew: 'boolean',
      autoUseCoupon: 'boolean',
      backupRetentionPolicyOnClusterDeletion: 'string',
      burstingEnabled: 'string',
      clientToken: 'string',
      cloneDataPoint: 'string',
      cloudProvider: 'string',
      clusterNetworkType: 'string',
      creationCategory: 'string',
      creationOption: 'string',
      DBClusterDescription: 'string',
      DBMinorVersion: 'string',
      DBNodeClass: 'string',
      DBNodeNum: 'number',
      DBType: 'string',
      DBVersion: 'string',
      defaultTimeZone: 'string',
      ensRegionId: 'string',
      GDNId: 'string',
      hotStandbyCluster: 'string',
      loosePolarLogBin: 'string',
      looseXEngine: 'string',
      looseXEngineUseMemoryPct: 'string',
      lowerCaseTableNames: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      payType: 'string',
      period: 'string',
      promotionCode: 'string',
      provisionedIops: 'number',
      proxyClass: 'string',
      proxyType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scaleMax: 'string',
      scaleMin: 'string',
      scaleRoNumMax: 'string',
      scaleRoNumMin: 'string',
      securityIPList: 'string',
      serverlessType: 'string',
      sourceResourceId: 'string',
      sourceUid: 'number',
      standbyAZ: 'string',
      storageAutoScale: 'string',
      storageEncryption: 'boolean',
      storageEncryptionKey: 'string',
      storagePayType: 'string',
      storageSpace: 'number',
      storageType: 'string',
      storageUpperBound: 'number',
      strictConsistency: 'string',
      TDEStatus: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateDBClusterRequestTag },
      targetMinorVersion: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
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

