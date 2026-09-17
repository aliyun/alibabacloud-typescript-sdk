// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAgentSessionRequestParamsMetaAgent extends $dara.Model {
  /**
   * @example
   * hologres
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
   * holo
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
   * CHAT_HOLOGRES
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

export class CreateAgentSessionRequestParamsMetaInitialConfigOptions extends $dara.Model {
  /**
   * @example
   * cli
   */
  executionLane?: string;
  /**
   * @example
   * yolo
   */
  mode?: string;
  /**
   * @example
   * rg-acfmvqsnvkfr2sa
   */
  resourceGroupId?: string;
  /**
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
  agent?: CreateAgentSessionRequestParamsMetaAgent;
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
   * 2072736942627512345
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

