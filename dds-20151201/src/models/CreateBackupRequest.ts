// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The backup method of the instance. Valid values:
   * - **Snapshot**: snapshot backup
   * - **Logical**: logical backup
   * - **Physical**: physical backup (default)
   * 
   * > - Cloud disk instances support only snapshot backup.
   * > - Only replica set and sharded cluster instances support selecting the backup method. You do not need to specify this parameter for standalone instances. The backup method is fixed to snapshot backup.
   * 
   * @example
   * Logical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The retention period of the backup. This parameter is applicable only to replica set and sharded cluster instances with cloud disks.
   * 
   * > If you do not specify this parameter, the default backup policy applies. Valid values: 
   * > - 7 to 730: 7 to 730 days
   * > - -1: long-term retention
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

