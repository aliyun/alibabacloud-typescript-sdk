// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncMCPServersResponseBodyDataFailedMcpServers extends $dara.Model {
  /**
   * @remarks
   * The name of the MCP server.
   * 
   * @example
   * mcp-fail
   */
  mcpServerName?: string;
  /**
   * @remarks
   * The protocol.
   */
  protocols?: string[];
  static names(): { [key: string]: string } {
    return {
      mcpServerName: 'mcpServerName',
      protocols: 'protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerName: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMCPServersResponseBodyDataSucceedMcpServers extends $dara.Model {
  /**
   * @remarks
   * The name of the MCP server.
   * 
   * @example
   * mcp-success
   */
  mcpServerName?: string;
  /**
   * @remarks
   * The protocol.
   */
  protocols?: string[];
  static names(): { [key: string]: string } {
    return {
      mcpServerName: 'mcpServerName',
      protocols: 'protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerName: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMCPServersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of MCP servers that failed to synchronize.
   */
  failedMcpServers?: SyncMCPServersResponseBodyDataFailedMcpServers[];
  /**
   * @remarks
   * The list of MCP servers successfully synchronized.
   */
  succeedMcpServers?: SyncMCPServersResponseBodyDataSucceedMcpServers[];
  static names(): { [key: string]: string } {
    return {
      failedMcpServers: 'failedMcpServers',
      succeedMcpServers: 'succeedMcpServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedMcpServers: { 'type': 'array', 'itemType': SyncMCPServersResponseBodyDataFailedMcpServers },
      succeedMcpServers: { 'type': 'array', 'itemType': SyncMCPServersResponseBodyDataSucceedMcpServers },
    };
  }

  validate() {
    if(Array.isArray(this.failedMcpServers)) {
      $dara.Model.validateArray(this.failedMcpServers);
    }
    if(Array.isArray(this.succeedMcpServers)) {
      $dara.Model.validateArray(this.succeedMcpServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMCPServersResponseBody extends $dara.Model {
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
   * The response data.
   */
  data?: SyncMCPServersResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * 2F46B9E7-67EF-5C8A-BA52-D38D5B32AF2C
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
      data: SyncMCPServersResponseBodyData,
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

