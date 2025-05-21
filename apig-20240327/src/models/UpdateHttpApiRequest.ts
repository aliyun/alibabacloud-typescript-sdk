// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { UpdateHttpApiRequestIngressConfig } from "./UpdateHttpApiRequestIngressConfig";
import { HttpApiVersionConfig } from "./HttpApiVersionConfig";


export class UpdateHttpApiRequest extends $dara.Model {
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
  /**
   * @remarks
   * The HTTP Ingress API configurations.
   */
  ingressConfig?: UpdateHttpApiRequestIngressConfig;
  /**
   * @remarks
   * The protocols that are used to access the API.
   */
  protocols?: string[];
  /**
   * @remarks
   * The versioning configurations.
   */
  versionConfig?: HttpApiVersionConfig;
  static names(): { [key: string]: string } {
    return {
      aiProtocols: 'aiProtocols',
      authConfig: 'authConfig',
      basePath: 'basePath',
      deployConfigs: 'deployConfigs',
      description: 'description',
      enableAuth: 'enableAuth',
      ingressConfig: 'ingressConfig',
      protocols: 'protocols',
      versionConfig: 'versionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiProtocols: { 'type': 'array', 'itemType': 'string' },
      authConfig: AuthConfig,
      basePath: 'string',
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      enableAuth: 'boolean',
      ingressConfig: UpdateHttpApiRequestIngressConfig,
      protocols: { 'type': 'array', 'itemType': 'string' },
      versionConfig: HttpApiVersionConfig,
    };
  }

  validate() {
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

