// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * * Must start with a Chinese character or an English letter. Cannot start with `http://` or `https://`.
   * * Can contain Chinese characters, English letters, digits, underscores (_), and hyphens (-). 
   * * Must be 2 to 256 characters in length.
   * 
   * @example
   * testaccount
   */
  accountDescription?: string;
  /**
   * @remarks
   * The account name. The name must meet the following requirements:
   * * Starts with a lowercase letter and contains only lowercase letters, digits, or underscores (_).
   * * Contains up to 100 characters.
   * * Cannot be a <props="china">[reserved word for Redis account names](https://www.alibabacloud.com/help/en/redis/user-guide/create-and-manage-database-accounts#section-u3q-817-om3)<props="intl">[reserved word for Redis account names](https://www.alibabacloud.com/help/zh/redis/user-guide/create-and-manage-database-accounts#section-u3q-817-om3).
   * 
   * This parameter is required.
   * 
   * @example
   * demoaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account. The password must be 8 to 32 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, special characters, and digits. The following special characters are supported: `!@#$%^&*()_+-=`.
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
   * * **RoleReadOnly**: read-only permissions.
   * * **RoleReadWrite**: read and write permissions. This is the default value.
   * 
   * @example
   * RoleReadOnly
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The account type. Set the value to **Normal** (standard account).
   * 
   * @example
   * Normal
   */
  accountType?: string;
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
  /**
   * @remarks
   * The account parameters to modify in JSON format. The new values overwrite the original values.
   * >Notice: This parameter is supported only for Tair Serverless KV instances.
   * 
   * @example
   * {"access-db-id":"1","cu-limit":"10"}
   */
  parameters?: string;
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
      parameters: 'Parameters',
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
      parameters: 'string',
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

