// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSessionRequestParamsMetaAgent extends $dara.Model {
  /**
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
   * @example
   * openapi_sdk
   */
  sessionSource?: string;
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

export class CreateAgentSessionRequestParamsMeta extends $dara.Model {
  agent?: CreateAgentSessionRequestParamsMetaAgent;
  config?: CreateAgentSessionRequestParamsMetaConfig;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: CreateAgentSessionRequestParamsMetaAgent,
      config: CreateAgentSessionRequestParamsMetaConfig,
    };
  }

  validate() {
    if(this.agent && typeof (this.agent as any).validate === 'function') {
      (this.agent as any).validate();
    }
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentSessionRequestParams extends $dara.Model {
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
   * @example
   * 4758330557805415712
   */
  id?: string;
  /**
   * @example
   * 2.0
   */
  jsonrpc?: string;
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

