// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Backend } from "./Backend";
import { HttpRouteMatch } from "./HttpRouteMatch";


export class HttpRouteDomainInfos extends $dara.Model {
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-cr3v7dllhtgi9s***
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * itemcenter.dev
   */
  name?: string;
  /**
   * @remarks
   * The domain name protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
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

export class HttpRouteEnvironmentInfoGatewayInfo extends $dara.Model {
  /**
   * @example
   * MultiTenantServerless
   */
  gatewayEdition?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-cqoohqtlh***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway name.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayEdition: 'gatewayEdition',
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayEdition: 'string',
      gatewayId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteEnvironmentInfoSubDomains extends $dara.Model {
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-cqu19hdlhtgjuv4***
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * env-crmic3llht***-cn-hangzhou-vpc.alicloudapi.com
   */
  name?: string;
  /**
   * @remarks
   * The domain name access type.
   * 
   * @example
   * Internet
   */
  networkType?: string;
  /**
   * @remarks
   * The domain name protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      networkType: 'networkType',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
      networkType: 'string',
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

export class HttpRouteEnvironmentInfo extends $dara.Model {
  /**
   * @remarks
   * The environment name alias.
   * 
   * @example
   * Product center staging environment
   */
  alias?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-crhq1u5lhtgju***
   */
  environmentId?: string;
  /**
   * @remarks
   * The gateway information.
   */
  gatewayInfo?: HttpRouteEnvironmentInfoGatewayInfo;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * itemcenter-pre
   */
  name?: string;
  /**
   * @remarks
   * The list of default second-level domain names of the environment.
   */
  subDomains?: HttpRouteEnvironmentInfoSubDomains[];
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      subDomains: 'subDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      environmentId: 'string',
      gatewayInfo: HttpRouteEnvironmentInfoGatewayInfo,
      name: 'string',
      subDomains: { 'type': 'array', 'itemType': HttpRouteEnvironmentInfoSubDomains },
    };
  }

  validate() {
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(Array.isArray(this.subDomains)) {
      $dara.Model.validateArray(this.subDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteMcpServerInfoMcpRouteConfig extends $dara.Model {
  /**
   * @remarks
   * mcp route path
   * 
   * @example
   * /mcp
   */
  exposedUriPath?: string;
  /**
   * @remarks
   * The MCP protocol type.
   * 
   * @example
   * SSE
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      exposedUriPath: 'exposedUriPath',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedUriPath: 'string',
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

export class HttpRouteMcpServerInfo extends $dara.Model {
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * Nacos
   */
  createFromType?: string;
  /**
   * @remarks
   * The Nacos instance ID.
   * 
   * @example
   * import-001
   */
  importInstanceId?: string;
  /**
   * @remarks
   * The Nacos MCP server identifier.
   * 
   * @example
   * mcp-002
   */
  importMcpServerId?: string;
  /**
   * @remarks
   * The Nacos namespace.
   * 
   * @example
   * default
   */
  importNamespace?: string;
  /**
   * @remarks
   * The MCP route information.
   */
  mcpRouteConfig?: HttpRouteMcpServerInfoMcpRouteConfig;
  /**
   * @remarks
   * The MCP server metadata configuration.
   * 
   * @example
   * {\\"config\\":{}}
   */
  mcpServerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      createFromType: 'createFromType',
      importInstanceId: 'importInstanceId',
      importMcpServerId: 'importMcpServerId',
      importNamespace: 'importNamespace',
      mcpRouteConfig: 'mcpRouteConfig',
      mcpServerConfig: 'mcpServerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createFromType: 'string',
      importInstanceId: 'string',
      importMcpServerId: 'string',
      importNamespace: 'string',
      mcpRouteConfig: HttpRouteMcpServerInfoMcpRouteConfig,
      mcpServerConfig: 'string',
    };
  }

  validate() {
    if(this.mcpRouteConfig && typeof (this.mcpRouteConfig as any).validate === 'function') {
      (this.mcpRouteConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRoute extends $dara.Model {
  /**
   * @remarks
   * The backend service.
   */
  backend?: Backend;
  /**
   * @remarks
   * Indicates whether the route is a built-in system route.
   * 
   * @example
   * true
   */
  builtin?: string;
  /**
   * @remarks
   * The creation time, in ms.
   * 
   * @example
   * 1726649310593
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The deployment status.
   * 
   * @example
   * Deployed
   */
  deployStatus?: string;
  /**
   * @remarks
   * The route description.
   * 
   * @example
   * Product center staging route
   */
  description?: string;
  /**
   * @remarks
   * The list of domain name information.
   */
  domainInfos?: HttpRouteDomainInfos[];
  /**
   * @remarks
   * The environment context of the routing.
   */
  environmentInfo?: HttpRouteEnvironmentInfo;
  /**
   * @remarks
   * The route publish status.
   */
  gatewayStatus?: { [key: string]: string };
  /**
   * @remarks
   * The route matching rule.
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The MCP server information.
   */
  mcpServerInfo?: HttpRouteMcpServerInfo;
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * itemcenter-pre-route
   */
  name?: string;
  /**
   * @remarks
   * The HttpApi route ID.
   * 
   * @example
   * hr-crf5l7tlhtgp91t***
   */
  routeId?: string;
  /**
   * @remarks
   * The update time, in ms.
   * 
   * @example
   * 1726819895636
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backend: 'backend',
      builtin: 'builtin',
      createTimestamp: 'createTimestamp',
      deployStatus: 'deployStatus',
      description: 'description',
      domainInfos: 'domainInfos',
      environmentInfo: 'environmentInfo',
      gatewayStatus: 'gatewayStatus',
      match: 'match',
      mcpServerInfo: 'mcpServerInfo',
      name: 'name',
      routeId: 'routeId',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: Backend,
      builtin: 'string',
      createTimestamp: 'number',
      deployStatus: 'string',
      description: 'string',
      domainInfos: { 'type': 'array', 'itemType': HttpRouteDomainInfos },
      environmentInfo: HttpRouteEnvironmentInfo,
      gatewayStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      match: HttpRouteMatch,
      mcpServerInfo: HttpRouteMcpServerInfo,
      name: 'string',
      routeId: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.backend && typeof (this.backend as any).validate === 'function') {
      (this.backend as any).validate();
    }
    if(Array.isArray(this.domainInfos)) {
      $dara.Model.validateArray(this.domainInfos);
    }
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.gatewayStatus) {
      $dara.Model.validateMap(this.gatewayStatus);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.mcpServerInfo && typeof (this.mcpServerInfo as any).validate === 'function') {
      (this.mcpServerInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

