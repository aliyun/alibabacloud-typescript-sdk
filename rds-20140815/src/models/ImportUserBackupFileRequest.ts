// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportUserBackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON array that describes the backup file information in the OSS bucket. Example:
   * `{"Bucket":"test", "Object":"test/test_db_employees.xb","Location":"ap-southeast-1"}`
   * 
   * The following list describes the parameters in the array:
   * * **Bucket**: the name of the OSS bucket that stores the backup file. You can call [GetBucket](https://help.aliyun.com/document_detail/31965.html) to query the bucket name.
   * * **Object**: the full path of the backup file in the directory. You can call [GetObject](https://help.aliyun.com/document_detail/31980.html) to query the path.
   * * **Location**: the region ID of the OSS bucket. You can call [GetBucketLocation](https://help.aliyun.com/document_detail/31967.html) to query the region ID.
   * 
   * @example
   * {"Bucket":"test", "Object":"test/test_db_employees.xb","Location":"ap-southeast-1"}
   */
  backupFile?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket that stores the backup file of the self-managed MySQL 5.7 database. You can call DescribeRegions to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bucketRegion?: string;
  /**
   * @remarks
   * Specifies whether to automatically set up replication. Valid values:
   * - true: automatically sets up replication. The `MasterInfo` parameter is required.
   * - false: does not set up replication.
   * 
   * > This parameter takes effect only for native replication instances. You must specify the `DBInstanceId` parameter when you call this operation.
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
   * The version of the MySQL database engine. Valid values: **5.7** and **8.0**.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * A JSON array that contains the master information for setting up MySQL replication (case-sensitive). Example:
   * 
   * ```
   * {"masterIp":"172.20.xx.xx","masterPort":"3306","masterUser":"replica","masterPassword":"W33uopkehBQ="}
   * 
   * ```
   * 
   * The following list describes the parameters in the array:
   * - `masterIp`: the IP address of the primary database.
   * - `masterPort`: the port of the primary database.
   * - `masterUser`: the replication account of the primary database.
   * - `masterPassword`: the password of the replication account for the primary database. The password must be Base64-encoded.
   * 
   * > This parameter takes effect only for native replication instances. You must specify the `DBInstanceId` parameter when you call this operation.
   * 
   * @example
   * {"masterIp":"172.20.xx.xx","masterPort":"3306","masterUser":"replica","masterPassword":"W33uopkehBQ="}
   */
  masterInfo?: string;
  /**
   * @remarks
   * The import mode. Valid values:
   * 
   * - oss: imports the backup from OSS.
   * - stream: imports the backup over the network.
   * 
   * @example
   * oss
   */
  mode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the ApsaraDB RDS instance. You can call DescribeRegions to query the region ID.
   * 
   * > * The value of this parameter specifies the region ID in which you want to create the ApsaraDB RDS instance.
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
   * The resource group ID. You can call DescribeDBInstanceAttribute to query the resource group ID.
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
   * A JSON array that provides the source information for the full backup (case-sensitive). Example:
   * 
   * ```
   * {"sourceIp":"172.20.xx
   * .xx","sourcePort":"9999"}
   * 
   * ```
   * 
   * The following list describes the parameters in the array:
   * 
   * - `sourceIp`: the source IP address.
   * 
   * - `sourcePort`: the Netcat listening port on the source.
   * 
   * > This parameter takes effect only for native replication instances. You must specify the `DBInstanceId` parameter when you call this operation.
   * 
   * @example
   * {"sourceIp":"172.20.xx.xx","sourcePort":"9999"}
   */
  sourceInfo?: string;
  /**
   * @remarks
   * The zone ID. You can call DescribeRegions to query the zone ID.
   * 
   * > * After you specify a zone, the system creates a second-level snapshot in the zone, which significantly reduces the time required for backup import.
   * > * When you call CreateDBInstance to create an instance from the user backup, this zone is the zone in which the new instance resides.
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

