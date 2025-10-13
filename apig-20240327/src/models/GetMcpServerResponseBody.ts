// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Backend } from "./Backend";
import { HttpRouteMatch } from "./HttpRouteMatch";


export class GetMcpServerResponseBodyDataAssembledSources extends $dara.Model {
  /**
   * @remarks
   * MCP Server ID
   * 
   * @example
   * mcp-xdafeafzz
   */
  mcpServerId?: string;
  /**
   * @example
   * test-mcp
   */
  mcpServerName?: string;
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
   * @example
   * www.abc.com
   */
  domainId?: string;
  /**
   * @example
   * verifyicket
   */
  name?: string;
  /**
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

export class GetMcpServerResponseBodyDataNacosMcpSyncInfo extends $dara.Model {
  /**
   * @example
   * mse-xxxxx
   */
  importInstanceId?: string;
  /**
   * @example
   * test-mcp
   */
  importMcpServerId?: string;
  /**
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
  assembledSources?: GetMcpServerResponseBodyDataAssembledSources[];
  backend?: Backend;
  /**
   * @example
   * ApiGatewayHttpToMCP
   */
  createFromType?: string;
  /**
   * @example
   * Deployed
   */
  deployStatus?: string;
  description?: string;
  domainIds?: string[];
  domainInfos?: GetMcpServerResponseBodyDataDomainInfos[];
  /**
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @example
   * /sse
   */
  exposedUriPath?: string;
  /**
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @example
   * {\\"product_code\\":\\"apigw\\"}
   */
  match?: HttpRouteMatch;
  mcpServerConfig?: string;
  /**
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
   * @example
   * /mcp-servers/test-mcp
   */
  mcpServerPath?: string;
  /**
   * @example
   * false
   */
  mcpStatisticsEnable?: boolean;
  nacosMcpSyncInfo?: GetMcpServerResponseBodyDataNacosMcpSyncInfo;
  /**
   * @example
   * test-mcp
   */
  name?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * hr-cr82undlhtgrlej***
   */
  routeId?: string;
  /**
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
   * @example
   * Ok
   */
  code?: string;
  data?: GetMcpServerResponseBodyData;
  /**
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

