// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * 节点结果结论，无结论时为空
   * 
   * @example
   * 分析完成
   */
  conclusion?: string;
  /**
   * @remarks
   * 从首次运行到终态的整秒数，缺时间时为空
   * 
   * @example
   * 123
   */
  duration?: number;
  /**
   * @remarks
   * 节点首次运行时间，历史或未运行节点为空
   * 
   * @example
   * 2026-10-14T08:00:00Z
   */
  enteredAt?: string;
  /**
   * @remarks
   * 节点实际进入终态的时间，未结束时为空
   * 
   * @example
   * 2026-10-14T08:02:03Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * 节点负责人展示名称，未知时为空
   * 
   * @example
   * 客户成功经理助理
   */
  handler?: string;
  /**
   * @remarks
   * 节点在工作流图中的泳道位置
   * 
   * @example
   * 0
   */
  lane?: number;
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
   * 节点展示名称
   * 
   * @example
   * 查询签单金额
   */
  nodeName?: string;
  /**
   * @remarks
   * 节点在返回拓扑列表中的展示序号，从1开始
   * 
   * @example
   * 3
   */
  nodeOrder?: number;
  /**
   * @remarks
   * 实际节点类型，例如AGENT或HUMAN
   * 
   * @example
   * AGENT
   */
  nodeType?: string;
  /**
   * @remarks
   * 节点在工作流图中的层级，从0开始
   * 
   * @example
   * 2
   */
  rank?: number;
  /**
   * @remarks
   * 原始节点运行状态，例如READY、RUNNING、WAITING、SUCCEEDED或FAILED
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * 等待原因：HUMAN_INPUT、HUMAN_STEP、REVIEW、MANUAL_PAUSE或UNBLOCK；未等待时为空
   * 
   * @example
   * REVIEW
   */
  waitType?: string;
  static names(): { [key: string]: string } {
    return {
      conclusion: 'conclusion',
      duration: 'duration',
      enteredAt: 'enteredAt',
      finishedAt: 'finishedAt',
      handler: 'handler',
      lane: 'lane',
      nodeId: 'nodeId',
      nodeName: 'nodeName',
      nodeOrder: 'nodeOrder',
      nodeType: 'nodeType',
      rank: 'rank',
      status: 'status',
      waitType: 'waitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conclusion: 'string',
      duration: 'number',
      enteredAt: 'string',
      finishedAt: 'string',
      handler: 'string',
      lane: 'number',
      nodeId: 'string',
      nodeName: 'string',
      nodeOrder: 'number',
      nodeType: 'string',
      rank: 'number',
      status: 'string',
      waitType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceNodesResponseBody extends $dara.Model {
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
   * 物理实例ID
   * 
   * @example
   * plan_example
   */
  instanceId?: string;
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
   * 按拓扑顺序排列的可见节点，数量由实际动态图决定
   * 
   * @example
   * []
   */
  nodes?: ListInstanceNodesResponseBodyNodes[];
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
   * 状态版本
   * 
   * @example
   * 2
   */
  stateVersion?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      instanceId: 'instanceId',
      message: 'message',
      nodes: 'nodes',
      requestId: 'requestId',
      stateVersion: 'stateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      nodes: { 'type': 'array', 'itemType': ListInstanceNodesResponseBodyNodes },
      requestId: 'string',
      stateVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

