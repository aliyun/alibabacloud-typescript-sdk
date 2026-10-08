// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDdrInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set used for restoration from a backup set. You can call the DescribeCrossRegionBackups operation to query backup set IDs.
   * > This parameter is required when **RestoreType** is set to **BackupSet**.
   * 
   * @example
   * 14****
   */
  backupSetId?: string;
  /**
   * @remarks
   * The region where the backup set resides.
   * 
   * @example
   * cn-beijing
   */
  backupSetRegion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The access mode of the target instance. Valid values:
   * 
   * - **Standard** (default): standard access mode
   * - **Safe**: database proxy mode
   * 
   * @example
   * Standard
   */
  connectionMode?: string;
  /**
   * @remarks
   * The instance type of the target instance. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * rds.mysql.s1.small
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The name of the target instance. The name must be 2 to 256 characters in length. The name must start with a letter or a Chinese character and can contain digits, Chinese characters, letters, underscores (_), and hyphens (-).
   * > The name cannot start with `http://` or `https://`.
   * 
   * @example
   * testdb
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The network connectivity type of the target instance. Valid values:
   * * **Internet**: public network connection
   * * **Intranet**: internal network connection
   * 
   * This parameter is required.
   * 
   * @example
   * Intranet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The instance storage capacity of the target instance. Valid values: **5 to 2000**. The value is incremented in steps of 5 GB. Unit: GB. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance storage type of the target instance. Valid values:
   * > Use the same storage type as the source instance.
   * <details>
   * <summary>ApsaraDB RDS for MySQL</summary>
   * 
   * - local_ssd: Premium Local SSDs (default)
   * - cloud_essd: PL1 ESSD cloud disk
   * - cloud_essd2: PL2 ESSD cloud disk
   * - cloud_essd3: PL3 ESSD cloud disk
   * - cloud_ssd: standard SSD cloud disk (discontinued)
   * </details>
   * 
   * <details>
   * <summary>ApsaraDB RDS for SQL Server</summary>
   * 
   * - cloud_essd: PL1 ESSD cloud disk
   * - cloud_essd2: PL2 ESSD cloud disk
   * - cloud_essd3: PL3 ESSD cloud disk
   * - local_ssd: Premium Local SSDs (discontinued)
   * - cloud_ssd: standard SSD cloud disk (discontinued)
   * 
   * </details>
   * 
   * <details>
   * <summary>ApsaraDB RDS for PostgreSQL</summary>
   * 
   * - cloud_essd: PL1 ESSD cloud disk
   * - cloud_essd2: PL2 ESSD cloud disk
   * - cloud_essd3: PL3 ESSD cloud disk
   * - local_ssd: Premium Local SSDs (discontinued)
   * - cloud_ssd: standard SSD cloud disk (discontinued)
   * 
   * </details>
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The ID of the custom key used for cloud disk encryption for **SQL Server instances**. Specifying this parameter enables cloud disk encryption (which cannot be disabled after it is enabled). You must also specify **RoleARN**.
   * You can view the key ID in the Key Management Service (KMS) console or [create a new key](https://help.aliyun.com/document_detail/181610.html).
   * 
   * > You can also leave this parameter empty and specify only **RoleARN** to set the cloud disk encryption type to the RDS-managed service key (Default Service CMK).
   * 
   * @example
   * 749c1df7-****-****-****-****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The type of the destination database engine. Valid values:
   * * **MySQL**
   * * **SQLServer**
   * * **PostgreSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The version of the destination database engine. The valid values vary based on the value of **Engine**:
   * - MySQL: **5.5/5.6/5.7/8.0**
   * - SQL Server: **2008r2 (Premium Local SSDs, discontinued)/08r2_ent_ha (cloud disks, discontinued)/2012/2012_ent_ha/2012_std_ha/2012_web/2014_std_ha/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent/2019_std_ha/2019_ent**
   * - PostgreSQL: **10.0/11.0/12.0/13.0/14.0/15.0**
   * 
   * > For SQL Server instances, `_ent` indicates Cluster Edition, `_ent_ha` indicates Enterprise Edition, `_std_ha` indicates Standard Edition, and `_web` indicates Web Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.6
   */
  engineVersion?: string;
  /**
   * @remarks
   * The network type of the target instance. Valid values:
   * 
   * * **VPC**: VPC
   * * **Classic**: classic network (offline)
   * 
   * > If you set this parameter to **VPC**, you must also specify the **VpcId** and **VSwitchId** parameters.
   * 
   * @example
   * Classic
   */
  instanceNetworkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the target instance. Valid values:
   * * **Postpaid**: pay-as-you-go
   * * **Prepaid**: upfront (subscription)
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the upfront subscription duration for the target instance. Valid values:
   * * **Year**: yearly subscription
   * * **Month**: monthly subscription
   * 
   * > This parameter is required when PayType is set to **Prepaid**.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * Settings for the internal network IP address of the target instance. The IP address must be within the IP address range of the specified vSwitch. By default, the system automatically allocates an internal network IP address based on the values of **VPCId** and **VSwitchId**.
   * 
   * @example
   * 172.XX.XX.69
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The ID of the destination region. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query region IDs.
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data when you restore data to a point in time. The point in time must be earlier than the current time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > This parameter is required when **RestoreType** is set to **BackupTime**.
   * 
   * @example
   * 2019-05-30T03:29:10Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restoration method. Valid values:
   * 
   * - **BackupSet**: restores data from a backup set. The data in the backup set is restored to the new instance. You must also specify the **BackupSetId** parameter.
   * - **BackupTime**: restores data to a point in time within the log backup retention period. You must also specify the **RestoreTime**, **SourceRegion**, and **SourceDBInstanceName** parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * BackupSet
   */
  restoreType?: string;
  /**
   * @remarks
   * The global resource descriptor (ARN) that provides authorization for the RDS cloud service account to access Key Management Service (KMS) for **SQL Server instances**. You can call the [CheckCloudResourceAuthorized](https://help.aliyun.com/document_detail/2628797.html) operation to query the ARN.
   * 
   * @example
   * acs:ram::1406****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The [IP whitelist](https://help.aliyun.com/document_detail/43185.html) of the target instance. Separate multiple IP addresses with commas (,). IP addresses cannot be duplicated. You can specify up to 1,000 IP addresses. The following two formats are supported:
   * * IP address format, such as 10.23.12.24.
   * * CIDR format, such as 10.23.12.24/24 (Classless Inter-Domain Routing. 24 indicates the length of the prefix in the address. The value ranges from 1 to 32).
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The ID of the source instance for point-in-time restoration.
   * > This parameter is required when **RestoreType** is set to **BackupTime**.
   * 
   * @example
   * rm-uf6wjk5****
   */
  sourceDBInstanceName?: string;
  /**
   * @remarks
   * The ID of the source region for point-in-time restoration.
   * > This parameter is required when **RestoreType** is set to **BackupTime**.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The character set of the target instance. Valid values:
   * * **utf8**
   * * **gbk**
   * * **latin1**
   * * **utf8mb4**
   * 
   * @example
   * uft8
   */
  systemDBCharset?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * If **Period** is set to **Year**, the valid values of UsedTime are **1 to 3**.
   * * If **Period** is set to **Month**, the valid values of UsedTime are **1 to 9**.
   * 
   * > This parameter is required when PayType is set to **Prepaid**.
   * 
   * @example
   * 2
   */
  usedTime?: string;
  /**
   * @remarks
   * The VPC ID of the target instance.
   * 
   * > - This parameter is required when **InstanceNetworkType** is set to **VPC**.
   * > - If you specify this parameter, you must also specify the **ZoneId** parameter.
   * 
   * @example
   * vpc-****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the target instance. Separate multiple values with commas (,).
   * 
   * > - This parameter is required when **InstanceNetworkType** is set to **VPC**.
   * > - If you specify this parameter, you must also specify the **ZoneId** parameter.
   * 
   * @example
   * vsw-****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The active zone ID of the target instance. Separate multiple zones with colons (:).
   * 
   * > If you specify a VPC and a vSwitch, this parameter is required to match the zone of the specified vSwitch.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      backupSetRegion: 'BackupSetRegion',
      clientToken: 'ClientToken',
      connectionMode: 'ConnectionMode',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceNetworkType: 'InstanceNetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      roleARN: 'RoleARN',
      securityIPList: 'SecurityIPList',
      sourceDBInstanceName: 'SourceDBInstanceName',
      sourceRegion: 'SourceRegion',
      systemDBCharset: 'SystemDBCharset',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      backupSetRegion: 'string',
      clientToken: 'string',
      connectionMode: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceNetType: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceNetworkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      roleARN: 'string',
      securityIPList: 'string',
      sourceDBInstanceName: 'string',
      sourceRegion: 'string',
      systemDBCharset: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

