// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **DataBackupPolicy**: data backup
   * *   **LogBackupPolicy**: log backup
   * 
   * @example
   * DataBackupPolicy
   */
  backupPolicyMode?: string;
  /**
   * @remarks
   * The method that is used to compress backup data. Valid values:
   * 
   * *   **0**: Backup data is not compressed.
   * *   **1**: Backup data is compressed by using zlib.
   * *   **2**: Backup data is compressed by using zlib that invokes more than one thread in parallel for each backup.
   * *   **4**: Backup data is compressed by using QuickLZ and can be used to restore individual databases or tables.
   * *   **8**: Backup data is compressed by using QuickLZ but cannot be used to restore individual databases or tables.
   * 
   * @example
   * 1
   */
  compressType?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The policy that is used to retain archived backup files if the instance is released. Valid values:
   * 
   * *   **None**: No archived backup files are retained.
   * *   **Lastest**: Only the last archived backup file is retained.
   * *   **All**: All archived backup files are retained.
   * 
   * @example
   * Lastest
   */
  releasedKeepPolicy?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupPolicyMode: 'BackupPolicyMode',
      compressType: 'CompressType',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      releasedKeepPolicy: 'ReleasedKeepPolicy',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPolicyMode: 'string',
      compressType: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      releasedKeepPolicy: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

