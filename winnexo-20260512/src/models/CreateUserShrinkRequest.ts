// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * The Base64-encoded password ciphertext encrypted by using RSA-OAEP-SHA256. This parameter is required and cannot be empty.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  passwordEncrypted?: string;
  /**
   * @remarks
   * The list of new system role codes. This list fully replaces the existing roles and must contain at least one role. Valid values: SUPER_ADMIN, SYSTEM_ADMIN, SEMANTIC_ADMIN, SKILL_ADMIN, KB_ADMIN, AGENT_ADMIN, and APPLICATION_USER.
   * 
   * @example
   * ["SYSTEM_ADMIN"]
   */
  roleCodesShrink?: string;
  /**
   * @remarks
   * The type of the SSO provider. This parameter is optional if the tenant has only one external logon method, and is required if the tenant has multiple external logon methods. Currently, createUser supports BUILD_IN and AGENT_ONE.
   * 
   * @example
   * AGENT_ONE
   */
  ssoProvider?: string;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The WINNEXO logon account. This is a unique identifier and cannot be empty.
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
      ssoProvider: 'ssoProvider',
      tenantId: 'tenantId',
      wnAccountId: 'wnAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      passwordEncrypted: 'string',
      roleCodesShrink: 'string',
      ssoProvider: 'string',
      tenantId: 'string',
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

