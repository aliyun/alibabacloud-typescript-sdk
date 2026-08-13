// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 按 WINNEXO 登录账号精确批量查询（多选）；与其他筛选条件取交集。不传或传空列表 [] 均视为不按账号筛选（返回全部符合其他条件的成员）
   * 
   * @example
   * string_value
   */
  accountIdsShrink?: string;
  /**
   * @remarks
   * 启用/停用状态筛选
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * 搜索关键词（模糊匹配显示名和账号）
   * 
   * @example
   * 示例关键词
   */
  keyword?: string;
  /**
   * @remarks
   * 页码（从1开始）
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页数量（最大100）
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 按角色筛选，可选值: SUPER_ADMIN / SYSTEM_ADMIN / SEMANTIC_ADMIN / SKILL_ADMIN / KB_ADMIN / AGENT_ADMIN / APPLICATION_USER
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
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'accountIds',
      isActive: 'isActive',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      roleCodesShrink: 'roleCodes',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      isActive: 'boolean',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      roleCodesShrink: 'string',
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

