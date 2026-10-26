// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * @example
   * 476****
   */
  backupJobId?: number;
  /**
   * @remarks
   * The status of the backup task. Valid values:
   * * **NoStart**: not started
   * * **Progressing**: in progress
   * 
   * Default value: all statuses.
   * 
   * @example
   * NoStart
   */
  backupJobStatus?: string;
  /**
   * @remarks
   * The backup pattern. Valid values:
   * * **Automated**: automatic backup
   * * **Manual**: manual backup
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. It cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
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

