// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaRequest extends $dara.Model {
  bizConfig?: string;
  /**
   * @remarks
   * The category ID. You can obtain the category ID by using the following methods:
   * 
   * - When you create a category by calling the CreateAssetCategory operation, the category ID is the value of CategoryId in the response.
   * - When you query categories by calling the ListAssetCategories operation, the category ID is the value of CategoryId in the corresponding entry of the response.
   * 
   * @example
   * 10
   */
  categoryId?: number;
  /**
   * @remarks
   * The filter conditions. For syntax rules, see [Media asset search protocol](https://www.alibabacloud.com/help/en/ims/developer-reference/media-asset-search-filter-description).
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
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pagination token. The value is a 32-character string. Do not set this parameter for the first search request. When the search request matches data, the server returns this parameter value to record the current position of the search data. Record the returned parameter value and set this parameter in the next search request based on the following requirements or recommendations: This parameter is required if you want to traverse all data that matches the search conditions. If the PageNo parameter value exceeds 200, set this parameter to optimize search performance. You can only page forward, and the maximum paging distance is 1000 media assets.
   * 
   * @example
   * F8C4F642184DBDA5D93907A70AAE****
   */
  scrollToken?: string;
  /**
   * @remarks
   * The sort fields and sort orders, separated by commas (,). The format is field1:Desc,field2:Asc. The direction can only be Asc or Desc.
   * 
   * @example
   * utcCreate:Desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      bizConfig: 'BizConfig',
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
      bizConfig: 'string',
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

