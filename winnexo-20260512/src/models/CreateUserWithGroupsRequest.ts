// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserWithGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the user. The name must be unique within the tenant and cannot exceed 100 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * The Base64-encoded password ciphertext encrypted by using the RSA-OAEP-SHA256 algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  passwordEncrypted?: string;
  /**
   * @remarks
   * The list of initial system role codes. If this parameter is not specified, the `APPLICATION_USER` role is assigned by default.
   * 
   * @example
   * string_value
   */
  roleCodes?: string[];
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this parameter explicitly by using `--tenant-id`.
   * 
   * @example
   * string_value
   */
  tenantId?: string;
  /**
   * @remarks
   * The list of initial user group IDs. A maximum of 100 user group IDs can be specified. All user groups must belong to the current tenant.
   * 
   * @example
   * string_value
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The WINNEXO logon account. This parameter is a unique identifier and cannot be empty.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleAccountId
   */
  wnAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      passwordEncrypted: 'passwordEncrypted',
      roleCodes: 'roleCodes',
      tenantId: 'tenantId',
      userGroupIds: 'userGroupIds',
      wnAccountId: 'wnAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      passwordEncrypted: 'string',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      wnAccountId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roleCodes)) {
      $dara.Model.validateArray(this.roleCodes);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

