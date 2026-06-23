// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSessionRequestParamsMetaAgent extends $dara.Model {
  /**
   * @remarks
   * The agent name to bind to the session. This parameter is required.
   * 
   * @example
   * chat_cli_chatbi
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
   * The session tag. You can use session tags to filter sessions. For example, if your application calls the API with a fixed RAM sub-account but maintains its own user account system, you can pass a user\\"s account ID as a tag. This allows you to filter the session list by your internal account IDs. The tag can be up to 128 characters and can contain letters, digits, hyphens (-), and underscores (_).
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
   * The identifier for the session source. This allows you to search for sessions by their source. For example, if you use an agent on multiple pages, such as Page A and Page B, you can use this parameter to filter and display only the sessions created on Page A. The identifier can be up to 128 characters and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * openapi_sdk
   */
  sessionSource?: string;
  /**
   * @remarks
   * A list of session tags. You can use these tags to search and filter sessions.
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
   * @example
   * chat，cli
   */
  executionLane?: string;
  /**
   * @example
   * yolo
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      executionLane: 'ExecutionLane',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionLane: 'string',
      mode: 'string',
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
   * The agent configuration for this session. The value must be one of the agents returned by the `ListAgents` API.
   */
  agent?: CreateAgentSessionRequestParamsMetaAgent;
  /**
   * @remarks
   * The configuration parameters for the session, such as filters based on session source and session tags.
   */
  config?: CreateAgentSessionRequestParamsMetaConfig;
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
   * The extended metadata, which includes information such as agent binding, session source, and session tags.
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
   * The request ID provided by the client. This ID is returned in the response without modification.
   * 
   * @example
   * 4758330557805415712
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. The value is fixed at `2.0`.
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

