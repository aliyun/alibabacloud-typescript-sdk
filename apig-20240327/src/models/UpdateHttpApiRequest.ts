// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiVersionConfig } from "./HttpApiVersionConfig";


export class UpdateHttpApiRequestIngressConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration.
   * 
   * @example
   * env-cr6ql0tlhtgmc****
   */
  environmentId?: string;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * mse
   */
  ingressClass?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * false
   */
  overrideIngressIp?: boolean;
  /**
   * @remarks
   * json
   * 
   * @example
   * src-crdddallhtgtr****
   */
  sourceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      ingressClass: 'ingressClass',
      overrideIngressIp: 'overrideIngressIp',
      sourceId: 'sourceId',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * The list of agent protocols
   */
  agentProtocols?: string[];
  /**
   * @remarks
   * The status code.
   */
  aiProtocols?: string[];
  /**
   * @remarks
   * The authentication configuration
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The list of API deployment configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * /v1
   */
  basePath?: string;
  /**
   * @remarks
   * The deployment configurations
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * The source ID.
   */
  description?: string;
  /**
   * @remarks
   * Whether authentication is enabled
   * 
   * @example
   * true
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The first byte timeout in nanoseconds
   * 
   * @example
   * 30s
   */
  firstByteTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable authentication.
   */
  ingressConfig?: UpdateHttpApiRequestIngressConfig;
  /**
   * @remarks
   * Whether to only change configuration without redeployment
   * 
   * @example
   * true
   */
  onlyChangeConfig?: boolean;
  /**
   * @remarks
   * The listened namespace.
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
   * A deployment configuration.
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
      firstByteTimeout: 'firstByteTimeout',
      ingressConfig: 'ingressConfig',
      onlyChangeConfig: 'onlyChangeConfig',
      protocols: 'protocols',
      removeBasePathOnForward: 'removeBasePathOnForward',
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
      firstByteTimeout: 'number',
      ingressConfig: UpdateHttpApiRequestIngressConfig,
      onlyChangeConfig: 'boolean',
      protocols: { 'type': 'array', 'itemType': 'string' },
      removeBasePathOnForward: 'boolean',
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

