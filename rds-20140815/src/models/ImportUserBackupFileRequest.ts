// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportUserBackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON array that describes the information about the backup file in the OSS bucket. Example:
   * `{"Bucket":"test", "Object":"test/test_db_employees.xb","Location":"ap-southeast-1"}`
   * 
   * Parameters in the array:
   * * **Bucket**: the name of the OSS bucket where the backup file is stored. You can call the [GetBucket](https://help.aliyun.com/document_detail/31965.html) operation to query the name.
   * * **Object**: the detailed path of the directory where the backup file is stored. You can call the [GetObject](https://help.aliyun.com/document_detail/31980.html) operation to query the path.
   * * **Location**: the region ID of the OSS bucket. You can call the [GetBucketLocation](https://help.aliyun.com/document_detail/31967.html) operation to query the region ID.
   * 
   * This parameter is required when **Mode** is set to **oss**. For **Location**, specify the region ID of the OSS bucket. You can call the GetBucketLocation operation to query the region ID.
   * 
   * @example
   * {"Bucket":"test", "Object":"test/test_db_employees.xb","Location":"ap-southeast-1"}
   */
  backupFile?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket where the backup file of the self-managed MySQL 5.7 database is stored. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  bucketRegion?: string;
  /**
   * @remarks
   * Specifies whether to automatically set up replication. Valid values:
   * - true: yes. The MasterInfo parameter is required.
   * - false: no.
   * 
   * > This parameter takes effect only for native replication instances. You must specify the DBInstanceId parameter when you call this operation.
   * 
   * @example
   * true
   */
  buildReplication?: boolean;
  /**
   * @remarks
   * The description of the user backup to be imported.
   * 
   * @example
   * BackupTest
   */
  comment?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The version of the MySQL database. Valid values: **5.7** and **8.0**.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The case-sensitive JSON array that provides the master information for setting up MySQL replication. Example:
   * 
   * ```
   * {"masterIp":"172.20.xx.xx","masterPort":"3306","masterUser":"replica","masterPassword":"W33uopkehBQ="}
   * ```
   * 
   * Parameters in the array:
   * - masterIp: the IP address of the primary database.
   * - masterPort: the port of the primary database.
   * - masterUser: the replication account of the primary database.
   * - masterPassword: the password of the replication account of the primary database. The password must be Base64-encoded.
   * 
   * > This parameter takes effect only for native replication instances. You must specify the DBInstanceId parameter when you call this operation.
   * 
   * @example
   * {"masterIp":"172.20.xx.xx","masterPort":"3306","masterUser":"replica","masterPassword":"W33uopkehBQ="}
   */
  masterInfo?: string;
  /**
   * @remarks
   * The import mode. Valid values:
   * 
   * - oss: downloads the backup from OSS and imports it.
   * - stream: imports the backup over the network.
   * 
   * @example
   * oss
   */
  mode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the ApsaraDB RDS instance. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * > * The value of this parameter is the region ID where you want to create the ApsaraDB RDS instance.
   * > * The value must be the same as the value of the **BucketRegion** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The storage space required to restore the user backup. Unit: GB.
   * 
   * > * The default value is five times the size of the backup file.
   * > * The minimum value is 20.
   * 
   * @example
   * 20
   */
  restoreSize?: number;
  /**
   * @remarks
   * The retention period of the user backup file. Unit: days. The value must be an integer greater than **0**.
   * 
   * @example
   * 30
   */
  retention?: number;
  /**
   * @remarks
   * The case-sensitive JSON array that provides the source information of the full backup. Example:
   * 
   * ```
   * {"sourceIp":"172.20.xx.xx","sourcePort":"9999"}
   * ```
   * 
   * Parameters in the array:
   * 
   * - sourceIp: the source IP address.
   * 
   * - sourcePort: the port listened by Netcat on the source.
   * 
   * > This parameter takes effect only for native replication instances. You must specify the DBInstanceId parameter when you call this operation.
   * 
   * @example
   * {"sourceIp":"172.20.xx.xx","sourcePort":"9999"}
   */
  sourceInfo?: string;
  /**
   * @remarks
   * The zone ID. You can call the DescribeRegions operation to query the most recent zone list.
   * 
   * > * After you specify a zone, the system creates a snapshot within seconds in the zone, which significantly reduces the time required to import the backup.
   * > * When you call the CreateDBInstance operation to create an instance by using the user backup, the instance is created in this zone.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupFile: 'BackupFile',
      bucketRegion: 'BucketRegion',
      buildReplication: 'BuildReplication',
      comment: 'Comment',
      DBInstanceId: 'DBInstanceId',
      engineVersion: 'EngineVersion',
      masterInfo: 'MasterInfo',
      mode: 'Mode',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreSize: 'RestoreSize',
      retention: 'Retention',
      sourceInfo: 'SourceInfo',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupFile: 'string',
      bucketRegion: 'string',
      buildReplication: 'boolean',
      comment: 'string',
      DBInstanceId: 'string',
      engineVersion: 'string',
      masterInfo: 'string',
      mode: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreSize: 'number',
      retention: 'number',
      sourceInfo: 'string',
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

