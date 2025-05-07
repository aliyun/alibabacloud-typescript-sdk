// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTempDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID. You can call the DescribeBackups operation to query the backup set ID.
   * 
   * >  You must specify at least one of **BackupId** and **RestoreTime** parameters.
   * 
   * @example
   * 603******
   */
  backupId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5******
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specified point in time within the backup retention period. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > *   The time can be set to a point in time within the last seven days and must be more than 30 minutes earlier than the current time. The default time zone is UTC.
   * > *   You must specify at least one of the **BackupId** and **RestoreTime** parameters.
   * 
   * @example
   * 2011-06-11T16:00:00Z
   */
  restoreTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'number',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

