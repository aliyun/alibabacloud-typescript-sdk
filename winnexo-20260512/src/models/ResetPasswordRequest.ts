// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The base64-encoded password ciphertext encrypted with RSA-OAEP-SHA256. This parameter is required and cannot be empty.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  passwordEncrypted?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 21577
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the target user (WINNEXO platform user ID).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordEncrypted: 'passwordEncrypted',
      tenantId: 'tenantId',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordEncrypted: 'string',
      tenantId: 'string',
      wnUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

