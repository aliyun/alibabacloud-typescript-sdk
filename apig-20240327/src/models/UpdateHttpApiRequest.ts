// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiVersionConfig } from "./HttpApiVersionConfig";


export class UpdateHttpApiRequestIngressConfig extends $dara.Model {
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cr6ql0tlhtgmc****
   */
  environmentId?: string;
  /**
   * @remarks
   * The Ingress class for listening.
   * 
   * @example
   * mse
   */
  ingressClass?: string;
  /**
   * @remarks
   * Specifies whether to update the address in Ingress Status.
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
   * src-crdddallhtgtr****
   */
  sourceId?: string;
  /**
   * @remarks
   * The namespace for listening.
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
  agentProtocols?: string[];
  /**
   * @remarks
   * The AI protocols.
   */
  aiProtocols?: string[];
  /**
   * @remarks
   * The authentication configuration.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The API base path, which must start with a forward slash (/).
   * 
   * This parameter is required.
   * 
   * @example
   * /v1
   */
  basePath?: string;
  /**
   * @remarks
   * The deployment configurations.
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
  firstByteTimeout?: number;
  /**
   * @remarks
   * The HTTP Ingress API configurations.
   */
  ingressConfig?: UpdateHttpApiRequestIngressConfig;
  onlyChangeConfig?: boolean;
  /**
   * @remarks
   * The protocols that are used to access the API.
   */
  protocols?: string[];
  removeBasePathOnForward?: boolean;
  /**
   * @remarks
   * The versioning configurations.
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

