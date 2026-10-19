// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentWorkLogResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * 记录类型：THINK、REPLY、TOOL_CALL、SKILL_CALL或ARTIFACT
   * 
   * @example
   * REPLY
   */
  action?: string;
  /**
   * @remarks
   * 已保存的原始记录内容；工具调用与产物元数据为JSON字符串
   * 
   * @example
   * 已完成本轮数据查询
   */
  detail?: string;
  /**
   * @remarks
   * 该条工作记录耗时，单位毫秒；产物记录为0
   * 
   * @example
   * 1200
   */
  duration?: number;
  /**
   * @remarks
   * 所属节点key（nodeKey），不是会话ID
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * 记录事件时间，ISO-8601格式；源记录无时间时为空字符串
   * 
   * @example
   * 2026-10-14T08:00:00Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      detail: 'detail',
      duration: 'duration',
      nodeId: 'nodeId',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      detail: 'string',
      duration: 'number',
      nodeId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentWorkLogResponseBody extends $dara.Model {
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
   * 按时间倒序的 Agent 工作记录，未保存记录时为空列表
   * 
   * @example
   * []
   */
  logs?: GetAgentWorkLogResponseBodyLogs[];
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
   * 当前页码，从1开始
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页条数，取值1至100
   * 
   * @example
   * 20
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
   * 筛选后的工作日志总条数
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      logs: 'logs',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logs: { 'type': 'array', 'itemType': GetAgentWorkLogResponseBodyLogs },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

