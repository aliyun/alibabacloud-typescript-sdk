// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserWithGroupsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the user (unique within the tenant, required, up to 100 characters).
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * The Base64-encoded password ciphertext encrypted by RSA-OAEP-SHA256 (required).
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  passwordEncrypted?: string;
  /**
   * @remarks
   * The list of system role codes. Valid values: SUPER_ADMIN, SYSTEM_ADMIN, SEMANTIC_ADMIN, SKILL_ADMIN, KB_ADMIN, AGENT_ADMIN, and APPLICATION_USER. Default value: APPLICATION_USER.
   * 
   * @example
   * string_value
   */
  roleCodesShrink?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The list of initial user group IDs. This parameter is optional. All user groups must belong to the current tenant.
   * 
   * @example
   * string_value
   */
  userGroupIdsShrink?: string;
  /**
   * @remarks
   * The WINNEXO logon account (unique identifier, required).
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
      roleCodesShrink: 'roleCodes',
      tenantId: 'tenantId',
      userGroupIdsShrink: 'userGroupIds',
      wnAccountId: 'wnAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      passwordEncrypted: 'string',
      roleCodesShrink: 'string',
      tenantId: 'string',
      userGroupIdsShrink: 'string',
      wnAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

