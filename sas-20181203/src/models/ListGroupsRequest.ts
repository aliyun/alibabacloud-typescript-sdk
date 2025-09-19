// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 89
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the return value of NextToken is empty, no next query is to be sent. If a value of NextToken is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * 1426C575705AE8545E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 2000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to use NextToken to query vulnerabilities. If you set this parameter to true, TotalCount is not returned. Valid values:
   * 
   * *   **true**
   * *   **false**
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

