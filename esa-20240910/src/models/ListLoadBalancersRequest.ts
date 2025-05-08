// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * The name matching strategy when querying by name:
   * 
   * - fuzzy: Fuzzy match;
   * - exact: Exact match, equivalent to an equality query.
   * 
   * @example
   * fuzzy
   */
  matchType?: string;
  /**
   * @remarks
   * The name of the load balancer, which can be used to query by name.
   * 
   * @example
   * lb.example.com
   */
  name?: string;
  /**
   * @remarks
   * The sorting field. Currently, only sorting by id is supported. \\"id\\" indicates ascending order by id, and \\"-id\\" indicates descending order by id. The id size is positively correlated with the creation time. If not provided, it defaults to descending order by id.
   * 
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number for paginated queries.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size for paginated queries, with a value range of 1-500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](~~ListSites~~) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 21655860979****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      matchType: 'MatchType',
      name: 'Name',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      name: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

