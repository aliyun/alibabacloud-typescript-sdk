// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The backup method of the instance. Valid values:
   * 
   * *   **Logical**
   * *   **Physical** (default)
   * 
   * > Only replica set instances and sharded cluster instances support this parameter. You do not need to specify this parameter for standalone instances. All standalone instances use snapshot backup.
   * 
   * @example
   * Logical
   */
  backupMethod?: string;
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

