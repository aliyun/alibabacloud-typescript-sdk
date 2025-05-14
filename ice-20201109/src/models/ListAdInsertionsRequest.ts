// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdInsertionsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration name. Fuzzy match is supported.
   * 
   * @example
   * ad
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries to retrieve in a subsequent request. If this parameter is used, the pagination parameters become invalid. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used in the next request to retrieve a new page of results. If this parameter is used, the pagination parameters become invalid.
   * 
   * @example
   * ******8EqYpQbZ6Eh7+Zz8DxVYoQ*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting order of the configurations by creation time. asc: ascending. desc: descending.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

