// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account whose password you want to update. You can call the [DescribeAccounts](https://help.aliyun.com/document_detail/473816.html) operation to query the account name.
   * 
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  accountName?: string;
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
  /**
   * @remarks
   * The new password to be set for the account. The password must be 8 to 32 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The special characters are `!@#$%^&*()_+-=`.
   * 
   * This parameter is required.
   * 
   * @example
   * newPassWd888****
   */
  newAccountPassword?: string;
  /**
   * @remarks
   * The original password of the account.
   * 
   * > If you forget the account password, you can also call the [ResetAccountPassword](https://help.aliyun.com/document_detail/473815.html) operation to reset the password.
   * 
   * This parameter is required.
   * 
   * @example
   * oldPassWd999****
   */
  oldAccountPassword?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is used only for internal maintenance and does not need to be specified.
   * 
   * @example
   * SDK
   */
  sourceBiz?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      instanceId: 'InstanceId',
      newAccountPassword: 'NewAccountPassword',
      oldAccountPassword: 'OldAccountPassword',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      sourceBiz: 'SourceBiz',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      instanceId: 'string',
      newAccountPassword: 'string',
      oldAccountPassword: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      sourceBiz: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

