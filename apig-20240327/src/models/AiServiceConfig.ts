// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiServiceConfigBedrockServiceConfig extends $dara.Model {
  /**
   * @remarks
   * The AWS access key.
   * 
   * @example
   * AKIAIOSFODNN7EXAMPLE
   */
  awsAccessKey?: string;
  /**
   * @remarks
   * The AWS region.
   * 
   * @example
   * us-east-1
   */
  awsRegion?: string;
  /**
   * @remarks
   * The AWS secret key.
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
   * The connection type: private network (vpc) or public network (public).
   * 
   * @example
   * "public"，"private"
   */
  endpointType?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * svc-cvaeb0um1hkqp79k72v0
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * auto-ai-service
   */
  serviceName?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * cb89d4de30042df4459442589664e00d
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
   * The safety filtering level settings for the Gemini model.
   */
  geminiSafetySetting?: { [key: string]: string };
  /**
   * @remarks
   * The authentication key for Vertex AI.
   * 
   * @example
   * {\\"type\\":\\"service_account\\",\\"project_id\\":\\"my-project\\",\\"private_key\\":\\"-----BEGIN PRIVATE KEY-----...\\",\\"client_email\\":\\"xxx@xxx.iam.gserviceaccount.com\\",\\"token_uri\\":\\"https://oauth2.googleapis.com/token\\"}
   */
  vertexAuthKey?: string;
  /**
   * @remarks
   * The service name of the authentication service used by Vertex AI.
   * 
   * @example
   * google-oauth2
   */
  vertexAuthServiceName?: string;
  /**
   * @remarks
   * The Google Cloud project ID.
   * 
   * @example
   * my-project
   */
  vertexProjectId?: string;
  /**
   * @remarks
   * The Google Cloud region where the Vertex AI service is located.
   * 
   * @example
   * us-central1
   */
  vertexRegion?: string;
  /**
   * @remarks
   * The number of seconds before the access token expires to refresh it in advance.
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
   * The generation mode of the API key.
   * 
   * @example
   * Custom
   */
  apiKeyGenerateMode?: string;
  /**
   * @remarks
   * The service address.
   * 
   * @example
   * https://dashscope.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The list of API keys.
   */
  apiKeys?: string[];
  /**
   * @remarks
   * The configuration specific to the Bedrock service.
   */
  bedrockServiceConfig?: AiServiceConfigBedrockServiceConfig;
  /**
   * @remarks
   * The list of compatible protocols supported by the service.
   */
  compatibleProtocols?: string[];
  /**
   * @remarks
   * The name of the default model.
   * 
   * @example
   * gpt-4
   */
  defaultModelName?: string;
  /**
   * @remarks
   * Indicates whether health check is enabled.
   * 
   * @example
   * true
   */
  enableHealthCheck?: boolean;
  /**
   * @remarks
   * Indicates whether outlier detection is enabled.
   * 
   * @example
   * true
   */
  enableOutlierDetection?: boolean;
  /**
   * @remarks
   * The configuration specific to the PAI-EAS service.
   */
  paiEASServiceConfig?: AiServiceConfigPaiEASServiceConfig;
  /**
   * @remarks
   * The list of model protocols.
   */
  protocols?: string[];
  /**
   * @remarks
   * The large language model provider.
   * 
   * @example
   * qwen
   * moonshot
   * baichuan
   * yi
   * zhipuai
   * 360ai
   * hunyuan
   * stepfun
   * spark
   * openai
   * claude
   * anthropic
   * doubao
   * minimax
   * gemini
   * azure
   * deepseek
   * custom
   * pai-eas
   * bedrock
   * vertex
   */
  provider?: string;
  /**
   * @remarks
   * The configuration of the Vertex AI service.
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

