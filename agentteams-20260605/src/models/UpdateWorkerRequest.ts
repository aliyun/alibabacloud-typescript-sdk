// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkerRequestChannelsConfig extends $dara.Model {
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * tpl-demo
   */
  cardTemplateId?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * cli-demo
   */
  clientId?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * extension-demo
   */
  extension?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * markdown
   */
  messageType?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * robot-demo
   */
  robotCode?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * true
   */
  showThinking?: boolean;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * false
   */
  showToolCalls?: boolean;
  /**
   * @remarks
   * The response data.
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

export class UpdateWorkerRequestChannelsSecrets extends $dara.Model {
  /**
   * @remarks
   * The response data.
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

export class UpdateWorkerRequestChannels extends $dara.Model {
  /**
   * @remarks
   * The channel configuration.
   * 
   * @example
   * {}
   */
  config?: UpdateWorkerRequestChannelsConfig;
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
  secrets?: UpdateWorkerRequestChannelsSecrets;
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
      config: UpdateWorkerRequestChannelsConfig,
      enabled: 'boolean',
      secrets: UpdateWorkerRequestChannelsSecrets,
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

export class UpdateWorkerRequestCredentials extends $dara.Model {
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

export class UpdateWorkerRequestLimitConfig extends $dara.Model {
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * token
   */
  limitType?: string;
  /**
   * @remarks
   * The response data.
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

export class UpdateWorkerRequestMcpServers extends $dara.Model {
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

export class UpdateWorkerRequestModel extends $dara.Model {
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The response data.
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

export class UpdateWorkerRequestSkills extends $dara.Model {
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

export class UpdateWorkerRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * Label.
   */
  label?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The response data.
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

export class UpdateWorkerRequest extends $dara.Model {
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
  channels?: UpdateWorkerRequestChannels[];
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
  credentials?: UpdateWorkerRequestCredentials[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
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
  limitConfig?: UpdateWorkerRequestLimitConfig;
  /**
   * @remarks
   * The list of MCP servers.
   * 
   * @example
   * [...]
   */
  mcpServers?: UpdateWorkerRequestMcpServers[];
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * {}
   */
  model?: UpdateWorkerRequestModel;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
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
  skills?: UpdateWorkerRequestSkills[];
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
   * The template configuration.
   * 
   * @example
   * {}
   */
  template?: UpdateWorkerRequestTemplate;
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
      agents: 'Agents',
      channels: 'Channels',
      clientToken: 'ClientToken',
      credentials: 'Credentials',
      instanceId: 'InstanceId',
      limitConfig: 'LimitConfig',
      mcpServers: 'McpServers',
      model: 'Model',
      name: 'Name',
      skills: 'Skills',
      soul: 'Soul',
      template: 'Template',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: 'string',
      channels: { 'type': 'array', 'itemType': UpdateWorkerRequestChannels },
      clientToken: 'string',
      credentials: { 'type': 'array', 'itemType': UpdateWorkerRequestCredentials },
      instanceId: 'string',
      limitConfig: UpdateWorkerRequestLimitConfig,
      mcpServers: { 'type': 'array', 'itemType': UpdateWorkerRequestMcpServers },
      model: UpdateWorkerRequestModel,
      name: 'string',
      skills: { 'type': 'array', 'itemType': UpdateWorkerRequestSkills },
      soul: 'string',
      template: UpdateWorkerRequestTemplate,
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

