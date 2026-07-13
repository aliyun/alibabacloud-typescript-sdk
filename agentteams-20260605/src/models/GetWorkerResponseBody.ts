// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkerResponseBodyDataChannelsConfig extends $dara.Model {
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

export class GetWorkerResponseBodyDataChannelsSecretStatus extends $dara.Model {
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
  config?: GetWorkerResponseBodyDataChannelsConfig;
  enabled?: boolean;
  secretStatus?: GetWorkerResponseBodyDataChannelsSecretStatus;
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

export class GetWorkerResponseBodyDataLimitConfig extends $dara.Model {
  limitType?: string;
  overLimit?: boolean;
  periodType?: string;
  ruleStatus?: string;
  usageLimit?: number;
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

export class GetWorkerResponseBodyDataModel extends $dara.Model {
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

export class GetWorkerResponseBodyDataSkills extends $dara.Model {
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

export class GetWorkerResponseBodyDataSubagentsSkills extends $dara.Model {
  hasSkillMd?: boolean;
  name?: string;
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
  description?: string;
  hasAgentsMd?: boolean;
  name?: string;
  skills?: GetWorkerResponseBodyDataSubagentsSkills[];
  sourcePath?: string;
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

export class GetWorkerResponseBodyData extends $dara.Model {
  agentType?: string;
  agents?: string;
  channels?: GetWorkerResponseBodyDataChannels[];
  credentials?: GetWorkerResponseBodyDataCredentials[];
  deployType?: string;
  groups?: GetWorkerResponseBodyDataGroups[];
  instanceId?: string;
  limitConfig?: GetWorkerResponseBodyDataLimitConfig;
  mcpServers?: GetWorkerResponseBodyDataMcpServers[];
  model?: GetWorkerResponseBodyDataModel;
  name?: string;
  regionId?: string;
  skills?: GetWorkerResponseBodyDataSkills[];
  soul?: string;
  startTime?: string;
  status?: string;
  subagents?: GetWorkerResponseBodyDataSubagents[];
  template?: GetWorkerResponseBodyDataTemplate;
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
  code?: string;
  data?: GetWorkerResponseBodyData;
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

