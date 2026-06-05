// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentResponseBodyAgentCallableAgents extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * sub-agent
   */
  name?: string;
  source?: string;
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

export class GetAgentResponseBodyAgentModel extends $dara.Model {
  config?: { [key: string]: any };
  maxTokens?: number;
  /**
   * @example
   * qwen3-max
   */
  modelName?: string;
  stream?: boolean;
  temperature?: number;
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
   * @example
   * my-skill
   */
  name?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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
  builtinName?: string;
  /**
   * @example
   * builtin
   */
  kind?: string;
  mcpItems?: string[];
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
  projectIds?: string[];
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
  callableAgents?: GetAgentResponseBodyAgentCallableAgents[];
  /**
   * @example
   * 123456
   */
  creatorId?: string;
  description?: string;
  displayName?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: string;
  metadata?: { [key: string]: any };
  model?: GetAgentResponseBodyAgentModel;
  /**
   * @example
   * 123456
   */
  modifierId?: string;
  /**
   * @example
   * my-agent
   */
  name?: string;
  requiredRuntime?: string[];
  skills?: GetAgentResponseBodyAgentSkills[];
  systemPrompt?: string;
  tools?: GetAgentResponseBodyAgentTools[];
  /**
   * @example
   * TENANT
   */
  visibility?: string;
  visibilityScope?: GetAgentResponseBodyAgentVisibilityScope;
  static names(): { [key: string]: string } {
    return {
      callableAgents: 'CallableAgents',
      creatorId: 'CreatorId',
      description: 'Description',
      displayName: 'DisplayName',
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
      callableAgents: { 'type': 'array', 'itemType': GetAgentResponseBodyAgentCallableAgents },
      creatorId: 'string',
      description: 'string',
      displayName: 'string',
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
  agent?: GetAgentResponseBodyAgent;
  /**
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

