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
   * OFFICIAL 表示官方目录资源；DB 表示个人或企业资源。省略时保持原有数据库资源查询语义。官方资源在 Agent 发布时固定制品版本。
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * 传入专家套件引用时，每项需提供 SuiteId，由服务端校验。Source=OFFICIAL 时为官方目录 ID；其他情况为专家套件管理返回的 ID。引用资源必须对调用者可见。
   * 
   * @example
   * dataworks-data-analysis-extension
   */
  suiteId?: string;
  /**
   * @remarks
   * 仅用于个人或企业套件，必须为已发布快照的整数版本号。省略时在 Agent 发布时固定当前已发布版本。Source=OFFICIAL 时不传此字段。
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      suiteId: 'SuiteId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * Source=OFFICIAL 时传官方目录 ID，不传 Name 或 Version。个人或企业 Skill 不传此字段。
   * 
   * @example
   * dataworks-semantic
   */
  skillId?: string;
  /**
   * @remarks
   * OFFICIAL 表示官方目录资源；DB 表示个人或企业资源，省略时保持原有按名称查询语义。
   * 
   * @example
   * OFFICIAL
   */
  source?: string;
  /**
   * @remarks
   * 仅用于个人或企业 Skill，必须为已发布快照的整数版本。省略时在 Agent 发布时固定当前已发布版本；Source=OFFICIAL 时不传。
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      skillId: 'SkillId',
      source: 'Source',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class CreateAgentRequestTools extends $dara.Model {
  /**
   * @remarks
   * The name of the McpServer.
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
   * The list of child agents that can be called by this agent.
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
   * Agent 绑定的已发布专家套件。个人或企业套件使用 SuiteId，可选 Version；官方套件必须显式指定 Source=OFFICIAL 和官方目录中的 SuiteId，不传 Version。未传时创建为空，不会默认加载所有官方套件。
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
   * 是否在创建 Agent 后立即发布。true 发布创建的版本；false 或省略保持原有仅创建草稿行为。保存与发布不是原子操作，发布失败时草稿可能已存在；重试前应先查询 Agent，避免重复创建。
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
   * You are a data analytics assistant
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
   * The visibility level.<br>
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
   * The visibility scope. The corresponding field is used based on the visibility level.
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

