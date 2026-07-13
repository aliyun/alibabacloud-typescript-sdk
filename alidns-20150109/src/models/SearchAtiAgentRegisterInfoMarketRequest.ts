// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAtiAgentRegisterInfoMarketRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a unique parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The keyword for searching. Matches against agent name, domain name, and description.
   * 
   * @example
   * example.com
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries per batch query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query.
   * 
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number. Minimum value: **1**. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for the paged query. Settings: maximum value: 100. Default value: 20. This parameter controls paging behavior.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The communication protocol that the agent endpoint follows, which determines how callers interact with the agent.
   * 
   * Valid values:
   * - MCP: Model Context Protocol, an agent tool calling protocol developed by Anthropic.
   * - A2A: Agent-to-Agent Protocol, a cross-agent communication protocol developed by Google.
   * - OpenAPI: Standard RESTful API specification (Swagger/OpenAPI).
   * 
   * Other agents or clients use this protocol identifier to determine how to communicate with the agent. For example, MCP uses the MCP SDK, A2A uses the A2A SDK, and OpenAPI uses standard HTTP requests.
   * 
   * @example
   * mcp
   */
  protocol?: string;
  /**
   * @remarks
   * Queries agents based on the agent status.
   * 
   * @example
   * 活跃
   */
  status?: string;
  /**
   * @remarks
   * Queries agents based on the trust level.
   * 
   * @example
   * 基础认证
   */
  trustLevel?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      protocol: 'Protocol',
      status: 'Status',
      trustLevel: 'TrustLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      protocol: 'string',
      status: 'string',
      trustLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

