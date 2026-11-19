// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAccountRequestRoles extends $dara.Model {
  /**
   * @remarks
   * The database to which the account belongs (authentication database).<br>
   * Default value: `admin`.<br>Rules: If this parameter is left empty, the request is allowed and the downstream system processes it as `admin`. If this parameter is specified, the length must be 1 to 63 characters. The value cannot contain `/`, `\\`, `.`, spaces, `"`, or `$`, and cannot be `local`. Otherwise, `InvalidParameter` is returned.
   * 
   * @example
   * admin
   */
  DBName?: string;
  /**
   * @remarks
   * The role name. It can be a built-in role or a custom role created on the instance. For value rules, see [Roles parameter description](https://www.alibabacloud.com/help/en/mongodb/manage-database-accounts-through-the-console).
   * 
   * @example
   * read
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The account description.
   * 
   * - Regular expression: `^[a-zA-Z一-龥][a-zA-Z一-龥0-9_.-]{1,255}$`. The description must start with an English letter or Chinese character, followed by English letters, Chinese characters, digits, underscores (_), periods (.), or hyphens (-). The length must be 2 to 256 characters.
   * - If the description is invalid, InvalidAccountDescription.Malformed is returned.
   * 
   * @example
   * test
   */
  accountDescription?: string;
  /**
   * @remarks
   * The account name.
   * - Regular expression: `^[a-z]+[a-z0-9|_]*[a-z0-9]+$`. The name must start with a lowercase letter, end with a lowercase letter or digit, and can contain lowercase letters, digits, and underscores (_). The length must be 2 to 16 characters.
   * - The reserved name `root` (case-insensitive, built-in system account) cannot be used.
   * - The name cannot start with `__cloud` (reserved prefix for system accounts).
   * - If the name is invalid, `InvalidAccountName.Malformed` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * admin1
   */
  accountName?: string;
  /**
   * @remarks
   * The account password.
   * - The length must be 8 to 32 characters. It can contain uppercase letters, lowercase letters, digits, and the following special characters: `!@#$%^&*()_+-=`.
   * - The password must contain at least **three** of the following four character types: uppercase letters, lowercase letters, digits, and special characters.
   * - If the password is invalid, `InvalidAccountPassword.Malformed` is returned.
   * 
   * 
   * > For information about how to handle special characters, see [How do I resolve the connection failure caused by special characters in the account name or password of a connection string?](https://help.aliyun.com/document_detail/471568.html)
   * 
   * This parameter is required.
   * 
   * @example
   * Test123456!
   */
  accountPassword?: string;
  /**
   * @remarks
   * The account type.<br>Valid values:<br>- `normal`: replica set account. For a replica set instance, any value is processed as `normal`.<br>- `cs`: sharded cluster ConfigServer account.<br>- `db`: sharded cluster Shard direct connection account. For a sharded cluster instance, any value other than `cs` is processed as `db`.<br>Default value: `db`.
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID. For a sharded cluster instance, specify the sharded cluster ID. Account operations are executed from the perspective of the ConfigServer.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-uf6e9433e955xxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database to which the account belongs (authentication database).<br>
   * Default value: `admin`.<br>Rules: If this parameter is left empty, the request is allowed and the downstream system processes it as `admin`. If this parameter is specified, the length must be 1 to 63 characters. The value cannot contain `/`, `\\`, `.`, spaces, `"`, or `$`, and cannot be `local`. Otherwise, `InvalidParameter` is returned.
   * 
   * @example
   * admin
   */
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of authorization roles for the account. **Required for replica set and ConfigServer (cs) accounts**. **Prohibited for sharded cluster Shard direct connection (db) accounts**.
   * - **Globally prohibited** (returns `InvalidRoles.NotAllowed`): `root`, `clusterAdmin`, `hostManager`, `clusterManager`, `__system`, `__queryableBackup`, and `restore`.
   * - **Can be authorized to any database (including admin)**: `read`, `userAdmin`, and `enableSharding`.
   * - **Can only be authorized to non-admin databases** (returns `InvalidRoles.InvalidDB` if authorized to admin): `readWrite`, `dbAdmin`, and `dbOwner`.
   * - **Can only be authorized to the admin database**: `readAnyDatabase`, `readWriteAnyDatabase`, `userAdminAnyDatabase`, `dbAdminAnyDatabase`, `clusterMonitor`, `backup`, and `alibabaCloudAdmin`. (`alibabaCloudAdmin` is supported only for instances with kernel version 4.4 or later. For earlier versions, `InvalidRoles.NotAllowed` is returned.)
   * - **Custom roles**: Roles other than the preceding ones are considered custom roles and must already exist in the instance (you can query them by calling DescribeAccountRoles). Otherwise, `InvalidRoles.NotFound` is returned. `Roles.N.DBName` must be the same as the database where the role is defined. Otherwise, `InvalidRoles.DBNotMatch` is returned.
   * - If `Roles` is missing as a whole, `MissingRoles` is returned. If `Roles.N.Role` and `Roles.N.DBName` do not appear in pairs, `InvalidRoles.Malformed` is returned. If `Roles` is passed for a sharded cluster Shard direct connection account, `InvalidRoles.NotSupported` is returned.
   */
  roles?: CreateAccountRequestRoles[];
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      characterType: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roles: { 'type': 'array', 'itemType': CreateAccountRequestRoles },
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

