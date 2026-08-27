// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkerRequestChannelsConfig extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * tpl-demo
   */
  cardTemplateId?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * cli-demo
   */
  clientId?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * extension-demo
   */
  extension?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * markdown
   */
  messageType?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * robot-demo
   */
  robotCode?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * true
   */
  showThinking?: boolean;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * false
   */
  showToolCalls?: boolean;
  /**
   * @remarks
   * The returned data.
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

export class CreateWorkerRequestChannelsSecrets extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * secret-demo
   */
  clientSecret?: string;
  static names(): { [key: string]: string } {
    return {
      clientSecret: 'ClientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkerRequestChannels extends $dara.Model {
  /**
   * @remarks
   * The channel configuration.
   * 
   * @example
   * {}
   */
  config?: CreateWorkerRequestChannelsConfig;
  /**
   * @remarks
   * Specifies whether the channel is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The channel secrets.
   * 
   * @example
   * {}
   */
  secrets?: CreateWorkerRequestChannelsSecrets;
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
      secrets: 'Secrets',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: CreateWorkerRequestChannelsConfig,
      enabled: 'boolean',
      secrets: CreateWorkerRequestChannelsSecrets,
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.secrets && typeof (this.secrets as any).validate === 'function') {
      (this.secrets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkerRequestCredentials extends $dara.Model {
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

export class CreateWorkerRequestGroups extends $dara.Model {
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

export class CreateWorkerRequestLimitConfig extends $dara.Model {
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
   * The period type.
   * 
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The quota limit.
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

export class CreateWorkerRequestMcpServers extends $dara.Model {
  /**
   * @remarks
   * The MCP server name.
   * 
   * @example
   * mcp-server-demo
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

export class CreateWorkerRequestModel extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * default
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

export class CreateWorkerRequestSkills extends $dara.Model {
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

export class CreateWorkerRequestSubagentsSkills extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * Label.
   */
  label?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The returned data.
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

export class CreateWorkerRequestSubagents extends $dara.Model {
  /**
   * @remarks
   * The sub-agent configuration.
   * 
   * @example
   * agents-demo
   */
  agents?: string;
  /**
   * @remarks
   * The list of sub-agent skills.
   * 
   * @example
   * [...]
   */
  skills?: CreateWorkerRequestSubagentsSkills[];
  /**
   * @remarks
   * The sub-agent ID.
   * 
   * @example
   * sub-demo
   */
  subagentId?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      skills: 'Skills',
      subagentId: 'SubagentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: 'string',
      skills: { 'type': 'array', 'itemType': CreateWorkerRequestSubagentsSkills },
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

export class CreateWorkerRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * Label.
   */
  label?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The returned data.
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

export class CreateWorkerRequest extends $dara.Model {
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
   * The list of channel configurations.
   * 
   * @example
   * [...]
   */
  channels?: CreateWorkerRequestChannels[];
  /**
   * @remarks
   * The idempotency token that ensures the idempotence of the request.
   * 
   * @example
   * client-token-demo
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of credential bindings.
   * 
   * @example
   * [...]
   */
  credentials?: CreateWorkerRequestCredentials[];
  /**
   * @remarks
   * The deployment type.
   * 
   * @example
   * SelfHosted
   */
  deployType?: string;
  /**
   * @remarks
   * The list of team groups.
   * 
   * @example
   * [...]
   */
  groups?: CreateWorkerRequestGroups[];
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
  limitConfig?: CreateWorkerRequestLimitConfig;
  /**
   * @remarks
   * The list of MCP servers.
   * 
   * @example
   * [...]
   */
  mcpServers?: CreateWorkerRequestMcpServers[];
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * {}
   */
  model?: CreateWorkerRequestModel;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The list of skills.
   * 
   * @example
   * [...]
   */
  skills?: CreateWorkerRequestSkills[];
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
   * The list of sub-agents.
   * 
   * @example
   * [...]
   */
  subagents?: CreateWorkerRequestSubagents[];
  /**
   * @remarks
   * The template configuration.
   * 
   * @example
   * {}
   */
  template?: CreateWorkerRequestTemplate;
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
      clientToken: 'ClientToken',
      credentials: 'Credentials',
      deployType: 'DeployType',
      groups: 'Groups',
      instanceId: 'InstanceId',
      limitConfig: 'LimitConfig',
      mcpServers: 'McpServers',
      model: 'Model',
      name: 'Name',
      skills: 'Skills',
      soul: 'Soul',
      subagents: 'Subagents',
      template: 'Template',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      agents: 'string',
      channels: { 'type': 'array', 'itemType': CreateWorkerRequestChannels },
      clientToken: 'string',
      credentials: { 'type': 'array', 'itemType': CreateWorkerRequestCredentials },
      deployType: 'string',
      groups: { 'type': 'array', 'itemType': CreateWorkerRequestGroups },
      instanceId: 'string',
      limitConfig: CreateWorkerRequestLimitConfig,
      mcpServers: { 'type': 'array', 'itemType': CreateWorkerRequestMcpServers },
      model: CreateWorkerRequestModel,
      name: 'string',
      skills: { 'type': 'array', 'itemType': CreateWorkerRequestSkills },
      soul: 'string',
      subagents: { 'type': 'array', 'itemType': CreateWorkerRequestSubagents },
      template: CreateWorkerRequestTemplate,
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

