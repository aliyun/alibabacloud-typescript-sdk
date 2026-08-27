// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpToolsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The tool description.
   * 
   * @example
   * Perform a search operation.
   */
  description?: string;
  /**
   * @remarks
   * The input parameter schema of the tool.
   * 
   * @example
   * {"type":"object","properties":{"query":{"type":"string"}}}
   */
  inputSchema?: string;
  /**
   * @remarks
   * The tool name.
   * 
   * @example
   * search
   */
  name?: string;
  /**
   * @remarks
   * The tool title.
   * 
   * @example
   * Search tool.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputSchema: 'InputSchema',
      name: 'Name',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputSchema: 'string',
      name: 'string',
      title: 'string',
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
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The list of tools.
   * 
   * @example
   * [...]
   */
  items?: ListMcpToolsResponseBodyItems[];
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
   * 2
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

