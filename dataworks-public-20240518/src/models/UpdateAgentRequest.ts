// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentRequestCallableAgents extends $dara.Model {
  /**
   * @remarks
   * The name of the called sub-agent. The agent must be one that the current caller has permissions to use.
   * 
   * @example
   * data-analysis
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

export class UpdateAgentRequestExpertSuites extends $dara.Model {
  /**
   * @remarks
   * The source of the expert suite. OFFICIAL: official suite. DB or omitted: custom suite. Both types of references use SuiteId. Version fields apply only to custom resources.
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * The ID of the target expert suite. The suite must be one that the current caller has permissions to reference.
   * 
   * @example
   * suite_example
   */
  suiteId?: string;
  /**
   * @remarks
   * The published integer version number of the custom expert suite, used to explicitly select an existing version. Do not pass this field when Source is set to OFFICIAL. This parameter is mutually exclusive with VersionSelector. To obtain explicit and reproducible references, do not rely on the default selection when the version is omitted.
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * The semantic version selection expression of the custom expert suite, such as ^1.2.3. Use this parameter only when the custom resource version selection capability is deployed on the target server. This parameter is mutually exclusive with Version. This field is not accepted when Source is set to OFFICIAL. To ensure compatibility with servers whose version capabilities are unconfirmed, use an existing integer Version.
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

export class UpdateAgentRequestSkills extends $dara.Model {
  /**
   * @remarks
   * The name of the custom skill. Use the Name of a visible custom skill. For official skills, use SkillId.
   * 
   * @example
   * my-business-skill
   */
  name?: string;
  /**
   * @remarks
   * The resource ID of the official skill. This parameter is used when Source is set to OFFICIAL.
   * 
   * @example
   * dataworks-semantic
   */
  skillId?: string;
  /**
   * @remarks
   * The source of the skill. OFFICIAL: official skill, used with SkillId. DB or omitted: custom skill, used with Name.
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * The published integer version number of the custom skill, used to explicitly select an existing version. Do not pass this field when Source is set to OFFICIAL. This parameter is mutually exclusive with VersionSelector.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The semantic version selection expression of the custom skill, such as ^1.2.3. Use this parameter only when the custom resource version selection capability is deployed on the target server. This parameter is mutually exclusive with Version. This field is not accepted when Source is set to OFFICIAL. To ensure compatibility with servers whose version capabilities are unconfirmed, use an existing integer Version.
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

export class UpdateAgentRequestTools extends $dara.Model {
  /**
   * @remarks
   * The name of the built-in toolset. This parameter is required when Kind is set to BUILTIN_TOOLSET. Use a name supported by the target server. Omit this parameter when Kind is set to MCP_TOOLSET.
   * 
   * @example
   * web_search
   */
  builtinName?: string;
  /**
   * @remarks
   * The tool type. A valid tool reference must specify BUILTIN_TOOLSET or MCP_TOOLSET. For BUILTIN_TOOLSET, BuiltinName must also be specified. For MCP_TOOLSET, McpServerName must also be specified. The target server validates the reference based on the tool type.
   * 
   * @example
   * MCP_TOOLSET
   */
  kind?: string;
  /**
   * @remarks
   * The list of selected MCP tool names. If this parameter is omitted or an empty array is passed, tools are not filtered by name. Each item must be the name of a tool that actually exists in the target service.
   * 
   * @example
   * ["only-this-tool"]
   */
  mcpItems?: string[];
  /**
   * @remarks
   * The MCP service name. This parameter is required when Kind is set to MCP_TOOLSET. The service must be one that the current invoker has permissions to reference and that has an active published version.
   * 
   * @example
   * mcp-a
   */
  mcpServerName?: string;
  /**
   * @remarks
   * A field retained from the legacy model. Specifying only Name does not constitute a valid tool configuration and cannot replace Kind, BuiltinName, or McpServerName.
   * 
   * @example
   * search_tables
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

export class UpdateAgentRequestVisibilityScope extends $dara.Model {
  /**
   * @remarks
   * The list of visible project IDs. This parameter takes effect when Visibility is set to `PROJECT`.
   */
  projectIds?: string[];
  /**
   * @remarks
   * The list of visible user IDs. This parameter is used when Visibility is set to USER.
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

export class UpdateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The list of callable sub-agent references. For non-empty references, the referenced sub-agents must be visible. The agent cannot reference itself or form a call loop. Omit this parameter if no modification is required. Do not use an empty array to express general retention or clearing semantics.
   * 
   * @example
   * [{"Name":"data-analysis"}]
   */
  callableAgents?: UpdateAgentRequestCallableAgents[];
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
   * The agent definition version used for concurrency control. We recommend that you explicitly specify the AgentVersion just obtained from GetAgent for each call. The update is rejected if the version does not match the current version on the server. To ensure compatibility with different deployment versions, do not rely on the server-side processing when this parameter is omitted.
   * 
   * @example
   * 2
   */
  expectedVersion?: number;
  /**
   * @remarks
   * The list of expert suite references. If omitted, existing references are retained. An explicit empty array clears the references. For official suites, specify only Source=OFFICIAL and SuiteId. Version, VersionSelector, or client artifact fields are not accepted. For custom suites, use SuiteId, and you can explicitly specify an existing integer Version.
   * 
   * @example
   * [{"SuiteId":"suite_example","Version":3}]
   */
  expertSuites?: UpdateAgentRequestExpertSuites[];
  /**
   * @remarks
   * The extended metadata. If omitted, existing metadata is retained. If passed, business metadata is updated, and the server retains protected system metadata.
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
   * The name of the agent to be updated. Use the Name returned by GetAgent. This field is used to locate the target agent and cannot be used to rename the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to publish the agent immediately after the update. Valid values: true: saves a new draft version first and then requests publishing. false or omitted: saves only the definition. Saving and publishing are not atomic operations. If the operation fails, call GetAgent to read the current version back before retrying, to avoid blindly repeating the update.
   * 
   * @example
   * false
   */
  publishImmediately?: boolean;
  /**
   * @remarks
   * The list of skill references. Omit this parameter if no modification is required. Do not use an empty array to indicate retention or clearing. For official skills, specify only Source=OFFICIAL and SkillId. Name, Version, VersionSelector, or client artifact fields are not accepted. For custom skills, specify Name, and you can explicitly specify an existing integer Version.
   * 
   * @example
   * [{"Source":"OFFICIAL","SkillId":"dataworks-semantic"}]
   */
  skills?: UpdateAgentRequestSkills[];
  /**
   * @remarks
   * The system prompt.
   * 
   * @example
   * You are an excellent ETL engineer
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The list of tool references. Omit this parameter if no modification is required. The current new backend retains existing tools even if an empty array is passed. A non-empty array replaces the references. Each item must include Kind and the corresponding configuration, and cannot include only Name. Replace the MCP service and tool names in the example with actual values available to the current identity.
   * 
   * @example
   * [{"Kind":"MCP_TOOLSET","McpServerName":"mcp-a","McpItems":["only-this-tool"]}]
   */
  tools?: UpdateAgentRequestTools[];
  /**
   * @remarks
   * The visibility level. Valid values: <br>`TENANT`: visible within the account. <br>`PROJECT`: visible to specified projects. <br>`USER`: visible to specified users.
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The visibility scope. The corresponding field is used based on the Visibility parameter.
   */
  visibilityScope?: UpdateAgentRequestVisibilityScope;
  static names(): { [key: string]: string } {
    return {
      callableAgents: 'CallableAgents',
      description: 'Description',
      displayName: 'DisplayName',
      expectedVersion: 'ExpectedVersion',
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
      callableAgents: { 'type': 'array', 'itemType': UpdateAgentRequestCallableAgents },
      description: 'string',
      displayName: 'string',
      expectedVersion: 'number',
      expertSuites: { 'type': 'array', 'itemType': UpdateAgentRequestExpertSuites },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      publishImmediately: 'boolean',
      skills: { 'type': 'array', 'itemType': UpdateAgentRequestSkills },
      systemPrompt: 'string',
      tools: { 'type': 'array', 'itemType': UpdateAgentRequestTools },
      visibility: 'string',
      visibilityScope: UpdateAgentRequestVisibilityScope,
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

