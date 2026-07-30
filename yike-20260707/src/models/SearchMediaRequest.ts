// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can obtain the ID by using the following methods:
   * 
   * @example
   * 10
   */
  categoryId?: number;
  /**
   * @remarks
   * The filter condition. For syntax rules, see [Media asset search protocol](https://www.alibabacloud.com/help/en/ims/developer-reference/media-asset-search-filter-description).
   * 
   * @example
   * title = \\"China\\" and utcCreate = [\\"1693367158561\\",\\"1693367158562\\"]
   */
  match?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pagination token. A 32-character string. You do not need to set this parameter for the first search request. When the search request matches data, the server returns this parameter value to record the current position of the search data. Record the returned parameter value and set this parameter in the next search request based on the following requirements or suggestions: This parameter must be set if you want to traverse all data that matches the search conditions. If the PageNo parameter value exceeds 200, set this parameter to optimize search performance. You can only page forward, with a maximum paging distance of 1000 media assets.
   * 
   * @example
   * F8C4F642184DBDA5D93907A70AAE****
   */
  scrollToken?: string;
  /**
   * @remarks
   * The sort fields and sort orders, separated by commas (,). Format: field1:Desc,field2:Asc. The direction can only be Asc or Desc.
   * 
   * @example
   * utcCreate:Desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      match: 'Match',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      scrollToken: 'ScrollToken',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      match: 'string',
      pageNo: 'number',
      pageSize: 'number',
      scrollToken: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

