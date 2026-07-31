// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSessionRequestParamsMetaAgent extends $dara.Model {
  /**
   * @remarks
   * The name of the agent bound to the session. This parameter is required.
   * * dataworks_data_agent: DataWorks built-in agent — Data Agent, which provides intelligent data development AI capabilities covering the entire workflow of data integration, development, O&M, governance, and analytics.
   * * dataworks_chatbi_agent: DataWorks built-in agent — ChatBI, which uses natural language processing and intelligent analytics technologies to automate the entire analysis workflow from requirement parsing, data extraction, and automatic code generation to visualization report output through conversational interaction.
   * * dataworks_ai_assistant_agent: DataWorks built-in agent — AI Assistant Service, which is a DataWorks enterprise-grade dedicated AI assistant built on open source frameworks such as OpenClaw and Hermes Agent.
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
   * The session tag. You can filter sessions based on session tags. For example, if you use a fixed RAM user to call OpenAPI operations but your calling system has its own account system, you can pass the account ID of your calling system as this tag to filter the session list by account ID. The value can be up to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
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
   * The session source identifier for retrieval by source. For example, if an agent is used on both page A and page B, and you want page A to display only sessions created from page A, you can filter based on this parameter. The value can be up to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
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
   * * chat: conversation mode only. Suitable for simple Q&A scenarios. Advantages: fast response and low token consumption. Disadvantages: cannot handle complex problems.
   * * cli: sandbox mode. Suitable for complex data analytics, data processing, and code writing scenarios. Advantages: can handle complex problems with the model autonomously performing analysis and problem resolution. Disadvantages: slower processing speed and higher token consumption compared to chat mode.
   * 
   * @example
   * chat，cli
   */
  executionLane?: string;
  /**
   * @remarks
   * The authorization mode for script execution. OpenAPI currently supports only the yolo mode. Valid values:
   * * yolo: automatic authorization. No human intervention is required, and the model can process tasks automatically.
   * 
   * @example
   * yolo
   */
  mode?: string;
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
   * The names of custom skills to load. Separate multiple names with commas (,).
   * 
   * @example
   * skill-name-1,skill-name2,skill-name-3
   */
  skills?: string;
  static names(): { [key: string]: string } {
    return {
      executionLane: 'ExecutionLane',
      mode: 'Mode',
      resourceGroupId: 'ResourceGroupId',
      skills: 'Skills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionLane: 'string',
      mode: 'string',
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

