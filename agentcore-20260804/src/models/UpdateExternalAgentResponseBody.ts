// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExternalAgentResponseBodyDataConfiguredSkillsVersionSelector extends $dara.Model {
  /**
   * @remarks
   * The type of the version selector. Valid values:
   * - LABEL: By label.
   * - VERSION: By specific version.
   * 
   * @example
   * LABEL
   */
  type?: string;
  /**
   * @remarks
   * The value of the selector. When the type is LABEL, this is the label name, such as latest. When the type is VERSION, this is the specific version number.
   * 
   * @example
   * latest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExternalAgentResponseBodyDataConfiguredSkills extends $dara.Model {
  /**
   * @remarks
   * The name of the skill in the Workspace AI Registry.
   * 
   * This parameter is required.
   * 
   * @example
   * web-search
   */
  name?: string;
  /**
   * @remarks
   * The source type of the skill. Valid values:
   * - REFERENCE: References the AI Registry.
   * - STATIC: Statically provided with the package.
   * 
   * @example
   * REFERENCE
   */
  sourceType?: string;
  /**
   * @remarks
   * The legacy compatibility field. Use sourceType and versionSelector for new requests.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The referenced version selector. If omitted, the default is LABEL/latest. Currently, only LABEL/latest is supported.
   */
  versionSelector?: UpdateExternalAgentResponseBodyDataConfiguredSkillsVersionSelector;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      sourceType: 'sourceType',
      version: 'version',
      versionSelector: 'versionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceType: 'string',
      version: 'string',
      versionSelector: UpdateExternalAgentResponseBodyDataConfiguredSkillsVersionSelector,
    };
  }

  validate() {
    if(this.versionSelector && typeof (this.versionSelector as any).validate === 'function') {
      (this.versionSelector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExternalAgentResponseBodyDataExternalAgentStatus extends $dara.Model {
  /**
   * @remarks
   * The heartbeat status. ONLINE indicates that the latest heartbeat has not exceeded the configured timeout threshold. STALE indicates that the heartbeat has timed out. UNKNOWN indicates that the heartbeat is missing or the format is invalid. Valid values:
   * - ONLINE: online
   * - STALE: heartbeat expired
   * - UNKNOWN: unknown
   * 
   * @example
   * ONLINE
   */
  heartbeatStatus?: string;
  /**
   * @remarks
   * The last active time of the external agent in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  lastActiveAt?: string;
  /**
   * @remarks
   * The last heartbeat time of the external agent in RFC 3339 format.
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

export class UpdateExternalAgentResponseBodyDataModelQuota extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the quota is enabled. This field is not returned if no quota is configured.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The quota limit type. Only token is supported.
   * 
   * @example
   * token
   */
  limitType?: string;
  /**
   * @remarks
   * Indicates whether the quota is exceeded for the current cycle. This is a read-only field returned by the backend.
   * 
   * @example
   * false
   */
  overLimit?: boolean;
  /**
   * @remarks
   * The quota statistical period. A value of day indicates daily, and a value of month indicates monthly.
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
   * The maximum number of tokens allowed to be consumed in a single cycle.
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

export class UpdateExternalAgentResponseBodyDataModel extends $dara.Model {
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
   * The model token quota configuration and usage status for the current cycle. This field is empty if no quota is configured.
   */
  quota?: UpdateExternalAgentResponseBodyDataModelQuota;
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
      quota: UpdateExternalAgentResponseBodyDataModelQuota,
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

export class UpdateExternalAgentResponseBodyDataSkillsVersionSelector extends $dara.Model {
  /**
   * @remarks
   * The type of the version selector. Valid values:
   * - LABEL: By label.
   * - VERSION: By specific version.
   * 
   * @example
   * LABEL
   */
  type?: string;
  /**
   * @remarks
   * The value of the selector. When the type is LABEL, this is the label name, such as latest. When the type is VERSION, this is the specific version number.
   * 
   * @example
   * latest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExternalAgentResponseBodyDataSkills extends $dara.Model {
  /**
   * @remarks
   * The applied version in the runtime. This is a read-only field.
   * 
   * @example
   * 1.0.0
   */
  appliedVersion?: string;
  /**
   * @remarks
   * Indicates whether the skill is from a fixed template. This is a read-only field. Template items cannot be removed.
   * 
   * @example
   * false
   */
  fromTemplate?: boolean;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * code-analysis
   */
  name?: string;
  /**
   * @remarks
   * The current target version. This is a read-only field.
   * 
   * @example
   * 1.0.0
   */
  resolvedVersion?: string;
  /**
   * @remarks
   * The source type of the skill. Valid values:
   * - REFERENCE: References the AI Registry.
   * - STATIC: Statically provided with the package.
   * 
   * @example
   * REFERENCE
   */
  sourceType?: string;
  /**
   * @remarks
   * The skill version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The referenced version selector, which defaults to LABEL/latest if omitted.
   */
  versionSelector?: UpdateExternalAgentResponseBodyDataSkillsVersionSelector;
  static names(): { [key: string]: string } {
    return {
      appliedVersion: 'appliedVersion',
      fromTemplate: 'fromTemplate',
      name: 'name',
      resolvedVersion: 'resolvedVersion',
      sourceType: 'sourceType',
      version: 'version',
      versionSelector: 'versionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedVersion: 'string',
      fromTemplate: 'boolean',
      name: 'string',
      resolvedVersion: 'string',
      sourceType: 'string',
      version: 'string',
      versionSelector: UpdateExternalAgentResponseBodyDataSkillsVersionSelector,
    };
  }

  validate() {
    if(this.versionSelector && typeof (this.versionSelector as any).validate === 'function') {
      (this.versionSelector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExternalAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
  /**
   * @remarks
   * The name of the template in the AI Registry.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review-template
   */
  name?: string;
  /**
   * @remarks
   * The version of the template in the AI Registry.
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

export class UpdateExternalAgentResponseBodyDataTemplate extends $dara.Model {
  /**
   * @remarks
   * The AI Registry template configuration.
   */
  aiRegistry?: UpdateExternalAgentResponseBodyDataTemplateAiRegistry;
  static names(): { [key: string]: string } {
    return {
      aiRegistry: 'aiRegistry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRegistry: UpdateExternalAgentResponseBodyDataTemplateAiRegistry,
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

export class UpdateExternalAgentResponseBodyDataTools extends $dara.Model {
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

export class UpdateExternalAgentResponseBodyData extends $dara.Model {
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
   * Includes only the skills added or overridden by the user, excluding inherited items from templates. The resource model reads this field to preserve update semantics. Creation and update operations still use the skills in the request.
   */
  configuredSkills?: UpdateExternalAgentResponseBodyDataConfiguredSkills[];
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
   * Code review agent running in the user environment
   */
  description?: string;
  /**
   * @remarks
   * The runtime status information reported by the external agent.
   */
  externalAgentStatus?: UpdateExternalAgentResponseBodyDataExternalAgentStatus;
  /**
   * @remarks
   * The agent instructions used to guide the behavior of the agent.
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
   * - pending: pending
   * - processing: processing
   * - waiting_retry: waiting for retry
   * - succeeded: succeeded
   * - failed: failed
   * - superseded: superseded by a new version
   * 
   * @example
   * pending
   */
  latestVersionStatus?: string;
  /**
   * @remarks
   * The model configuration. Available only when modelSource is set to PLATFORM.
   */
  model?: UpdateExternalAgentResponseBodyDataModel;
  /**
   * @remarks
   * The source of the model configuration. PLATFORM indicates that the platform parses and delivers the model configuration. RUNTIME indicates that the external runtime manages the model independently, and the model parameter cannot be passed at the same time. Valid values:
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
  skills?: UpdateExternalAgentResponseBodyDataSkills[];
  /**
   * @remarks
   * The status of the external agent. Valid values: Creating, Running, Failed, Updating, Deleting, and Deleted.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The agent template configuration.
   */
  template?: UpdateExternalAgentResponseBodyDataTemplate;
  /**
   * @remarks
   * The list of tool configurations.
   */
  tools?: UpdateExternalAgentResponseBodyDataTools[];
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
      configuredSkills: 'configuredSkills',
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
      configuredSkills: { 'type': 'array', 'itemType': UpdateExternalAgentResponseBodyDataConfiguredSkills },
      createMode: 'string',
      createdAt: 'string',
      deployType: 'string',
      description: 'string',
      externalAgentStatus: UpdateExternalAgentResponseBodyDataExternalAgentStatus,
      instruction: 'string',
      latestSpecVersion: 'number',
      latestVersionStatus: 'string',
      model: UpdateExternalAgentResponseBodyDataModel,
      modelSource: 'string',
      name: 'string',
      regionId: 'string',
      runtime: 'string',
      skills: { 'type': 'array', 'itemType': UpdateExternalAgentResponseBodyDataSkills },
      status: 'string',
      template: UpdateExternalAgentResponseBodyDataTemplate,
      tools: { 'type': 'array', 'itemType': UpdateExternalAgentResponseBodyDataTools },
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configuredSkills)) {
      $dara.Model.validateArray(this.configuredSkills);
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

export class UpdateExternalAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value is SUCCESS if the request is successful.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The details of the updated external agent.
   */
  data?: UpdateExternalAgentResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates success.
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
   * Indicates whether the request is successful.
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
      data: UpdateExternalAgentResponseBodyData,
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

