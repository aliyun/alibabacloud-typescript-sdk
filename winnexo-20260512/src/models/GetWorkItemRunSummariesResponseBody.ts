// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemRunSummariesResponseBodyItemsRunSummaryTools extends $dara.Model {
  /**
   * @remarks
   * 工具名称
   * 
   * @example
   * 销售分析助手
   */
  name?: string;
  /**
   * @remarks
   * 工具类型，如 SKILL、MCP
   * 
   * @example
   * AGENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemRunSummariesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 节点尝试 ID
   * 
   * @example
   * attempt_1
   */
  attemptId?: string;
  /**
   * @remarks
   * 节点尝试序号，从 1 开始
   * 
   * @example
   * 1
   */
  attemptSeq?: number;
  /**
   * @remarks
   * 执行器 ID
   * 
   * @example
   * agent_1001
   */
  executorId?: string;
  /**
   * @remarks
   * 执行器名称
   * 
   * @example
   * 销售分析助手
   */
  executorName?: string;
  /**
   * @remarks
   * 执行器类型，如 AGENT、HUMAN
   * 
   * @example
   * AGENT
   */
  executorType?: string;
  /**
   * @remarks
   * 节点结束时间，ISO8601 格式
   * 
   * @example
   * 2026-11-05T08:05:00Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * 节点 key
   * 
   * @example
   * query.amount
   */
  nodeKey?: string;
  /**
   * @remarks
   * 节点名称
   * 
   * @example
   * 查询销售金额
   */
  nodeName?: string;
  /**
   * @remarks
   * 节点状态，如 COMPLETED、FAILED
   * 
   * @example
   * COMPLETED
   */
  nodeStatus?: string;
  /**
   * @remarks
   * 所属物理计划 ID
   * 
   * @example
   * plan_v3
   */
  planId?: string;
  /**
   * @remarks
   * 节点执行结果，JSON 对象
   * 
   * @example
   * {"rows":3}
   */
  result?: any;
  /**
   * @remarks
   * 运行总结正文；未生成时为空
   * 
   * @example
   * 已完成销售金额查询，共返回 3 行数据
   */
  runSummary?: any;
  /**
   * @remarks
   * 运行总结失败原因；成功时为空
   * 
   * @example
   * 模型调用超时
   */
  runSummaryError?: string;
  /**
   * @remarks
   * 运行总结生成时间，ISO8601 格式
   * 
   * @example
   * 2026-11-05T08:06:00Z
   */
  runSummaryGeneratedAt?: string;
  /**
   * @remarks
   * 运行总结引用的数据来源列表
   * 
   * @example
   * [{"name":"report.md"}]
   */
  runSummarySources?: any[];
  /**
   * @remarks
   * 运行总结生成状态，如 COMPLETED、FAILED、PROCESSING
   * 
   * @example
   * COMPLETED
   */
  runSummaryStatus?: string;
  /**
   * @remarks
   * 运行总结使用的工具列表
   * 
   * @example
   * [{"type":"SKILL","name":"sql_query"}]
   */
  runSummaryTools?: GetWorkItemRunSummariesResponseBodyItemsRunSummaryTools[];
  /**
   * @remarks
   * 节点开始时间，ISO8601 格式
   * 
   * @example
   * 2026-11-05T08:00:00Z
   */
  startedAt?: string;
  /**
   * @remarks
   * 节点轮次序号，从 1 开始
   * 
   * @example
   * 1
   */
  turnSeq?: number;
  static names(): { [key: string]: string } {
    return {
      attemptId: 'attemptId',
      attemptSeq: 'attemptSeq',
      executorId: 'executorId',
      executorName: 'executorName',
      executorType: 'executorType',
      finishedAt: 'finishedAt',
      nodeKey: 'nodeKey',
      nodeName: 'nodeName',
      nodeStatus: 'nodeStatus',
      planId: 'planId',
      result: 'result',
      runSummary: 'runSummary',
      runSummaryError: 'runSummaryError',
      runSummaryGeneratedAt: 'runSummaryGeneratedAt',
      runSummarySources: 'runSummarySources',
      runSummaryStatus: 'runSummaryStatus',
      runSummaryTools: 'runSummaryTools',
      startedAt: 'startedAt',
      turnSeq: 'turnSeq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptId: 'string',
      attemptSeq: 'number',
      executorId: 'string',
      executorName: 'string',
      executorType: 'string',
      finishedAt: 'string',
      nodeKey: 'string',
      nodeName: 'string',
      nodeStatus: 'string',
      planId: 'string',
      result: 'any',
      runSummary: 'any',
      runSummaryError: 'string',
      runSummaryGeneratedAt: 'string',
      runSummarySources: { 'type': 'array', 'itemType': 'any' },
      runSummaryStatus: 'string',
      runSummaryTools: { 'type': 'array', 'itemType': GetWorkItemRunSummariesResponseBodyItemsRunSummaryTools },
      startedAt: 'string',
      turnSeq: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.runSummarySources)) {
      $dara.Model.validateArray(this.runSummarySources);
    }
    if(Array.isArray(this.runSummaryTools)) {
      $dara.Model.validateArray(this.runSummaryTools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemRunSummariesResponseBody extends $dara.Model {
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
   * 当前计划、当前轮次已经生成的运行总结；重跑受影响节点的新总结生成前不会返回旧总结
   * 
   * @example
   * [{"attemptId":"attempt_example","planId":"plan_example","nodeKey":"query.amount","nodeStatus":"COMPLETED"}]
   */
  items?: GetWorkItemRunSummariesResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': GetWorkItemRunSummariesResponseBodyItems },
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

