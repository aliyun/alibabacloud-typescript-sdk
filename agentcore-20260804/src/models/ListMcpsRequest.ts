// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpsRequest extends $dara.Model {
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
   * The MCP service name. Used together with SearchType.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * next-page-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The name matching method. Takes effect only when Name is specified. Valid values:
   * - accurate: exact match.
   * - blur: fuzzy match.
   * 
   * Default value: blur.
   * 
   * @example
   * blur
   */
  searchType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      searchType: 'searchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      searchType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

