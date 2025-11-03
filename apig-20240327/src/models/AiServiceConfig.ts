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

export class AiServiceConfig extends $dara.Model {
  apiKeyGenerateMode?: string;
  /**
   * @example
   * https://dashscope.aliyun.com
   */
  address?: string;
  apiKeys?: string[];
  bedrockServiceConfig?: AiServiceConfigBedrockServiceConfig;
  enableHealthCheck?: boolean;
  paiEASServiceConfig?: AiServiceConfigPaiEASServiceConfig;
  protocols?: string[];
  /**
   * @example
   * qwen
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyGenerateMode: 'ApiKeyGenerateMode',
      address: 'address',
      apiKeys: 'apiKeys',
      bedrockServiceConfig: 'bedrockServiceConfig',
      enableHealthCheck: 'enableHealthCheck',
      paiEASServiceConfig: 'paiEASServiceConfig',
      protocols: 'protocols',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyGenerateMode: 'string',
      address: 'string',
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      bedrockServiceConfig: AiServiceConfigBedrockServiceConfig,
      enableHealthCheck: 'boolean',
      paiEASServiceConfig: AiServiceConfigPaiEASServiceConfig,
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    if(this.bedrockServiceConfig && typeof (this.bedrockServiceConfig as any).validate === 'function') {
      (this.bedrockServiceConfig as any).validate();
    }
    if(this.paiEASServiceConfig && typeof (this.paiEASServiceConfig as any).validate === 'function') {
      (this.paiEASServiceConfig as any).validate();
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

