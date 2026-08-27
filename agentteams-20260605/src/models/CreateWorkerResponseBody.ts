// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkerResponseBodyDataCredentials extends $dara.Model {
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

export class CreateWorkerResponseBodyDataGroups extends $dara.Model {
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

export class CreateWorkerResponseBodyDataLimitConfig extends $dara.Model {
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

export class CreateWorkerResponseBodyDataMcpServers extends $dara.Model {
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

export class CreateWorkerResponseBodyDataModel extends $dara.Model {
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

export class CreateWorkerResponseBodyDataSkills extends $dara.Model {
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

export class CreateWorkerResponseBodyDataTemplate extends $dara.Model {
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

export class CreateWorkerResponseBodyData extends $dara.Model {
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
   * The list of credential bindings.
   * 
   * @example
   * [...]
   */
  credentials?: CreateWorkerResponseBodyDataCredentials[];
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
  groups?: CreateWorkerResponseBodyDataGroups[];
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
  limitConfig?: CreateWorkerResponseBodyDataLimitConfig;
  /**
   * @remarks
   * The list of MCP servers.
   * 
   * @example
   * [...]
   */
  mcpServers?: CreateWorkerResponseBodyDataMcpServers[];
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * {}
   */
  model?: CreateWorkerResponseBodyDataModel;
  /**
   * @remarks
   * The worker name.
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
  skills?: CreateWorkerResponseBodyDataSkills[];
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
   * The worker status.
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
  template?: CreateWorkerResponseBodyDataTemplate;
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
      credentials: { 'type': 'array', 'itemType': CreateWorkerResponseBodyDataCredentials },
      deployType: 'string',
      groups: { 'type': 'array', 'itemType': CreateWorkerResponseBodyDataGroups },
      instanceId: 'string',
      limitConfig: CreateWorkerResponseBodyDataLimitConfig,
      mcpServers: { 'type': 'array', 'itemType': CreateWorkerResponseBodyDataMcpServers },
      model: CreateWorkerResponseBodyDataModel,
      name: 'string',
      skills: { 'type': 'array', 'itemType': CreateWorkerResponseBodyDataSkills },
      soul: 'string',
      startTime: 'string',
      status: 'string',
      template: CreateWorkerResponseBodyDataTemplate,
      versionCode: 'string',
    };
  }

  validate() {
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

export class CreateWorkerResponseBody extends $dara.Model {
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
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: CreateWorkerResponseBodyData;
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
      data: CreateWorkerResponseBodyData,
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

