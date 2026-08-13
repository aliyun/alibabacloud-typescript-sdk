// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantAgentUsersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 授权截止时间戳（毫秒），不传表示永不过期
   * 
   * @example
   * 1
   */
  expireDate?: number;
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
   * 权限列表：USE（使用权限）和/或 MANAGE（管理权限），不传时默认仅 USE；不得为空列表
   * 
   * @example
   * string_value
   */
  permissionsShrink?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 676577544219585
   */
  tenantId?: string;
  /**
   * @remarks
   * 被授权的用户组 ID 列表（16位 hex 字符串）
   * 
   * @example
   * string_value
   */
  userGroupIdsShrink?: string;
  /**
   * @remarks
   * 被授权的用户 ID 列表
   * 
   * @example
   * 1
   */
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      expireDate: 'expireDate',
      operatingObjectName: 'operatingObjectName',
      permissionsShrink: 'permissions',
      tenantId: 'tenantId',
      userGroupIdsShrink: 'userGroupIds',
      userIdsShrink: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDate: 'number',
      operatingObjectName: 'string',
      permissionsShrink: 'string',
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

