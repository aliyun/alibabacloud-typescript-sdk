// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryNacosProvidersRequest extends $dara.Model {
  /**
   * @remarks
   * The field by which to group the results.
   * 
   * @example
   * resourceId
   */
  groupBy?: string;
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
   * Specifies whether the total count is required.
   * 
   * @example
   * true
   */
  needTotalCount?: boolean;
  /**
   * @remarks
   * The pagination token used for paginated queries. Specify this parameter to retrieve the next page.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * resourceId
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort direction.
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      groupBy: 'groupBy',
      maxResults: 'maxResults',
      needTotalCount: 'needTotalCount',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupBy: 'string',
      maxResults: 'number',
      needTotalCount: 'boolean',
      nextToken: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

