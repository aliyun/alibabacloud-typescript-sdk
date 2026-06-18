// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOriginPoolsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies how to match the origin pool name. The default is `exact`. Valid values:
   * 
   * - `fuzzy`: Performs a fuzzy search.
   * 
   * - `exact`: Performs an exact match.
   * 
   * @example
   * exact
   */
  matchType?: string;
  /**
   * @remarks
   * The name of the origin pool.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * Specifies how the results are sorted. By default, results are sorted by ID in descending order. To sort by ID in ascending order, set this parameter to `id`. IDs increase with creation time.
   * 
   * - id: Sorts by ID in descending order.
   * 
   * - id: Sorts by ID in ascending order.
   * 
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be an integer from 1 to 500. If you specify a value greater than 500, the system uses 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The site ID. To get this ID, call the [ListSites](~~ListSites~~) operation.
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

