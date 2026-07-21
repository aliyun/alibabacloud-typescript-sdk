// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryModelListRequest extends $dara.Model {
  /**
   * @remarks
   * The field to use for grouping the results.
   * 
   * @example
   * resourceId
   */
  groupBy?: string;
  /**
   * @remarks
   * The keyword for a fuzzy search on model information.
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
   * @example
   * Chat
   */
  modelType?: string;
  /**
   * @remarks
   * Specifies whether to include the total count of matching models in the response.
   * 
   * @example
   * true
   */
  needTotalCount?: boolean;
  /**
   * @remarks
   * The pagination token for retrieving the next page of results. If this parameter is not specified, the first page is retrieved. To retrieve a subsequent page, set this to the `nextToken` value from the previous response.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The field to use for sorting the results.
   * 
   * @example
   * resourceId
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order. Valid values include `ASC` for ascending order and `DESC` for descending order.
   * 
   * @example
   * DESC
   */
  orderDirection?: string;
  /**
   * @remarks
   * The page number to retrieve. Pages are numbered starting from 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of models to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The model status to use as a filter.
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
      modelType: 'modelType',
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
      modelType: 'string',
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

