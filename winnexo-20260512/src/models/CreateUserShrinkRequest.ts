// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 用户显示名称（租户内唯一，不可为空，最多100字）
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * RSA-OAEP-SHA256 加密后的 base64 密码密文（必填，不可为空）
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  passwordEncrypted?: string;
  /**
   * @remarks
   * 系统角色 code 列表，可选值: SUPER_ADMIN / SYSTEM_ADMIN / SEMANTIC_ADMIN / SKILL_ADMIN / KB_ADMIN / AGENT_ADMIN / APPLICATION_USER。不传默认 APPLICATION_USER
   * 
   * @example
   * string_value
   */
  roleCodesShrink?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * WINNEXO 登录账号（唯一标识，不可为空）
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
      wnAccountId: 'wnAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      passwordEncrypted: 'string',
      roleCodesShrink: 'string',
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

