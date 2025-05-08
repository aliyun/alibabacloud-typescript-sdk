// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOriginPoolsRequest extends $dara.Model {
  /**
   * @remarks
   * Type of name match query, supporting the following two types, with exact match as the default.
   * 
   * - fuzzy: Fuzzy query.
   * - exact: Exact query.
   * 
   * @example
   * exact
   */
  matchType?: string;
  /**
   * @remarks
   * Name of the origin pool.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * Sorting, supports ascending and descending order by ID, default is descending by ID, which is positively correlated with creation time.
   * 
   * - -id: Sort by ID in descending order.
   * - id: Sort by ID in ascending order.
   * 
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @remarks
   * Page number, default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, an integer greater than 0, with a maximum of 500. If the value exceeds 500, it will be set to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 151538882642832
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

