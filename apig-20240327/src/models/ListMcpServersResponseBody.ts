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

export class ListMcpServersResponseBodyDataItemsNacosMcpSyncInfo extends $dara.Model {
  /**
   * @example
   * mse-faefrefxz
   */
  importInstanceId?: string;
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

export class ListMcpServersResponseBodyDataItems extends $dara.Model {
  apiId?: string;
  assembledSources?: ListMcpServersResponseBodyDataItemsAssembledSources[];
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
  domainInfos?: HttpApiDomainInfo[];
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
   * gw-cpv54p5***
   */
  gatewayId?: string;
  match?: HttpRouteMatch;
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
   * @example
   * /mcp-servers/test-mcp
   */
  mcpServerPath?: string;
  /**
   * @example
   * false
   */
  mcpStatisticsEnable?: boolean;
  nacosMcpSyncInfo?: ListMcpServersResponseBodyDataItemsNacosMcpSyncInfo;
  /**
   * @example
   * itemcenter-dev-cluster
   */
  name?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * hr-d11cj86m1hkvop6mp42g
   */
  routeId?: string;
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
  items?: ListMcpServersResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * Ok
   */
  code?: string;
  data?: ListMcpServersResponseBodyData;
  /**
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

