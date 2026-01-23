// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpRouteMatch } from "./HttpRouteMatch";


export class CreateMcpServerRequestAssembledSources extends $dara.Model {
  /**
   * @remarks
   * The MCP server ID.
   * 
   * @example
   * mcp-sdfa3qgavz
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The name of the MCP server.
   * 
   * @example
   * test-mcp
   */
  mcpServerName?: string;
  /**
   * @remarks
   * The list of the MCP tools.
   */
  tools?: string[];
  static names(): { [key: string]: string } {
    return {
      mcpServerId: 'mcpServerId',
      mcpServerName: 'mcpServerName',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerId: 'string',
      mcpServerName: 'string',
      tools: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpServerRequestBackendConfigServices extends $dara.Model {
  /**
   * @remarks
   * The backend node port of the service.
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
   * The service version.
   * 
   * @example
   * 2.1.6
   */
  version?: string;
  /**
   * @remarks
   * The weight.
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

export class CreateMcpServerRequestBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The scenario of the backend service.
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * The backend services.
   */
  services?: CreateMcpServerRequestBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': CreateMcpServerRequestBackendConfigServices },
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

export class CreateMcpServerRequestGrayMcpServerConfigsBackendConfigServices extends $dara.Model {
  port?: number;
  protocol?: string;
  serviceId?: string;
  version?: string;
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

export class CreateMcpServerRequestGrayMcpServerConfigsBackendConfig extends $dara.Model {
  scene?: string;
  services?: CreateMcpServerRequestGrayMcpServerConfigsBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': CreateMcpServerRequestGrayMcpServerConfigsBackendConfigServices },
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

export class CreateMcpServerRequestGrayMcpServerConfigs extends $dara.Model {
  backendConfig?: CreateMcpServerRequestGrayMcpServerConfigsBackendConfig;
  match?: HttpRouteMatch;
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      match: 'match',
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: CreateMcpServerRequestGrayMcpServerConfigsBackendConfig,
      match: HttpRouteMatch,
      routeId: 'string',
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpServerRequestMcpServerConfig extends $dara.Model {
  mcpServerSpec?: string;
  swaggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      mcpServerSpec: 'mcpServerSpec',
      swaggerConfig: 'swaggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerSpec: 'string',
      swaggerConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpServerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of assembly sources. This parameter is required when the type parameter is set to AssemblyMCP.
   */
  assembledSources?: CreateMcpServerRequestAssembledSources[];
  /**
   * @remarks
   * The backend service configurations for the route.
   */
  backendConfig?: CreateMcpServerRequestBackendConfig;
  /**
   * @remarks
   * Creates the MCP server from the specified type.
   */
  createFromType?: string;
  /**
   * @remarks
   * The MCP server description.
   * 
   * @example
   * mcp tool fetch time
   */
  description?: string;
  /**
   * @remarks
   * The domain IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The exposed URI path. This parameter is required when the protocol parameter is set to SSE or StreamableHTTP, and the type parameter is set to RealMCP.
   * 
   * @example
   * /sse
   */
  exposedUriPath?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qac0
   */
  gatewayId?: string;
  grayMcpServerConfigs?: CreateMcpServerRequestGrayMcpServerConfigs[];
  /**
   * @remarks
   * The route match rule.
   */
  match?: HttpRouteMatch;
  mcpServerConfig?: CreateMcpServerRequestMcpServerConfig;
  /**
   * @remarks
   * Specifies whether MCP observability is enabled. Default: false.
   * 
   * @example
   * false
   */
  mcpStatisticsEnable?: boolean;
  /**
   * @remarks
   * The name of the MCP server. The name must match the regular expression ^[a-z0-9](%5B-a-z0-9%5D\\*%5Ba-z0-9%5D)?(.[a-z0-9](%5B-a-z0-9%5D\\*%5Ba-z0-9%5D)?)\\*$ and can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * fetch-time
   */
  name?: string;
  /**
   * @remarks
   * The protocol type. Valid values: HTTP, HTTPS, SSE, and StreamableHTTP
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The type. Valid value:
   * 
   * RealMCP: regular MCP service
   * 
   * This parameter is required.
   * 
   * @example
   * RealMCP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      assembledSources: 'assembledSources',
      backendConfig: 'backendConfig',
      createFromType: 'createFromType',
      description: 'description',
      domainIds: 'domainIds',
      exposedUriPath: 'exposedUriPath',
      gatewayId: 'gatewayId',
      grayMcpServerConfigs: 'grayMcpServerConfigs',
      match: 'match',
      mcpServerConfig: 'mcpServerConfig',
      mcpStatisticsEnable: 'mcpStatisticsEnable',
      name: 'name',
      protocol: 'protocol',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assembledSources: { 'type': 'array', 'itemType': CreateMcpServerRequestAssembledSources },
      backendConfig: CreateMcpServerRequestBackendConfig,
      createFromType: 'string',
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      exposedUriPath: 'string',
      gatewayId: 'string',
      grayMcpServerConfigs: { 'type': 'array', 'itemType': CreateMcpServerRequestGrayMcpServerConfigs },
      match: HttpRouteMatch,
      mcpServerConfig: CreateMcpServerRequestMcpServerConfig,
      mcpStatisticsEnable: 'boolean',
      name: 'string',
      protocol: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assembledSources)) {
      $dara.Model.validateArray(this.assembledSources);
    }
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(Array.isArray(this.grayMcpServerConfigs)) {
      $dara.Model.validateArray(this.grayMcpServerConfigs);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.mcpServerConfig && typeof (this.mcpServerConfig as any).validate === 'function') {
      (this.mcpServerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

