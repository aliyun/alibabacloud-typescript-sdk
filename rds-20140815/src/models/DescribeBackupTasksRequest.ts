// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksRequest extends $dara.Model {
  backupJobId?: number;
  backupJobStatus?: string;
  backupMode?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  flag?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      backupJobStatus: 'BackupJobStatus',
      backupMode: 'BackupMode',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      flag: 'Flag',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'number',
      backupJobStatus: 'string',
      backupMode: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      flag: 'string',
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

