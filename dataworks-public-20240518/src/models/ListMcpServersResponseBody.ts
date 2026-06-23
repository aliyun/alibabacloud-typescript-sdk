// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpServersResponseBodyPagingInfoMcpServersConfig extends $dara.Model {
  /**
   * @remarks
   * The custom headers.
   * 
   * @example
   * {}
   */
  customHeaders?: { [key: string]: any };
  /**
   * @remarks
   * The transport protocol.
   * 
   * @example
   * SSE
   */
  transport?: string;
  /**
   * @remarks
   * The service address of the MCP Server.
   * 
   * @example
   * https://example.com/mcp/sse
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      customHeaders: 'CustomHeaders',
      transport: 'Transport',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      transport: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.customHeaders) {
      $dara.Model.validateMap(this.customHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcpServersResponseBodyPagingInfoMcpServers extends $dara.Model {
  /**
   * @remarks
   * The connection configuration of the MCP Server.
   */
  config?: ListMcpServersResponseBodyPagingInfoMcpServersConfig;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 805298765622151
   */
  creatorId?: string;
  /**
   * @remarks
   * The creation time, as a millisecond timestamp.****
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modified time, as a millisecond timestamp.****
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The ID of the user who last modified the server.
   * 
   * @example
   * 123456
   */
  modifierId?: string;
  /**
   * @remarks
   * The name of the MCP Server.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  /**
   * @remarks
   * The visibility level.****
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      creatorId: 'CreatorId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      modifierId: 'ModifierId',
      name: 'Name',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListMcpServersResponseBodyPagingInfoMcpServersConfig,
      creatorId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      modifierId: 'string',
      name: 'string',
      visibility: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcpServersResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results returned on the current page.****
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * A list of MCP Server objects.
   */
  mcpServers?: ListMcpServersResponseBodyPagingInfoMcpServers[];
  /**
   * @remarks
   * The token for the next page of results. A null value indicates that all results have been returned.****
   * 
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * The total count of entries that match the filter criteria.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      mcpServers: 'McpServers',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      mcpServers: { 'type': 'array', 'itemType': ListMcpServersResponseBodyPagingInfoMcpServers },
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mcpServers)) {
      $dara.Model.validateArray(this.mcpServers);
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
   * The paging information.
   */
  pagingInfo?: ListMcpServersResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 824F80BA-1778-5D8A-BAFF-668A4D9C4CC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListMcpServersResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

