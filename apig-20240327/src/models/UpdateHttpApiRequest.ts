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
   * The Ingress class to listen to.
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
   * src-crdddallhtgtr****
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
   * The list of agent protocols.
   */
  agentProtocols?: string[];
  /**
   * @remarks
   * The list of AI protocols.
   */
  aiProtocols?: string[];
  /**
   * @remarks
   * The authentication configuration.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The base path of the API, which must start with a forward slash (/).
   * 
   * @example
   * /v1
   */
  basePath?: string;
  /**
   * @remarks
   * The list of API deployment configurations.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The description of the API.
   * 
   * @example
   * Updated API description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication.
   * 
   * @example
   * true
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The first byte timeout period, in seconds.
   * 
   * @example
   * 30
   */
  firstByteTimeout?: number;
  /**
   * @remarks
   * The configuration information of the HTTP Ingress API.
   */
  ingressConfig?: UpdateHttpApiRequestIngressConfig;
  /**
   * @remarks
   * Specifies whether to modify only the configuration. A value of true indicates that only the configuration is modified without triggering a redeployment.
   * 
   * @example
   * true
   */
  onlyChangeConfig?: boolean;
  /**
   * @remarks
   * The list of API access protocols.
   */
  protocols?: string[];
  /**
   * @remarks
   * Specifies whether to remove the base path during forwarding.
   * 
   * @example
   * true
   */
  removeBasePathOnForward?: boolean;
  /**
   * @remarks
   * The versioning configuration of the API.
   */
  versionConfig?: HttpApiVersionConfig;
  /**
   * @remarks
   * The idempotency token. If the same HTTP API is repeatedly called with the same client token and request parameters, the first successful result is returned.
   * 
   * @example
   * update-http-api-client-token-001
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. A value of true indicates that all synchronization checks identical to a real update are executed without updating any configurations or causing side effects. If omitted or set to false, the behavior remains consistent with the current version.
   */
  dryRun?: boolean;
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
      clientToken: 'clientToken',
      dryRun: 'dryRun',
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
      clientToken: 'string',
      dryRun: 'boolean',
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

