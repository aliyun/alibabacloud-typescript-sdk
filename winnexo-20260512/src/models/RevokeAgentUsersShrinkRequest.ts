// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeAgentUsersShrinkRequest extends $dara.Model {
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
  /**
   * @remarks
   * 被撤销的用户组 ID 列表（16位 hex 字符串）
   * 
   * @example
   * string_value
   */
  userGroupIdsShrink?: string;
  /**
   * @remarks
   * 被撤销的用户 ID 列表
   * 
   * @example
   * 1
   */
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
      userGroupIdsShrink: 'userGroupIds',
      userIdsShrink: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingObjectName: 'string',
      tenantId: 'string',
      userGroupIdsShrink: 'string',
      userIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

