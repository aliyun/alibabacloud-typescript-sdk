// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExternalAgentResponseBodyDataExternalAgentStatus extends $dara.Model {
  /**
   * @remarks
   * The heartbeat status. ONLINE indicates that the most recent heartbeat has not exceeded the configured timeout threshold. STALE indicates that the heartbeat has timed out. UNKNOWN indicates that the heartbeat is missing or has an invalid format. Valid values:
   * - ONLINE: Online.
   * - STALE: Heartbeat expired.
   * - UNKNOWN: Unknown.
   * 
   * @example
   * ONLINE
   */
  heartbeatStatus?: string;
  /**
   * @remarks
   * The most recent active time of the external agent in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  lastActiveAt?: string;
  /**
   * @remarks
   * The most recent heartbeat time of the external agent in RFC 3339 format.
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

export class GetExternalAgentResponseBodyDataModelQuota extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the quota is enabled. This parameter is not returned if no quota is configured.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The quota limit type. Currently, only token is supported.
   * 
   * @example
   * token
   */
  limitType?: string;
  /**
   * @remarks
   * Indicates whether the quota has been exceeded in the current cycle. This is a read-only field returned by the backend.
   * 
   * @example
   * false
   */
  overLimit?: boolean;
  /**
   * @remarks
   * The quota statistical period. day indicates daily and month indicates monthly.
   * 
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The gateway quota rule status. This is a read-only field returned by the backend.
   * 
   * @example
   * ACTIVE
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The maximum number of tokens that can be consumed within a single cycle.
   * 
   * @example
   * 1000000
   */
  usageLimit?: number;
  /**
   * @remarks
   * The number of tokens consumed in the current cycle. This is a read-only field returned by the backend.
   * 
   * @example
   * 12345
   */
  usedAmount?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      limitType: 'limitType',
      overLimit: 'overLimit',
      periodType: 'periodType',
      ruleStatus: 'ruleStatus',
      usageLimit: 'usageLimit',
      usedAmount: 'usedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      limitType: 'string',
      overLimit: 'boolean',
      periodType: 'string',
      ruleStatus: 'string',
      usageLimit: 'number',
      usedAmount: 'number',
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
   * @example
   * mc-1
   */
  modelConnectionId?: string;
  /**
   * @remarks
   * The upstream model name.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model token quota configuration and the quota usage status in the current cycle. This parameter is empty if no quota is configured.
   */
  quota?: GetExternalAgentResponseBodyDataModelQuota;
  static names(): { [key: string]: string } {
    return {
      modelConnectionId: 'modelConnectionId',
      modelName: 'modelName',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelConnectionId: 'string',
      modelName: 'string',
      quota: GetExternalAgentResponseBodyDataModelQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
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
   * This parameter is required.
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
   * The description of the external agent.
   * 
   * @example
   * A code review agent running in the user environment
   */
  description?: string;
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
   * - pending: Pending.
   * - processing: Processing.
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
   * The model configuration. This parameter is available only when modelSource is set to PLATFORM.
   */
  model?: GetExternalAgentResponseBodyDataModel;
  /**
   * @remarks
   * The model configuration source. PLATFORM indicates that the model configuration is parsed and distributed by the platform. RUNTIME indicates that the model is managed by the external runtime, and the model parameter cannot be specified at the same time. Valid values:
   * - PLATFORM: Platform model.
   * - RUNTIME: Runtime model.
   * 
   * @example
   * PLATFORM
   */
  modelSource?: string;
  /**
   * @remarks
   * The name of the external agent.
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
   * The status of the external agent. Valid values:
   * - Creating: Being created.
   * - Running: Running.
   * - Failed: Failed.
   * - Updating: Being updated.
   * - Deleting: Being deleted.
   * - Deleted: Deleted.
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
   * The business status code. The value is SUCCESS when the request succeeds.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The details of the external agent.
   */
  data?: GetExternalAgentResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value is 200 when the request succeeds.
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

