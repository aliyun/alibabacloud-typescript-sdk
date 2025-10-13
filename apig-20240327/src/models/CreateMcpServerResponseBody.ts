// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpServerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * MCP Server ID
   * 
   * @example
   * mcp-afegaijoijaoji24a
   */
  mcpServerId?: string;
  /**
   * @example
   * test-mcp
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mcpServerId: 'mcpServerId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerId: 'string',
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
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateMcpServerResponseBodyData;
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
   * 464F9EA0-1052-51BD-8187-D292AA2D8D24
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
      data: CreateMcpServerResponseBodyData,
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

