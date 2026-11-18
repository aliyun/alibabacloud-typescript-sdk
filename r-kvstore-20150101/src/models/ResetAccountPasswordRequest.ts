// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account. You can call the [DescribeAccounts](https://help.aliyun.com/document_detail/473816.html) operation to query the account name.
   * 
   * This parameter is required.
   * 
   * @example
   * demoaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The new password. The password must be 8 to 32 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, special characters, and digits. Allowed special characters include `!@#$%^&*()_+-=`.
   * 
   * This parameter is required.
   * 
   * @example
   * uWonno_221****
   */
  accountPassword?: string;
  /**
   * @remarks
   * The ID of the instance to which the account belongs.
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
  securityToken?: string;
  /**
   * @remarks
   * This parameter is for internal maintenance only. You do not need to specify it.
   * 
   * @example
   * SDK
   */
  sourceBiz?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      instanceId: 'InstanceId',
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
      accountPassword: 'string',
      instanceId: 'string',
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

