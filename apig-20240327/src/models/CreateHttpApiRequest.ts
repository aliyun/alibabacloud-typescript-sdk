// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiVersionConfig } from "./HttpApiVersionConfig";


export class CreateHttpApiRequestIngressConfig extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * k7v5eobfzttudni2pw***
   */
  clusterId?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cq146allhtgk***
   */
  environmentId?: string;
  /**
   * @remarks
   * The Ingress class to listen on.
   * 
   * @example
   * mse
   */
  ingressClass?: string;
  /**
   * @remarks
   * Specifies whether to update the address in the Ingress status.
   * 
   * @example
   * false
   */
  overrideIngressIp?: boolean;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * src-crdddallhtgtr***
   * 
   * @deprecated
   */
  sourceId?: string;
  /**
   * @remarks
   * The namespace to listen on.
   * 
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      environmentId: 'environmentId',
      ingressClass: 'ingressClass',
      overrideIngressIp: 'overrideIngressIp',
      sourceId: 'sourceId',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      environmentId: 'string',
      ingressClass: 'string',
      overrideIngressIp: 'boolean',
      sourceId: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * The list of protocols supported by the agent. This parameter is required when type is set to Agent. You do not need to specify this parameter for other types.
   */
  agentProtocols?: string[];
  /**
   * @remarks
   * The list of AI API protocols. This parameter is required when type is set to LLM, and only one protocol can be specified. This parameter is required when type is set to Ai, and multiple protocols can be specified. You do not need to specify this parameter for other types. Example protocol entry: OpenAI/v1.
   */
  aiProtocols?: string[];
  /**
   * @remarks
   * The authentication configuration. This parameter is required when enableAuth is set to true.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The base path of the API. The value must start with a forward slash (/), cannot exceed 256 bytes in length, and cannot contain spaces. This parameter is required when type is set to Rest. When type is set to LLM, Ai, or Agent, this parameter is optional and defaults to /.
   * 
   * @example
   * /v1
   */
  basePath?: string;
  /**
   * @remarks
   * The ID of the gateway to which the API belongs.
   * 
   * @example
   * gw-abc123xyz789
   */
  belongGatewayId?: string;
  /**
   * @remarks
   * The list of deployment configurations for the HTTP API. This parameter is required when type is set to LLM or Ai, and only one deployment configuration can be specified. This parameter is not validated at the request level for other types.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * Test API for integration
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run without executing the operation.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable authentication. This parameter is validated when type is set to LLM, Ai, or Agent. This parameter is not validated at the request level when type is set to Rest.
   * 
   * @example
   * true
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The timeout period for waiting for the first byte from the backend.
   * 
   * @example
   * 30
   */
  firstByteTimeout?: number;
  /**
   * @remarks
   * The HTTP Ingress API configuration. This parameter is required and cannot be nil when type is set to HttpIngress. You do not need to specify this parameter for other types.
   */
  ingressConfig?: CreateHttpApiRequestIngressConfig;
  /**
   * @remarks
   * The AI model category. This parameter is optional when type is set to LLM or Ai. You do not need to specify this parameter for other types. Valid values:
   * - Text: text generation.
   * - Image: image generation.
   * - Audio: audio processing.
   * - Video: AI video generation.
   * - MultiModal: multimodal.
   * - Embedding: embedding.
   * - Rerank: reranking.
   * - Others: other.
   * 
   * @example
   * Text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The name of the HTTP API, which identifies the API resource. Example: test-api.
   * 
   * This parameter is required.
   * 
   * @example
   * test-api
   */
  name?: string;
  /**
   * @remarks
   * The list of API access protocols.
   */
  protocols?: string[];
  /**
   * @remarks
   * Specifies whether to remove the base path when forwarding requests.
   * 
   * @example
   * true
   */
  removeBasePathOnForward?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The conflict merge strategy for import.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * The HTTP API type. Valid values:
   * - Http: a standard HTTP API.
   * - Rest: a RESTful API.
   * - WebSocket: a WebSocket API.
   * - HttpIngress: an HTTP API accessed through Ingress.
   * - LLM: a large language model API.
   * - Agent: an agent proxy API.
   * 
   * This parameter is required.
   * 
   * @example
   * Http
   */
  type?: string;
  /**
   * @remarks
   * The API versioning configuration.
   */
  versionConfig?: HttpApiVersionConfig;
  /**
   * @remarks
   * The idempotency token, which is a globally unique value generated by the caller. We recommend that you use a UUID. The value cannot exceed 64 characters in length. Within approximately 24 hours after the first successful request, a duplicate request that carries the same ClientToken and identical request parameters directly returns the httpApiId created by the first request without creating a duplicate HTTP API. If the same ClientToken is carried but the request parameters are different, the IdempotentParameterMismatch error is returned. If the first request is still being processed, the IdempotentProcessing error is returned. If this parameter is not specified, idempotency control is not enabled, and the behavior is consistent with the existing version.
   * 
   * @example
   * 5f7a2c1e-9b3d-4e8f-a1c6-0d2b8e4f7a13
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentProtocols: 'agentProtocols',
      aiProtocols: 'aiProtocols',
      authConfig: 'authConfig',
      basePath: 'basePath',
      belongGatewayId: 'belongGatewayId',
      deployConfigs: 'deployConfigs',
      description: 'description',
      dryRun: 'dryRun',
      enableAuth: 'enableAuth',
      firstByteTimeout: 'firstByteTimeout',
      ingressConfig: 'ingressConfig',
      modelCategory: 'modelCategory',
      name: 'name',
      protocols: 'protocols',
      removeBasePathOnForward: 'removeBasePathOnForward',
      resourceGroupId: 'resourceGroupId',
      strategy: 'strategy',
      type: 'type',
      versionConfig: 'versionConfig',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProtocols: { 'type': 'array', 'itemType': 'string' },
      aiProtocols: { 'type': 'array', 'itemType': 'string' },
      authConfig: AuthConfig,
      basePath: 'string',
      belongGatewayId: 'string',
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      dryRun: 'boolean',
      enableAuth: 'boolean',
      firstByteTimeout: 'number',
      ingressConfig: CreateHttpApiRequestIngressConfig,
      modelCategory: 'string',
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      removeBasePathOnForward: 'boolean',
      resourceGroupId: 'string',
      strategy: 'string',
      type: 'string',
      versionConfig: HttpApiVersionConfig,
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentProtocols)) {
      $dara.Model.validateArray(this.agentProtocols);
    }
    if(Array.isArray(this.aiProtocols)) {
      $dara.Model.validateArray(this.aiProtocols);
    }
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(this.ingressConfig && typeof (this.ingressConfig as any).validate === 'function') {
      (this.ingressConfig as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    if(this.versionConfig && typeof (this.versionConfig as any).validate === 'function') {
      (this.versionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

