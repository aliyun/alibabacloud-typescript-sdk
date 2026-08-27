// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkerResponseBodyDataChannelsConfig extends $dara.Model {
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

export class UpdateWorkerResponseBodyDataChannelsSecretStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the client secret is set.
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

export class UpdateWorkerResponseBodyDataChannels extends $dara.Model {
  /**
   * @remarks
   * The channel configuration.
   * 
   * @example
   * {}
   */
  config?: UpdateWorkerResponseBodyDataChannelsConfig;
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
  secretStatus?: UpdateWorkerResponseBodyDataChannelsSecretStatus;
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
      config: UpdateWorkerResponseBodyDataChannelsConfig,
      enabled: 'boolean',
      secretStatus: UpdateWorkerResponseBodyDataChannelsSecretStatus,
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

export class UpdateWorkerResponseBodyDataCredentials extends $dara.Model {
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

export class UpdateWorkerResponseBodyDataGroups extends $dara.Model {
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

export class UpdateWorkerResponseBodyDataLimitConfig extends $dara.Model {
  /**
   * @remarks
   * The limit type.
   * 
   * @example
   * token
   */
  limitType?: string;
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
   * The usage limit.
   * 
   * @example
   * 1000000
   */
  usageLimit?: number;
  static names(): { [key: string]: string } {
    return {
      limitType: 'LimitType',
      periodType: 'PeriodType',
      usageLimit: 'UsageLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitType: 'string',
      periodType: 'string',
      usageLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkerResponseBodyDataMcpServers extends $dara.Model {
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

export class UpdateWorkerResponseBodyDataModel extends $dara.Model {
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

export class UpdateWorkerResponseBodyDataSkills extends $dara.Model {
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

export class UpdateWorkerResponseBodyDataTemplate extends $dara.Model {
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

export class UpdateWorkerResponseBodyData extends $dara.Model {
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
   * The list of channels.
   * 
   * @example
   * [...]
   */
  channels?: UpdateWorkerResponseBodyDataChannels[];
  /**
   * @remarks
   * The list of credential bindings.
   * 
   * @example
   * [...]
   */
  credentials?: UpdateWorkerResponseBodyDataCredentials[];
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
   * The list of team groups.
   * 
   * @example
   * [...]
   */
  groups?: UpdateWorkerResponseBodyDataGroups[];
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
  limitConfig?: UpdateWorkerResponseBodyDataLimitConfig;
  /**
   * @remarks
   * The list of MCP servers.
   * 
   * @example
   * [...]
   */
  mcpServers?: UpdateWorkerResponseBodyDataMcpServers[];
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * {}
   */
  model?: UpdateWorkerResponseBodyDataModel;
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
   * The list of skills.
   * 
   * @example
   * [...]
   */
  skills?: UpdateWorkerResponseBodyDataSkills[];
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
   * The template configuration.
   * 
   * @example
   * {}
   */
  template?: UpdateWorkerResponseBodyDataTemplate;
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
      template: 'Template',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      agents: 'string',
      channels: { 'type': 'array', 'itemType': UpdateWorkerResponseBodyDataChannels },
      credentials: { 'type': 'array', 'itemType': UpdateWorkerResponseBodyDataCredentials },
      deployType: 'string',
      groups: { 'type': 'array', 'itemType': UpdateWorkerResponseBodyDataGroups },
      instanceId: 'string',
      limitConfig: UpdateWorkerResponseBodyDataLimitConfig,
      mcpServers: { 'type': 'array', 'itemType': UpdateWorkerResponseBodyDataMcpServers },
      model: UpdateWorkerResponseBodyDataModel,
      name: 'string',
      regionId: 'string',
      skills: { 'type': 'array', 'itemType': UpdateWorkerResponseBodyDataSkills },
      soul: 'string',
      startTime: 'string',
      status: 'string',
      template: UpdateWorkerResponseBodyDataTemplate,
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
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkerResponseBody extends $dara.Model {
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
  data?: UpdateWorkerResponseBodyData;
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
      data: UpdateWorkerResponseBodyData,
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

