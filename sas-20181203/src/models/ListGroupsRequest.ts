// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page to return. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 89
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no additional results exist. If NextToken has a value, the value indicates the token to use for the next query.
   * 
   * @example
   * 1426C575705AE8545E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paging query. Default value: 20. Maximum value: 2000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve the vulnerability list data. If this parameter is used, TotalCount is no longer returned. Valid values:
   * 
   * - **true**: Uses the NextToken method.
   * - **false**: Does not use the NextToken method.
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

