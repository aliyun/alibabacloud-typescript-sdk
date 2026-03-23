// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreTableRequest extends $dara.Model {
  backupId?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  instantRecovery?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  restoreTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMeta?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      instantRecovery: 'InstantRecovery',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      tableMeta: 'TableMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      instantRecovery: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      tableMeta: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

