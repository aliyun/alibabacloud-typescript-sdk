// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemAuditResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 字段变更明细列表，每项包含变更字段与前后值
   * 
   * @example
   * [{"field":"title","before":"旧标题","after":"新标题"}]
   */
  changes?: any;
  /**
   * @remarks
   * 事件描述
   * 
   * @example
   * 工作项标题调整为季度销售机会复盘
   */
  description?: string;
  /**
   * @remarks
   * 审计事件唯一标识
   * 
   * @example
   * evt_20261105_0001
   */
  eventId?: string;
  /**
   * @remarks
   * 审计事件类型，如 WORK_ITEM_UPDATED、TODO_COMPLETED
   * 
   * @example
   * WORK_ITEM_UPDATED
   */
  eventType?: string;
  /**
   * @remarks
   * 事件发生时间，ISO8601 格式
   * 
   * @example
   * 2026-11-05T08:00:00Z
   */
  occurredAt?: string;
  /**
   * @remarks
   * 操作人显示名
   * 
   * @example
   * 张三
   */
  operatorName?: string;
  /**
   * @remarks
   * 操作人用户 ID
   * 
   * @example
   * 10001
   */
  operatorUserId?: string;
  /**
   * @remarks
   * 事件涉及的待确认问题列表
   * 
   * @example
   * [{"question":"是否继续执行"}]
   */
  questions?: any[];
  /**
   * @remarks
   * 事件结果负载，JSON 对象；无结果时为空
   * 
   * @example
   * {"result":"ok"}
   */
  resultPayload?: any;
  /**
   * @remarks
   * 事件状态
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * 事件标题
   * 
   * @example
   * 调查销售机会
   */
  title?: string;
  /**
   * @remarks
   * 关联待办 ID；无关联时为空字符串
   * 
   * @example
   * todo_20261105_0007
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      changes: 'changes',
      description: 'description',
      eventId: 'eventId',
      eventType: 'eventType',
      occurredAt: 'occurredAt',
      operatorName: 'operatorName',
      operatorUserId: 'operatorUserId',
      questions: 'questions',
      resultPayload: 'resultPayload',
      status: 'status',
      title: 'title',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changes: 'any',
      description: 'string',
      eventId: 'string',
      eventType: 'string',
      occurredAt: 'string',
      operatorName: 'string',
      operatorUserId: 'string',
      questions: { 'type': 'array', 'itemType': 'any' },
      resultPayload: 'any',
      status: 'string',
      title: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.questions)) {
      $dara.Model.validateArray(this.questions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * 公共业务状态码
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 按事件时间倒序排列的完整工作项审计记录
   * 
   * @example
   * [{"eventId":"evt_example","eventType":"WORK_ITEM_UPDATED","occurredAt":"2026-11-05T08:00:00Z","status":"SUCCESS"}]
   */
  items?: GetWorkItemAuditResponseBodyItems[];
  /**
   * @remarks
   * 公共错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': GetWorkItemAuditResponseBodyItems },
      message: 'string',
      requestId: 'string',
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

