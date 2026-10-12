// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcpServerResponseBodyMcpServer extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * The value is a 13-digit number, such as `1780555634000`.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * **The last modification time as a millisecond timestamp.**
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * **The name of the MCP server.**
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcpServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the MCP server.
   */
  mcpServer?: UpdateMcpServerResponseBodyMcpServer;
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
      mcpServer: UpdateMcpServerResponseBodyMcpServer,
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

