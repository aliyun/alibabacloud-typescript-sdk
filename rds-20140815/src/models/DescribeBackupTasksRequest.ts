// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The backup task ID.
   * 
   * @example
   * 476****
   */
  backupJobId?: number;
  /**
   * @remarks
   * The backup task status. Valid values:
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
   * The backup mode. Valid values:
   * * **Automated**: automatic backup
   * * **Manual**: manual backup
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * A reserved parameter.
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

