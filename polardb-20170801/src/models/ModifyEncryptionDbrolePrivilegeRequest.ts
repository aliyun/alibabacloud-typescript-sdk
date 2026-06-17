// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEncryptionDBRolePrivilegeRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role access policy.
   * 
   * @example
   * {"notEncryption":["alton"],"encryption":["alton01"]}
   */
  rolePrivilegeConfig?: string;
  /**
   * @remarks
   * The role permission name.
   * 
   * @example
   * test
   */
  rolePrivilegeName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rolePrivilegeConfig: 'RolePrivilegeConfig',
      rolePrivilegeName: 'RolePrivilegeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rolePrivilegeConfig: 'string',
      rolePrivilegeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

