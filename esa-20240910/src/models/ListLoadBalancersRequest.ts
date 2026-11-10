// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * The name matching policy used when querying by name. Valid values:
   * - fuzzy: fuzzy match
   * - exact: exact match
   * 
   * @example
   * fuzzy
   */
  matchType?: string;
  /**
   * @remarks
   * The load balancing name. You can query by name.
   * 
   * @example
   * lb.example.com
   */
  name?: string;
  /**
   * @remarks
   * The sort field. Only sorting by ID is supported. id indicates ascending order by ID, and -id indicates descending order by ID. The ID value is positively correlated with the creation time. If this parameter is not specified, the default sort order is descending by ID.
   * 
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number Settings for paging in a paged query. The value must be greater than or equal to 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size for paging in a paged query. Valid values: 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](~~ListSites~~) operation.
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

