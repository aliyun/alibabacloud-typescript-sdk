// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckRecoveryConditionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * > - You can call the [DescribeBackups](https://help.aliyun.com/document_detail/62172.html) operation to query the backup ID.
   * > - You must specify either this parameter or the **RestoreTime** parameter.
   * > - This parameter is not supported for sharded cluster instances.
   * 
   * @example
   * 5664****
   */
  backupId?: string;
  /**
   * @remarks
   * The names of the databases to be restored. The value is a JSON array.
   * > If you do not specify this parameter, all databases are restored by default.
   * 
   * @example
   * ["db1","db2"]
   */
  databaseNames?: string;
  /**
   * @remarks
   * The area where the backup set resides during geo-redundancy recover.
   * 
   * > This parameter is required when the backup recover type is geo-redundancy cloning.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * The database version. Valid values:
   * - **8.0**
   * - **7.0**
   * - **6.0**
   * - **5.0**
   * - **4.4**
   * - **4.2**
   * - **4.0**
   * 
   * @example
   * 4.2
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - replicate 
   * - sharding
   * 
   * >- This parameter is required when the backup recover type is rebuilding a deleted instance.
   * >- This parameter is required when the backup recover type is geo-redundancy cloning.
   * 
   * @example
   * replicate
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * sg-bp179****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore the instance. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > - The value can be any point in time within the last seven days. The value must be earlier than the current time and later than the creation time of the instance.
   * > - You must specify either this parameter or the **BackupId** parameter.
   * 
   * @example
   * 2022-08-22T08:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The backup recover type. Valid values:
   * 
   * >- 0: local backup recover
   * >- 1: local point-in-time recover
   * >- 2: backup recover of a deleted instance using a backup set
   * >- 3: geo-redundancy backup recover using a backup set
   * 
   * @example
   * 0
   */
  restoreType?: string;
  /**
   * @remarks
   * The instance ID of the source instance to recover.
   * 
   * @example
   * dds-bp1378****
   */
  sourceDBInstance?: string;
  /**
   * @remarks
   * The area where the source instance resides.
   * 
   * >- This parameter is required when the backup recover type is rebuilding a deleted instance.
   * >- This parameter is required when the backup recover type is geo-redundancy cloning.
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

