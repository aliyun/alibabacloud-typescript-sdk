// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page. Pages start from 1. Default value: 1.
   * 
   * @example
   * 89
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies the language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The pagination token for the next query. If this parameter is empty, no subsequent queries are available. If a value is returned, it is used as the token to start the next query.
   * 
   * @example
   * 1426C575705AE8545E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for paging in a paged query. Default value: 20. Maximum value: 2000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve the vulnerability list. If this parameter is used, TotalCount is not returned. Valid values:
   * 
   * - **true**: Use the NextToken method.
   * - **false**: Do not use the NextToken method.
   * 
   * @example
   * true
   */
  useNextToken?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      useNextToken: 'UseNextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      nextToken: 'string',
      pageSize: 'number',
      useNextToken: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

