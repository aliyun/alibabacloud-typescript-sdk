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
   * The namespace to watch.
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
   * The list of protocols supported by the agent. This parameter is required when type is set to Agent. It is not required for other types.
   */
  agentProtocols?: string[];
  /**
   * @remarks
   * The list of AI API protocols. This parameter is required and only one protocol can be passed when type is set to LLM. It is required and multiple protocols can be passed when type is set to Ai. It is not required for other types. Example: OpenAI/v1.
   */
  aiProtocols?: string[];
  /**
   * @remarks
   * The permission authentication configuration. This parameter is required when enableAuth is set to true.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The base path of the API. It must start with a forward slash (/), be up to 256 bytes in length, and contain no spaces. This parameter is required when type is set to Rest. When type is set to LLM, Ai, or Agent, this parameter is optional and defaults to /.
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
   * The list of deployment configurations for the HTTP API. This parameter is required and only one deployment configuration can be passed when type is set to LLM or Ai. Request-layer validation is not performed for other types.
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
   * Specifies whether to enable permission authentication. This parameter is validated when type is set to LLM, Ai, or Agent. It is not validated at the request layer when type is set to Rest.
   * 
   * @example
   * true
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The timeout period for waiting for the backend to return the first byte.
   * 
   * @example
   * 30
   */
  firstByteTimeout?: number;
  /**
   * @remarks
   * The configuration information of the HTTP Ingress API. This parameter is required and cannot be nil when type is set to HttpIngress. It is not required for other types.
   */
  ingressConfig?: CreateHttpApiRequestIngressConfig;
  /**
   * @remarks
   * The AI model category. This parameter is optional when type is set to LLM or Ai, and is not required for other types. Valid values: Text (text generation), Image (image generation), Audio (audio processing), Video (video generation), MultiModal (multimodal), Embedding (vector embedding), Rerank (reranking), and Others (others).
   * 
   * @example
   * Text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The name of the HTTP API, which is used to identify the API resource, such as test-api.
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
   * The conflict merging strategy for import.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * The type of the HTTP API. Valid values: Http (common HTTP API), Rest (RESTful API), WebSocket (WebSocket API), HttpIngress (HTTP API accessed through Ingress), LLM (large language model API), and Agent (agent API).
   * 
   * This parameter is required.
   * 
   * @example
   * Http
   */
  type?: string;
  /**
   * @remarks
   * The versioning configuration of the API.
   */
  versionConfig?: HttpApiVersionConfig;
  /**
   * @remarks
   * The idempotency token. It is a globally unique value generated by the caller. Use a UUID. The token can be up to 64 characters in length. Within about 24 hours after the first request succeeds, a repeated request with the same ClientToken and identical request parameters directly returns the httpApiId created by the first request without creating the HTTP API again. If the request parameters are different, the IdempotentParameterMismatch error is returned. If the first request is still being processed, the IdempotentProcessing error is returned. If this parameter is not specified, idempotency control is disabled, and the behavior is consistent with the existing version.
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

