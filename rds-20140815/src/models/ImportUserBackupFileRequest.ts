// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportUserBackupFileRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON array that consists of the information about the full backup file stored as an object in an OSS bucket. Example: `{"Bucket":"test", "Object":"test/test_db_employees.xb","Location":"ap-southeast-1"}`
   * 
   * The JSON array contains the following fields:
   * 
   * *   **Bucket**: The name of the OSS bucket in which the full backup file is stored as an object. You can call the [GetBucket](https://help.aliyun.com/document_detail/31965.html) operation to query the name of the bucket.
   * *   **Object**: The path of the full backup file that is stored as an object in the OSS bucket. You can call the [GetObject](https://help.aliyun.com/document_detail/31980.html) operation to query the path of the object.
   * *   **Location**: The ID of the region in which the OSS bucket is located. You can call the [GetBucketLocation](https://help.aliyun.com/document_detail/31967.html) operation to query the region of the bucket.
   * 
   * @example
   * {"Bucket":"test", "Object":"test/test_db_employees.xb","Location":"ap-southeast-1"}
   */
  backupFile?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket where the full backup file of the self-managed MySQL database is located. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  bucketRegion?: string;
  buildReplication?: boolean;
  /**
   * @remarks
   * The description of the full backup file.
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
   * The version of the database engine that is run on the self-managed MySQL database and ApsaraDB RDS for MySQL instance. Set the value to **5.7**.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  masterInfo?: string;
  /**
   * @example
   * oss
   */
  mode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * > *   The value of this parameter is the ID of the region in which you want to create the instance.
   * > *   The value of this parameter must be consistent with the value of **BucketRegion**.
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
   * The amount of storage that is required to restore the data of the full backup file. Unit: GB.
   * 
   * > *   The default value of this parameter is 5 times the size of the full backup file.
   * > *   The minimum value of this parameter is 20.
   * 
   * @example
   * 20
   */
  restoreSize?: number;
  /**
   * @remarks
   * The retention period of the full backup file. Unit: days. Valid values: any **non-zero** positive integer.
   * 
   * @example
   * 30
   */
  retention?: number;
  sourceInfo?: string;
  /**
   * @remarks
   * The zone ID. You can call the DescribeRegions operation to query the zone ID.
   * 
   * > *   If you specify this parameter, the system creates a snapshot in single-digit seconds, which greatly reduces the time that is required to import the full backup file.
   * > *   When you call the CreateDBInstance operation to create an instance by using the full backup file, the instance is created in the zone that you specify for this parameter.
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

