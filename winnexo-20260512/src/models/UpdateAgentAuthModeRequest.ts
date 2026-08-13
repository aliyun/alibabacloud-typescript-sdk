// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentAuthModeRequest extends $dara.Model {
  /**
   * @remarks
   * 使用权限授权模式：SPECIFIED_USERS=指定用户（需显式授权），ALL_USERS=所有用户（无需授权即可使用）
   * 
   * This parameter is required.
   * 
   * @example
   * SPECIFIED_USERS
   */
  authMode?: string;
  /**
   * @remarks
   * 数字员工名称
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      authMode: 'authMode',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMode: 'string',
      operatingObjectName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

