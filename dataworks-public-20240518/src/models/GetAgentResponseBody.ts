// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentResponseBodyAgentCallableAgents extends $dara.Model {
  /**
   * @remarks
   * The display name of the sub-agent.
   * 
   * @example
   * Sub-assistant
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the sub-agent.
   * 
   * @example
   * sub-agent
   */
  name?: string;
  /**
   * @remarks
   * The source of the sub-agent.
   * 
   * @example
   * custom
   */
  source?: string;
  /**
   * @remarks
   * The version number of the sub-agent.
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
   * If the suite is deleted, the published snapshot is missing, or the caller does not have permission to view it, the suite summary is not returned, and only the ID and version number are retained.
   * 
   * @example
   * Data analytics expert capability set
   */
  description?: string;
  /**
   * @remarks
   * The display name of the bound version.
   * 
   * @example
   * Data analytics expert suite
   */
  displayName?: string;
  /**
   * @remarks
   * The suite name of the bound version.
   * 
   * @example
   * analysis-suite
   */
  name?: string;
  /**
   * @remarks
   * Returns the fixed official artifact version when explicitly querying a published version of the agent. Not returned when querying a draft or a custom suite.
   * 
   * @example
   * 0.1.0.202610211408
   */
  packageVersion?: string;
  /**
   * @remarks
   * An optional suite summary field that is not returned by current new DataAgent applications. A missing value does not indicate version 0. This field cannot be used as the Version for UpdateAgent and must be omitted when writing back references. For the fixed version of official artifacts, read PackageVersion.
   * 
   * @example
   * 1.2.0
   */
  semanticVersion?: string;
  /**
   * @remarks
   * OFFICIAL indicates an official catalog resource. Omitted or DB indicates a personal or enterprise resource.
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * The ID of the expert suite.
   * 
   * @example
   * suite_example
   */
  suiteId?: string;
  /**
   * @remarks
   * Returned only when a personal or enterprise suite explicitly specifies a fixed integer version in the reference. Not returned for official suites. A missing value is not 0. If the SDK initializes a missing integer to 0, it must be omitted when writing back. For official items, only Source and SuiteId are written back, and Version, VersionSelector, SemanticVersion, or PackageVersion are not passed.
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * Returned only for personal or enterprise resources to indicate the saved version selection policy, which is mutually exclusive with the fixed integer Version. It does not represent the specific revision actually loaded in the session. Not returned for official resources.
   * 
   * @example
   * ^1.2.3
   */
  versionSelector?: string;
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
      versionSelector: 'VersionSelector',
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
      versionSelector: 'string',
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
   * The additional configuration of the model.
   * 
   * @example
   * {}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The maximum number of output tokens per request.
   * 
   * @example
   * 8192
   */
  maxTokens?: number;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * qwen3-max
   */
  modelName?: string;
  /**
   * @remarks
   * Specifies whether to use streaming output.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * The sampling temperature.
   * 
   * @example
   * 1
   */
  temperature?: number;
  /**
   * @remarks
   * The top-P value for nucleus sampling.
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
   * The name of the skill.
   * 
   * @example
   * my-skill
   */
  name?: string;
  /**
   * @remarks
   * Returns the fixed official artifact version when querying a published snapshot with a specified AgentVersion. Not returned when querying a draft or a custom skill.
   * 
   * @example
   * 0.6.0.202608201110
   */
  packageVersion?: string;
  /**
   * @remarks
   * The ID of the official skill.
   * 
   * @example
   * dataworks-semantic
   */
  skillId?: string;
  /**
   * @remarks
   * OFFICIAL indicates an official catalog resource. Omitted or DB indicates an original personal or enterprise resource.
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * The version number of the skill.
   * 
   * @example
   * -
   */
  version?: number;
  /**
   * @remarks
   * Returned only for personal or enterprise resources to indicate the saved version selection policy, which is mutually exclusive with the fixed integer Version. It does not represent the specific revision actually loaded in the session. Not returned for official resources.
   * 
   * @example
   * ^1.2.3
   */
  versionSelector?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      packageVersion: 'PackageVersion',
      skillId: 'SkillId',
      source: 'Source',
      version: 'Version',
      versionSelector: 'VersionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      packageVersion: 'string',
      skillId: 'string',
      source: 'string',
      version: 'number',
      versionSelector: 'string',
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
   * **The name of the built-in tool. Valid when Kind is builtin.**
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
   * **The selected MCP tool items. Valid when Kind is mcp.**
   */
  mcpItems?: string[];
  /**
   * @remarks
   * **The name of the associated MCP server. Valid when Kind is mcp.**
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
   * The list of visible project IDs.
   */
  projectIds?: string[];
  /**
   * @remarks
   * The list of visible user IDs.
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
   * The definition version read in this request. When updating the current definition, use this value as the ExpectedVersion for UpdateAgent to prevent overwriting new versions submitted by other callers. The version read from a historical snapshot does not represent the current version.
   * 
   * @example
   * 2
   */
  agentVersion?: number;
  /**
   * @remarks
   * The list of callable sub-agents.
   */
  callableAgents?: GetAgentResponseBodyAgentCallableAgents[];
  /**
   * @remarks
   * The ID of the creator.
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
   * Data analytics assistant
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
   * The expert suites bound to the agent definition, including a fixed integer revision number or a version selection policy. Official resources continue to use PackageVersion to indicate the artifact version.
   */
  expertSuites?: GetAgentResponseBodyAgentExpertSuites[];
  /**
   * @remarks
   * The creation time, expressed as a timestamp in milliseconds.
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: number;
  /**
   * @remarks
   * The last modified time, expressed as a timestamp in milliseconds.
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: number;
  /**
   * @remarks
   * **The extended metadata.**
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
   * The environment dependencies required for runtime.
   */
  requiredRuntime?: string[];
  /**
   * @remarks
   * The list of skills.
   */
  skills?: GetAgentResponseBodyAgentSkills[];
  /**
   * @remarks
   * **The system prompt.**
   * 
   * @example
   * You are a data analytics assistant.
   */
  systemPrompt?: string;
  /**
   * @remarks
   * **The list of tools.**
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
      gmtCreateTime: 'number',
      gmtModifiedTime: 'number',
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
   * The details of the created agent.
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

