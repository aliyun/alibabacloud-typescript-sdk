// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Backend } from "./Backend";
import { HttpRouteMatch } from "./HttpRouteMatch";


export class HttpRouteDomainInfos extends $dara.Model {
  /**
   * @remarks
   * The domain ID
   * 
   * @example
   * d-cr3v7dllhtgi9s***
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name
   * 
   * @example
   * itemcenter.dev
   */
  name?: string;
  /**
   * @remarks
   * The domain protocol
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
   * @remarks
   * The gateway ID
   * 
   * @example
   * gw-cqoohqtlh***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway name
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * The subdomain ID
   * 
   * @example
   * d-cqu19hdlhtgjuv4***
   */
  domainId?: string;
  /**
   * @remarks
   * The subdomain name
   * 
   * @example
   * env-crmic3llht***-cn-hangzhou-vpc.alicloudapi.com
   */
  name?: string;
  /**
   * @remarks
   * networkType
   * 
   * @example
   * Internet
   */
  networkType?: string;
  /**
   * @remarks
   * The subdomain protocol
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
   * The environment alias
   * 
   * @example
   * prod
   */
  alias?: string;
  /**
   * @remarks
   * The environment ID
   * 
   * @example
   * env-crhq1u5lhtgju***
   */
  environmentId?: string;
  /**
   * @remarks
   * The gateway information
   */
  gatewayInfo?: HttpRouteEnvironmentInfoGatewayInfo;
  /**
   * @remarks
   * The environment name
   * 
   * @example
   * itemcenter-pre
   */
  name?: string;
  /**
   * @remarks
   * List of subdomain information
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
   * The MCP protocol
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
   * The creation type
   * 
   * @example
   * Nacos
   */
  createFromType?: string;
  /**
   * @remarks
   * The imported instance ID
   * 
   * @example
   * import-001
   */
  importInstanceId?: string;
  /**
   * @remarks
   * The imported Nacos MCP server ID
   * 
   * @example
   * mcp-002
   */
  importMcpServerId?: string;
  /**
   * @remarks
   * The imported namespace
   * 
   * @example
   * default
   */
  importNamespace?: string;
  /**
   * @remarks
   * The MCP route configuration
   */
  mcpRouteConfig?: HttpRouteMcpServerInfoMcpRouteConfig;
  /**
   * @remarks
   * The MCP server configuration content
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
   * The backend configuration
   */
  backend?: Backend;
  /**
   * @remarks
   * builtin
   * 
   * @example
   * true
   */
  builtin?: string;
  /**
   * @remarks
   * The creation timestamp in milliseconds
   * 
   * @example
   * 1726649310593
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The deployment status
   * 
   * @example
   * Deployed
   */
  deployStatus?: string;
  /**
   * @remarks
   * The description of the route
   * 
   * @example
   * Route for user management API
   */
  description?: string;
  /**
   * @remarks
   * List of domain information
   */
  domainInfos?: HttpRouteDomainInfos[];
  /**
   * @remarks
   * The environment information
   */
  environmentInfo?: HttpRouteEnvironmentInfo;
  /**
   * @remarks
   * gatewayStatus
   */
  gatewayStatus?: { [key: string]: string };
  /**
   * @remarks
   * The route matching rules
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The MCP server information
   */
  mcpServerInfo?: HttpRouteMcpServerInfo;
  /**
   * @remarks
   * The name of the route
   * 
   * @example
   * itemcenter-pre-route
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of the route
   * 
   * @example
   * hr-crf5l7tlhtgp91t***
   */
  routeId?: string;
  /**
   * @remarks
   * The last update timestamp in milliseconds
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

