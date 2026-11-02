// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdInsertionsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to query ad insertion configurations by name. Fuzzy match is supported.
   * 
   * @example
   * ad
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries to return for the next page of results. When this parameter is specified, pagination parameters are ignored. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. When this parameter is specified, pagination parameters are ignored.
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
   * The sort order. Valid values: asc (ascending order by creation time) and desc (descending order by creation time).
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

