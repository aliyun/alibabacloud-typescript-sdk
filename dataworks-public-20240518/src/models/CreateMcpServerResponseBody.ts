// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpServerResponseBodyMcpServer extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @example
   * my-mcp-server
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
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

export class CreateMcpServerResponseBody extends $dara.Model {
  mcpServer?: CreateMcpServerResponseBodyMcpServer;
  /**
   * @example
   * valueA
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
      mcpServer: CreateMcpServerResponseBodyMcpServer,
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

