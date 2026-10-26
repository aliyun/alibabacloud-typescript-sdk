// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentResponseBodyAgentCallableAgents extends $dara.Model {
  /**
   * @remarks
   * The sub-agent display name.
   * 
   * @example
   * Sub-assistant
   */
  displayName?: string;
  /**
   * @remarks
   * The sub-agent name.
   * 
   * @example
   * sub-agent
   */
  name?: string;
  /**
   * @remarks
   * The sub-agent source.
   * 
   * @example
   * custom
   */
  source?: string;
  /**
   * @remarks
   * The sub-agent version.
   * 
   * @example
   * -
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      name: 'Name',
      source: 'Source',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      name: 'string',
      source: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyAgentExpertSuites extends $dara.Model {
  /**
   * @remarks
   * 套件已删除、发布快照缺失或调用者无权查看时，不返回套件摘要，仅保留 ID 和版本号。
   * 
   * @example
   * 数据分析专家能力集合
   */
  description?: string;
  /**
   * @example
   * 数据分析专家套件
   */
  displayName?: string;
  /**
   * @example
   * analysis-suite
   */
  name?: string;
  /**
   * @remarks
   * 显式查询 Agent 已发布版本时返回固定的官方制品版本；查询草稿或自定义套件时不返回。
   * 
   * @example
   * 0.1.0.202610211408
   */
  packageVersion?: string;
  /**
   * @remarks
   * 可选套件摘要字段，当前新 DataAgent 应用不返回；缺省不表示版本 0。不可作为 UpdateAgent 的 Version，回写引用时必须省略。官方制品的固定版本请读取 PackageVersion。
   * 
   * @example
   * 1.2.0
   */
  semanticVersion?: string;
  /**
   * @remarks
   * OFFICIAL 表示官方目录资源；省略或 DB 表示个人或企业资源。
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @example
   * suite_example
   */
  suiteId?: string;
  /**
   * @remarks
   * 仅个人或企业套件在引用明确指定版本或读取发布快照时返回；官方套件不返回。未返回不是 0；SDK 若将缺省整数初始化为 0，回写时必须省略。官方项只回写 Source 和 SuiteId，不传 Version、SemanticVersion 或 PackageVersion。
   * 
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      packageVersion: 'PackageVersion',
      semanticVersion: 'SemanticVersion',
      source: 'Source',
      suiteId: 'SuiteId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
      packageVersion: 'string',
      semanticVersion: 'string',
      source: 'string',
      suiteId: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyAgentModel extends $dara.Model {
  /**
   * @remarks
   * Additional configuration for the model.
   * 
   * @example
   * {}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The maximum number of tokens to generate in one response.
   * 
   * @example
   * 8192
   */
  maxTokens?: number;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen3-max
   */
  modelName?: string;
  /**
   * @remarks
   * Indicates whether streaming output is enabled.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * The temperature.
   * 
   * @example
   * 1
   */
  temperature?: number;
  /**
   * @remarks
   * The top-p.
   * 
   * @example
   * 1
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      maxTokens: 'MaxTokens',
      modelName: 'ModelName',
      stream: 'Stream',
      temperature: 'Temperature',
      topP: 'TopP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maxTokens: 'number',
      modelName: 'string',
      stream: 'boolean',
      temperature: 'number',
      topP: 'number',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyAgentSkills extends $dara.Model {
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * my-skill
   */
  name?: string;
  /**
   * @remarks
   * 指定 AgentVersion 查询已发布快照时返回固定的官方制品版本；查询草稿或自定义 Skill 时不返回。
   * 
   * @example
   * 0.6.0.202608201110
   */
  packageVersion?: string;
  /**
   * @example
   * dataworks-semantic
   */
  skillId?: string;
  /**
   * @remarks
   * OFFICIAL 表示官方目录资源；省略或 DB 表示原有个人或企业资源。
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * The skill version.
   * 
   * @example
   * -
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      packageVersion: 'PackageVersion',
      skillId: 'SkillId',
      source: 'Source',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      packageVersion: 'string',
      skillId: 'string',
      source: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyAgentTools extends $dara.Model {
  /**
   * @remarks
   * **The name of the built-in tool. This parameter applies only when `Kind` is set to `builtin`.**
   * 
   * @example
   * builtin_sql
   */
  builtinName?: string;
  /**
   * @remarks
   * **The tool type.**
   * 
   * @example
   * builtin
   */
  kind?: string;
  /**
   * @remarks
   * **The selected MCP tool items. This parameter applies only when `Kind` is set to `mcp`.**
   */
  mcpItems?: string[];
  /**
   * @remarks
   * **The name of the associated MCP server. This parameter applies only when `Kind` is set to `mcp`.**
   * 
   * @example
   * server-name
   */
  mcpServerName?: string;
  static names(): { [key: string]: string } {
    return {
      builtinName: 'BuiltinName',
      kind: 'Kind',
      mcpItems: 'McpItems',
      mcpServerName: 'McpServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builtinName: 'string',
      kind: 'string',
      mcpItems: { 'type': 'array', 'itemType': 'string' },
      mcpServerName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mcpItems)) {
      $dara.Model.validateArray(this.mcpItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyAgentVisibilityScope extends $dara.Model {
  /**
   * @remarks
   * A list of project IDs that can view the agent.
   */
  projectIds?: string[];
  /**
   * @remarks
   * A list of user IDs that can view the agent.
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      projectIds: 'ProjectIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyAgent extends $dara.Model {
  /**
   * @remarks
   * 本次读取的定义版本。更新当前定义时，将该值作为 UpdateAgent 的 ExpectedVersion，可拒绝覆盖其他调用者已提交的新版本。读取历史快照的版本不代表当前版本。
   * 
   * @example
   * 2
   */
  agentVersion?: number;
  /**
   * @remarks
   * A list of callable sub-agents.
   */
  callableAgents?: GetAgentResponseBodyAgentCallableAgents[];
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 123456
   */
  creatorId?: string;
  /**
   * @remarks
   * **The description.**
   * 
   * @example
   * Data analysis assistant
   */
  description?: string;
  /**
   * @remarks
   * **The display name.**
   * 
   * @example
   * My assistant
   */
  displayName?: string;
  /**
   * @remarks
   * Agent 定义绑定的专家套件及固定发布版本。
   */
  expertSuites?: GetAgentResponseBodyAgentExpertSuites[];
  /**
   * @remarks
   * The creation time, as a Unix timestamp in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modification time, as a Unix timestamp in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * **Additional metadata.**
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * **The model configuration.**
   */
  model?: GetAgentResponseBodyAgentModel;
  /**
   * @remarks
   * The ID of the last modifier.
   * 
   * @example
   * 123456
   */
  modifierId?: string;
  /**
   * @remarks
   * **The agent name.**
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * The runtime dependencies.
   */
  requiredRuntime?: string[];
  /**
   * @remarks
   * A list of skills.
   */
  skills?: GetAgentResponseBodyAgentSkills[];
  /**
   * @remarks
   * **The system prompt.**
   * 
   * @example
   * You are a data analysis assistant.
   */
  systemPrompt?: string;
  /**
   * @remarks
   * **A list of tools.**
   */
  tools?: GetAgentResponseBodyAgentTools[];
  /**
   * @remarks
   * **The visibility level.**
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The visibility scope.
   */
  visibilityScope?: GetAgentResponseBodyAgentVisibilityScope;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      callableAgents: 'CallableAgents',
      creatorId: 'CreatorId',
      description: 'Description',
      displayName: 'DisplayName',
      expertSuites: 'ExpertSuites',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      metadata: 'Metadata',
      model: 'Model',
      modifierId: 'ModifierId',
      name: 'Name',
      requiredRuntime: 'RequiredRuntime',
      skills: 'Skills',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
      visibility: 'Visibility',
      visibilityScope: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'number',
      callableAgents: { 'type': 'array', 'itemType': GetAgentResponseBodyAgentCallableAgents },
      creatorId: 'string',
      description: 'string',
      displayName: 'string',
      expertSuites: { 'type': 'array', 'itemType': GetAgentResponseBodyAgentExpertSuites },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      model: GetAgentResponseBodyAgentModel,
      modifierId: 'string',
      name: 'string',
      requiredRuntime: { 'type': 'array', 'itemType': 'string' },
      skills: { 'type': 'array', 'itemType': GetAgentResponseBodyAgentSkills },
      systemPrompt: 'string',
      tools: { 'type': 'array', 'itemType': GetAgentResponseBodyAgentTools },
      visibility: 'string',
      visibilityScope: GetAgentResponseBodyAgentVisibilityScope,
    };
  }

  validate() {
    if(Array.isArray(this.callableAgents)) {
      $dara.Model.validateArray(this.callableAgents);
    }
    if(Array.isArray(this.expertSuites)) {
      $dara.Model.validateArray(this.expertSuites);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    if(Array.isArray(this.requiredRuntime)) {
      $dara.Model.validateArray(this.requiredRuntime);
    }
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    if(this.visibilityScope && typeof (this.visibilityScope as any).validate === 'function') {
      (this.visibilityScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The agent details.
   */
  agent?: GetAgentResponseBodyAgent;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 824F80BA-1778-5D8A-BAFF-668A4D9C4CC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: GetAgentResponseBodyAgent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.agent && typeof (this.agent as any).validate === 'function') {
      (this.agent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

