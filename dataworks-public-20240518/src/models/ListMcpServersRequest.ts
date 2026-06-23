// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpServersRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The next page token from a previous response. Use this token to retrieve the next page of results. Leave this parameter empty for the first request.
   * 
   * @example
   * 12345
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword for a fuzzy search on MCP Server names.
   * 
   * @example
   * mcp
   */
  q?: string;
  /**
   * @remarks
   * The visibility level for filtering the results.
   * 
   * @example
   * -
   */
  visibility?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      q: 'Q',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      q: 'string',
      visibility: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.visibility)) {
      $dara.Model.validateArray(this.visibility);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

