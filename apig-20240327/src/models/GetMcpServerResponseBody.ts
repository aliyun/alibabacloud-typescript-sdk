// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Backend } from "./Backend";
import { HttpRouteMatch } from "./HttpRouteMatch";


export class GetMcpServerResponseBodyDataAssembledSources extends $dara.Model {
  /**
   * @remarks
   * The ID of the MCP Server.
   * 
   * @example
   * mcp-xdafeafzz
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The name of the MCP Server.
   * 
   * @example
   * test-mcp
   */
  mcpServerName?: string;
  /**
   * @remarks
   * A list of MCP tools.
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

export class GetMcpServerResponseBodyDataDomainInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * www.abc.com
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * verifyicket
   */
  name?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * HTTP,HTTPS
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

export class GetMcpServerResponseBodyDataGrayMcpServerConfigsBackendConfigServices extends $dara.Model {
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
   * The ID of the service.
   * 
   * @example
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * v2.0.0
   */
  version?: string;
  /**
   * @remarks
   * The service weight.
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

export class GetMcpServerResponseBodyDataGrayMcpServerConfigsBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The backend scene.
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * A list of service configurations.
   */
  services?: GetMcpServerResponseBodyDataGrayMcpServerConfigsBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': GetMcpServerResponseBodyDataGrayMcpServerConfigsBackendConfigServices },
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

export class GetMcpServerResponseBodyDataGrayMcpServerConfigs extends $dara.Model {
  /**
   * @remarks
   * The backend configuration for the canary route.
   */
  backendConfig?: GetMcpServerResponseBodyDataGrayMcpServerConfigsBackendConfig;
  /**
   * @remarks
   * The match rule for the canary route.
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The ID of the canary route.
   * 
   * @example
   * gray-route-xxx
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
      backendConfig: GetMcpServerResponseBodyDataGrayMcpServerConfigsBackendConfig,
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

export class GetMcpServerResponseBodyDataNacosMcpSyncInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the Nacos instance.
   * 
   * @example
   * mse-xxxxx
   */
  importInstanceId?: string;
  /**
   * @remarks
   * The ID of the synchronized MCP Server.
   * 
   * @example
   * test-mcp
   */
  importMcpServerId?: string;
  /**
   * @remarks
   * The Nacos namespace.
   * 
   * @example
   * test-ns
   */
  importNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      importInstanceId: 'importInstanceId',
      importMcpServerId: 'importMcpServerId',
      importNamespace: 'importNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importInstanceId: 'string',
      importMcpServerId: 'string',
      importNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpServerResponseBodyData extends $dara.Model {
  apiId?: string;
  /**
   * @remarks
   * A list of assembly sources. This parameter is required when `type` is `AssemblyMCP`.
   */
  assembledSources?: GetMcpServerResponseBodyDataAssembledSources[];
  /**
   * @remarks
   * The backend service of the route.
   */
  backend?: Backend;
  /**
   * @remarks
   * Specifies how the MCP Server was created. Valid values:
   * 
   * `ApiGatewayHttpToMCP`: The API gateway converts HTTP requests to the MCP protocol. `ApiGatewayMcpHosting`: The API gateway acts as a direct proxy for MCP services. `ApiGatewayAssembly`: The API gateway assembles responses from multiple MCP services. `NacosHttpToMCP`: The API gateway converts HTTP requests to the MCP protocol, with service discovery provided by Nacos. `NacosMcpHosting`: The API gateway acts as a direct proxy for MCP services, with service discovery provided by Nacos.
   * 
   * @example
   * ApiGatewayHttpToMCP
   */
  createFromType?: string;
  /**
   * @remarks
   * The API\\"s deployment status in the current environment.
   * 
   * @example
   * Deployed
   */
  deployStatus?: string;
  /**
   * @remarks
   * The description of the MCP Server.
   * 
   * @example
   * 测试专用MCP Server
   */
  description?: string;
  /**
   * @remarks
   * A list of domain name IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * A list of domain information.
   */
  domainInfos?: GetMcpServerResponseBodyDataDomainInfos[];
  /**
   * @remarks
   * The ID of the environment.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * The exposed URI path. This parameter is required when `protocol` is `SSE` or `StreamableHTTP` and `type` is `RealMCP`.
   * 
   * @example
   * /sse
   */
  exposedUriPath?: string;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * A list of canary route configurations.
   */
  grayMcpServerConfigs?: GetMcpServerResponseBodyDataGrayMcpServerConfigs[];
  /**
   * @remarks
   * The match rule for the route.
   * 
   * @example
   * {\\"product_code\\":\\"apigw\\"}
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The configuration for converting HTTP requests to the MCP protocol.
   * 
   * @example
   * MCP Server配置 base64
   */
  mcpServerConfig?: string;
  /**
   * @remarks
   * The attachment ID of the MCP Server plugin configuration.
   * 
   * @example
   * pa-adfaefwaef
   */
  mcpServerConfigPluginAttachmentId?: string;
  /**
   * @remarks
   * The ID of the MCP Server.
   * 
   * @example
   * mcp-adfefz24afg
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The access path to the MCP Server provided by the gateway.
   * 
   * @example
   * /mcp-servers/test-mcp
   */
  mcpServerPath?: string;
  /**
   * @remarks
   * Specifies whether to enable MCP observability. The default value is `false`.
   * 
   * @example
   * false
   */
  mcpStatisticsEnable?: boolean;
  /**
   * @remarks
   * Information about the MCP Server synchronized from Nacos.
   */
  nacosMcpSyncInfo?: GetMcpServerResponseBodyDataNacosMcpSyncInfo;
  /**
   * @remarks
   * The name of the MCP Server.
   * 
   * @example
   * test-mcp
   */
  name?: string;
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
   * The ID of the route.
   * 
   * @example
   * hr-cr82undlhtgrlej***
   */
  routeId?: string;
  /**
   * @remarks
   * The type of the MCP Server.
   * 
   * @example
   * RealMCP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'apiId',
      assembledSources: 'assembledSources',
      backend: 'backend',
      createFromType: 'createFromType',
      deployStatus: 'deployStatus',
      description: 'description',
      domainIds: 'domainIds',
      domainInfos: 'domainInfos',
      environmentId: 'environmentId',
      exposedUriPath: 'exposedUriPath',
      gatewayId: 'gatewayId',
      grayMcpServerConfigs: 'grayMcpServerConfigs',
      match: 'match',
      mcpServerConfig: 'mcpServerConfig',
      mcpServerConfigPluginAttachmentId: 'mcpServerConfigPluginAttachmentId',
      mcpServerId: 'mcpServerId',
      mcpServerPath: 'mcpServerPath',
      mcpStatisticsEnable: 'mcpStatisticsEnable',
      nacosMcpSyncInfo: 'nacosMcpSyncInfo',
      name: 'name',
      protocol: 'protocol',
      routeId: 'routeId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      assembledSources: { 'type': 'array', 'itemType': GetMcpServerResponseBodyDataAssembledSources },
      backend: Backend,
      createFromType: 'string',
      deployStatus: 'string',
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      domainInfos: { 'type': 'array', 'itemType': GetMcpServerResponseBodyDataDomainInfos },
      environmentId: 'string',
      exposedUriPath: 'string',
      gatewayId: 'string',
      grayMcpServerConfigs: { 'type': 'array', 'itemType': GetMcpServerResponseBodyDataGrayMcpServerConfigs },
      match: HttpRouteMatch,
      mcpServerConfig: 'string',
      mcpServerConfigPluginAttachmentId: 'string',
      mcpServerId: 'string',
      mcpServerPath: 'string',
      mcpStatisticsEnable: 'boolean',
      nacosMcpSyncInfo: GetMcpServerResponseBodyDataNacosMcpSyncInfo,
      name: 'string',
      protocol: 'string',
      routeId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assembledSources)) {
      $dara.Model.validateArray(this.assembledSources);
    }
    if(this.backend && typeof (this.backend as any).validate === 'function') {
      (this.backend as any).validate();
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(Array.isArray(this.domainInfos)) {
      $dara.Model.validateArray(this.domainInfos);
    }
    if(Array.isArray(this.grayMcpServerConfigs)) {
      $dara.Model.validateArray(this.grayMcpServerConfigs);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.nacosMcpSyncInfo && typeof (this.nacosMcpSyncInfo as any).validate === 'function') {
      (this.nacosMcpSyncInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetMcpServerResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2A6E90D5-A711-54F4-A489-E33C2021EDDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMcpServerResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

