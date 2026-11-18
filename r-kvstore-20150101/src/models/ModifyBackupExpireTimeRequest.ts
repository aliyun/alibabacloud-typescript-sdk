// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupExpireTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup file for the instance. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to query the ID.
   * 
   * @example
   * 521****66
   */
  backupId?: string;
  /**
   * @remarks
   * Specifies the new expiration time. The time must be in the yyyy-MM-ddTHH:mmZ format (UTC time) and cannot be earlier than the current expiration time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-07-06T07:25:57Z
   */
  expectExpireTime?: string;
  /**
   * @remarks
   * The instance ID.
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

