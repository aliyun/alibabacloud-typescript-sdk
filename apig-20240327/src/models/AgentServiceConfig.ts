// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AgentServiceConfigCustomConfig extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * app-xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The key generation mode.
   * 
   * @example
   * Reference
   */
  apiKeyGenerateMode?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      apiKeyGenerateMode: 'apiKeyGenerateMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiKeyGenerateMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentServiceConfigDashScopeConfigAppCredentials extends $dara.Model {
  /**
   * @remarks
   * apiKey
   * 
   * @example
   * sk-xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-xxx
   */
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
  /**
   * @remarks
   * The application configuration.
   */
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
  /**
   * @remarks
   * API Key
   * 
   * @example
   * app-xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The interaction type.
   * 
   * @example
   * chatflow
   */
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
   * The address.
   * 
   * This parameter is required.
   * 
   * @example
   * https://dashscope.aliyuncs.com/api/v1
   */
  address?: string;
  /**
   * @remarks
   * The custom configuration. Required when provider is set to custom.
   */
  customConfig?: AgentServiceConfigCustomConfig;
  /**
   * @remarks
   * The DashScope service configuration. Required when provider is set to qwen. The appCredentials parameter cannot be empty, and each entry must have non-empty appId and apiKey values.
   */
  dashScopeConfig?: AgentServiceConfigDashScopeConfig;
  /**
   * @remarks
   * The Dify service configuration. Required when provider is set to dify. The botType and apiKey parameters cannot be empty.
   */
  difyConfig?: AgentServiceConfigDifyConfig;
  /**
   * @remarks
   * Specifies whether to enable health check.
   * 
   * @example
   * true
   */
  enableHealthCheck?: boolean;
  /**
   * @remarks
   * Specifies whether to enable outlier detection.
   * 
   * @example
   * true
   */
  enableOutlierDetection?: boolean;
  /**
   * @remarks
   * The list of communication protocols.
   */
  protocols?: string[];
  /**
   * @remarks
   * The service provider.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      customConfig: 'customConfig',
      dashScopeConfig: 'dashScopeConfig',
      difyConfig: 'difyConfig',
      enableHealthCheck: 'enableHealthCheck',
      enableOutlierDetection: 'enableOutlierDetection',
      protocols: 'protocols',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      customConfig: AgentServiceConfigCustomConfig,
      dashScopeConfig: AgentServiceConfigDashScopeConfig,
      difyConfig: AgentServiceConfigDifyConfig,
      enableHealthCheck: 'boolean',
      enableOutlierDetection: 'boolean',
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
    };
  }

  validate() {
    if(this.customConfig && typeof (this.customConfig as any).validate === 'function') {
      (this.customConfig as any).validate();
    }
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

