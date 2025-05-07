// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchNewsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @example
   * false
   */
  filterNotNull?: boolean;
  /**
   * @example
   * false
   */
  includeContent?: boolean;
  /**
   * @example
   * 81
   */
  page?: number;
  /**
   * @example
   * 35
   */
  pageSize?: number;
  /**
   * @example
   * 检索Query
   */
  query?: string;
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

