// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpRouteMatch } from "./HttpRouteMatch";


export class CreateMcpServerRequestAssembledSources extends $dara.Model {
  /**
   * @remarks
   * MCP Server ID
   * 
   * @example
   * mcp-sdfa3qgavz
   */
  mcpServerId?: string;
  /**
   * @remarks
   * Source MCP server name
   * 
   * @example
   * test-mcp
   */
  mcpServerName?: string;
  /**
   * @remarks
   * List of tool names to include
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
   * Service port
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * Service protocol
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * Service ID
   * 
   * @example
   * svc-crbgq0dlhtgr***
   */
  serviceId?: string;
  /**
   * @remarks
   * Service version
   * 
   * @example
   * 2.1.6
   */
  version?: string;
  /**
   * @remarks
   * Service weight
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
   * Backend scene type
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * List of backend services
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
  /**
   * @remarks
   * Service port number
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * Service protocol type
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * Service ID
   * 
   * @example
   * svc-gray
   */
  serviceId?: string;
  /**
   * @remarks
   * Service version
   * 
   * @example
   * v2.0.0
   */
  version?: string;
  /**
   * @remarks
   * Service weight for load balancing
   * 
   * @example
   * 100
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

export class CreateMcpServerRequestGrayMcpServerConfigsBackendConfig extends $dara.Model {
  /**
   * @remarks
   * Must be SingleService
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * Exactly one service
   */
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
  /**
   * @remarks
   * Backend configuration for gray route
   */
  backendConfig?: CreateMcpServerRequestGrayMcpServerConfigsBackendConfig;
  /**
   * @remarks
   * Route matching rules
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * Route ID for update operations
   * 
   * @example
   * gray-route-123
   */
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
  /**
   * @remarks
   * Converted MCP server spec YAML
   * 
   * @example
   * mcp-spec.yaml
   */
  mcpServerSpec?: string;
  /**
   * @remarks
   * Raw Swagger/OpenAPI document
   * 
   * @example
   * swagger.yaml
   */
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
   * Assembled MCP server sources
   */
  assembledSources?: CreateMcpServerRequestAssembledSources[];
  /**
   * @remarks
   * Backend configuration
   */
  backendConfig?: CreateMcpServerRequestBackendConfig;
  /**
   * @remarks
   * Creation source type
   * 
   * @example
   * ApiGatewayMcpHosting
   */
  createFromType?: string;
  /**
   * @remarks
   * MCP server description
   * 
   * @example
   * mcp tool fetch time
   */
  description?: string;
  /**
   * @remarks
   * List of domain IDs for the MCP server
   */
  domainIds?: string[];
  /**
   * @remarks
   * Exposed URI path for SSE/StreamableHTTP protocols
   * 
   * @example
   * /sse
   */
  exposedUriPath?: string;
  /**
   * @remarks
   * Gateway ID
   * 
   * This parameter is required.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qac0
   */
  gatewayId?: string;
  /**
   * @remarks
   * Gray route configurations
   */
  grayMcpServerConfigs?: CreateMcpServerRequestGrayMcpServerConfigs[];
  /**
   * @remarks
   * Route matching conditions
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * MCP server specification
   */
  mcpServerConfig?: CreateMcpServerRequestMcpServerConfig;
  /**
   * @remarks
   * Enable MCP statistics
   * 
   * @example
   * false
   */
  mcpStatisticsEnable?: boolean;
  /**
   * @remarks
   * MCP server name
   * 
   * This parameter is required.
   * 
   * @example
   * fetch-time
   */
  name?: string;
  /**
   * @remarks
   * MCP protocol
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * MCP server type
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

