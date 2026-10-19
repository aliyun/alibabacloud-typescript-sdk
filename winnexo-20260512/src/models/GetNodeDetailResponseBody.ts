// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeDetailResponseBodyAgentWorkProcessArtifacts extends $dara.Model {
  /**
   * @remarks
   * 登记产物ID；仅来自结果摘要的产物可能为空
   * 
   * @example
   * artifact_example
   */
  artifactId?: string;
  /**
   * @remarks
   * 产物在节点结果中的唯一key
   * 
   * @example
   * amount_report
   */
  artifactKey?: string;
  /**
   * @remarks
   * 产物稳定引用，包含kind、id、url；登记产物URL为重新鉴权入口，可为空
   * 
   * @example
   * {"kind":"INLINE","id":"amount_report","url":"inline://amount_report"}
   */
  ref?: { [key: string]: string };
  /**
   * @remarks
   * 产物摘要，不含inline正文
   * 
   * @example
   * 已完成签单金额统计
   */
  summary?: string;
  /**
   * @remarks
   * 产物展示标题
   * 
   * @example
   * 签单金额统计报告
   */
  title?: string;
  /**
   * @remarks
   * 产物类型
   * 
   * @example
   * TEXT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'artifactId',
      artifactKey: 'artifactKey',
      ref: 'ref',
      summary: 'summary',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactKey: 'string',
      ref: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      summary: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.ref) {
      $dara.Model.validateMap(this.ref);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeDetailResponseBodyAgentWorkProcessReplies extends $dara.Model {
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

export class GetNodeDetailResponseBodyAgentWorkProcessSkillCalls extends $dara.Model {
  /**
   * @remarks
   * 记录类型：THINK、REPLY、TOOL_CALL、SKILL_CALL或ARTIFACT
   * 
   * @example
   * SKILL_CALL
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

export class GetNodeDetailResponseBodyAgentWorkProcessThoughts extends $dara.Model {
  /**
   * @remarks
   * 记录类型：THINK、REPLY、TOOL_CALL、SKILL_CALL或ARTIFACT
   * 
   * @example
   * THINK
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

export class GetNodeDetailResponseBodyAgentWorkProcessToolCalls extends $dara.Model {
  /**
   * @remarks
   * 记录类型：THINK、REPLY、TOOL_CALL、SKILL_CALL或ARTIFACT
   * 
   * @example
   * TOOL_CALL
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

export class GetNodeDetailResponseBodyAgentWorkProcess extends $dara.Model {
  /**
   * @remarks
   * 节点产物摘要与稳定引用，与顶层artifacts一致；无产物时为空列表
   * 
   * @example
   * []
   */
  artifacts?: GetNodeDetailResponseBodyAgentWorkProcessArtifacts[];
  /**
   * @remarks
   * 已保存的回复记录，action为REPLY；无记录时为空列表
   * 
   * @example
   * []
   */
  replies?: GetNodeDetailResponseBodyAgentWorkProcessReplies[];
  /**
   * @remarks
   * 已保存的技能调用记录，action为SKILL_CALL；无记录时为空列表
   * 
   * @example
   * []
   */
  skillCalls?: GetNodeDetailResponseBodyAgentWorkProcessSkillCalls[];
  /**
   * @remarks
   * 已保存的思考记录，action为THINK；无记录时为空列表
   * 
   * @example
   * []
   */
  thoughts?: GetNodeDetailResponseBodyAgentWorkProcessThoughts[];
  /**
   * @remarks
   * 已保存的工具调用记录，action为TOOL_CALL；无记录时为空列表
   * 
   * @example
   * []
   */
  toolCalls?: GetNodeDetailResponseBodyAgentWorkProcessToolCalls[];
  static names(): { [key: string]: string } {
    return {
      artifacts: 'artifacts',
      replies: 'replies',
      skillCalls: 'skillCalls',
      thoughts: 'thoughts',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': GetNodeDetailResponseBodyAgentWorkProcessArtifacts },
      replies: { 'type': 'array', 'itemType': GetNodeDetailResponseBodyAgentWorkProcessReplies },
      skillCalls: { 'type': 'array', 'itemType': GetNodeDetailResponseBodyAgentWorkProcessSkillCalls },
      thoughts: { 'type': 'array', 'itemType': GetNodeDetailResponseBodyAgentWorkProcessThoughts },
      toolCalls: { 'type': 'array', 'itemType': GetNodeDetailResponseBodyAgentWorkProcessToolCalls },
    };
  }

  validate() {
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    if(Array.isArray(this.replies)) {
      $dara.Model.validateArray(this.replies);
    }
    if(Array.isArray(this.skillCalls)) {
      $dara.Model.validateArray(this.skillCalls);
    }
    if(Array.isArray(this.thoughts)) {
      $dara.Model.validateArray(this.thoughts);
    }
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeDetailResponseBodyArtifacts extends $dara.Model {
  /**
   * @remarks
   * 登记产物ID；仅来自结果摘要的产物可能为空
   * 
   * @example
   * artifact_example
   */
  artifactId?: string;
  /**
   * @remarks
   * 产物在节点结果中的唯一key
   * 
   * @example
   * amount_report
   */
  artifactKey?: string;
  /**
   * @remarks
   * 产物稳定引用，包含kind、id、url；登记产物URL为重新鉴权入口，可为空
   * 
   * @example
   * {"kind":"INLINE","id":"amount_report","url":"inline://amount_report"}
   */
  ref?: { [key: string]: string };
  /**
   * @remarks
   * 产物摘要，不含inline正文
   * 
   * @example
   * 已完成签单金额统计
   */
  summary?: string;
  /**
   * @remarks
   * 产物展示标题
   * 
   * @example
   * 签单金额统计报告
   */
  title?: string;
  /**
   * @remarks
   * 产物类型
   * 
   * @example
   * TEXT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'artifactId',
      artifactKey: 'artifactKey',
      ref: 'ref',
      summary: 'summary',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactKey: 'string',
      ref: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      summary: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.ref) {
      $dara.Model.validateMap(this.ref);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeDetailResponseBodyRunLog extends $dara.Model {
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

export class GetNodeDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * 按思考、技能、工具、回复和产物分组的实际工作过程
   * 
   * @example
   * {"thoughts":[],"skillCalls":[],"toolCalls":[],"replies":[],"artifacts":[]}
   */
  agentWorkProcess?: GetNodeDetailResponseBodyAgentWorkProcess;
  /**
   * @remarks
   * 已保存的节点产物摘要与稳定引用，不包含inline正文；无产物时为空列表
   * 
   * @example
   * []
   */
  artifacts?: GetNodeDetailResponseBodyArtifacts[];
  /**
   * @remarks
   * 节点执行尝试序号
   * 
   * @example
   * 1
   */
  attemptSeq?: number;
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
   * 节点会话ID，未创建时为空
   * 
   * @example
   * conversation_example
   */
  conversationId?: string;
  /**
   * @remarks
   * 当前节点会话是否可以继续输入
   * 
   * @example
   * true
   */
  conversationWritable?: boolean;
  /**
   * @remarks
   * 节点负责人展示名称，未知时为空
   * 
   * @example
   * 数字员工
   */
  handler?: string;
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
   * 节点 key（nodeKey）
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * 节点展示名称，与节点列表同源
   * 
   * @example
   * 查询签单金额
   */
  nodeName?: string;
  /**
   * @remarks
   * 节点类型，返回实际枚举
   * 
   * @example
   * AGENT
   */
  nodeType?: string;
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
   * 节点结果摘要，不含inline正文
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  /**
   * @remarks
   * 是否有待派发续轮
   * 
   * @example
   * false
   */
  resumePending?: boolean;
  /**
   * @remarks
   * 节点AI工作记录时间线，与GetAgentWorkLog同源，duration单位毫秒；无记录时为空列表
   * 
   * @example
   * []
   */
  runLog?: GetNodeDetailResponseBodyRunLog[];
  /**
   * @remarks
   * stateVersion
   * 
   * @example
   * 2
   */
  stateVersion?: number;
  /**
   * @remarks
   * 节点运行状态，返回实际枚举
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * 当前节点关联的待办ID列表，元素为待办ID字符串
   * 
   * @example
   * []
   */
  todoIds?: string[];
  /**
   * @remarks
   * 当前尝试的对话轮序号
   * 
   * @example
   * 2
   */
  turnSeq?: number;
  /**
   * @remarks
   * 节点等待原因，未等待时为空
   * 
   * @example
   * HUMAN_INPUT
   */
  waitType?: string;
  static names(): { [key: string]: string } {
    return {
      agentWorkProcess: 'agentWorkProcess',
      artifacts: 'artifacts',
      attemptSeq: 'attemptSeq',
      code: 'code',
      conversationId: 'conversationId',
      conversationWritable: 'conversationWritable',
      handler: 'handler',
      message: 'message',
      nodeId: 'nodeId',
      nodeName: 'nodeName',
      nodeType: 'nodeType',
      requestId: 'requestId',
      result: 'result',
      resumePending: 'resumePending',
      runLog: 'runLog',
      stateVersion: 'stateVersion',
      status: 'status',
      todoIds: 'todoIds',
      turnSeq: 'turnSeq',
      waitType: 'waitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentWorkProcess: GetNodeDetailResponseBodyAgentWorkProcess,
      artifacts: { 'type': 'array', 'itemType': GetNodeDetailResponseBodyArtifacts },
      attemptSeq: 'number',
      code: 'string',
      conversationId: 'string',
      conversationWritable: 'boolean',
      handler: 'string',
      message: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeType: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resumePending: 'boolean',
      runLog: { 'type': 'array', 'itemType': GetNodeDetailResponseBodyRunLog },
      stateVersion: 'number',
      status: 'string',
      todoIds: { 'type': 'array', 'itemType': 'string' },
      turnSeq: 'number',
      waitType: 'string',
    };
  }

  validate() {
    if(this.agentWorkProcess && typeof (this.agentWorkProcess as any).validate === 'function') {
      (this.agentWorkProcess as any).validate();
    }
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    if(Array.isArray(this.runLog)) {
      $dara.Model.validateArray(this.runLog);
    }
    if(Array.isArray(this.todoIds)) {
      $dara.Model.validateArray(this.todoIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

