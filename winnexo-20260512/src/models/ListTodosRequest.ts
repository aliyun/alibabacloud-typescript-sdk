// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTodosRequest extends $dara.Model {
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
  priorities?: string[];
  /**
   * @remarks
   * 读取状态筛选（UNREAD/READ，按处理人 readAt 判定）
   * 
   * @example
   * UNREAD
   */
  readStatus?: string[];
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
  sourceTypes?: string[];
  /**
   * @remarks
   * 待办状态筛选（PENDING/COMPLETED/CANCELLED）
   * 
   * @example
   * PENDING
   */
  statuses?: string[];
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
      priorities: 'priorities',
      readStatus: 'readStatus',
      sortBy: 'sortBy',
      sourceTypes: 'sourceTypes',
      statuses: 'statuses',
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
      priorities: { 'type': 'array', 'itemType': 'string' },
      readStatus: { 'type': 'array', 'itemType': 'string' },
      sortBy: 'string',
      sourceTypes: { 'type': 'array', 'itemType': 'string' },
      statuses: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.priorities)) {
      $dara.Model.validateArray(this.priorities);
    }
    if(Array.isArray(this.readStatus)) {
      $dara.Model.validateArray(this.readStatus);
    }
    if(Array.isArray(this.sourceTypes)) {
      $dara.Model.validateArray(this.sourceTypes);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

