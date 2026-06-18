// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * The matching strategy to use when querying by name. Valid values:
   * 
   * - `fuzzy`: Performs a fuzzy match.
   * 
   * - `exact`: Performs an exact match.
   * 
   * @example
   * fuzzy
   */
  matchType?: string;
  /**
   * @remarks
   * The name of the load balancer.
   * 
   * @example
   * lb.example.com
   */
  name?: string;
  /**
   * @remarks
   * The sort field. Only sorting by ID is supported. IDs are assigned chronologically. Specify `id` for ascending order or `-id` for descending order. If this parameter is omitted, the results are sorted by ID in descending order.
   * 
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number for pagination.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The site ID. You can obtain this ID by calling the [ListSites](~~ListSites~~) operation.
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

