// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 新的显示名称（不传不修改，传则不可为空，最多100字）
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * 启用/停用状态（不传不修改）。false=停用，true=启用
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * 新的系统角色 code 列表（全量替换，至少包含一个角色）。可选值: SUPER_ADMIN / SYSTEM_ADMIN / SEMANTIC_ADMIN / SKILL_ADMIN / KB_ADMIN / AGENT_ADMIN / APPLICATION_USER
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
   * 新的用户组ID列表（全量替换，不传不修改）
   * 
   * @example
   * string_value
   */
  userGroupIdsShrink?: string;
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
      displayName: 'displayName',
      isActive: 'isActive',
      roleCodesShrink: 'roleCodes',
      tenantId: 'tenantId',
      userGroupIdsShrink: 'userGroupIds',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      isActive: 'boolean',
      roleCodesShrink: 'string',
      tenantId: 'string',
      userGroupIdsShrink: 'string',
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

