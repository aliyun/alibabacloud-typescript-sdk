// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 绑定状态：BOUND(已绑定) / UNBOUND(未绑定的全局技能)；必须与 operatingObjectName 同时传入
   * 
   * @example
   * BOUND
   */
  bindStatus?: string;
  /**
   * @remarks
   * 技能筛选维度：ALL/BUILTIN/CUSTOM/DRAFT/ALL_WITH_DRAFTS
   * 
   * @example
   * ALL
   */
  filterType?: string;
  /**
   * @remarks
   * 按技能名称或描述模糊匹配
   * 
   * @example
   * 示例关键词
   */
  keyword?: string;
  /**
   * @remarks
   * 数字员工名称；必须与 bindStatus 同时传入
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 页码，从 1 开始
   * 
   * @example
   * string_value
   */
  page?: number;
  /**
   * @remarks
   * 每页数量，范围 1-100
   */
  pageSize?: number;
  /**
   * @remarks
   * 按标签过滤，数组任一命中即匹配
   * 
   * @example
   * string_value
   */
  tagsShrink?: string;
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
      bindStatus: 'bindStatus',
      filterType: 'filterType',
      keyword: 'keyword',
      operatingObjectName: 'operatingObjectName',
      page: 'page',
      pageSize: 'pageSize',
      tagsShrink: 'tags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStatus: 'string',
      filterType: 'string',
      keyword: 'string',
      operatingObjectName: 'string',
      page: 'number',
      pageSize: 'number',
      tagsShrink: 'string',
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

