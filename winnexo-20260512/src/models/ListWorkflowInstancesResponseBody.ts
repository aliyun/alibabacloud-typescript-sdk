// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstancesResponseBodyItemsCurrentNode extends $dara.Model {
  /**
   * @remarks
   * 当前处理人展示名
   * 
   * @example
   * 张三
   */
  handler?: string;
  /**
   * @remarks
   * 处理人或数字员工标识
   * 
   * @example
   * user_10086
   */
  handlerId?: string;
  /**
   * @remarks
   * 真实运行节点 nodeKey
   * 
   * @example
   * node_key_confirm
   */
  nodeId?: string;
  /**
   * @remarks
   * 节点展示名
   * 
   * @example
   * 需求确认
   */
  nodeName?: string;
  /**
   * @remarks
   * 真实节点类型 AGENT/HUMAN/CONDITION
   * 
   * @example
   * AGENT
   */
  nodeType?: string;
  /**
   * @remarks
   * 节点运行状态
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      handler: 'handler',
      handlerId: 'handlerId',
      nodeId: 'nodeId',
      nodeName: 'nodeName',
      nodeType: 'nodeType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handler: 'string',
      handlerId: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponseBodyItemsCurrentNodes extends $dara.Model {
  /**
   * @remarks
   * 当前处理人展示名
   * 
   * @example
   * 张三
   */
  handler?: string;
  /**
   * @remarks
   * 处理人或数字员工标识
   * 
   * @example
   * user_10086
   */
  handlerId?: string;
  /**
   * @remarks
   * 真实运行节点 nodeKey
   * 
   * @example
   * node_key_confirm
   */
  nodeId?: string;
  /**
   * @remarks
   * 节点展示名
   * 
   * @example
   * 需求确认
   */
  nodeName?: string;
  /**
   * @remarks
   * 真实节点类型 AGENT/HUMAN/CONDITION
   * 
   * @example
   * AGENT
   */
  nodeType?: string;
  /**
   * @remarks
   * 节点运行状态
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      handler: 'handler',
      handlerId: 'handlerId',
      nodeId: 'nodeId',
      nodeName: 'nodeName',
      nodeType: 'nodeType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handler: 'string',
      handlerId: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponseBodyItemsProgress extends $dara.Model {
  /**
   * @remarks
   * 已成功或跳过的可见节点数
   * 
   * @example
   * 3
   */
  completedCount?: number;
  /**
   * @remarks
   * 当前图可见节点总数，非固定六节点
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'completedCount',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 空间内唯一外部需求编号
   * 
   * @example
   * REQ-1001
   */
  businessId?: string;
  /**
   * @remarks
   * 协作空间 ID
   * 
   * @example
   * cg_20261016_abc123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 逻辑实例创建时间，ISO8601
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * 首个活动节点，终态为 null
   */
  currentNode?: ListWorkflowInstancesResponseBodyItemsCurrentNode;
  /**
   * @remarks
   * 全部活动节点，支持并行 DAG
   */
  currentNodes?: ListWorkflowInstancesResponseBodyItemsCurrentNodes[];
  /**
   * @remarks
   * 当前计划终态时间，未结束为 null
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  endedAt?: string;
  /**
   * @remarks
   * 外部发起人标签，不参与鉴权
   * 
   * @example
   * 外部发起人张三
   */
  initiator?: string;
  /**
   * @remarks
   * 稳定逻辑实例 ID，工作项重启不改变
   * 
   * @example
   * wfi_20261016_abc123
   */
  instanceId?: string;
  /**
   * @remarks
   * 原始计划暂停范围
   * 
   * @example
   * ALL
   */
  pauseScope?: string;
  /**
   * @remarks
   * 当前物理计划修订 ID
   * 
   * @example
   * plan_20261016_abc123
   */
  planId?: string;
  /**
   * @remarks
   * 可见图进度
   */
  progress?: ListWorkflowInstancesResponseBodyItemsProgress;
  /**
   * @remarks
   * 原始计划审核状态
   * 
   * @example
   * APPROVED
   */
  reviewStatus?: string;
  /**
   * @remarks
   * 当前物理计划修订号
   * 
   * @example
   * 3
   */
  revision?: number;
  /**
   * @remarks
   * 当前运行 ID，重启后会改变
   * 
   * @example
   * run_20261016_abc123
   */
  runId?: string;
  /**
   * @remarks
   * 原始 BUILDING/RUNNING/SUCCEEDED/FAILED/CANCELLED
   * 
   * @example
   * RUNNING
   */
  runtimeStatus?: string;
  /**
   * @remarks
   * 当前计划节点首次开始时间，未执行为 null
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  startedAt?: string;
  /**
   * @remarks
   * 运行状态版本
   * 
   * @example
   * 7
   */
  stateVersion?: number;
  /**
   * @remarks
   * Running/Completed/Failed/Terminated
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * 创建时绑定的工作流模板 ID
   * 
   * @example
   * wft_20261016_abc123
   */
  templateId?: string;
  /**
   * @remarks
   * 当前需求标题
   * 
   * @example
   * 季度经营分析报告
   */
  title?: string;
  /**
   * @remarks
   * 关联工作项 ID
   * 
   * @example
   * wi_20261016_abc123
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'businessId',
      collaborationGroupId: 'collaborationGroupId',
      createdAt: 'createdAt',
      currentNode: 'currentNode',
      currentNodes: 'currentNodes',
      endedAt: 'endedAt',
      initiator: 'initiator',
      instanceId: 'instanceId',
      pauseScope: 'pauseScope',
      planId: 'planId',
      progress: 'progress',
      reviewStatus: 'reviewStatus',
      revision: 'revision',
      runId: 'runId',
      runtimeStatus: 'runtimeStatus',
      startedAt: 'startedAt',
      stateVersion: 'stateVersion',
      status: 'status',
      templateId: 'templateId',
      title: 'title',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      collaborationGroupId: 'string',
      createdAt: 'string',
      currentNode: ListWorkflowInstancesResponseBodyItemsCurrentNode,
      currentNodes: { 'type': 'array', 'itemType': ListWorkflowInstancesResponseBodyItemsCurrentNodes },
      endedAt: 'string',
      initiator: 'string',
      instanceId: 'string',
      pauseScope: 'string',
      planId: 'string',
      progress: ListWorkflowInstancesResponseBodyItemsProgress,
      reviewStatus: 'string',
      revision: 'number',
      runId: 'string',
      runtimeStatus: 'string',
      startedAt: 'string',
      stateVersion: 'number',
      status: 'string',
      templateId: 'string',
      title: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    if(this.currentNode && typeof (this.currentNode as any).validate === 'function') {
      (this.currentNode as any).validate();
    }
    if(Array.isArray(this.currentNodes)) {
      $dara.Model.validateArray(this.currentNodes);
    }
    if(this.progress && typeof (this.progress as any).validate === 'function') {
      (this.progress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码，来自统一 POP 响应包装
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 当前页实例列表
   */
  items?: ListWorkflowInstancesResponseBodyItems[];
  /**
   * @remarks
   * 用户可见错误描述，来自统一 POP 响应包装
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
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
   * 每页数量
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
   * 筛选后可见实例总数
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
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
      items: { 'type': 'array', 'itemType': ListWorkflowInstancesResponseBodyItems },
      message: 'string',
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

