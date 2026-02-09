// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiServiceConfigBedrockServiceConfig extends $dara.Model {
  /**
   * @remarks
   * AWS-AccessKey
   * 
   * @example
   * AKIAIOSFODNN7EXAMPLE
   */
  awsAccessKey?: string;
  /**
   * @remarks
   * AWS-Region
   * 
   * @example
   * us-west-2
   */
  awsRegion?: string;
  /**
   * @remarks
   * AWS-SecretKey
   * 
   * @example
   * wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
   */
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
  /**
   * @remarks
   * Type of endpoint.
   * 
   * @example
   * "public"，"private"
   */
  endpointType?: string;
  /**
   * @remarks
   * Service identifier.
   * 
   * @example
   * svc-d33onfmm1hkn5duhuqjg
   */
  serviceId?: string;
  /**
   * @remarks
   * Name of the service.
   * 
   * @example
   * service-hello
   */
  serviceName?: string;
  /**
   * @remarks
   * Workspace identifier.
   * 
   * @example
   * plw-d5g7qsem1hkmih54g210
   */
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
  /**
   * @remarks
   * Gemini safety settings.
   */
  geminiSafetySetting?: { [key: string]: string };
  /**
   * @remarks
   * Vertex AI authentication key.
   * 
   * @example
   * {\\"type\\":\\"service_account\\",\\"project_id\\":\\"xxx\\",\\"private_key\\":\\"-----BEGIN PRIVATE KEY-----\\",\\"client_email\\":\\"xxx@xxx.iam.gserviceaccount.com\\",\\"token_uri\\":\\"https://oauth2.googleapis.com/token\\"}
   */
  vertexAuthKey?: string;
  /**
   * @remarks
   * Vertex AI auth service name.
   * 
   * @example
   * custom-vertex-auth
   */
  vertexAuthServiceName?: string;
  /**
   * @remarks
   * Vertex AI project ID.
   * 
   * @example
   * my-gcp-project-123
   */
  vertexProjectId?: string;
  /**
   * @remarks
   * Vertex AI region.
   * 
   * @example
   * us-central1
   */
  vertexRegion?: string;
  /**
   * @remarks
   * Vertex token refresh lead time.
   * 
   * @example
   * 300
   */
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
  /**
   * @remarks
   * API key generation mode.
   * 
   * @example
   * -
   */
  apiKeyGenerateMode?: string;
  /**
   * @remarks
   * The service endpoint.
   * 
   * @example
   * https://dashscope.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The API keys.
   */
  apiKeys?: string[];
  /**
   * @remarks
   * Bedrock service configuration.
   */
  bedrockServiceConfig?: AiServiceConfigBedrockServiceConfig;
  /**
   * @remarks
   * Supported compatible protocols.
   */
  compatibleProtocols?: string[];
  /**
   * @remarks
   * Default model name.
   * 
   * @example
   * qwen-turbo
   */
  defaultModelName?: string;
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
   * Enable outlier detection.
   * 
   * @example
   * false
   */
  enableOutlierDetection?: boolean;
  /**
   * @remarks
   * PAI-EAS service configuration settings.
   */
  paiEASServiceConfig?: AiServiceConfigPaiEASServiceConfig;
  /**
   * @remarks
   * The LLM protocols.
   */
  protocols?: string[];
  /**
   * @remarks
   * The Large Language Model (LLM) provider.
   * 
   * @example
   * qwen
   */
  provider?: string;
  /**
   * @remarks
   * Vertex AI service configuration.
   */
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

