// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcpServerResponseBodyMcpServerConfig extends $dara.Model {
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

export class GetMcpServerResponseBodyMcpServer extends $dara.Model {
  /**
   * @remarks
   * The connection configuration for the MCP Server.
   */
  config?: GetMcpServerResponseBodyMcpServerConfig;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 123456
   */
  creatorId?: string;
  /**
   * @remarks
   * The creation time, provided as a timestamp in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time, provided as a timestamp in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The modifier ID.
   * 
   * @example
   * 123456
   */
  modifierId?: string;
  /**
   * @remarks
   * The MCP Server name.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  /**
   * @remarks
   * The visibility level. Valid values: TENANT (visible within the account), PROJECT (visible to specified projects), and USER (visible to specified users).
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
      config: GetMcpServerResponseBodyMcpServerConfig,
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

export class GetMcpServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The MCP Server configuration.
   */
  mcpServer?: GetMcpServerResponseBodyMcpServer;
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
      mcpServer: 'McpServer',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServer: GetMcpServerResponseBodyMcpServer,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mcpServer && typeof (this.mcpServer as any).validate === 'function') {
      (this.mcpServer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

