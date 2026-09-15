// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExternalAgentRequestBodyModelQuota extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable token quota. Defaults to true if not specified. Set to false to disable and delete existing quota rules.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The quota limit type. Required by backend validation when quota is enabled. Fixed value: token.
   * 
   * @example
   * token
   */
  limitType?: string;
  /**
   * @remarks
   * The quota statistical period. Required by backend validation when quota is enabled. Valid values: day (daily) and month (monthly).
   * 
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The maximum number of tokens that can be consumed within a single period. Required by backend validation when quota is enabled. The value must be greater than 0.
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

export class CreateExternalAgentRequestBodyModel extends $dara.Model {
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
   * The model token quota configuration. If not specified, no quota is configured.
   */
  quota?: CreateExternalAgentRequestBodyModelQuota;
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
      quota: CreateExternalAgentRequestBodyModelQuota,
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

export class CreateExternalAgentRequestBodySkills extends $dara.Model {
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
   * The skill version.
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

export class CreateExternalAgentRequestBodyTemplateAiRegistry extends $dara.Model {
  /**
   * @remarks
   * The name of the template in AI Registry.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review-template
   */
  name?: string;
  /**
   * @remarks
   * The version of the template in AI Registry.
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

export class CreateExternalAgentRequestBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The AI Registry template configuration.
   */
  aiRegistry?: CreateExternalAgentRequestBodyTemplateAiRegistry;
  static names(): { [key: string]: string } {
    return {
      aiRegistry: 'aiRegistry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRegistry: CreateExternalAgentRequestBodyTemplateAiRegistry,
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

export class CreateExternalAgentRequestBodyTools extends $dara.Model {
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

export class CreateExternalAgentRequestBody extends $dara.Model {
  /**
   * @remarks
   * The description of the external agent.
   * 
   * @example
   * A code review agent running in the user environment
   */
  description?: string;
  /**
   * @remarks
   * The agent instruction that guides the behavior of the agent.
   * 
   * @example
   * You are a code review assistant
   */
  instruction?: string;
  /**
   * @remarks
   * The model configuration. Available only when modelSource is set to PLATFORM.
   */
  model?: CreateExternalAgentRequestBodyModel;
  /**
   * @remarks
   * The model configuration source. PLATFORM indicates that the platform parses and delivers the model configuration. RUNTIME indicates that the external runtime manages the model independently, and the model parameter cannot be specified at the same time. Valid values:
   * - PLATFORM: platform model.
   * - RUNTIME: runtime model.
   * 
   * @example
   * PLATFORM
   */
  modelSource?: string;
  /**
   * @remarks
   * The name of the external agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my-external-agent
   */
  name?: string;
  /**
   * @remarks
   * The list of skill configurations.
   */
  skills?: CreateExternalAgentRequestBodySkills[];
  /**
   * @remarks
   * The agent template configuration.
   */
  template?: CreateExternalAgentRequestBodyTemplate;
  /**
   * @remarks
   * The list of tool configurations.
   */
  tools?: CreateExternalAgentRequestBodyTools[];
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
      model: CreateExternalAgentRequestBodyModel,
      modelSource: 'string',
      name: 'string',
      skills: { 'type': 'array', 'itemType': CreateExternalAgentRequestBodySkills },
      template: CreateExternalAgentRequestBodyTemplate,
      tools: { 'type': 'array', 'itemType': CreateExternalAgentRequestBodyTools },
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

export class CreateExternalAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: CreateExternalAgentRequestBody;
  /**
   * @remarks
   * The reserved idempotency token. The backend does not provide idempotency guarantee in the current phase.
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
      body: CreateExternalAgentRequestBody,
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

