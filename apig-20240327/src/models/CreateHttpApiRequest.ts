// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { CreateHttpApiRequestIngressConfig } from "./CreateHttpApiRequestIngressConfig";
import { HttpApiVersionConfig } from "./HttpApiVersionConfig";


export class CreateHttpApiRequest extends $dara.Model {
  agentProtocols?: string[];
  /**
   * @remarks
   * The AI API protocols. Valid value:
   * 
   * *   OpenAI/v1
   */
  aiProtocols?: string[];
  /**
   * @remarks
   * The authentication configurations.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The API base path, which must start with a forward slash (/).
   * 
   * @example
   * /v1
   */
  basePath?: string;
  /**
   * @remarks
   * The API deployment configurations. Currently, only AI APIs support deployment configurations, and only a single deployment configuration can be passed.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * API for testing
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication.
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The HTTP Ingress configurations.
   */
  ingressConfig?: CreateHttpApiRequestIngressConfig;
  /**
   * @remarks
   * The API name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-api
   */
  name?: string;
  /**
   * @remarks
   * The protocols that are used to call the API.
   */
  protocols?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzgvmlotionbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The API type. Valid values:
   * 
   * *   Http
   * *   Rest
   * *   WebSocket
   * *   HttpIngress
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
  static names(): { [key: string]: string } {
    return {
      agentProtocols: 'agentProtocols',
      aiProtocols: 'aiProtocols',
      authConfig: 'authConfig',
      basePath: 'basePath',
      deployConfigs: 'deployConfigs',
      description: 'description',
      enableAuth: 'enableAuth',
      ingressConfig: 'ingressConfig',
      name: 'name',
      protocols: 'protocols',
      resourceGroupId: 'resourceGroupId',
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
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      enableAuth: 'boolean',
      ingressConfig: CreateHttpApiRequestIngressConfig,
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
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

