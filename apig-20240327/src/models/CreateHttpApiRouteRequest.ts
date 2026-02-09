// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpRouteMatch } from "./HttpRouteMatch";
import { HttpApiPolicyConfigs } from "./HttpApiPolicyConfigs";


export class CreateHttpApiRouteRequestBackendConfigServices extends $dara.Model {
  /**
   * @remarks
   * The service port (omit for dynamic ports).
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The service protocol. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * svc-crbgq0dlhtgr***
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version (valid only in tag-based scenarios).
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The traffic weight percentage.
   * 
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
      serviceId: 'serviceId',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
      serviceId: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteRequestBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The backend service scenario. Valid values:
   * 
   * *   SingleService
   * *   MultiServiceByRatio
   * *   Mock
   * *   Redirect
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * The list of backend services.
   */
  services?: CreateHttpApiRouteRequestBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': CreateHttpApiRouteRequestBackendConfigServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteRequestMcpRouteConfig extends $dara.Model {
  /**
   * @remarks
   * The exposed URI path
   * 
   * @example
   * /v1/chat/completions
   */
  exposedUriPath?: string;
  /**
   * @remarks
   * mcpStatisticsEnable
   * 
   * @example
   * false
   */
  mcpStatisticsEnable?: boolean;
  /**
   * @remarks
   * The MCP protocol
   * 
   * @example
   * HTTP,HTTPS
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      exposedUriPath: 'exposedUriPath',
      mcpStatisticsEnable: 'mcpStatisticsEnable',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedUriPath: 'string',
      mcpStatisticsEnable: 'boolean',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The backend service configurations for the route.
   */
  backendConfig?: CreateHttpApiRouteRequestBackendConfig;
  /**
   * @remarks
   * deployConfigs
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The route description.
   * 
   * @example
   * User logon route
   */
  description?: string;
  /**
   * @remarks
   * The list of domain IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cpqnr6tlhtgubcv***
   */
  environmentId?: string;
  /**
   * @remarks
   * The route match rule.
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The MCP route configuration
   */
  mcpRouteConfig?: CreateHttpApiRouteRequestMcpRouteConfig;
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * login
   */
  name?: string;
  /**
   * @remarks
   * The route-level policy configurations
   */
  policyConfigs?: HttpApiPolicyConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      deployConfigs: 'deployConfigs',
      description: 'description',
      domainIds: 'domainIds',
      environmentId: 'environmentId',
      match: 'match',
      mcpRouteConfig: 'mcpRouteConfig',
      name: 'name',
      policyConfigs: 'policyConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: CreateHttpApiRouteRequestBackendConfig,
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      match: HttpRouteMatch,
      mcpRouteConfig: CreateHttpApiRouteRequestMcpRouteConfig,
      name: 'string',
      policyConfigs: { 'type': 'array', 'itemType': HttpApiPolicyConfigs },
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.mcpRouteConfig && typeof (this.mcpRouteConfig as any).validate === 'function') {
      (this.mcpRouteConfig as any).validate();
    }
    if(Array.isArray(this.policyConfigs)) {
      $dara.Model.validateArray(this.policyConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

