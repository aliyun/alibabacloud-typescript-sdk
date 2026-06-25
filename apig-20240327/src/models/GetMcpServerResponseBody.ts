// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Backend } from "./Backend";
import { HttpRouteMatch } from "./HttpRouteMatch";


export class GetMcpServerResponseBodyDataAssembledSources extends $dara.Model {
  /**
   * @remarks
   * MCP Server ID.
   * 
   * @example
   * mcp-xdafeafzz
   */
  mcpServerId?: string;
  /**
   * @remarks
   * MCP Server name.
   * 
   * @example
   * test-mcp
   */
  mcpServerName?: string;
  /**
   * @remarks
   * MCP tool list.
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
   * Domain ID.
   * 
   * @example
   * www.abc.com
   */
  domainId?: string;
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * verifyicket
   */
  name?: string;
  /**
   * @remarks
   * Protocol.
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
   * Service port.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * Service protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * Service ID.
   * 
   * @example
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @remarks
   * Service version.
   * 
   * @example
   * v2.0.0
   */
  version?: string;
  /**
   * @remarks
   * Service weight.
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
   * Backend scenario.
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * Service configuration list.
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
   * Canary route backend configuration.
   */
  backendConfig?: GetMcpServerResponseBodyDataGrayMcpServerConfigsBackendConfig;
  /**
   * @remarks
   * Canary route match rules.
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * Canary route ID.
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
   * Nacos instance.
   * 
   * @example
   * mse-xxxxx
   */
  importInstanceId?: string;
  /**
   * @remarks
   * Synchronized MCP Server ID.
   * 
   * @example
   * test-mcp
   */
  importMcpServerId?: string;
  /**
   * @remarks
   * Nacos namespace.
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
  /**
   * @remarks
   * API ID.
   * 
   * @example
   * api-xxx
   */
  apiId?: string;
  /**
   * @remarks
   * Assembly source list. Required when type is AssemblyMCP.
   */
  assembledSources?: GetMcpServerResponseBodyDataAssembledSources[];
  /**
   * @remarks
   * Backend service of the route.
   */
  backend?: Backend;
  /**
   * @remarks
   * Creation source type.
   * 
   * ApiGatewayHttpToMCP: Gateway-managed HTTP-to-MCP.
   * ApiGatewayMcpHosting: Gateway-managed MCP direct proxy.
   * ApiGatewayAssembly: Gateway MCP assembly.
   * NacosHttpToMCP: Gateway-managed Nacos-synced HTTP-to-MCP.
   * NacosMcpHosting: Gateway-managed Nacos-synced MCP direct proxy.
   * 
   * @example
   * ApiGatewayHttpToMCP
   */
  createFromType?: string;
  /**
   * @remarks
   * Deployment status of the API in the current environment.
   * 
   * @example
   * Deployed
   */
  deployStatus?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 测试专用MCP Server
   */
  description?: string;
  /**
   * @remarks
   * Domain ID list.
   */
  domainIds?: string[];
  /**
   * @remarks
   * Domain information list.
   */
  domainInfos?: GetMcpServerResponseBodyDataDomainInfos[];
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * Exposed URI path. Required when protocol is SSE or StreamableHTTP and type is RealMCP.
   * 
   * @example
   * /sse
   */
  exposedUriPath?: string;
  /**
   * @remarks
   * Gateway instance ID.
   * 
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * Canary route configuration.
   */
  grayMcpServerConfigs?: GetMcpServerResponseBodyDataGrayMcpServerConfigs[];
  /**
   * @remarks
   * Route match rules.
   * 
   * @example
   * {\\"product_code\\":\\"apigw\\"}
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * HTTP-to-MCP configuration.
   * 
   * @example
   * MCP Server配置 base64
   */
  mcpServerConfig?: string;
  /**
   * @remarks
   * MCP Server plugin configuration attachment ID.
   * 
   * @example
   * pa-adfaefwaef
   */
  mcpServerConfigPluginAttachmentId?: string;
  /**
   * @remarks
   * MCP Server ID
   * 
   * @example
   * mcp-adfefz24afg
   */
  mcpServerId?: string;
  /**
   * @remarks
   * MCP Server access path provided by the gateway.
   * 
   * @example
   * /mcp-servers/test-mcp
   */
  mcpServerPath?: string;
  /**
   * @remarks
   * Whether to enable MCP observability. Default is false.
   * 
   * @example
   * false
   */
  mcpStatisticsEnable?: boolean;
  /**
   * @remarks
   * Nacos synchronization managed MCP information.
   */
  nacosMcpSyncInfo?: GetMcpServerResponseBodyDataNacosMcpSyncInfo;
  /**
   * @remarks
   * MCP Server name.
   * 
   * @example
   * test-mcp
   */
  name?: string;
  /**
   * @remarks
   * Service protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * Route ID.
   * 
   * @example
   * hr-cr82undlhtgrlej***
   */
  routeId?: string;
  /**
   * @remarks
   * MCP Server type.
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
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: GetMcpServerResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
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

