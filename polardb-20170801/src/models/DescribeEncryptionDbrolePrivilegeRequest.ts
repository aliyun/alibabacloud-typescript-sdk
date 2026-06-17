// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEncryptionDBRolePrivilegeRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-wz9fb5nn44u1d****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the role permission to query. To query multiple permissions at a time, enter multiple permission names and separate them with commas (,).
   * 
   * > - Call the [DescribeEncryptionDBRolePrivilege](https://help.aliyun.com/document_detail/212573.html) operation to view the details of all role access policy rules for the cluster. The details include the permission names.
   * 
   * @example
   * test
   */
  rolePrivilegeNameList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rolePrivilegeNameList: 'RolePrivilegeNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rolePrivilegeNameList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

