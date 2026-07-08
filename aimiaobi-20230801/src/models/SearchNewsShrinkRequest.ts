// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchNewsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/3027170.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Specifies whether to filter out results with empty content.
   * 
   * @example
   * false
   */
  filterNotNull?: boolean;
  /**
   * @remarks
   * Specifies whether to include the full text of the article.
   * 
   * @example
   * false
   */
  includeContent?: boolean;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records to return on each page. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search query.
   * 
   * @example
   * 检索Query
   */
  query?: string;
  /**
   * @remarks
   * A list of search sources.
   */
  searchSourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      filterNotNull: 'FilterNotNull',
      includeContent: 'IncludeContent',
      page: 'Page',
      pageSize: 'PageSize',
      query: 'Query',
      searchSourcesShrink: 'SearchSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      filterNotNull: 'boolean',
      includeContent: 'boolean',
      page: 'number',
      pageSize: 'number',
      query: 'string',
      searchSourcesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

