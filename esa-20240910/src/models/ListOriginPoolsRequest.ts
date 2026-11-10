// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOriginPoolsRequest extends $dara.Model {
  /**
   * @remarks
   * The match type for name-based queries. Valid values:
   * - fuzzy: fuzzy search.
   * - exact: exact search.
   * Default value: exact.
   * 
   * @example
   * exact
   */
  matchType?: string;
  /**
   * @remarks
   * The name of the origin address pool.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Supports ascending or descending order by ID. The ID is positively correlated with the creation time. Default value: descending order by ID. Valid values:
   * - id: descending order by ID.
   * - id: ascending order by ID.
   * 
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be a positive integer. Maximum value: 500. If the value exceeds 500, it is reset to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
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

