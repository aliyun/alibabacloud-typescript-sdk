// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSessionRequestParamsMetaAgent extends $dara.Model {
  /**
   * @remarks
   * The name of the agent to bind to the session. This parameter is required. Valid values:
   * * dataworks_data_agent: DataWorks built-in agent — Data Agent. Provides intelligent data development AI capabilities that cover the entire workflow of data integration, development, O&M, governance, and analytics.
   * * dataworks_chatbi_agent: DataWorks built-in agent — ChatBI. Uses natural language processing and intelligent analytics to automate the entire analysis workflow through conversational interaction, from requirement parsing, data extraction, and automatic code generation to visual report output.
   * * dataworks_ai_assistant_agent: DataWorks built-in agent — AI Assistant Service. An enterprise-grade dedicated AI assistant for DataWorks built on open source frameworks such as OpenClaw and Hermes Agent.
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
   * The session tag. You can filter sessions by tag. For example, if you use a fixed RAM user to call the OpenAPI but your system has its own account system, you can pass the account ID of your system as this tag to filter the session list by account ID. The value can be up to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
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
   * The session source identifier, which facilitates retrieval by source. For example, if an agent is used on both Page A and Page B, and you want Page A to display only sessions created on Page A, you can filter by this parameter. The value can be up to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * openapi_sdk
   */
  sessionSource?: string;
  /**
   * @remarks
   * The list of session tags. You can use session tags for search and filtering.
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
   * The exec mode. Valid values:
   * * chat: Conversation mode only. Suitable for simple Q&A scenarios. Advantages: fast response and low token consumption. Disadvantages: cannot handle complex problems.
   * * cli: Sandbox mode. Suitable for complex data analytics, data processing, and code writing scenarios. Advantages: can handle complex problems, and the model autonomously performs analysis and problem resolution. Disadvantages: slower processing speed and higher token consumption compared to the conversation mode.
   * 
   * @example
   * chat，cli
   */
  executionLane?: string;
  /**
   * @remarks
   * The authorization mode for script execution. OpenAPI currently supports only the yolo mode. Valid values:
   * * yolo: Automatic authorization. No manual intervention is required, and the model processes tasks automatically.
   * 
   * @example
   * yolo
   */
  mode?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. Used to initialize the session project context. If omitted, the session is treated as having no project context. You can later correct or switch the project context by using PromptAgentSession.
   * 
   * @example
   * 12345
   */
  projectId?: string;
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
   * The names of custom skills to load. Separate multiple skill names with commas (,).
   * 
   * @example
   * skill-name-1,skill-name2,skill-name-3
   */
  skills?: string;
  static names(): { [key: string]: string } {
    return {
      executionLane: 'ExecutionLane',
      mode: 'Mode',
      projectId: 'ProjectId',
      resourceGroupId: 'ResourceGroupId',
      skills: 'Skills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionLane: 'string',
      mode: 'string',
      projectId: 'string',
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
   * The agent configuration for this session. Valid values are those returned by the ListAgents operation.
   */
  agent?: CreateAgentSessionRequestParamsMetaAgent;
  /**
   * @remarks
   * The session parameter settings, such as filtering parameter settings based on session source and session tags.
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
   * The extended metadata that carries agent binding, session source, tags, and other information.
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
   * The request ID passed by the caller. The value is returned as-is.
   * 
   * @example
   * 4758330557805415712
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Fixed value: 2.0.
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

