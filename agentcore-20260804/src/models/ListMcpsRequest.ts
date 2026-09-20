// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters results by custom tag. The tag must be an exact match.
   * 
   * @example
   * KnowledgeBase
   */
  customTag?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The MCP service name or service ID. Used together with SearchType.
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
   * Filters results by official usage tag.
   * 
   * @example
   * KNOWLEDGE_BASE
   */
  officialTag?: string;
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
  /**
   * @remarks
   * Specifies whether the service is still bound by the official template usage.
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

