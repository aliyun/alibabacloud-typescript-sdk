// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckRecoveryConditionRequest extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * > *   You can call the [DescribeBackups](https://help.aliyun.com/document_detail/62172.html) operation to query the backup ID.
   * > *   You must specify one of the **RestoreTime** and BackupId parameters.
   * > *   This parameter is not applicable to sharded cluster instances.
   * 
   * @example
   * 5664****
   */
  backupId?: string;
  /**
   * @remarks
   * The name of the source database. The value is a JSON array.
   * 
   * >  If you do not specify this parameter, all databases are restored by default.
   * 
   * @example
   * ["db1","db2"]
   */
  databaseNames?: string;
  /**
   * @remarks
   * The region of the backup set used for the cross-region backup and restoration.
   * 
   * >  This parameter is required when you set the RestoreType parameter to 3.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * *   **3.4**
   * 
   * @example
   * 4.2
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance architecture. Valid values:
   * 
   * *   replicate
   * *   sharding
   * 
   * > * This parameter is required when you set the RestoreType parameter to 2.
   * > * This parameter is required when you set the RestoreType parameter to 3.
   * 
   * @example
   * replicate
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * sg-bp179****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which the instance is restored. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > *   The time can be a point in time within the past seven days. The time must be earlier than the current time, but later than the time when the instance was created.
   * > *   You must specify one of the RestoreTime and **BackupId** parameters.
   * 
   * @example
   * 2022-08-22T08:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restoration type.
   * 
   * > * 0: The data of the source instance is restored to a new instance in the same region.
   * > * 1: The data of the source instance is restored to an earlier point in time.
   * > * 2: The data of a deleted instance is restored to a new instance from the backup set.
   * > * 3: The data of a deleted instance is restored to a new instance in another region from the backup set.
   * 
   * @example
   * 0
   */
  restoreType?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * dds-bp1378****
   */
  sourceDBInstance?: string;
  /**
   * @remarks
   * The region where the source instance resides.
   * 
   * > * This parameter is required when you set the RestoreType parameter to 2.
   * > * This parameter is required when you set the RestoreType parameter to 3.
   * 
   * @example
   * cn-beijing
   */
  srcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      databaseNames: 'DatabaseNames',
      destRegion: 'DestRegion',
      engineVersion: 'EngineVersion',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      sourceDBInstance: 'SourceDBInstance',
      srcRegion: 'SrcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      databaseNames: 'string',
      destRegion: 'string',
      engineVersion: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      sourceDBInstance: 'string',
      srcRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

