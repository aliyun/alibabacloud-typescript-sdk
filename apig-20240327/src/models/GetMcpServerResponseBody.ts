// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Backend } from "./Backend";
import { HttpRouteMatch } from "./HttpRouteMatch";


export class GetMcpServerResponseBodyDataAssembledSources extends $dara.Model {
  /**
   * @remarks
   * The ID of the MCP server.
   * 
   * @example
   * mcp-xdafeafzz
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

export class GetMcpServerResponseBodyDataDomainInfos extends $dara.Model {
  /**
   * @remarks
   * The domain name ID.
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
   * The protocol. Valid values: HTTP and HTTPS.
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

export class GetMcpServerResponseBodyDataNacosMcpSyncInfo extends $dara.Model {
  /**
   * @remarks
   * The Nacos instance.
   * 
   * @example
   * mse-xxxxx
   */
  importInstanceId?: string;
  /**
   * @remarks
   * The synchronized MCP server ID.
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
  /**
   * @remarks
   * The list of assembly sources. This parameter is required when the type parameter is set to AssemblyMCP.
   */
  assembledSources?: GetMcpServerResponseBodyDataAssembledSources[];
  /**
   * @remarks
   * The backend service of the route.
   */
  backend?: Backend;
  /**
   * @remarks
   * Indicates the type of source for MCP server creation. Valid values: 
   * 
   * ApiGatewayHttpToMCP 
   * ApiGatewayMcpHosting 
   * ApiGatewayAssembly 
   * NacosHttpToMCP 
   * NacosMcpHosting
   * 
   * @example
   * ApiGatewayHttpToMCP
   */
  createFromType?: string;
  /**
   * @remarks
   * The publishing status of the API in the current environment.
   * 
   * @example
   * Deployed
   */
  deployStatus?: string;
  /**
   * @remarks
   * The description.
   */
  description?: string;
  /**
   * @remarks
   * The domain name IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The list of domain information.
   */
  domainInfos?: GetMcpServerResponseBodyDataDomainInfos[];
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
   * The exposed URI path. This parameter is required when the protocol parameter is set to SSE or StreamableHTTP, and the type parameter is set to RealMCP.
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
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The route match rule.
   * 
   * @example
   * {\\"product_code\\":\\"apigw\\"}
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The HTTP-to-MCP configurations.
   */
  mcpServerConfig?: string;
  /**
   * @remarks
   * The attachment ID for the MCP server plug-in configuration.
   * 
   * @example
   * pa-adfaefwaef
   */
  mcpServerConfigPluginAttachmentId?: string;
  /**
   * @remarks
   * The ID of the MCP server.
   * 
   * @example
   * mcp-adfefz24afg
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
   * The MCP information managed and synchronized by Nacos.
   */
  nacosMcpSyncInfo?: GetMcpServerResponseBodyDataNacosMcpSyncInfo;
  /**
   * @remarks
   * The name of the MCP server.
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
   * The route ID.
   * 
   * @example
   * hr-cr82undlhtgrlej***
   */
  routeId?: string;
  /**
   * @remarks
   * The type of the MCP server.
   * 
   * @example
   * RealMCP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
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
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response payload.
   */
  data?: GetMcpServerResponseBodyData;
  /**
   * @remarks
   * The status message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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

