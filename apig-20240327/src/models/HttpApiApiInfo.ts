// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiApiInfoDeployCntMapValue } from "./HttpApiApiInfoDeployCntMapValue";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiApiInfoEnvironments } from "./HttpApiApiInfoEnvironments";
import { HttpApiApiInfoIngressInfo } from "./HttpApiApiInfoIngressInfo";
import { HttpApiVersionInfo } from "./HttpApiVersionInfo";


export class HttpApiApiInfo extends $dara.Model {
  aiProtocols?: string[];
  authConfig?: AuthConfig;
  /**
   * @example
   * /v1
   */
  basePath?: string;
  deployCntMap?: { [key: string]: HttpApiApiInfoDeployCntMapValue };
  deployConfigs?: HttpApiDeployConfig[];
  description?: string;
  enabelAuth?: boolean;
  environments?: HttpApiApiInfoEnvironments[];
  gatewayId?: string;
  /**
   * @example
   * api-xxx
   */
  httpApiId?: string;
  ingressInfo?: HttpApiApiInfoIngressInfo;
  /**
   * @example
   * test
   */
  name?: string;
  protocols?: string[];
  /**
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * Rest
   */
  type?: string;
  versionInfo?: HttpApiVersionInfo;
  static names(): { [key: string]: string } {
    return {
      aiProtocols: 'aiProtocols',
      authConfig: 'authConfig',
      basePath: 'basePath',
      deployCntMap: 'deployCntMap',
      deployConfigs: 'deployConfigs',
      description: 'description',
      enabelAuth: 'enabelAuth',
      environments: 'environments',
      gatewayId: 'gatewayId',
      httpApiId: 'httpApiId',
      ingressInfo: 'ingressInfo',
      name: 'name',
      protocols: 'protocols',
      resourceGroupId: 'resourceGroupId',
      type: 'type',
      versionInfo: 'versionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiProtocols: { 'type': 'array', 'itemType': 'string' },
      authConfig: AuthConfig,
      basePath: 'string',
      deployCntMap: { 'type': 'map', 'keyType': 'string', 'valueType': HttpApiApiInfoDeployCntMapValue },
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      enabelAuth: 'boolean',
      environments: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironments },
      gatewayId: 'string',
      httpApiId: 'string',
      ingressInfo: HttpApiApiInfoIngressInfo,
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      type: 'string',
      versionInfo: HttpApiVersionInfo,
    };
  }

  validate() {
    if(Array.isArray(this.aiProtocols)) {
      $dara.Model.validateArray(this.aiProtocols);
    }
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.deployCntMap) {
      $dara.Model.validateMap(this.deployCntMap);
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    if(this.ingressInfo && typeof (this.ingressInfo as any).validate === 'function') {
      (this.ingressInfo as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    if(this.versionInfo && typeof (this.versionInfo as any).validate === 'function') {
      (this.versionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

