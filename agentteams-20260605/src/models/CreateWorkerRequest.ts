// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkerRequestChannelsConfig extends $dara.Model {
  cardTemplateId?: string;
  clientId?: string;
  extension?: string;
  messageType?: string;
  robotCode?: string;
  showThinking?: boolean;
  showToolCalls?: boolean;
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
  config?: CreateWorkerRequestChannelsConfig;
  enabled?: boolean;
  secrets?: CreateWorkerRequestChannelsSecrets;
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
  name?: string;
  role?: string;
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
   * @example
   * token
   */
  limitType?: string;
  /**
   * @example
   * day
   */
  periodType?: string;
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
  modelName?: string;
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
  label?: string;
  name?: string;
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
  label?: string;
  name?: string;
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
  agents?: string;
  skills?: CreateWorkerRequestSubagentsSkills[];
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
  label?: string;
  name?: string;
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
  agentType?: string;
  agents?: string;
  channels?: CreateWorkerRequestChannels[];
  clientToken?: string;
  credentials?: CreateWorkerRequestCredentials[];
  deployType?: string;
  groups?: CreateWorkerRequestGroups[];
  instanceId?: string;
  limitConfig?: CreateWorkerRequestLimitConfig;
  mcpServers?: CreateWorkerRequestMcpServers[];
  model?: CreateWorkerRequestModel;
  name?: string;
  skills?: CreateWorkerRequestSkills[];
  soul?: string;
  subagents?: CreateWorkerRequestSubagents[];
  template?: CreateWorkerRequestTemplate;
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

