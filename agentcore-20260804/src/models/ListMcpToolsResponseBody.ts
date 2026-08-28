// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpToolsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The input parameter schema of the tool.
   * 
   * @example
   * {"type":"object"}
   */
  inputSchema?: string;
  /**
   * @remarks
   * The output parameter schema of the tool.
   * 
   * @example
   * {"type":"object"}
   */
  outputSchema?: string;
  /**
   * @remarks
   * The MCP tool description.
   * 
   * @example
   * Get the current time
   */
  toolDescription?: string;
  /**
   * @remarks
   * The MCP tool name.
   * 
   * @example
   * get-current-time
   */
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      inputSchema: 'inputSchema',
      outputSchema: 'outputSchema',
      toolDescription: 'toolDescription',
      toolName: 'toolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputSchema: 'string',
      outputSchema: 'string',
      toolDescription: 'string',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcpToolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list data.
   */
  items?: ListMcpToolsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of results per page.
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
   * Request processed successfully
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * next-page-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListMcpToolsResponseBodyItems },
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

