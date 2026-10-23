// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeDetailResponseBodyAgentWorkProcessArtifacts extends $dara.Model {
  /**
   * @remarks
   * The registered artifact ID. This parameter may be empty for artifacts derived only from the result summary.
   * 
   * @example
   * artifact_example
   */
  artifactId?: string;
  /**
   * @remarks
   * The unique key of the artifact in the node result.
   * 
   * @example
   * amount_report
   */
  artifactKey?: string;
  /**
   * @remarks
   * The stable reference of the artifact, including kind, id, and url. The URL of a registered artifact is a re-authentication entry point and can be empty.
   * 
   * @example
   * {"kind":"INLINE","id":"amount_report","url":"inline://amount_report"}
   */
  ref?: { [key: string]: string };
  /**
   * @remarks
   * The artifact summary, excluding inline content.
   * 
   * @example
   * Signed amount statistics completed
   */
  summary?: string;
  /**
   * @remarks
   * The display title of the artifact.
   * 
   * @example
   * Signed amount statistics report
   */
  title?: string;
  /**
   * @remarks
   * The artifact type.
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
   * The record type. Valid values: THINK, REPLY, TOOL_CALL, SKILL_CALL, or ARTIFACT.
   * 
   * @example
   * REPLY
   */
  action?: string;
  /**
   * @remarks
   * The saved original record content. Tool invocation and artifact metadata are JSON strings.
   * 
   * @example
   * Data query for this turn completed
   */
  detail?: string;
  /**
   * @remarks
   * The time taken for this work record, in milliseconds. The value is 0 for artifact records.
   * 
   * @example
   * 1200
   */
  duration?: number;
  /**
   * @remarks
   * The key of the parent node, not the conversation ID.
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * The time when the event is recorded, in ISO-8601 format. This is an empty string if the source record has no time.
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
   * The record type. Valid values: THINK, REPLY, TOOL_CALL, SKILL_CALL, or ARTIFACT.
   * 
   * @example
   * SKILL_CALL
   */
  action?: string;
  /**
   * @remarks
   * The saved original record content. Tool invocation and artifact metadata are JSON strings.
   * 
   * @example
   * Data query for this turn completed
   */
  detail?: string;
  /**
   * @remarks
   * The time taken for this work record, in milliseconds. The value is 0 for artifact records.
   * 
   * @example
   * 1200
   */
  duration?: number;
  /**
   * @remarks
   * The key of the parent node, not the conversation ID.
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * The time when the event is recorded, in ISO-8601 format. This is an empty string if the source record has no time.
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
   * The record type. Valid values: THINK, REPLY, TOOL_CALL, SKILL_CALL, or ARTIFACT.
   * 
   * @example
   * THINK
   */
  action?: string;
  /**
   * @remarks
   * The saved original record content. Tool invocation and artifact metadata are JSON strings.
   * 
   * @example
   * Data query for this turn completed
   */
  detail?: string;
  /**
   * @remarks
   * The time taken for this work record, in milliseconds. The value is 0 for artifact records.
   * 
   * @example
   * 1200
   */
  duration?: number;
  /**
   * @remarks
   * The key of the parent node, not the conversation ID.
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * The time when the event is recorded, in ISO-8601 format. This is an empty string if the source record has no time.
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
   * The record type. Valid values: THINK, REPLY, TOOL_CALL, SKILL_CALL, or ARTIFACT.
   * 
   * @example
   * TOOL_CALL
   */
  action?: string;
  /**
   * @remarks
   * The saved original record content. Tool invocation and artifact metadata are JSON strings.
   * 
   * @example
   * Data query for this turn completed
   */
  detail?: string;
  /**
   * @remarks
   * The time taken for this work record, in milliseconds. The value is 0 for artifact records.
   * 
   * @example
   * 1200
   */
  duration?: number;
  /**
   * @remarks
   * The key of the parent node, not the conversation ID.
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * The time when the event is recorded, in ISO-8601 format. This is an empty string if the source record has no time.
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
   * The artifacts: saved node work records and artifacts.
   * 
   * @example
   * []
   */
  artifacts?: GetNodeDetailResponseBodyAgentWorkProcessArtifacts[];
  /**
   * @remarks
   * The replies: saved node work records and artifacts.
   * 
   * @example
   * []
   */
  replies?: GetNodeDetailResponseBodyAgentWorkProcessReplies[];
  /**
   * @remarks
   * The skill calls: saved node work records and artifacts.
   * 
   * @example
   * []
   */
  skillCalls?: GetNodeDetailResponseBodyAgentWorkProcessSkillCalls[];
  /**
   * @remarks
   * The thoughts: saved node work records and artifacts.
   * 
   * @example
   * []
   */
  thoughts?: GetNodeDetailResponseBodyAgentWorkProcessThoughts[];
  /**
   * @remarks
   * The tool calls: saved node work records and artifacts.
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
   * The registered artifact ID. This parameter may be empty for artifacts derived only from the result summary.
   * 
   * @example
   * artifact_example
   */
  artifactId?: string;
  /**
   * @remarks
   * The unique key of the artifact in the node result.
   * 
   * @example
   * amount_report
   */
  artifactKey?: string;
  /**
   * @remarks
   * The stable reference of the artifact, including kind, id, and url. The URL of a registered artifact is a re-authentication entry point and can be empty.
   * 
   * @example
   * {"kind":"INLINE","id":"amount_report","url":"inline://amount_report"}
   */
  ref?: { [key: string]: string };
  /**
   * @remarks
   * The artifact summary, excluding inline content.
   * 
   * @example
   * Signed amount statistics completed
   */
  summary?: string;
  /**
   * @remarks
   * The display title of the artifact.
   * 
   * @example
   * Signed amount statistics report
   */
  title?: string;
  /**
   * @remarks
   * The artifact type.
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
   * The record type. Valid values: THINK, REPLY, TOOL_CALL, SKILL_CALL, or ARTIFACT.
   * 
   * @example
   * REPLY
   */
  action?: string;
  /**
   * @remarks
   * The saved original record content. Tool invocation and artifact metadata are JSON strings.
   * 
   * @example
   * Data query for this turn completed
   */
  detail?: string;
  /**
   * @remarks
   * The time taken for this work record, in milliseconds. The value is 0 for artifact records.
   * 
   * @example
   * 1200
   */
  duration?: number;
  /**
   * @remarks
   * The key of the parent node, not the conversation ID.
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * The time when the event is recorded, in ISO-8601 format. This is an empty string if the source record has no time.
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
   * The actual work process grouped by thoughts, skills, tools, replies, and artifacts.
   * 
   * @example
   * {"thoughts":[],"skillCalls":[],"toolCalls":[],"replies":[],"artifacts":[]}
   */
  agentWorkProcess?: GetNodeDetailResponseBodyAgentWorkProcess;
  /**
   * @remarks
   * The artifacts: saved node work records and artifacts.
   * 
   * @example
   * []
   */
  artifacts?: GetNodeDetailResponseBodyArtifacts[];
  /**
   * @remarks
   * The sequence number of the node execution attempt.
   * 
   * @example
   * 1
   */
  attemptSeq?: number;
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The node conversation ID. This parameter is empty if no conversation is created.
   * 
   * @example
   * conversation_example
   */
  conversationId?: string;
  /**
   * @remarks
   * Indicates whether the current node conversation can continue to receive input.
   * 
   * @example
   * true
   */
  conversationWritable?: boolean;
  /**
   * @remarks
   * The display name of the node owner. This parameter is empty if the owner is unknown.
   * 
   * @example
   * Digital worker
   */
  handler?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The node key.
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * The display name of the node, which shares the same source as the node list.
   * 
   * @example
   * Query signed amount
   */
  nodeName?: string;
  /**
   * @remarks
   * The node type. The actual enum value is returned.
   * 
   * @example
   * AGENT
   */
  nodeType?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The node result summary, excluding inline content.
   * 
   * @example
   * {}
   */
  result?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether there are pending follow-up turns to be dispatched.
   * 
   * @example
   * false
   */
  resumePending?: boolean;
  /**
   * @remarks
   * The run log: saved node work records and artifacts.
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
   * The node running status. The actual enum value is returned.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The list of to-do IDs associated with the current node.
   * 
   * @example
   * []
   */
  todoIds?: string[];
  /**
   * @remarks
   * The sequence number of the conversation turn in the current attempt.
   * 
   * @example
   * 2
   */
  turnSeq?: number;
  /**
   * @remarks
   * The reason why the node is waiting. This parameter is empty if the node is not waiting.
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

