// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpMarketItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to filter MCP marketplace templates.
   * 
   * @example
   * Knowledge
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of records to return in this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The MCP type.
   * 
   * @example
   * CODE_PACKAGE
   */
  mcpType?: string;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results.
   * 
   * @example
   * 20
   */
  nextToken?: string;
  /**
   * @remarks
   * The official usage tag.
   * 
   * @example
   * KNOWLEDGE_BASE
   */
  officialTag?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      mcpType: 'mcpType',
      nextToken: 'nextToken',
      officialTag: 'officialTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      mcpType: 'string',
      nextToken: 'string',
      officialTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

