// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Backend } from "./Backend";
import { HttpApiDomainInfo } from "./HttpApiDomainInfo";
import { HttpRouteMatch } from "./HttpRouteMatch";


export class ListMcpServersResponseBodyDataItemsAssembledSources extends $dara.Model {
  /**
   * @remarks
   * MCP Server ID
   * 
   * @example
   * mcp-adfef2334fa
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

export class ListMcpServersResponseBodyDataItemsNacosMcpSyncInfo extends $dara.Model {
  /**
   * @remarks
   * The Nacos instance.
   * 
   * @example
   * mse-faefrefxz
   */
  importInstanceId?: string;
  /**
   * @remarks
   * The synced MCP server ID.
   * 
   * @example
   * 同步的MCP Server ID
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

export class ListMcpServersResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * API ID。
   * 
   * @example
   * api-xxx
   */
  apiId?: string;
  /**
   * @remarks
   * The list of assembly sources. This parameter is required when type is AssemblyMCP.
   */
  assembledSources?: ListMcpServersResponseBodyDataItemsAssembledSources[];
  /**
   * @remarks
   * The backend service of the route.
   */
  backend?: Backend;
  /**
   * @remarks
   * The creation source type. Valid values:
   * 
   * - ApiGatewayHttpToMCP: gateway-managed HTTP-to-MCP conversion.
   * - ApiGatewayMcpHosting: gateway-managed MCP direct proxy.
   * - ApiGatewayAssembly: gateway MCP assembly.
   * - NacosHttpToMCP: gateway-managed Nacos-synced HTTP-to-MCP conversion.
   * - NacosMcpHosting: gateway-managed Nacos-synced MCP direct proxy.
   * 
   * @example
   * ApiGatewayHttpToMCP
   */
  createFromType?: string;
  /**
   * @remarks
   * The deployment status of the API in the current environment.
   * 
   * @example
   * Deployed
   */
  deployStatus?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 这是xxx的xx项目测试环境
   */
  description?: string;
  /**
   * @remarks
   * The list of domain name IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The list of domain name information.
   */
  domainInfos?: HttpApiDomainInfo[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
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
   * The gateway instance ID.
   * 
   * @example
   * gw-cpv54p5***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The route match rule.
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The HTTP-to-MCP configuration.
   * 
   * @example
   * HTTP转MCP Config base64值
   */
  mcpServerConfig?: string;
  /**
   * @remarks
   * MCP Server ID
   * 
   * @example
   * mcp-feaff34va
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The MCP server access path provided by the gateway.
   * 
   * @example
   * /mcp-servers/test-mcp
   */
  mcpServerPath?: string;
  /**
   * @remarks
   * Indicates whether MCP observability is enabled. Default value: false.
   * 
   * @example
   * false
   */
  mcpStatisticsEnable?: boolean;
  /**
   * @remarks
   * The Nacos-synced managed MCP information.
   */
  nacosMcpSyncInfo?: ListMcpServersResponseBodyDataItemsNacosMcpSyncInfo;
  /**
   * @remarks
   * The MCP server name.
   * 
   * @example
   * itemcenter-dev-cluster
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
   * The route ID associated with the MCP server.
   * 
   * @example
   * hr-d11cj86m1hkvop6mp42g
   */
  routeId?: string;
  /**
   * @remarks
   * The MCP server type.
   * 
   * @example
   * 可选值：RealMCP、AssemblyMCP
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
      match: 'match',
      mcpServerConfig: 'mcpServerConfig',
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
      assembledSources: { 'type': 'array', 'itemType': ListMcpServersResponseBodyDataItemsAssembledSources },
      backend: Backend,
      createFromType: 'string',
      deployStatus: 'string',
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      domainInfos: { 'type': 'array', 'itemType': HttpApiDomainInfo },
      environmentId: 'string',
      exposedUriPath: 'string',
      gatewayId: 'string',
      match: HttpRouteMatch,
      mcpServerConfig: 'string',
      mcpServerId: 'string',
      mcpServerPath: 'string',
      mcpStatisticsEnable: 'boolean',
      nacosMcpSyncInfo: ListMcpServersResponseBodyDataItemsNacosMcpSyncInfo,
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

export class ListMcpServersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of MCP servers.
   */
  items?: ListMcpServersResponseBodyDataItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 25
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListMcpServersResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcpServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListMcpServersResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
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
      data: ListMcpServersResponseBodyData,
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

