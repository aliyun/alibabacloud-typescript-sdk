// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of MCP server addresses.
   * 
   * @example
   * ["https://example.com/mcp"]
   */
  addresses?: string[];
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * 7
   */
  createType?: string;
  /**
   * @remarks
   * The deployment status.
   * 
   * @example
   * DEPLOYED
   */
  deployStatus?: string;
  /**
   * @remarks
   * The description of the MCP server.
   * 
   * @example
   * This is an MCP server.
   */
  description?: string;
  /**
   * @remarks
   * The export task ID.
   * 
   * @example
   * 418273109406496841-cn-shenzhen
   */
  id?: string;
  /**
   * @remarks
   * The MCP server configuration.
   * 
   * @example
   * {}
   */
  mcpServerConfig?: string;
  /**
   * @remarks
   * The MCP server name.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * streamable
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      createType: 'CreateType',
      deployStatus: 'DeployStatus',
      description: 'Description',
      id: 'Id',
      mcpServerConfig: 'McpServerConfig',
      name: 'Name',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      createType: 'string',
      deployStatus: 'string',
      description: 'string',
      id: 'string',
      mcpServerConfig: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: CreateMcpResponseBodyData;
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
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateMcpResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

