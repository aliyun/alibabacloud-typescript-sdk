// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * @example
   * 4762614
   */
  backupJobId?: number;
  /**
   * @remarks
   * The status of the backup task. Valid values:
   * 
   * *   **NoStart**
   * *   **Progressing**
   * 
   * By default, this operation returns backup tasks in both states.
   * 
   * @example
   * NoStart
   */
  backupJobStatus?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **Automated**
   * *   **Manual**
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  /**
   * @remarks
   * Specifies the client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
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

