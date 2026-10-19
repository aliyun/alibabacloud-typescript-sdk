// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkItemsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 业务状态筛选（七态）
   * 
   * @example
   * example
   */
  businessStatusesShrink?: string;
  /**
   * @remarks
   * 协作空间 ID
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 工作项类型筛选
   * 
   * @example
   * example
   */
  itemTypesShrink?: string;
  /**
   * @remarks
   * 标题/描述模糊搜索关键词
   * 
   * @example
   * example
   */
  keyword?: string;
  /**
   * @remarks
   * 单页最大返回数量（1~100）；传入时优先于 pageSize
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * 翻页令牌，取上次响应返回的 nextToken；传入时优先于 page
   * 
   * @example
   * example
   */
  nextToken?: string;
  /**
   * @remarks
   * 页码；传入 nextToken 时忽略
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页条数（1~100）
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 优先级筛选
   * 
   * @example
   * example
   */
  prioritiesShrink?: string;
  /**
   * @remarks
   * 个人范围筛选
   * 
   * @example
   * ASSIGNED_TO_ME
   */
  scope?: string;
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatusesShrink: 'businessStatuses',
      collaborationGroupId: 'collaborationGroupId',
      itemTypesShrink: 'itemTypes',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      prioritiesShrink: 'priorities',
      scope: 'scope',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatusesShrink: 'string',
      collaborationGroupId: 'string',
      itemTypesShrink: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      prioritiesShrink: 'string',
      scope: 'string',
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

