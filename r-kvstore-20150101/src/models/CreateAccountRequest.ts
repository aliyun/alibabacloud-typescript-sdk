// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * *   The description must start with a letter, and cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, underscores (_), and hyphens (-).
   * *   The description must be 2 to 256 characters in length.
   * 
   * @example
   * testaccount
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account. The name must meet the following requirements:
   * 
   * *   The name must start with a lowercase letter and can contain lowercase letters, digits, and underscores (_).
   * *   The name can be up to 100 characters in length.
   * *   The name cannot be one of the reserved words listed in the [Reserved words for Redis account names](https://www.alibabacloud.com/help/zh/redis/user-guide/create-and-manage-database-accounts#section-u3q-817-om3) section.
   * 
   * This parameter is required.
   * 
   * @example
   * demoaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account. The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and specific special characters. These special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * 
   * This parameter is required.
   * 
   * @example
   * uWonno21****
   */
  accountPassword?: string;
  /**
   * @remarks
   * The permissions of the account. Valid values:
   * 
   * *   **RoleReadOnly**: The account has read-only permissions.
   * *   **RoleReadWrite**: The account has read and write permissions.
   * 
   * @example
   * RoleReadOnly
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The type of the account. Set the value to **Normal**, which indicates that the account is a standard account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
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
  securityToken?: string;
  /**
   * @remarks
   * This parameter is used only for internal maintenance. You do not need to specify this parameter.
   * 
   * @example
   * SDK
   */
  sourceBiz?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountPrivilege: 'AccountPrivilege',
      accountType: 'AccountType',
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
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountPrivilege: 'string',
      accountType: 'string',
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

