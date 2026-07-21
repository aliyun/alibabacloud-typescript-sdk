// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryConversationListRequest extends $dara.Model {
  /**
   * @remarks
   * The grouping field.
   * 
   * @example
   * resourceId
   */
  groupBy?: string;
  /**
   * @remarks
   * A keyword to filter the results.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether to return the total count of items. Set to `true` to return the total count.
   * 
   * @example
   * true
   */
  needTotalCount?: boolean;
  /**
   * @remarks
   * The pagination token for the next page of results. To retrieve the first page, do not specify this parameter.
   * 
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * resourceId
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order. Valid values are `ASC` (ascending) and `DESC` (descending).
   * 
   * @example
   * DESC
   */
  orderDirection?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of items to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the results by status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      groupBy: 'groupBy',
      keyword: 'keyword',
      maxResults: 'maxResults',
      needTotalCount: 'needTotalCount',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupBy: 'string',
      keyword: 'string',
      maxResults: 'number',
      needTotalCount: 'boolean',
      nextToken: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

