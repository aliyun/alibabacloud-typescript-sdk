// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * - **Snapshot**: A snapshot backup.
   * 
   * - **Logical**: A logical backup.
   * 
   * - **Physical** (default): A physical backup.
   * 
   * > * Instances with cloud disks support only snapshot backups.
   * >
   * > * This parameter applies only to replica set and sharded cluster instances. This parameter is not required for standalone instances, which use snapshot backups.
   * 
   * @example
   * Logical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup retention period in days. This parameter applies only to replica set and sharded cluster instances that use cloud disks.
   * 
   * > If you do not specify this parameter, the retention period from the default backup policy is used. You can set this parameter to one of the following values:
   * >
   * > - A value from 7 to 730
   * >
   * > - -1 (permanent retention)
   * 
   * @example
   * 30
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp2235****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupMethod: 'BackupMethod',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMethod: 'string',
      backupRetentionPeriod: 'number',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

