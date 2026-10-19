// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTodosShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 协作空间 ID（可选过滤；不传 = 全部空间）
   * 
   * @example
   * cg_123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 标题/摘要模糊搜索关键词
   * 
   * @example
   * 审批
   */
  keyword?: string;
  /**
   * @remarks
   * 单页最大返回数量（1~100）；传入时优先于 pageSize
   * 
   * @example
   * 20
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 优先级筛选（HIGH/MEDIUM/LOW）
   * 
   * @example
   * HIGH
   */
  prioritiesShrink?: string;
  /**
   * @remarks
   * 读取状态筛选（UNREAD/READ，按处理人 readAt 判定）
   * 
   * @example
   * UNREAD
   */
  readStatusShrink?: string;
  /**
   * @remarks
   * 排序方式
   * 
   * @example
   * DEFAULT
   */
  sortBy?: string;
  /**
   * @remarks
   * 待办类型筛选（WORKFLOW/OPEN_API）
   * 
   * @example
   * WORKFLOW
   */
  sourceTypesShrink?: string;
  /**
   * @remarks
   * 待办状态筛选（PENDING/COMPLETED/CANCELLED）
   * 
   * @example
   * PENDING
   */
  statusesShrink?: string;
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
      collaborationGroupId: 'collaborationGroupId',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      prioritiesShrink: 'priorities',
      readStatusShrink: 'readStatus',
      sortBy: 'sortBy',
      sourceTypesShrink: 'sourceTypes',
      statusesShrink: 'statuses',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      prioritiesShrink: 'string',
      readStatusShrink: 'string',
      sortBy: 'string',
      sourceTypesShrink: 'string',
      statusesShrink: 'string',
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

