// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDdrInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID that you want to use for the restoration. You can call the DescribeCrossRegionBackups operation to query backup set ID.
   * 
   * >  This parameter is required when you set the **RestoreType** parameter to **BackupSet**.
   * 
   * @example
   * 14***
   */
  backupSetId?: string;
  /**
   * @remarks
   * The region where the backup set is located.
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
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The connection mode of the destination instance. Valid values:
   * 
   * *   **Standard**: standard mode
   * *   **Safe**: database proxy mode
   * 
   * Default value: **Standard**.
   * 
   * @example
   * Standard
   */
  connectionMode?: string;
  /**
   * @remarks
   * The instance type of the destination instance. For more information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * rds.mysql.s1.small
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance name. The name must be 2 to 256 characters in length. The value can contain letters, digits, underscores (_), and hyphens (-), and must start with a letter.
   * 
   * >  The value cannot start with http:// or https://.
   * 
   * @example
   * Test database
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The network connection type of the destination instance. Valid values:
   * 
   * *   **Internet**
   * *   **Intranet**
   * 
   * This parameter is required.
   * 
   * @example
   * Intranet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The storage capacity of the destination instance. Valid values: **5 to 2000**. Unit: GB. You can increase the storage capacity at a step size of 5 GB. For more information, see [Primary instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the destination instance. Only the local SSD storage type is supported. Default value: **local_ssd**.
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) for cloud disk encryption. If this parameter is specified, cloud disk encryption is enabled and you must also specify the **RoleARN** parameter. Cloud disk encryption cannot be disabled after it is enabled. You can obtain the ID of the key in the KMS console or create a key. For more information, see [Create a key](https://help.aliyun.com/document_detail/181610.html).
   * 
   * **
   * 
   * **Notes**
   * 
   * *   This parameter is applicable only to ApsaraDB RDS for SQL Server instances.
   * 
   * *   You can leave this parameter empty. If you do not specify this parameter, you only need to specify the **RoleARN** to use the service key that is managed by ApsaraDB RDS to encrypt cloud disks.
   * 
   * @example
   * 749c1df7-****-****-****-****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine of the destination instance. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The major engine version of the destination instance. The value of this parameter varies based on the value of **Engine**.
   * 
   * *   Valid values when Engine is set to MySQL: **5.5, 5.6, 5.7, and 8.0**
   * *   Valid values when Engine is set to SQLServer: **2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent**
   * *   Valid values when Engine is set to PostgreSQL: **9.4, 10.0, 11.0, 12.0, and 13.0**
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
   * Default value: Classic.
   * 
   * > If you set this parameter to **VPC**, you must also specify **VpcId** and **VSwitchId**.
   * 
   * @example
   * Classic
   */
  instanceNetworkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit that is used to measure the subscription duration of the destination instance. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * > If you set PayType to **Prepaid**, you must specify UsedTime.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The private IP address of the destination instance. The private IP address must be within the CIDR block that is supported by the specified vSwitch. The system automatically assigns an internal IP address based on the values of the **VPCId** and **VSwitchId** parameters.
   * 
   * @example
   * 172.XXX.XXX.69
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID of the destination instance. You can call the DescribeRegions operation to query the most recent region list.
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
   * rg-acfmyxxxxxxxxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data. The point in time that you specify must be earlier than the current time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > If **RestoreType** is set to **BackupTime**, you must specify this parameter.
   * 
   * @example
   * 2019-05-30T03:29:10Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restoration method that you want to use. Valid values:
   * 
   * *   **BackupSet**: restores data from a backup set. If you use this value, you must also specify **BackupSetId**.
   * *   **BackupTime**: restores data to a point in time. If you use this value, you must also specify **RestoreTime**, **SourceRegion**, and **SourceDBInstanceName**.
   * 
   * This parameter is required.
   * 
   * @example
   * BackupSet
   */
  restoreType?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) that is provided by your Alibaba Cloud account for Resource Access Management (RAM) users. RAM users can use the ARN to connect to ApsaraDB RDS to Key Management Service (KMS). You can call the [CheckCloudResourceAuthorized](https://help.aliyun.com/document_detail/2628797.html) operation to query the ARN.
   * 
   * >  This parameter is applicable only to ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * acs:ram::1406****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The IP address whitelist of the destination instance. If you want to add more than one entry to the IP address whitelist, separate the entries with commas (,). Each entry must be unique. You can add a maximum of 1,000 entries. For more information, see [Configure an IP address whitelist for an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/43185.html). The entries in the IP address whitelist must be in one of the following formats:
   * 
   * *   IP address. Example: 10.23.12.24.
   * *   CIDR block. Example: 10.23.12.24/24. In this example, 24 indicates that the prefix of the CIDR block is 24 bits in length. You can replace 24 with a value that ranges from 1 to 32.
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The source instance ID, which is used if you want to restore data to a point in time.
   * 
   * >  This parameter is required when you set the **RestoreType** parameter to **BackupTime**.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  sourceDBInstanceName?: string;
  /**
   * @remarks
   * The region ID of the source instance if you want to restore data to a point in time.
   * 
   * > If you set **RestoreType** to **BackupTime**, you must specify this parameter.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The character set of the destination instance. Valid values:
   * 
   * *   **utf8**
   * *   **gbk**
   * *   **latin1**
   * *   **utf8mb4**
   * 
   * @example
   * uft8
   */
  systemDBCharset?: string;
  /**
   * @remarks
   * The subscription duration of the instance.
   * 
   * *   If you set **Period** to **Year**, the value of UsedTime ranges from **1 to 3**.
   * *   If you set **Period** to **Month**, the value of UsedTime ranges from **1 to 9**.
   * 
   * > If you set PayType to **Prepaid**, you must specify UsedTime.
   * 
   * @example
   * 2
   */
  usedTime?: string;
  /**
   * @remarks
   * The VPC ID of the destination instance. This parameter is available only when you set the **InstanceNetworkType** parameter to **VPC**.
   * 
   * >  If you specify this parameter, you must also specify the **ZoneId** parameter.
   * 
   * @example
   * vpc-xxxxxxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the destination instance. If you specify more than one vSwitch, separate the IDs of the vSwitches with commas (,). This parameter is available only when you set the **InstanceNetworkType** parameter to **VPC**.
   * 
   * >  If you specify this parameter, you must also specify the **ZoneId** parameter.
   * 
   * @example
   * vsw-xxxxxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the destination instance. If the destination instance is deployed in multiple zones, separate the IDs of the zones with colons (:).
   * 
   * > If you specify a virtual private cloud (VPC) and a vSwitch, you must specify this parameter to identify the zone for the vSwitch.
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

