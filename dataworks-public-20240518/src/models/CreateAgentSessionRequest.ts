// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSessionRequestParamsMetaAgent extends $dara.Model {
  /**
   * @remarks
   * The name of the agent bound to the session. This parameter is required. Valid values:
   * * dataworks_data_agent: DataWorks built-in agent - Data Agent. It provides AI capabilities for the entire data development lifecycle, including data integration, development, O&M, governance, and analysis.
   * * dataworks_chatbi_agent: DataWorks built-in agent - ChatBI. Based on natural language processing and intelligent analysis technologies, it automates the entire analysis process from requirement parsing, data extraction, and automatic code generation to visual report output through conversational interaction.
   * * dataworks_ai_assistant_agent: DataWorks built-in agent - AI Assistant. An enterprise-grade AI assistant for DataWorks built on open-source frameworks such as OpenClaw and Hermes Agent.
   * 
   * @example
   * dataworks_data_agent
   */
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentSessionRequestParamsMetaConfigSessionTags extends $dara.Model {
  /**
   * @remarks
   * The session tag. You can filter sessions based on session tags. For example, if you use a fixed RAM user to call an API operation but the calling system has its own account system, and you need to filter the session list based on the account ID, you can pass the account ID of the calling system as this tag. The value can be up to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * chatbi
   */
  sessionTagCode?: string;
  static names(): { [key: string]: string } {
    return {
      sessionTagCode: 'SessionTagCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionTagCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentSessionRequestParamsMetaConfig extends $dara.Model {
  /**
   * @remarks
   * The session source identifier, which facilitates retrieval by source. For example, if an agent is used on both Page A and Page B, and you want to display only sessions created on Page A when you are on Page A, you can filter sessions based on this parameter. The value can be up to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * openapi_sdk
   */
  sessionSource?: string;
  /**
   * @remarks
   * The list of session tags. You can search and filter sessions based on session tags later.
   */
  sessionTags?: CreateAgentSessionRequestParamsMetaConfigSessionTags[];
  static names(): { [key: string]: string } {
    return {
      sessionSource: 'SessionSource',
      sessionTags: 'SessionTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionSource: 'string',
      sessionTags: { 'type': 'array', 'itemType': CreateAgentSessionRequestParamsMetaConfigSessionTags },
    };
  }

  validate() {
    if(Array.isArray(this.sessionTags)) {
      $dara.Model.validateArray(this.sessionTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentSessionRequestParamsMetaInitialConfigOptions extends $dara.Model {
  /**
   * @remarks
   * The compute unit (CU) specifications of the session instance. Only 2, 4, 8, and 12 are supported. If this parameter is omitted, the instance CU is not specified, and reuse in shared mode is not constrained by the CU. If this parameter is specified, shared mode reuses only instances with the same CU. If the CU does not match, a new instance is created.
   * 
   * @example
   * 4
   */
  cu?: string;
  /**
   * @remarks
   * Execution mode:
   * * chat: conversation-only mode, suitable for simple data querying and Q&A scenarios. The advantage is that it is fast and consumes fewer tokens, but the disadvantage is that it cannot handle complex problems.
   * * cli: sandbox mode, suitable for complex data analytics, data processing, and code writing scenarios. The advantage is that it can handle complex problems, and the model independently analyzes and handles problems. The disadvantage is that the processing speed is slower and token consumption is higher compared to the chat mode.
   * 
   * @example
   * chat
   */
  executionLane?: string;
  /**
   * @remarks
   * The authorization mode for script execution. OpenAPI currently supports only the yolo mode. Valid values:
   * * yolo: automatic authorization. No manual intervention is required, and the model can process automatically.
   * 
   * @example
   * yolo
   */
  mode?: string;
  /**
   * @remarks
   * The model ID. Use the full model identifier supported by the target environment. If this parameter is omitted, the default model is used. If this parameter is passed, the server verifies its availability and applies it before the session is created.
   * 
   * @example
   * qwen3.7-max(openai)
   */
  model?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. It is used to initialize the session project context. If this parameter is omitted, it is processed as having no project. The project context can be corrected or switched later by the project context of PromptAgentSession.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  /**
   * @remarks
   * The reasoning configuration. The value must be supported by the target model. A value of none disables reasoning, and default uses the model\\"s default configuration. If an unsupported value is used or the configuration fails to apply, session creation fails. If this parameter is omitted, the existing reasoning configuration is not modified. A successful configuration updates the default value of the daemon workspace, which affects not only the current request.
   * 
   * @example
   * none
   */
  reasoningEffort?: string;
  /**
   * @remarks
   * The ID of the resource group used for initialization.
   * 
   * @example
   * Serverless_res_group_123123123_564657857
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The names of the loaded custom skills. Separate multiple names with commas (,).
   * 
   * @example
   * skill-name-1,skill-name2,skill-name-3
   */
  skills?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      executionLane: 'ExecutionLane',
      mode: 'Mode',
      model: 'Model',
      projectId: 'ProjectId',
      reasoningEffort: 'ReasoningEffort',
      resourceGroupId: 'ResourceGroupId',
      skills: 'Skills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      executionLane: 'string',
      mode: 'string',
      model: 'string',
      projectId: 'string',
      reasoningEffort: 'string',
      resourceGroupId: 'string',
      skills: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentSessionRequestParamsMeta extends $dara.Model {
  /**
   * @remarks
   * The agent configuration for the session. Valid values are the results returned by the ListAgents operation.
   */
  agent?: CreateAgentSessionRequestParamsMetaAgent;
  /**
   * @remarks
   * The session parameter settings, such as filter parameter settings based on the session source and session tags.
   */
  config?: CreateAgentSessionRequestParamsMetaConfig;
  /**
   * @remarks
   * The advanced parameter settings for the agent execution environment.
   */
  initialConfigOptions?: CreateAgentSessionRequestParamsMetaInitialConfigOptions;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      config: 'Config',
      initialConfigOptions: 'InitialConfigOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: CreateAgentSessionRequestParamsMetaAgent,
      config: CreateAgentSessionRequestParamsMetaConfig,
      initialConfigOptions: CreateAgentSessionRequestParamsMetaInitialConfigOptions,
    };
  }

  validate() {
    if(this.agent && typeof (this.agent as any).validate === 'function') {
      (this.agent as any).validate();
    }
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.initialConfigOptions && typeof (this.initialConfigOptions as any).validate === 'function') {
      (this.initialConfigOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentSessionRequestParams extends $dara.Model {
  /**
   * @remarks
   * The extended metadata that carries agent binding, session source, and tags.
   */
  meta?: CreateAgentSessionRequestParamsMeta;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: CreateAgentSessionRequestParamsMeta,
    };
  }

  validate() {
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID passed by the requester. The value is returned as is.
   * 
   * @example
   * 4758330557805415712
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Fixed to 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The business parameters.
   */
  params?: CreateAgentSessionRequestParams;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jsonrpc: 'string',
      params: CreateAgentSessionRequestParams,
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

