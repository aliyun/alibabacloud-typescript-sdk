// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpServersShrinkRequest extends $dara.Model {
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
  visibilityShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      q: 'Q',
      visibilityShrink: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      q: 'string',
      visibilityShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

