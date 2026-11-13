// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiServiceConfigApiKeyFailover extends $dara.Model {
  /**
   * @remarks
   * The cooldown duration after an API key is ejected.
   * 
   * @example
   * 30000
   */
  cooldownDuration?: number;
  /**
   * @remarks
   * Specifies whether to enable API key failure ejection.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The set of response status matching rules that trigger API key failure ejection.
   */
  failoverOnStatus?: string[];
  /**
   * @remarks
   * The failure count threshold that triggers API key ejection.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      cooldownDuration: 'cooldownDuration',
      enabled: 'enabled',
      failoverOnStatus: 'failoverOnStatus',
      failureThreshold: 'failureThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cooldownDuration: 'number',
      enabled: 'boolean',
      failoverOnStatus: { 'type': 'array', 'itemType': 'string' },
      failureThreshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failoverOnStatus)) {
      $dara.Model.validateArray(this.failoverOnStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  /**
   * @remarks
   * Configures whether to insert Bedrock cache markers based on prompt positions.
   * 
   * @example
   * {"systemPrompt":true}
   */
  bedrockPromptCachePointPositions?: { [key: string]: boolean };
  /**
   * @remarks
   * The Bedrock service endpoint mode, which supports runtime and mantle. If omitted, runtime is used.
   * 
   * @example
   * runtime
   */
  endpointMode?: string;
  /**
   * @remarks
   * Specifies whether to enable prompt caching for the Bedrock upstream.
   * 
   * @example
   * true
   */
  promptCacheEnable?: boolean;
  /**
   * @remarks
   * The data retention policy for the prompt cache.
   * 
   * @example
   * in_memory
   */
  promptCacheRetention?: string;
  /**
   * @remarks
   * The applicable model strategy for Bedrock prompt caching.
   * 
   * @example
   * supported_models_only
   */
  promptCacheStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      awsAccessKey: 'awsAccessKey',
      awsRegion: 'awsRegion',
      awsSecretKey: 'awsSecretKey',
      bedrockPromptCachePointPositions: 'bedrockPromptCachePointPositions',
      endpointMode: 'endpointMode',
      promptCacheEnable: 'promptCacheEnable',
      promptCacheRetention: 'promptCacheRetention',
      promptCacheStrategy: 'promptCacheStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      awsAccessKey: 'string',
      awsRegion: 'string',
      awsSecretKey: 'string',
      bedrockPromptCachePointPositions: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      endpointMode: 'string',
      promptCacheEnable: 'boolean',
      promptCacheRetention: 'string',
      promptCacheStrategy: 'string',
    };
  }

  validate() {
    if(this.bedrockPromptCachePointPositions) {
      $dara.Model.validateMap(this.bedrockPromptCachePointPositions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiServiceConfigKlingServiceConfig extends $dara.Model {
  /**
   * @remarks
   * The KlingAI access key identifier. Examples use desensitized values.
   * 
   * @example
   * kling-access-key-****
   */
  klingAccessKey?: string;
  /**
   * @remarks
   * The KlingAI secret key. Examples use desensitized values.
   * 
   * @example
   * kling-secret-key-****
   */
  klingSecretKey?: string;
  /**
   * @remarks
   * The advance refresh configuration for KlingAI tokens.
   * 
   * @example
   * 120
   */
  klingTokenRefreshAhead?: number;
  static names(): { [key: string]: string } {
    return {
      klingAccessKey: 'klingAccessKey',
      klingSecretKey: 'klingSecretKey',
      klingTokenRefreshAhead: 'klingTokenRefreshAhead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      klingAccessKey: 'string',
      klingSecretKey: 'string',
      klingTokenRefreshAhead: 'number',
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
   * The connection type, which can be a private network (VPC) or a public network.
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

export class AiServiceConfigRetryOnFailure extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable retries upon current request failure.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of retries for the current request.
   * 
   * @example
   * 2
   */
  maxRetries?: number;
  /**
   * @remarks
   * The set of response status matching rules that trigger retries for the current request.
   */
  retryOnStatus?: string[];
  /**
   * @remarks
   * The retry timeout configuration for the current request.
   * 
   * @example
   * 30000
   */
  retryTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      maxRetries: 'maxRetries',
      retryOnStatus: 'retryOnStatus',
      retryTimeout: 'retryTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      maxRetries: 'number',
      retryOnStatus: { 'type': 'array', 'itemType': 'string' },
      retryTimeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.retryOnStatus)) {
      $dara.Model.validateArray(this.retryOnStatus);
    }
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
   * The authentication service name used by Vertex AI.
   * 
   * @example
   * google-oauth2
   */
  vertexAuthServiceName?: string;
  /**
   * @remarks
   * Specifies whether to use the OpenAI-compatible interface of Vertex AI.
   * 
   * @example
   * false
   */
  vertexOpenAICompatible?: boolean;
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
   * The number of seconds before access token expiration to trigger an advance refresh.
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
      vertexOpenAICompatible: 'vertexOpenAICompatible',
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
      vertexOpenAICompatible: 'boolean',
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
   * The configuration for API key failure ejection and recovery.
   */
  apiKeyFailover?: AiServiceConfigApiKeyFailover;
  /**
   * @remarks
   * The read-only summary of KMS reference names, excluding credential values.
   */
  apiKeyReferences?: string[];
  /**
   * @remarks
   * The list of API keys.
   */
  apiKeys?: string[];
  /**
   * @remarks
   * The name of the request header used to pass authentication credentials to the upstream.
   * 
   * @example
   * Authorization
   */
  authHeaderKey?: string;
  /**
   * @remarks
   * The Bedrock service-specific configuration.
   */
  bedrockServiceConfig?: AiServiceConfigBedrockServiceConfig;
  /**
   * @remarks
   * Specifies whether to enable Claude Code compatibility mode.
   * 
   * @example
   * false
   */
  claudeCodeMode?: boolean;
  /**
   * @remarks
   * The list of compatible protocols supported by the service.
   */
  compatibleProtocols?: string[];
  /**
   * @remarks
   * The read-only service configuration version. Use expectedConfigRevision for conditional updates.
   * 
   * @example
   * 7e4f52a9b0c34d16a268e913f5c2087b
   */
  configRevision?: string;
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
   * Specifies whether to enable health checks.
   * 
   * @example
   * true
   */
  enableHealthCheck?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the outlier detection feature.
   * 
   * @example
   * true
   */
  enableOutlierDetection?: boolean;
  /**
   * @remarks
   * The authentication and token configuration specific to the KlingAI service.
   */
  klingServiceConfig?: AiServiceConfigKlingServiceConfig;
  /**
   * @remarks
   * The PAI-EAS service-specific configuration.
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
   * The configuration for retrying with a different key after the current request fails.
   */
  retryOnFailure?: AiServiceConfigRetryOnFailure;
  /**
   * @remarks
   * The upstream authentication mode, which distinguishes between API key authentication, no authentication, and pass-through downstream authentication.
   * 
   * @example
   * api-key
   */
  upstreamAuthMode?: string;
  /**
   * @remarks
   * The configuration information for the Vertex AI service.
   */
  vertexServiceConfig?: AiServiceConfigVertexServiceConfig;
  static names(): { [key: string]: string } {
    return {
      apiKeyGenerateMode: 'ApiKeyGenerateMode',
      address: 'address',
      apiKeyFailover: 'apiKeyFailover',
      apiKeyReferences: 'apiKeyReferences',
      apiKeys: 'apiKeys',
      authHeaderKey: 'authHeaderKey',
      bedrockServiceConfig: 'bedrockServiceConfig',
      claudeCodeMode: 'claudeCodeMode',
      compatibleProtocols: 'compatibleProtocols',
      configRevision: 'configRevision',
      defaultModelName: 'defaultModelName',
      enableHealthCheck: 'enableHealthCheck',
      enableOutlierDetection: 'enableOutlierDetection',
      klingServiceConfig: 'klingServiceConfig',
      paiEASServiceConfig: 'paiEASServiceConfig',
      protocols: 'protocols',
      provider: 'provider',
      retryOnFailure: 'retryOnFailure',
      upstreamAuthMode: 'upstreamAuthMode',
      vertexServiceConfig: 'vertexServiceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyGenerateMode: 'string',
      address: 'string',
      apiKeyFailover: AiServiceConfigApiKeyFailover,
      apiKeyReferences: { 'type': 'array', 'itemType': 'string' },
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      authHeaderKey: 'string',
      bedrockServiceConfig: AiServiceConfigBedrockServiceConfig,
      claudeCodeMode: 'boolean',
      compatibleProtocols: { 'type': 'array', 'itemType': 'string' },
      configRevision: 'string',
      defaultModelName: 'string',
      enableHealthCheck: 'boolean',
      enableOutlierDetection: 'boolean',
      klingServiceConfig: AiServiceConfigKlingServiceConfig,
      paiEASServiceConfig: AiServiceConfigPaiEASServiceConfig,
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
      retryOnFailure: AiServiceConfigRetryOnFailure,
      upstreamAuthMode: 'string',
      vertexServiceConfig: AiServiceConfigVertexServiceConfig,
    };
  }

  validate() {
    if(this.apiKeyFailover && typeof (this.apiKeyFailover as any).validate === 'function') {
      (this.apiKeyFailover as any).validate();
    }
    if(Array.isArray(this.apiKeyReferences)) {
      $dara.Model.validateArray(this.apiKeyReferences);
    }
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    if(this.bedrockServiceConfig && typeof (this.bedrockServiceConfig as any).validate === 'function') {
      (this.bedrockServiceConfig as any).validate();
    }
    if(Array.isArray(this.compatibleProtocols)) {
      $dara.Model.validateArray(this.compatibleProtocols);
    }
    if(this.klingServiceConfig && typeof (this.klingServiceConfig as any).validate === 'function') {
      (this.klingServiceConfig as any).validate();
    }
    if(this.paiEASServiceConfig && typeof (this.paiEASServiceConfig as any).validate === 'function') {
      (this.paiEASServiceConfig as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    if(this.retryOnFailure && typeof (this.retryOnFailure as any).validate === 'function') {
      (this.retryOnFailure as any).validate();
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

