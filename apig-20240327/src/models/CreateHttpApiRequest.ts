// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiVersionConfig } from "./HttpApiVersionConfig";


export class CreateHttpApiRequestIngressConfig extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * k7v5eobfzttudni2pw***
   */
  clusterId?: string;
  /**
   * @remarks
   * $.parameters[0].schema.properties.deployConfigs.enumValueTitles
   * 
   * @example
   * env-cq146allhtgk***
   */
  environmentId?: string;
  /**
   * @remarks
   * $.parameters[0].schema.properties.enableAuth.example
   * 
   * @example
   * mse
   */
  ingressClass?: string;
  /**
   * @remarks
   * $.parameters[0].schema.properties.authConfig.description
   * 
   * @example
   * false
   */
  overrideIngressIp?: boolean;
  /**
   * @remarks
   * $.parameters[0].schema.properties.enableAuth.description
   * 
   * @example
   * src-crdddallhtgtr***
   * 
   * @deprecated
   */
  sourceId?: string;
  /**
   * @remarks
   * $.parameters[0].schema.properties.enableAuth.enumValueTitles
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
   * Agent protocols
   */
  agentProtocols?: string[];
  /**
   * @remarks
   * $.parameters[0].schema.properties.authConfig.enumValueTitles
   */
  aiProtocols?: string[];
  /**
   * @remarks
   * The request parameters for API creation.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * $.parameters[0].schema.properties.deployConfigs.items.example
   * 
   * @example
   * /v1
   */
  basePath?: string;
  belongGatewayId?: string;
  /**
   * @remarks
   * $.parameters[0].schema.example
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * $.parameters[0].schema.properties.aiProtocols.items.description
   * 
   * @example
   * $.parameters[0].schema.properties.aiProtocols.items.example
   */
  description?: string;
  /**
   * @deprecated
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Create an API of HTTP type
   * 
   * @example
   * true
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * First byte timeout
   * 
   * @example
   * 30
   */
  firstByteTimeout?: number;
  /**
   * @remarks
   * $.parameters[0].schema.properties.deployConfigs.example
   */
  ingressConfig?: CreateHttpApiRequestIngressConfig;
  /**
   * @remarks
   * Model category
   * 
   * @example
   * llm/text-to-image
   */
  modelCategory?: string;
  /**
   * @remarks
   * $.parameters[0].schema.example
   * 
   * This parameter is required.
   * 
   * @example
   * test-api
   */
  name?: string;
  /**
   * @remarks
   * $.parameters[0].schema.properties.aiProtocols.description
   */
  protocols?: string[];
  /**
   * @remarks
   * Whether to remove base path when forwarding
   * 
   * @example
   * true
   */
  removeBasePathOnForward?: boolean;
  /**
   * @remarks
   * $.parameters[0].schema.properties.authConfig.example
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  strategy?: string;
  /**
   * @remarks
   * $.parameters[0].schema.properties.deployConfigs.description
   * 
   * @example
   * Http
   */
  type?: string;
  /**
   * @remarks
   * $.parameters[0].schema.properties.deployConfigs.items.enumValueTitles
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

