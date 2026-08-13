// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableTokenRequest extends $dara.Model {
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
   * 目标用户 ID（WINNEXO 平台用户ID，空则操作自身，管理员可传入他人 ID 代操作）
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

