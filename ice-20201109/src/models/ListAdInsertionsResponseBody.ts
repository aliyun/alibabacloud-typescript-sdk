// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAdInsertionsResponseBodyConfigs } from "./ListAdInsertionsResponseBodyConfigs";


export class ListAdInsertionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Array
   */
  configs?: ListAdInsertionsResponseBodyConfigs[];
  /**
   * @remarks
   * The maximum number of entries to retrieve in a subsequent request. If this parameter is used, the pagination parameters become invalid.
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order of the configurations by creation time. asc: ascending. desc: descending.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListAdInsertionsResponseBodyConfigs },
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

