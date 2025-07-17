// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AgentServiceConfigDashScopeConfigAppCredentials extends $dara.Model {
  apiKey?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      appId: 'appId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentServiceConfigDashScopeConfig extends $dara.Model {
  appCredentials?: AgentServiceConfigDashScopeConfigAppCredentials[];
  static names(): { [key: string]: string } {
    return {
      appCredentials: 'appCredentials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCredentials: { 'type': 'array', 'itemType': AgentServiceConfigDashScopeConfigAppCredentials },
    };
  }

  validate() {
    if(Array.isArray(this.appCredentials)) {
      $dara.Model.validateArray(this.appCredentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentServiceConfigDifyConfig extends $dara.Model {
  apiKey?: string;
  botType?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      botType: 'botType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      botType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentServiceConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://dashscope.aliyuncs.com/api/v1
   */
  address?: string;
  dashScopeConfig?: AgentServiceConfigDashScopeConfig;
  difyConfig?: AgentServiceConfigDifyConfig;
  enableHealthCheck?: boolean;
  protocols?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      dashScopeConfig: 'dashScopeConfig',
      difyConfig: 'difyConfig',
      enableHealthCheck: 'enableHealthCheck',
      protocols: 'protocols',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      dashScopeConfig: AgentServiceConfigDashScopeConfig,
      difyConfig: AgentServiceConfigDifyConfig,
      enableHealthCheck: 'boolean',
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
    };
  }

  validate() {
    if(this.dashScopeConfig && typeof (this.dashScopeConfig as any).validate === 'function') {
      (this.dashScopeConfig as any).validate();
    }
    if(this.difyConfig && typeof (this.difyConfig as any).validate === 'function') {
      (this.difyConfig as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

