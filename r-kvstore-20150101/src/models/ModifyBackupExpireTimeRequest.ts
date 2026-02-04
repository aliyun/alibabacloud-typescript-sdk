// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupExpireTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup file. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to query the IDs of backup files.
   * 
   * @example
   * 521****66
   */
  backupId?: string;
  /**
   * @remarks
   * The point in time to which you want to extend the expiration time. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. The time cannot be earlier than the current expiration time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-07-06T07:25:57Z
   */
  expectExpireTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      expectExpireTime: 'ExpectExpireTime',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      expectExpireTime: 'string',
      instanceId: 'string',
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

