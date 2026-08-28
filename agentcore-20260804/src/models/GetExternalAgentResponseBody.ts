// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExternalAgentResponseBodyDataEffectiveResult extends $dara.Model {
  /**
   * @remarks
   * The user ID of the agent in Matrix.
   * 
   * @example
   * @agent-1:matrix.example.com
   */
  matrixUserId?: string;
  /**
   * @remarks
   * The Matrix personal room ID of the agent.
   * 
   * @example
   * !room:matrix.example.com
   */
  personalRoomId?: string;
  /**
   * @remarks
   * The acceptance status of the runtime for the current request version.
   * 
   * @example
   * ACCEPTED
   */
  runtimeAcceptStatus?: string;
  /**
   * @remarks
   * The runtime instance ID.
   * 
   * @example
   * runtime-123
   */
  runtimeId?: string;
  /**
   * @remarks
   * The runtime request version number.
   * 
   * @example
   * 5
   */
  runtimeRequestVersion?: number;
  /**
   * @remarks
   * The storage prefix of the agent in the workspace.
   * 
   * @example
   * agents/agent-1
   */
  workspacePrefix?: string;
  static names(): { [key: string]: string } {
    return {
      matrixUserId: 'matrixUserId',
      personalRoomId: 'personalRoomId',
      runtimeAcceptStatus: 'runtimeAcceptStatus',
      runtimeId: 'runtimeId',
      runtimeRequestVersion: 'runtimeRequestVersion',
      workspacePrefix: 'workspacePrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matrixUserId: 'string',
      personalRoomId: 'string',
      runtimeAcceptStatus: 'string',
      runtimeId: 'string',
      runtimeRequestVersion: 'number',
      workspacePrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalAgentResponseBodyDataExternalAgentStatus extends $dara.Model {
  /**
   * @remarks
   * The heartbeat status. Valid values:
   * - ONLINE: The latest heartbeat has not exceeded the configured timeout threshold.
   * - STALE: The heartbeat has timed out.
   * - UNKNOWN: The heartbeat is missing or has an invalid format.
   * 
   * @example
   * ONLINE
   */
  heartbeatStatus?: string;
  /**
   * @remarks
   * The time when the external agent was last active in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  lastActiveAt?: string;
  /**
   * @remarks
   * The time of the last heartbeat from the external agent in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  lastHeartbeat?: string;
  /**
   * @remarks
   * The local IP address reported by the external agent.
   * 
   * @example
   * 10.0.0.42
   */
  localIP?: string;
  /**
   * @remarks
   * The runtime type reported by the external agent.
   * 
   * @example
   * qwenpaw
   */
  runtime?: string;
  static names(): { [key: string]: string } {
    return {
      heartbeatStatus: 'heartbeatStatus',
      lastActiveAt: 'lastActiveAt',
      lastHeartbeat: 'lastHeartbeat',
      localIP: 'localIP',
      runtime: 'runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      heartbeatStatus: 'string',
      lastActiveAt: 'string',
      lastHeartbeat: 'string',
      localIP: 'string',
      runtime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalAgentResponseBodyDataModel extends $dara.Model {
  /**
   * @remarks
   * The model connection ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mc-1
   */
  modelConnectionId?: string;
  /**
   * @remarks
   * The upstream model name.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      modelConnectionId: 'modelConnectionId',
      modelName: 'modelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelConnectionId: 'string',
      modelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalAgentResponseBodyDataSkills extends $dara.Model {
  /**
   * @remarks
   * The skill name.
   * 
   * This parameter is required.
   * 
   * @example
   * code-analysis
   */
  name?: string;
  /**
   * @remarks
   * The skill version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
  /**
   * @remarks
   * The name of the template in AI Registry.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review-template
   */
  name?: string;
  /**
   * @remarks
   * The version of the template in AI Registry.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalAgentResponseBodyDataTemplate extends $dara.Model {
  /**
   * @remarks
   * The AI Registry template configuration.
   */
  aiRegistry?: GetExternalAgentResponseBodyDataTemplateAiRegistry;
  static names(): { [key: string]: string } {
    return {
      aiRegistry: 'aiRegistry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRegistry: GetExternalAgentResponseBodyDataTemplateAiRegistry,
    };
  }

  validate() {
    if(this.aiRegistry && typeof (this.aiRegistry as any).validate === 'function') {
      (this.aiRegistry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalAgentResponseBodyDataTools extends $dara.Model {
  /**
   * @remarks
   * The tool name.
   * 
   * This parameter is required.
   * 
   * @example
   * code-reviewer
   */
  name?: string;
  /**
   * @remarks
   * The tool type. Valid values:
   * - MCP: MCP tool.
   * 
   * This parameter is required.
   * 
   * @example
   * MCP
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

export class GetExternalAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The external agent ID.
   * 
   * @example
   * agent-1
   */
  agentId?: string;
  /**
   * @remarks
   * The creation mode.
   * 
   * @example
   * CUSTOM
   */
  createMode?: string;
  /**
   * @remarks
   * The creation time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The deployment type.
   * 
   * @example
   * SELF_HOSTED
   */
  deployType?: string;
  /**
   * @remarks
   * The external agent description.
   * 
   * @example
   * A code review agent running in the user environment
   */
  description?: string;
  /**
   * @remarks
   * The runtime result corresponding to the currently effective specification.
   */
  effectiveResult?: GetExternalAgentResponseBodyDataEffectiveResult;
  /**
   * @remarks
   * The currently effective specification version number.
   * 
   * @example
   * 1
   */
  effectiveSpecVersion?: number;
  /**
   * @remarks
   * The runtime status information reported by the external agent.
   */
  externalAgentStatus?: GetExternalAgentResponseBodyDataExternalAgentStatus;
  /**
   * @remarks
   * The agent instruction that guides the behavior of the agent.
   * 
   * @example
   * You are a code review assistant
   */
  instruction?: string;
  /**
   * @remarks
   * The latest specification version number.
   * 
   * @example
   * 1
   */
  latestSpecVersion?: number;
  /**
   * @remarks
   * The processing status of the latest specification version. Valid values:
   * - pending: Pending processing.
   * - processing: Being processed.
   * - waiting_retry: Waiting for retry.
   * - succeeded: Succeeded.
   * - failed: Failed.
   * - superseded: Superseded by a newer version.
   * 
   * @example
   * pending
   */
  latestVersionStatus?: string;
  /**
   * @remarks
   * The model configuration. Available only when modelSource is set to PLATFORM.
   */
  model?: GetExternalAgentResponseBodyDataModel;
  /**
   * @remarks
   * The model configuration source. Valid values:
   * - PLATFORM: The model configuration is parsed and delivered by the platform.
   * - RUNTIME: The model is managed by the external runtime. The model parameter cannot be specified at the same time.
   * 
   * @example
   * PLATFORM
   */
  modelSource?: string;
  /**
   * @remarks
   * The external agent name.
   * 
   * @example
   * my-external-agent
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The runtime type reported by the external agent.
   * 
   * @example
   * qwenpaw
   */
  runtime?: string;
  /**
   * @remarks
   * The list of skill configurations.
   */
  skills?: GetExternalAgentResponseBodyDataSkills[];
  /**
   * @remarks
   * The external agent status. Valid values:
   * - Creating: The agent is being created.
   * - Running: The agent is running.
   * - Failed: The agent has failed.
   * - Updating: The agent is being updated.
   * - Deleting: The agent is being deleted.
   * - Deleted: The agent has been deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The agent template configuration.
   */
  template?: GetExternalAgentResponseBodyDataTemplate;
  /**
   * @remarks
   * The list of tool configurations.
   */
  tools?: GetExternalAgentResponseBodyDataTools[];
  /**
   * @remarks
   * The update time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      createMode: 'createMode',
      createdAt: 'createdAt',
      deployType: 'deployType',
      description: 'description',
      effectiveResult: 'effectiveResult',
      effectiveSpecVersion: 'effectiveSpecVersion',
      externalAgentStatus: 'externalAgentStatus',
      instruction: 'instruction',
      latestSpecVersion: 'latestSpecVersion',
      latestVersionStatus: 'latestVersionStatus',
      model: 'model',
      modelSource: 'modelSource',
      name: 'name',
      regionId: 'regionId',
      runtime: 'runtime',
      skills: 'skills',
      status: 'status',
      template: 'template',
      tools: 'tools',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      createMode: 'string',
      createdAt: 'string',
      deployType: 'string',
      description: 'string',
      effectiveResult: GetExternalAgentResponseBodyDataEffectiveResult,
      effectiveSpecVersion: 'number',
      externalAgentStatus: GetExternalAgentResponseBodyDataExternalAgentStatus,
      instruction: 'string',
      latestSpecVersion: 'number',
      latestVersionStatus: 'string',
      model: GetExternalAgentResponseBodyDataModel,
      modelSource: 'string',
      name: 'string',
      regionId: 'string',
      runtime: 'string',
      skills: { 'type': 'array', 'itemType': GetExternalAgentResponseBodyDataSkills },
      status: 'string',
      template: GetExternalAgentResponseBodyDataTemplate,
      tools: { 'type': 'array', 'itemType': GetExternalAgentResponseBodyDataTools },
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.effectiveResult && typeof (this.effectiveResult as any).validate === 'function') {
      (this.effectiveResult as any).validate();
    }
    if(this.externalAgentStatus && typeof (this.externalAgentStatus as any).validate === 'function') {
      (this.externalAgentStatus as any).validate();
    }
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value SUCCESS indicates success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The external agent details.
   */
  data?: GetExternalAgentResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request processing result message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetExternalAgentResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

