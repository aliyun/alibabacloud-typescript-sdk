// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcpResponseBodyData extends $dara.Model {
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
   * The authentication information.
   * 
   * @example
   * {"type":"bearer","token":"xxx"}
   */
  authConfig?: string;
  /**
   * @remarks
   * Indicates whether authentication is enabled.
   * 
   * @example
   * false
   */
  authEnabled?: boolean;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * DIRECT_PROXY
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
   * The MCP server description.
   * 
   * @example
   * This is an MCP server.
   */
  description?: string;
  /**
   * @remarks
   * The MCP server ID.
   * 
   * @example
   * mcp-xxx
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
  /**
   * @remarks
   * The Swagger configuration.
   * 
   * @example
   * {"url":"https://example.com/swagger.json"}
   */
  swaggerConfig?: string;
  /**
   * @remarks
   * The MCP server access URL.
   * 
   * @example
   * https://example.com/mcp
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      authConfig: 'AuthConfig',
      authEnabled: 'AuthEnabled',
      createType: 'CreateType',
      deployStatus: 'DeployStatus',
      description: 'Description',
      id: 'Id',
      mcpServerConfig: 'McpServerConfig',
      name: 'Name',
      protocol: 'Protocol',
      swaggerConfig: 'SwaggerConfig',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      authConfig: 'string',
      authEnabled: 'boolean',
      createType: 'string',
      deployStatus: 'string',
      description: 'string',
      id: 'string',
      mcpServerConfig: 'string',
      name: 'string',
      protocol: 'string',
      swaggerConfig: 'string',
      url: 'string',
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

export class GetMcpResponseBody extends $dara.Model {
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
  data?: GetMcpResponseBodyData;
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
   * Id of the request
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
   * true
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
      data: GetMcpResponseBodyData,
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

