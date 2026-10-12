// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExternalAgentRequestBodyModelQuota extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the token quota. Default value: true. If set to false, the quota is disabled and existing quota rules are deleted.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The quota limit type. Required and validated by the backend when the quota is enabled. Fixed value: token.
   * 
   * @example
   * token
   */
  limitType?: string;
  /**
   * @remarks
   * The statistical period for the quota. Required and validated by the backend when the quota is enabled. Valid values:
   * - day: Daily.
   * - month: Monthly.
   * 
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The maximum number of tokens allowed to be consumed within a single period. Required and validated by the backend when the quota is enabled. The value must be greater than 0.
   * 
   * @example
   * 1000000
   */
  usageLimit?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      limitType: 'limitType',
      periodType: 'periodType',
      usageLimit: 'usageLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
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

export class UpdateExternalAgentRequestBodyModel extends $dara.Model {
  /**
   * @remarks
   * The model connection ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mc-1
   */
  modelConnectionId?: string;
  /**
   * @remarks
   * The upstream model name.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model token quota configuration. If not passed, no quota is configured.
   */
  quota?: UpdateExternalAgentRequestBodyModelQuota;
  static names(): { [key: string]: string } {
    return {
      modelConnectionId: 'modelConnectionId',
      modelName: 'modelName',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelConnectionId: 'string',
      modelName: 'string',
      quota: UpdateExternalAgentRequestBodyModelQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExternalAgentRequestBodySkillsVersionSelector extends $dara.Model {
  /**
   * @remarks
   * The type of the version selector. Valid values:
   * - LABEL: By label.
   * - VERSION: By specific version.
   * 
   * @example
   * LABEL
   */
  type?: string;
  /**
   * @remarks
   * The value of the selector. When the type is LABEL, this is the label name, such as latest. When the type is VERSION, this is the specific version number.
   * 
   * @example
   * latest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExternalAgentRequestBodySkills extends $dara.Model {
  /**
   * @remarks
   * The skill name.
   * 
   * This parameter is required.
   * 
   * @example
   * code-analysis
   */
  name?: string;
  /**
   * @remarks
   * The source type of the skill. Valid values:
   * - REFERENCE: References the AI Registry.
   * - STATIC: Statically provided with the package.
   * 
   * @example
   * REFERENCE
   */
  sourceType?: string;
  /**
   * @remarks
   * The skill version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The referenced version selector. If omitted, the default is LABEL/latest. Currently, only LABEL/latest is supported.
   */
  versionSelector?: UpdateExternalAgentRequestBodySkillsVersionSelector;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      sourceType: 'sourceType',
      version: 'version',
      versionSelector: 'versionSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceType: 'string',
      version: 'string',
      versionSelector: UpdateExternalAgentRequestBodySkillsVersionSelector,
    };
  }

  validate() {
    if(this.versionSelector && typeof (this.versionSelector as any).validate === 'function') {
      (this.versionSelector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExternalAgentRequestBodyTemplateAiRegistry extends $dara.Model {
  /**
   * @remarks
   * The name of the template in the AI Registry.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review-template
   */
  name?: string;
  /**
   * @remarks
   * The version of the template in the AI Registry.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateExternalAgentRequestBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The AI Registry template configuration.
   */
  aiRegistry?: UpdateExternalAgentRequestBodyTemplateAiRegistry;
  static names(): { [key: string]: string } {
    return {
      aiRegistry: 'aiRegistry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRegistry: UpdateExternalAgentRequestBodyTemplateAiRegistry,
    };
  }

  validate() {
    if(this.aiRegistry && typeof (this.aiRegistry as any).validate === 'function') {
      (this.aiRegistry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExternalAgentRequestBodyTools extends $dara.Model {
  /**
   * @remarks
   * The tool name.
   * 
   * This parameter is required.
   * 
   * @example
   * code-reviewer
   */
  name?: string;
  /**
   * @remarks
   * The tool type. Valid values:
   * - MCP: MCP tool.
   * 
   * This parameter is required.
   * 
   * @example
   * MCP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class UpdateExternalAgentRequestBody extends $dara.Model {
  /**
   * @remarks
   * The description of the external agent.
   * 
   * @example
   * Code review agent running in the user environment
   */
  description?: string;
  /**
   * @remarks
   * The agent instructions used to guide the behavior of the agent.
   * 
   * @example
   * You are a code review assistant
   */
  instruction?: string;
  /**
   * @remarks
   * The model configuration. Available only when modelSource is set to PLATFORM.
   */
  model?: UpdateExternalAgentRequestBodyModel;
  /**
   * @remarks
   * The source of the model configuration. PLATFORM indicates that the platform parses and delivers the model configuration. RUNTIME indicates that the external runtime manages the model independently, and the model parameter cannot be passed at the same time. Valid values:
   * - PLATFORM: Platform model.
   * - RUNTIME: Runtime model.
   * 
   * @example
   * PLATFORM
   */
  modelSource?: string;
  /**
   * @remarks
   * The name of the external agent.
   * 
   * @example
   * my-external-agent
   */
  name?: string;
  /**
   * @remarks
   * The list of skill configurations.
   */
  skills?: UpdateExternalAgentRequestBodySkills[];
  /**
   * @remarks
   * The agent template configuration.
   */
  template?: UpdateExternalAgentRequestBodyTemplate;
  /**
   * @remarks
   * The list of tool configurations.
   */
  tools?: UpdateExternalAgentRequestBodyTools[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      instruction: 'instruction',
      model: 'model',
      modelSource: 'modelSource',
      name: 'name',
      skills: 'skills',
      template: 'template',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instruction: 'string',
      model: UpdateExternalAgentRequestBodyModel,
      modelSource: 'string',
      name: 'string',
      skills: { 'type': 'array', 'itemType': UpdateExternalAgentRequestBodySkills },
      template: UpdateExternalAgentRequestBodyTemplate,
      tools: { 'type': 'array', 'itemType': UpdateExternalAgentRequestBodyTools },
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExternalAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateExternalAgentRequestBody;
  /**
   * @remarks
   * The reserved idempotency token. The backend does not provide idempotency guarantees in the current phase.
   * 
   * @example
   * client-token-1
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateExternalAgentRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

