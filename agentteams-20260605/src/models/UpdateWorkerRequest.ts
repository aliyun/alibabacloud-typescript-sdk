// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkerRequestChannelsConfig extends $dara.Model {
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

export class UpdateWorkerRequestChannelsSecrets extends $dara.Model {
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
  config?: UpdateWorkerRequestChannelsConfig;
  enabled?: boolean;
  secrets?: UpdateWorkerRequestChannelsSecrets;
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
  limitType?: string;
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

export class UpdateWorkerRequestMcpServers extends $dara.Model {
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

export class UpdateWorkerRequestSkills extends $dara.Model {
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

export class UpdateWorkerRequestTemplate extends $dara.Model {
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

export class UpdateWorkerRequest extends $dara.Model {
  agents?: string;
  channels?: UpdateWorkerRequestChannels[];
  clientToken?: string;
  credentials?: UpdateWorkerRequestCredentials[];
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  limitConfig?: UpdateWorkerRequestLimitConfig;
  mcpServers?: UpdateWorkerRequestMcpServers[];
  model?: UpdateWorkerRequestModel;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  skills?: UpdateWorkerRequestSkills[];
  soul?: string;
  template?: UpdateWorkerRequestTemplate;
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

