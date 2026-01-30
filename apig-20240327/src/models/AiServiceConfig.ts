// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiServiceConfigBedrockServiceConfig extends $dara.Model {
  awsAccessKey?: string;
  awsRegion?: string;
  awsSecretKey?: string;
  static names(): { [key: string]: string } {
    return {
      awsAccessKey: 'awsAccessKey',
      awsRegion: 'awsRegion',
      awsSecretKey: 'awsSecretKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      awsAccessKey: 'string',
      awsRegion: 'string',
      awsSecretKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiServiceConfigPaiEASServiceConfig extends $dara.Model {
  endpointType?: string;
  serviceId?: string;
  serviceName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'endpointType',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      serviceId: 'string',
      serviceName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiServiceConfigVertexServiceConfig extends $dara.Model {
  geminiSafetySetting?: { [key: string]: string };
  vertexAuthKey?: string;
  vertexAuthServiceName?: string;
  vertexProjectId?: string;
  vertexRegion?: string;
  vertexTokenRefreshAhead?: number;
  static names(): { [key: string]: string } {
    return {
      geminiSafetySetting: 'geminiSafetySetting',
      vertexAuthKey: 'vertexAuthKey',
      vertexAuthServiceName: 'vertexAuthServiceName',
      vertexProjectId: 'vertexProjectId',
      vertexRegion: 'vertexRegion',
      vertexTokenRefreshAhead: 'vertexTokenRefreshAhead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geminiSafetySetting: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      vertexAuthKey: 'string',
      vertexAuthServiceName: 'string',
      vertexProjectId: 'string',
      vertexRegion: 'string',
      vertexTokenRefreshAhead: 'number',
    };
  }

  validate() {
    if(this.geminiSafetySetting) {
      $dara.Model.validateMap(this.geminiSafetySetting);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiServiceConfig extends $dara.Model {
  apiKeyGenerateMode?: string;
  /**
   * @example
   * https://dashscope.aliyun.com
   */
  address?: string;
  apiKeys?: string[];
  bedrockServiceConfig?: AiServiceConfigBedrockServiceConfig;
  compatibleProtocols?: string[];
  defaultModelName?: string;
  enableHealthCheck?: boolean;
  enableOutlierDetection?: boolean;
  paiEASServiceConfig?: AiServiceConfigPaiEASServiceConfig;
  protocols?: string[];
  /**
   * @example
   * qwen
   */
  provider?: string;
  vertexServiceConfig?: AiServiceConfigVertexServiceConfig;
  static names(): { [key: string]: string } {
    return {
      apiKeyGenerateMode: 'ApiKeyGenerateMode',
      address: 'address',
      apiKeys: 'apiKeys',
      bedrockServiceConfig: 'bedrockServiceConfig',
      compatibleProtocols: 'compatibleProtocols',
      defaultModelName: 'defaultModelName',
      enableHealthCheck: 'enableHealthCheck',
      enableOutlierDetection: 'enableOutlierDetection',
      paiEASServiceConfig: 'paiEASServiceConfig',
      protocols: 'protocols',
      provider: 'provider',
      vertexServiceConfig: 'vertexServiceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyGenerateMode: 'string',
      address: 'string',
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      bedrockServiceConfig: AiServiceConfigBedrockServiceConfig,
      compatibleProtocols: { 'type': 'array', 'itemType': 'string' },
      defaultModelName: 'string',
      enableHealthCheck: 'boolean',
      enableOutlierDetection: 'boolean',
      paiEASServiceConfig: AiServiceConfigPaiEASServiceConfig,
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
      vertexServiceConfig: AiServiceConfigVertexServiceConfig,
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    if(this.bedrockServiceConfig && typeof (this.bedrockServiceConfig as any).validate === 'function') {
      (this.bedrockServiceConfig as any).validate();
    }
    if(Array.isArray(this.compatibleProtocols)) {
      $dara.Model.validateArray(this.compatibleProtocols);
    }
    if(this.paiEASServiceConfig && typeof (this.paiEASServiceConfig as any).validate === 'function') {
      (this.paiEASServiceConfig as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    if(this.vertexServiceConfig && typeof (this.vertexServiceConfig as any).validate === 'function') {
      (this.vertexServiceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

