// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentMcpResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of MCP Servers on the current page. Each item contains information such as the service identifier, name, workspace, network, connection method, status, and enabled state.
   * 
   * @example
   * [{"uuid":"44lg***z65","name":"analytics","workspaceUuid":"	atvx***xmz","netType":"public","transportType":"sse","state":"ready","enable":true}]
   */
  content?: any;
  /**
   * @remarks
   * The current page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records that match the filter conditions.
   * 
   * @example
   * 1
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of pages that match the filter conditions.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'any',
      pageNumber: 'number',
      pageSize: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAgentMcpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paging query results of MCP Servers.
   */
  data?: ListDataAgentMcpResponseBodyData;
  /**
   * @remarks
   * The return code. The value is success if the request was successful, or an error code if the request failed.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when a system-level request failure occurs.
   * 
   * @example
   * Failed to list MCP servers
   */
  errorMessage?: string;
  /**
   * @remarks
   * The maximum number of records returned in this response.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. This value is empty when no more results are available.
   * 
   * @example
   * page-2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID, which is used to locate this call.
   * 
   * @example
   * 550e***544
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataAgentMcpResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

