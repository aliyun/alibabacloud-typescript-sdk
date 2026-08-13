// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * RSA-OAEP-SHA256 加密后的新密码 base64 密文（必填，不可为空）
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  passwordEncrypted?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 21577
   */
  tenantId?: string;
  /**
   * @remarks
   * 目标用户ID（WINNEXO 平台用户ID）
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

