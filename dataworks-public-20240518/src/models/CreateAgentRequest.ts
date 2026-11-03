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
   * The source of the expert suite. Valid values: OFFICIAL: official catalog resources. DB: personal or enterprise resources. If this parameter is omitted, the original database resource query semantics are retained. For official resources, the artifact version is fixed when the agent is released.
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * The ID of the expert suite. When you specify expert suite references, each item must include a SuiteId, which is verified by the server. When Source is set to OFFICIAL, this is the official catalog ID. Otherwise, this is the ID returned by expert suite management. The referenced resource must be visible to the caller.
   * 
   * @example
   * dataworks-data-analysis-extension
   */
  suiteId?: string;
  /**
   * @remarks
   * The fixed integer revision number of a released snapshot. This parameter applies only to personal or enterprise suites and is mutually exclusive with VersionSelector. Releasing a new version does not change the fixed reference. If both parameters are omitted, the latest version is used for each new session. Do not specify this parameter when Source is set to OFFICIAL.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The version selection expression. This parameter applies only to personal or enterprise resources and is mutually exclusive with Version. It supports exact semantic versions, latest, and the full npm/node-semver range syntax, such as 1.2.*, ^1.2.3, ~1.2.3, >=1.0.0 <2.0.0, and 1.x || 2.x. If both parameters are omitted, latest is used, and the highest matching released version is selected for each new session. Existing fixed integer references remain unchanged. Do not specify this parameter when Source is set to OFFICIAL.
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
   * The official catalog ID. Specify this parameter when Source is set to OFFICIAL. Do not specify Name, Version, or VersionSelector. Do not specify this parameter for personal or enterprise skills.
   * 
   * @example
   * dataworks-semantic
   */
  skillId?: string;
  /**
   * @remarks
   * The source of the skill. Valid values: OFFICIAL: official catalog resources. DB: personal or enterprise resources. If this parameter is omitted, the original query-by-name semantics are retained.
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * The fixed integer revision number of a released snapshot. This parameter applies only to personal or enterprise skills and is mutually exclusive with VersionSelector. Releasing a new version does not change the fixed reference. If both parameters are omitted, the latest version is used for each new session. Do not specify this parameter when Source is set to OFFICIAL.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The version selection expression. This parameter applies only to personal or enterprise resources and is mutually exclusive with Version. It supports exact semantic versions, latest, and the full npm/node-semver range syntax, such as 1.2.*, ^1.2.3, ~1.2.3, >=1.0.0 <2.0.0, and 1.x || 2.x. If both parameters are omitted, latest is used, and the highest matching released version is selected for each new session. Existing fixed integer references remain unchanged. Do not specify this parameter when Source is set to OFFICIAL.
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
   * The name of the MCP server.
   * 
   * @example
   * server-1
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
   * The released expert suites bound to the agent. For personal or enterprise suites, use SuiteId and optionally specify a fixed Version or VersionSelector. For official suites, you must explicitly set Source to OFFICIAL and specify the SuiteId from the official catalog. Do not specify Version or VersionSelector. If this parameter is not specified, an empty list is created, and official suites are not loaded by default.
   * 
   * @example
   * [{"Source":"OFFICIAL","SuiteId":"dataworks-data-analysis-extension"},{"SuiteId":"suite_example","Version":1}]
   */
  expertSuites?: CreateAgentRequestExpertSuites[];
  /**
   * @remarks
   * The extended metadata as key-value pairs.
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
   * The name of the agent. It must be unique within the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to publish the agent immediately after creation. Valid values:
   * - true: Publishes the created version.
   * - false or omitted: Retains the original behavior of creating a draft only.
   * Saving and publishing are not atomic operations. If publishing fails, the draft may already exist. Query the agent before retrying to avoid duplicate creation.
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
   * The visibility scope. The corresponding fields are used based on the Visibility parameter.
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

