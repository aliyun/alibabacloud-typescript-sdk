// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkerResponseBodyDataChannelsConfig extends $dara.Model {
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

export class UpdateWorkerResponseBodyDataChannelsSecretStatus extends $dara.Model {
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
  config?: UpdateWorkerResponseBodyDataChannelsConfig;
  enabled?: boolean;
  secretStatus?: UpdateWorkerResponseBodyDataChannelsSecretStatus;
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

export class UpdateWorkerResponseBodyDataLimitConfig extends $dara.Model {
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

export class UpdateWorkerResponseBodyDataMcpServers extends $dara.Model {
  name?: string;
  transport?: string;
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

export class UpdateWorkerResponseBodyDataSkills extends $dara.Model {
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

export class UpdateWorkerResponseBodyDataTemplate extends $dara.Model {
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

export class UpdateWorkerResponseBodyData extends $dara.Model {
  agentType?: string;
  agents?: string;
  channels?: UpdateWorkerResponseBodyDataChannels[];
  credentials?: UpdateWorkerResponseBodyDataCredentials[];
  deployType?: string;
  groups?: UpdateWorkerResponseBodyDataGroups[];
  instanceId?: string;
  limitConfig?: UpdateWorkerResponseBodyDataLimitConfig;
  mcpServers?: UpdateWorkerResponseBodyDataMcpServers[];
  model?: UpdateWorkerResponseBodyDataModel;
  name?: string;
  regionId?: string;
  skills?: UpdateWorkerResponseBodyDataSkills[];
  soul?: string;
  startTime?: string;
  status?: string;
  template?: UpdateWorkerResponseBodyDataTemplate;
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
  code?: string;
  data?: UpdateWorkerResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

