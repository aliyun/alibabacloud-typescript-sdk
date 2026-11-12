// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpsRequest extends $dara.Model {
  /**
   * @remarks
   * The custom tag used for filtering. An exact match is required.
   * 
   * @example
   * Knowledge base
   */
  customTag?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The MCP service name or service ID. This parameter is used in conjunction with SearchType.
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
   * The official usage tag used for filtering.
   * 
   * @example
   * KNOWLEDGE_BASE
   */
  officialTag?: string;
  /**
   * @remarks
   * The name match type. This parameter takes effect only when Name is specified. Valid values: accurate (exact match) and blur (fuzzy match). Default value: blur.
   * 
   * @example
   * blur
   */
  searchType?: string;
  /**
   * @remarks
   * Specifies whether the service is still subject to official template usage constraints.
   */
  usageActive?: boolean;
  static names(): { [key: string]: string } {
    return {
      customTag: 'customTag',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      officialTag: 'officialTag',
      searchType: 'searchType',
      usageActive: 'usageActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTag: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      officialTag: 'string',
      searchType: 'string',
      usageActive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

