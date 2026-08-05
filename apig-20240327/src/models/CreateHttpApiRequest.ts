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
   * The Ingress Class to listen on.
   * 
   * @example
   * mse
   */
  ingressClass?: string;
  /**
   * @remarks
   * Specifies whether to update the address in the Ingress Status.
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
   * The list of protocols supported by the agent. Required when type is Agent. Not required for other types.
   */
  agentProtocols?: string[];
  /**
   * @remarks
   * The list of AI API protocols. Required when type is LLM, and only one protocol can be specified. Required when type is Ai, and multiple protocols can be specified. Not required for other types. Example protocol entry: OpenAI/v1.
   */
  aiProtocols?: string[];
  /**
   * @remarks
   * The authentication configuration. Required when enableAuth=true.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The API base path. Must start with a forward slash (/), cannot exceed 256 bytes in length, and cannot contain spaces. Required when type=Rest. Optional when type=LLM, Ai, or Agent. Default value: /
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
   * The list of deployment configurations for the HTTP API. Required when type is LLM or Ai, and only one deployment configuration can be specified. Not validated at the request level for other types.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The API description.
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
   * Specifies whether to enable authentication. Validated when type is LLM, Ai, or Agent. Not validated at the request level when type is Rest.
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
   * The HTTP Ingress API configuration. Required when type is HttpIngress and cannot be nil. Not required for other types.
   */
  ingressConfig?: CreateHttpApiRequestIngressConfig;
  /**
   * @remarks
   * The AI model category. Optional when type is LLM or Ai. Not required for other types. Valid values: Text (text generation), Image (image generation), Audio (audio processing), Video (AI video generation), MultiModal (multi-modal), Embedding (text embedding), Rerank (reranking), Others (other).
   * 
   * @example
   * Text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The name of the HTTP API, used to identify the current API resource. Example: test-api.
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
   * The HTTP API type. Valid values: Http (standard HTTP API), Rest (RESTful API), WebSocket (WebSocket API), HttpIngress (HTTP API accessed through Ingress), LLM (large language model API), Agent (Agent proxy API).
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

