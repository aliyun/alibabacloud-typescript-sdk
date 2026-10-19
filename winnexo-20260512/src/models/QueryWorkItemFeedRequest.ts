// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorkItemFeedRequest extends $dara.Model {
  /**
   * @remarks
   * 业务状态筛选（七态）
   * 
   * @example
   * example
   */
  businessStatuses?: string[];
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
   * 翻页游标，取上次响应的 nextCursor
   * 
   * @example
   * example
   */
  cursor?: string;
  /**
   * @remarks
   * 工作项类型筛选
   * 
   * @example
   * example
   */
  itemTypes?: string[];
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
   * 单页条数（1~100）
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
  priorities?: string[];
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
   * 来源任务ID；指定时返回该任务平铺子项
   * 
   * @example
   * example
   */
  sourceTaskId?: string;
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
   * 视图：FLAT 平铺 / TREE 任务分组
   * 
   * @example
   * FLAT
   */
  view?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatuses: 'businessStatuses',
      collaborationGroupId: 'collaborationGroupId',
      cursor: 'cursor',
      itemTypes: 'itemTypes',
      keyword: 'keyword',
      pageSize: 'pageSize',
      priorities: 'priorities',
      scope: 'scope',
      sourceTaskId: 'sourceTaskId',
      tenantId: 'tenantId',
      view: 'view',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatuses: { 'type': 'array', 'itemType': 'string' },
      collaborationGroupId: 'string',
      cursor: 'string',
      itemTypes: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      pageSize: 'number',
      priorities: { 'type': 'array', 'itemType': 'string' },
      scope: 'string',
      sourceTaskId: 'string',
      tenantId: 'string',
      view: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessStatuses)) {
      $dara.Model.validateArray(this.businessStatuses);
    }
    if(Array.isArray(this.itemTypes)) {
      $dara.Model.validateArray(this.itemTypes);
    }
    if(Array.isArray(this.priorities)) {
      $dara.Model.validateArray(this.priorities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

