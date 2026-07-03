// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpRouteMatch } from "./HttpRouteMatch";


export class UpdateMcpServerRequestAssembledSources extends $dara.Model {
  /**
   * @remarks
   * MCP Server ID
   * 
   * @example
   * mcp-afaefaefaf
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The MCP server name.
   * 
   * @example
   * test-mcp
   */
  mcpServerName?: string;
  /**
   * @remarks
   * The list of MCP tools.
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

export class UpdateMcpServerRequestBackendConfigServices extends $dara.Model {
  /**
   * @remarks
   * The service port. Do not specify this parameter for dynamic ports.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The service protocol. Valid values:
   * - TCP
   * - HTTP
   * - DUBBO
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
   * svc-cr6pk4tlhtgm58e***
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The percentage value of the traffic ratio.
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

export class UpdateMcpServerRequestBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The backend service scenario.
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * The backend services.
   */
  services?: UpdateMcpServerRequestBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': UpdateMcpServerRequestBackendConfigServices },
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

export class UpdateMcpServerRequestGrayMcpServerConfigsBackendConfigServices extends $dara.Model {
  /**
   * @remarks
   * The service port.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The service protocol.
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
   * gray-svc-123
   */
  serviceId?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The weight.
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

export class UpdateMcpServerRequestGrayMcpServerConfigsBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The backend scenario.
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * The list of backend services.
   */
  services?: UpdateMcpServerRequestGrayMcpServerConfigsBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': UpdateMcpServerRequestGrayMcpServerConfigsBackendConfigServices },
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

export class UpdateMcpServerRequestGrayMcpServerConfigs extends $dara.Model {
  /**
   * @remarks
   * The backend configuration.
   */
  backendConfig?: UpdateMcpServerRequestGrayMcpServerConfigsBackendConfig;
  /**
   * @remarks
   * The route match rule.
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * route-123
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
      backendConfig: UpdateMcpServerRequestGrayMcpServerConfigsBackendConfig,
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

export class UpdateMcpServerRequestMcpServerConfig extends $dara.Model {
  /**
   * @remarks
   * The MCP server configuration. This parameter is mutually exclusive with swaggerConfig.
   * 
   * @example
   * mcp-server-spec-yaml
   */
  mcpServerSpec?: string;
  /**
   * @remarks
   * The Swagger document for HTTP-to-MCP conversion. The document must comply with the OpenAPI 3.0 specification.
   * 
   * @example
   * swagger-content
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

export class UpdateMcpServerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of assembled sources. This parameter is required when type is AssemblyMCP.
   */
  assembledSources?: UpdateMcpServerRequestAssembledSources[];
  /**
   * @remarks
   * The backend service configuration of the route.
   */
  backendConfig?: UpdateMcpServerRequestBackendConfig;
  /**
   * @remarks
   * The creation source type. Valid values:
   * - ApiGatewayHttpToMCP: gateway-managed HTTP-to-MCP conversion.
   * - ApiGatewayProxyMcpHosting: gateway-managed MCP direct proxy.
   * - ApiGatewayAssembly: gateway MCP assembly.
   * - NacosHttpToMCP: gateway-managed Nacos-synced HTTP-to-MCP conversion.
   * - NacosMcpHosting: gateway-managed Nacos-synced MCP direct proxy.
   * 
   * @example
   * ApiGatewayMcpHosting
   */
  createFromType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 商品中心服务路由
   */
  description?: string;
  /**
   * @remarks
   * The domain name IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The exposed URI path. This parameter is required when protocol is SSE or StreamableHTTP and type is RealMCP.
   * 
   * @example
   * /sse
   */
  exposedUriPath?: string;
  /**
   * @remarks
   * The list of canary release MCP server route configurations.
   */
  grayMcpServerConfigs?: UpdateMcpServerRequestGrayMcpServerConfigs[];
  /**
   * @remarks
   * The route match rule.
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The HTTP-to-MCP configuration.
   */
  mcpServerConfig?: UpdateMcpServerRequestMcpServerConfig;
  /**
   * @remarks
   * Specifies whether to enable MCP observability. Default value: false.
   * 
   * @example
   * false
   */
  mcpStatisticsEnable?: boolean;
  /**
   * @remarks
   * The protocol type. Valid values:
   * - HTTP: HTTP protocol.
   * - HTTPS: HTTPS protocol.
   * - SSE: Server-Sent Events protocol.
   * - StreamableHTTP: Streamable HTTP protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The MCP server type filter. Valid values:
   * - RealMCP
   * - AssemblyMCP
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
      grayMcpServerConfigs: 'grayMcpServerConfigs',
      match: 'match',
      mcpServerConfig: 'mcpServerConfig',
      mcpStatisticsEnable: 'mcpStatisticsEnable',
      protocol: 'protocol',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assembledSources: { 'type': 'array', 'itemType': UpdateMcpServerRequestAssembledSources },
      backendConfig: UpdateMcpServerRequestBackendConfig,
      createFromType: 'string',
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      exposedUriPath: 'string',
      grayMcpServerConfigs: { 'type': 'array', 'itemType': UpdateMcpServerRequestGrayMcpServerConfigs },
      match: HttpRouteMatch,
      mcpServerConfig: UpdateMcpServerRequestMcpServerConfig,
      mcpStatisticsEnable: 'boolean',
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

