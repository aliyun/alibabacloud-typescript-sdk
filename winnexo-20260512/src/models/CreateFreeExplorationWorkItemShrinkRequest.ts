// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFreeExplorationWorkItemShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 空间内数字员工技术名称，1–5 个，不可重复
   * 
   * This parameter is required.
   * 
   * @example
   * ["sales-agent"]
   */
  agentNamesShrink?: string;
  /**
   * @remarks
   * 协作空间 ID；调用者须为有效成员
   * 
   * This parameter is required.
   * 
   * @example
   * cg_123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 协作档至少一个创建人以外的有效空间成员；最多 1000 人；私密和公开档忽略；创建人始终加入
   * 
   * @example
   * [43]
   */
  memberUserIdsShrink?: string;
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 自由探索工作项标题，去首尾空格后 1–200 字符
   * 
   * This parameter is required.
   * 
   * @example
   * 调查销售机会
   */
  title?: string;
  /**
   * @remarks
   * 可见范围：PRIVATE 私密；COLLABORATIVE 指定成员协作；PUBLIC 空间内公开
   * 
   * @example
   * PRIVATE
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      agentNamesShrink: 'agentNames',
      collaborationGroupId: 'collaborationGroupId',
      memberUserIdsShrink: 'memberUserIds',
      tenantId: 'tenantId',
      title: 'title',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNamesShrink: 'string',
      collaborationGroupId: 'string',
      memberUserIdsShrink: 'string',
      tenantId: 'string',
      title: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

