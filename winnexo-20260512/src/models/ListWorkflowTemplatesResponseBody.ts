// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowTemplatesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 模板描述
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * 最近修改时间(ISO8601)
   * 
   * @example
   * example
   */
  gmtModified?: string;
  /**
   * @remarks
   * 模板名称
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * 去重后的负责人数量
   * 
   * @example
   * 1
   */
  ownerCount?: number;
  /**
   * @remarks
   * 配置了审核人的步骤数
   * 
   * @example
   * 1
   */
  reviewStepCount?: number;
  /**
   * @remarks
   * 步骤数
   * 
   * @example
   * 1
   */
  stepCount?: number;
  /**
   * @remarks
   * 模板ID
   * 
   * @example
   * example
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      gmtModified: 'gmtModified',
      name: 'name',
      ownerCount: 'ownerCount',
      reviewStepCount: 'reviewStepCount',
      stepCount: 'stepCount',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtModified: 'string',
      name: 'string',
      ownerCount: 'number',
      reviewStepCount: 'number',
      stepCount: 'number',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码；成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 是否还有更多数据
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * 当前页模板摘要列表
   * 
   * @example
   * example
   */
  items?: ListWorkflowTemplatesResponseBodyItems[];
  /**
   * @remarks
   * 本次生效的单页最大返回数量
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * 错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 下一页翻页令牌；无更多数据时为空字符串
   * 
   * @example
   * example
   */
  nextToken?: string;
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 生效单页条数
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 筛选条件下可见总数
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasMore: 'hasMore',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListWorkflowTemplatesResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

