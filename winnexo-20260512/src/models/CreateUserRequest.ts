// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster name.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * The base64-encoded password ciphertext encrypted by RSA-OAEP-SHA256 (required).
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  passwordEncrypted?: string;
  /**
   * @remarks
   * The list of new system role codes (full replacement, must contain at least one role). Valid values: SUPER_ADMIN, SYSTEM_ADMIN, SEMANTIC_ADMIN, SKILL_ADMIN, KB_ADMIN, AGENT_ADMIN, and APPLICATION_USER.
   * 
   * @example
   * string_value
   */
  roleCodes?: string[];
  /**
   * @remarks
   * The ID of the tenant in which the operation takes effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
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
      roleCodes: 'roleCodes',
      tenantId: 'tenantId',
      wnAccountId: 'wnAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      passwordEncrypted: 'string',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      wnAccountId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roleCodes)) {
      $dara.Model.validateArray(this.roleCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

