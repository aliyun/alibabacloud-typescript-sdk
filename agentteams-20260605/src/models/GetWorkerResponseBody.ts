// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkerResponseBodyDataChannelsConfig extends $dara.Model {
  /**
   * @remarks
   * The card template ID.
   * 
   * @example
   * tpl-demo
   */
  cardTemplateId?: string;
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * cli-demo
   */
  clientId?: string;
  /**
   * @remarks
   * The extension configuration.
   * 
   * @example
   * extension-demo
   */
  extension?: string;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * markdown
   */
  messageType?: string;
  /**
   * @remarks
   * The robot code.
   * 
   * @example
   * robot-demo
   */
  robotCode?: string;
  /**
   * @remarks
   * Indicates whether the thinking process is displayed.
   * 
   * @example
   * true
   */
  showThinking?: boolean;
  /**
   * @remarks
   * Indicates whether tool invocations are displayed.
   * 
   * @example
   * false
   */
  showToolCalls?: boolean;
  /**
   * @remarks
   * Indicates whether streaming output is enabled.
   * 
   * @example
   * true
   */
  streamingEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      cardTemplateId: 'CardTemplateId',
      clientId: 'ClientId',
      extension: 'Extension',
      messageType: 'MessageType',
      robotCode: 'RobotCode',
      showThinking: 'ShowThinking',
      showToolCalls: 'ShowToolCalls',
      streamingEnabled: 'StreamingEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardTemplateId: 'string',
      clientId: 'string',
      extension: 'string',
      messageType: 'string',
      robotCode: 'string',
      showThinking: 'boolean',
      showToolCalls: 'boolean',
      streamingEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerResponseBodyDataChannelsSecretStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the client secret has been set.
   * 
   * @example
   * true
   */
  clientSecret?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientSecret: 'ClientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientSecret: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerResponseBodyDataChannels extends $dara.Model {
  /**
   * @remarks
   * The channel configuration.
   * 
   * @example
   * {}
   */
  config?: GetWorkerResponseBodyDataChannelsConfig;
  /**
   * @remarks
   * Indicates whether the channel is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The secret status.
   * 
   * @example
   * {}
   */
  secretStatus?: GetWorkerResponseBodyDataChannelsSecretStatus;
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * dingtalk
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      enabled: 'Enabled',
      secretStatus: 'SecretStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetWorkerResponseBodyDataChannelsConfig,
      enabled: 'boolean',
      secretStatus: GetWorkerResponseBodyDataChannelsSecretStatus,
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.secretStatus && typeof (this.secretStatus as any).validate === 'function') {
      (this.secretStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerResponseBodyDataCredentials extends $dara.Model {
  /**
   * @remarks
   * The credential name.
   * 
   * @example
   * cred-demo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerResponseBodyDataGroups extends $dara.Model {
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * team-demo
   */
  name?: string;
  /**
   * @remarks
   * The group role.
   * 
   * @example
   * member
   */
  role?: string;
  /**
   * @remarks
   * The group type.
   * 
   * @example
   * team
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      role: 'Role',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      role: 'string',
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

export class GetWorkerResponseBodyDataLimitConfig extends $dara.Model {
  /**
   * @remarks
   * The quota type.
   * 
   * @example
   * token
   */
  limitType?: string;
  /**
   * @remarks
   * Indicates whether the quota is exceeded.
   * 
   * @example
   * false
   */
  overLimit?: boolean;
  /**
   * @remarks
   * The period type.
   * 
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The quota rule status.
   * 
   * @example
   * active
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The quota upper limit.
   * 
   * @example
   * 1000000
   */
  usageLimit?: number;
  /**
   * @remarks
   * The used amount.
   * 
   * @example
   * 50000
   */
  usedAmount?: number;
  static names(): { [key: string]: string } {
    return {
      limitType: 'LimitType',
      overLimit: 'OverLimit',
      periodType: 'PeriodType',
      ruleStatus: 'RuleStatus',
      usageLimit: 'UsageLimit',
      usedAmount: 'UsedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetWorkerResponseBodyDataMcpServers extends $dara.Model {
  /**
   * @remarks
   * The MCP server name.
   * 
   * @example
   * mcp-server-demo
   */
  name?: string;
  /**
   * @remarks
   * The MCP transport protocol.
   * 
   * @example
   * sse
   */
  transport?: string;
  /**
   * @remarks
   * The MCP server URL.
   * 
   * @example
   * https://mcp-demo/mcp
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      transport: 'Transport',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      transport: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerResponseBodyDataModel extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model provider.
   * 
   * @example
   * dashscope
   */
  modelProvider?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      modelProvider: 'ModelProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      modelProvider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerResponseBodyDataSkills extends $dara.Model {
  /**
   * @remarks
   * The skill label.
   * 
   * @example
   * Code Review.
   */
  label?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * code-review
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
      label: 'Label',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
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

export class GetWorkerResponseBodyDataSubagentsSkills extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the skill contains a skill.md file.
   * 
   * @example
   * true
   */
  hasSkillMd?: boolean;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * search
   */
  name?: string;
  /**
   * @remarks
   * The skill ID.
   * 
   * @example
   * skill-demo
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      hasSkillMd: 'HasSkillMd',
      name: 'Name',
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasSkillMd: 'boolean',
      name: 'string',
      skillId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerResponseBodyDataSubagents extends $dara.Model {
  /**
   * @remarks
   * The sub-Agent description.
   * 
   * @example
   * Sub-Agent description.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the sub-Agent contains an agents.md file.
   * 
   * @example
   * true
   */
  hasAgentsMd?: boolean;
  /**
   * @remarks
   * The sub-Agent name.
   * 
   * @example
   * sub-worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The skill list of the sub-Agent.
   * 
   * @example
   * [...]
   */
  skills?: GetWorkerResponseBodyDataSubagentsSkills[];
  /**
   * @remarks
   * The source path.
   * 
   * @example
   * /workspace/sub
   */
  sourcePath?: string;
  /**
   * @remarks
   * The sub-Agent ID.
   * 
   * @example
   * sub-demo
   */
  subagentId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hasAgentsMd: 'HasAgentsMd',
      name: 'Name',
      skills: 'Skills',
      sourcePath: 'SourcePath',
      subagentId: 'SubagentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hasAgentsMd: 'boolean',
      name: 'string',
      skills: { 'type': 'array', 'itemType': GetWorkerResponseBodyDataSubagentsSkills },
      sourcePath: 'string',
      subagentId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerResponseBodyDataTemplate extends $dara.Model {
  /**
   * @remarks
   * The template label.
   * 
   * @example
   * Default template.
   */
  label?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * default-template
   */
  name?: string;
  /**
   * @remarks
   * The template version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
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

export class GetWorkerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Agent runtime type.
   * 
   * @example
   * Qwenpaw
   */
  agentType?: string;
  /**
   * @remarks
   * The Agents configuration.
   * 
   * @example
   * agents-demo
   */
  agents?: string;
  /**
   * @remarks
   * The channel list.
   * 
   * @example
   * [...]
   */
  channels?: GetWorkerResponseBodyDataChannels[];
  /**
   * @remarks
   * The credential binding list.
   * 
   * @example
   * [...]
   */
  credentials?: GetWorkerResponseBodyDataCredentials[];
  /**
   * @remarks
   * The deployment type.
   * 
   * @example
   * Managed
   */
  deployType?: string;
  /**
   * @remarks
   * The team group list.
   * 
   * @example
   * [...]
   */
  groups?: GetWorkerResponseBodyDataGroups[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * inst-demo
   */
  instanceId?: string;
  /**
   * @remarks
   * The quota configuration.
   * 
   * @example
   * {}
   */
  limitConfig?: GetWorkerResponseBodyDataLimitConfig;
  /**
   * @remarks
   * The MCP server list.
   * 
   * @example
   * [...]
   */
  mcpServers?: GetWorkerResponseBodyDataMcpServers[];
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * {}
   */
  model?: GetWorkerResponseBodyDataModel;
  /**
   * @remarks
   * The Worker name.
   * 
   * @example
   * worker-demo
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
   * The skill list.
   * 
   * @example
   * [...]
   */
  skills?: GetWorkerResponseBodyDataSkills[];
  /**
   * @remarks
   * The Soul configuration.
   * 
   * @example
   * soul-demo
   */
  soul?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2026-07-13T10:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The Worker status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The sub-Agent list.
   * 
   * @example
   * [...]
   */
  subagents?: GetWorkerResponseBodyDataSubagents[];
  /**
   * @remarks
   * The template configuration.
   * 
   * @example
   * {}
   */
  template?: GetWorkerResponseBodyDataTemplate;
  /**
   * @remarks
   * The Worker version number.
   * 
   * @example
   * v1.0.0
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      agents: 'Agents',
      channels: 'Channels',
      credentials: 'Credentials',
      deployType: 'DeployType',
      groups: 'Groups',
      instanceId: 'InstanceId',
      limitConfig: 'LimitConfig',
      mcpServers: 'McpServers',
      model: 'Model',
      name: 'Name',
      regionId: 'RegionId',
      skills: 'Skills',
      soul: 'Soul',
      startTime: 'StartTime',
      status: 'Status',
      subagents: 'Subagents',
      template: 'Template',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      agents: 'string',
      channels: { 'type': 'array', 'itemType': GetWorkerResponseBodyDataChannels },
      credentials: { 'type': 'array', 'itemType': GetWorkerResponseBodyDataCredentials },
      deployType: 'string',
      groups: { 'type': 'array', 'itemType': GetWorkerResponseBodyDataGroups },
      instanceId: 'string',
      limitConfig: GetWorkerResponseBodyDataLimitConfig,
      mcpServers: { 'type': 'array', 'itemType': GetWorkerResponseBodyDataMcpServers },
      model: GetWorkerResponseBodyDataModel,
      name: 'string',
      regionId: 'string',
      skills: { 'type': 'array', 'itemType': GetWorkerResponseBodyDataSkills },
      soul: 'string',
      startTime: 'string',
      status: 'string',
      subagents: { 'type': 'array', 'itemType': GetWorkerResponseBodyDataSubagents },
      template: GetWorkerResponseBodyDataTemplate,
      versionCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(Array.isArray(this.credentials)) {
      $dara.Model.validateArray(this.credentials);
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(this.limitConfig && typeof (this.limitConfig as any).validate === 'function') {
      (this.limitConfig as any).validate();
    }
    if(Array.isArray(this.mcpServers)) {
      $dara.Model.validateArray(this.mcpServers);
    }
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    if(Array.isArray(this.subagents)) {
      $dara.Model.validateArray(this.subagents);
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * {}
   */
  data?: GetWorkerResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
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
   * 473469C7-XX-XX-XX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWorkerResponseBodyData,
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

