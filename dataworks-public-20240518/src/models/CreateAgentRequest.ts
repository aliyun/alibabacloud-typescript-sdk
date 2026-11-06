// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentRequestCallableAgents extends $dara.Model {
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * agent-1
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

export class CreateAgentRequestExpertSuites extends $dara.Model {
  /**
   * @remarks
   * OFFICIAL indicates an official catalog resource. DB indicates a personal or enterprise resource. If omitted, the original database resource query semantics are maintained. For official resources, the artifact version is fixed when the agent is published.
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * When passing expert suite references, each item must provide a SuiteId, which is validated by the server. When Source is OFFICIAL, this is the official catalog ID. Otherwise, this is the ID returned by expert suite management. The referenced resource must be visible to the caller.
   * 
   * @example
   * dataworks-data-analysis-extension
   */
  suiteId?: string;
  /**
   * @remarks
   * Used only for personal or enterprise suites. Specifies the fixed integer revision number of a published snapshot. This parameter is mutually exclusive with VersionSelector. Publishing a new version does not change the fixed reference. If both are omitted, the latest version is used for each new session. Do not specify this parameter when Source is OFFICIAL.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * Used only for personal or enterprise resources. This parameter is mutually exclusive with Version. Supports exact semantic versions, latest, and full npm/node-semver range syntax, such as 1.2.*, ^1.2.3, ~1.2.3, >=1.0.0 <2.0.0, and 1.x || 2.x. If both are omitted, the latest version is used, and the highest matching published version is selected for each new session. Existing fixed integer references remain unchanged. Do not specify this parameter when Source is OFFICIAL.
   * 
   * @example
   * ^1.2.3
   */
  versionSelector?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      suiteId: 'SuiteId',
      version: 'Version',
      versionSelector: 'VersionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateAgentRequestSkills extends $dara.Model {
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * skill-1
   */
  name?: string;
  /**
   * @remarks
   * When Source is OFFICIAL, specify the official catalog ID. Do not specify Name, Version, or VersionSelector. Do not specify this field for personal or enterprise skills.
   * 
   * @example
   * dataworks-semantic
   */
  skillId?: string;
  /**
   * @remarks
   * OFFICIAL indicates an official catalog resource. DB indicates a personal or enterprise resource. If omitted, the original query-by-name semantics are maintained.
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * Used only for personal or enterprise skills. Specifies the fixed integer revision number of a published snapshot. This parameter is mutually exclusive with VersionSelector. Publishing a new version does not change the fixed reference. If both are omitted, the latest version is used for each new session. Do not specify this parameter when Source is OFFICIAL.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * Used only for personal or enterprise resources. This parameter is mutually exclusive with Version. Supports exact semantic versions, latest, and full npm/node-semver range syntax, such as 1.2.*, ^1.2.3, ~1.2.3, >=1.0.0 <2.0.0, and 1.x || 2.x. If both are omitted, the latest version is used, and the highest matching published version is selected for each new session. Existing fixed integer references remain unchanged. Do not specify this parameter when Source is OFFICIAL.
   * 
   * @example
   * ^1.2.3
   */
  versionSelector?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      skillId: 'SkillId',
      source: 'Source',
      version: 'Version',
      versionSelector: 'VersionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class CreateAgentRequestTools extends $dara.Model {
  /**
   * @remarks
   * Required when Kind is BUILTIN_TOOLSET. Specifies the name of the built-in toolset supported by the target server. Omit this parameter when Kind is MCP_TOOLSET.
   * 
   * @example
   * web_search
   */
  builtinName?: string;
  /**
   * @remarks
   * Required for valid tool references. BUILTIN_TOOLSET indicates a built-in toolset, and BuiltinName must be specified. MCP_TOOLSET indicates an MCP toolset, and McpServerName must be specified. The target server validates the parameter based on the tool type.
   * 
   * @example
   * MCP_TOOLSET
   */
  kind?: string;
  /**
   * @remarks
   * Optional when Kind is MCP_TOOLSET. If specified, only the listed tools are used. If omitted or left as an empty array, tools are not filtered by name. Each item must be the name of an actual tool in the target MCP service.
   * 
   * @example
   * ["only-this-tool"]
   */
  mcpItems?: string[];
  /**
   * @remarks
   * Required when Kind is MCP_TOOLSET. Specifies the MCP service name that the current caller has permission to reference and that has an active published version.
   * 
   * @example
   * mcp-a
   */
  mcpServerName?: string;
  /**
   * @remarks
   * The name of the MCP server.
   * 
   * @example
   * server-1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      builtinName: 'BuiltinName',
      kind: 'Kind',
      mcpItems: 'McpItems',
      mcpServerName: 'McpServerName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builtinName: 'string',
      kind: 'string',
      mcpItems: { 'type': 'array', 'itemType': 'string' },
      mcpServerName: 'string',
      name: 'string',
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

export class CreateAgentRequestVisibilityScope extends $dara.Model {
  /**
   * @remarks
   * The list of visible project IDs. This parameter takes effect when Visibility is set to `PROJECT`.
   */
  projectIds?: string[];
  /**
   * @remarks
   * The list of visible user IDs. This parameter takes effect when Visibility is set to `USER`.
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

export class CreateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The list of sub-agents that can be called by this agent.
   * 
   * @example
   * -
   */
  callableAgents?: CreateAgentRequestCallableAgents[];
  /**
   * @remarks
   * The description of the agent.
   * 
   * @example
   * Data analytics assistant
   */
  description?: string;
  /**
   * @remarks
   * The display name of the agent.
   * 
   * @example
   * My Assistant
   */
  displayName?: string;
  /**
   * @remarks
   * The published expert suites bound to the agent. For personal or enterprise suites, use SuiteId, and optionally specify a fixed Version or VersionSelector. For official suites, you must explicitly specify Source=OFFICIAL and the SuiteId from the official catalog, and do not specify Version or VersionSelector. If not specified, an empty list is created, and all official suites are not loaded by default.
   * 
   * @example
   * [{"Source":"OFFICIAL","SuiteId":"dataworks-data-analysis-extension"},{"SuiteId":"suite_example","Version":1}]
   */
  expertSuites?: CreateAgentRequestExpertSuites[];
  /**
   * @remarks
   * The extended metadata in key-value pairs.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * {
   *           "modelName": "dataworks-public-bailian/qwen-max"
   *         }
   */
  model?: { [key: string]: any };
  /**
   * @remarks
   * The name of the agent. The name must be unique within the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to publish the agent immediately after creation. A value of true publishes the created version. A value of false or omitting this parameter maintains the original behavior of creating a draft only. Saving and publishing are not atomic operations. If publishing fails, the draft may already exist. Before retrying, query the agent first to avoid duplicate creation.
   * 
   * @example
   * false
   */
  publishImmediately?: boolean;
  /**
   * @remarks
   * The list of skills.
   * 
   * @example
   * -
   */
  skills?: CreateAgentRequestSkills[];
  /**
   * @remarks
   * The system prompt.
   * 
   * @example
   * You are a data analytics assistant.
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The list of tools.
   * 
   * @example
   * -
   */
  tools?: CreateAgentRequestTools[];
  /**
   * @remarks
   * The visibility level. Valid values:<br>
   * `TENANT`: Visible within the account.<br>
   * `PROJECT`: Visible to specified projects.<br>
   * `USER`: Visible to specified users.
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The visibility scope. Specify the corresponding fields based on the Visibility value.
   */
  visibilityScope?: CreateAgentRequestVisibilityScope;
  static names(): { [key: string]: string } {
    return {
      callableAgents: 'CallableAgents',
      description: 'Description',
      displayName: 'DisplayName',
      expertSuites: 'ExpertSuites',
      metadata: 'Metadata',
      model: 'Model',
      name: 'Name',
      publishImmediately: 'PublishImmediately',
      skills: 'Skills',
      systemPrompt: 'SystemPrompt',
      tools: 'Tools',
      visibility: 'Visibility',
      visibilityScope: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callableAgents: { 'type': 'array', 'itemType': CreateAgentRequestCallableAgents },
      description: 'string',
      displayName: 'string',
      expertSuites: { 'type': 'array', 'itemType': CreateAgentRequestExpertSuites },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      publishImmediately: 'boolean',
      skills: { 'type': 'array', 'itemType': CreateAgentRequestSkills },
      systemPrompt: 'string',
      tools: { 'type': 'array', 'itemType': CreateAgentRequestTools },
      visibility: 'string',
      visibilityScope: CreateAgentRequestVisibilityScope,
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
    if(this.model) {
      $dara.Model.validateMap(this.model);
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

