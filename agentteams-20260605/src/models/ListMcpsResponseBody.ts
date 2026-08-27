// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpsResponseBodyItems extends $dara.Model {
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
   * The AgentTeams instance ID.
   * 
   * @example
   * ins-xxx
   */
  instanceId?: string;
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
   * The MCP server access URL.
   * 
   * @example
   * https://example.com/mcp
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      createType: 'CreateType',
      deployStatus: 'DeployStatus',
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      mcpServerConfig: 'McpServerConfig',
      name: 'Name',
      protocol: 'Protocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      createType: 'string',
      deployStatus: 'string',
      description: 'string',
      id: 'string',
      instanceId: 'string',
      mcpServerConfig: 'string',
      name: 'string',
      protocol: 'string',
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

export class ListMcpsResponseBody extends $dara.Model {
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
   * The list of MCP servers.
   * 
   * @example
   * [...]
   */
  items?: ListMcpsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
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
   * The token for the next page.
   * 
   * @example
   * next-token-xxx
   */
  nextToken?: string;
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
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListMcpsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

