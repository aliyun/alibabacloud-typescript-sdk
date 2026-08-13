// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 创建人
   * 
   * @example
   * string_value
   */
  creator?: string;
  /**
   * @remarks
   * Cron 表达式
   * 
   * @example
   * string_value
   */
  cronExpression?: string;
  /**
   * @remarks
   * 任务简述
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 累计执行次数
   * 
   * @example
   * 1
   */
  executionCount?: number;
  /**
   * @remarks
   * 创建时间 ISO8601
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 修改时间 ISO8601
   * 
   * @example
   * string_value
   */
  gmtModified?: string;
  /**
   * @remarks
   * 是否公开
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 任务 ID
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * 触发类型（manual/cron/event）
   * 
   * @example
   * string_value
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      cronExpression: 'cronExpression',
      description: 'description',
      executionCount: 'executionCount',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      isOpen: 'isOpen',
      name: 'name',
      taskId: 'taskId',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      cronExpression: 'string',
      description: 'string',
      executionCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      isOpen: 'boolean',
      name: 'string',
      taskId: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 是否有更多数据
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  items?: ListScheduledTasksResponseBodyItems[];
  /**
   * @remarks
   * 本次实际生效的单页最大返回数量
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 下一页翻页令牌，原样回传即可取下一页；无更多数据时为空字符串
   */
  nextToken?: string;
  /**
   * @remarks
   * 当前页码（实际生效值）
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页条数（实际生效值）
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 满足条件的总数
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
      items: { 'type': 'array', 'itemType': ListScheduledTasksResponseBodyItems },
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

