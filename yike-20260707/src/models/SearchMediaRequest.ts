// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The business configuration. The value is a JSON string that can contain ProductionId (project ID).
   * 
   * @example
   * {"ProductionId":"pd_abc1234567"}
   */
  bizConfig?: string;
  /**
   * @remarks
   * The category ID. You can obtain the category ID by using one of the following methods:
   * 
   * - When you create a category by calling the CreateAssetCategory operation, the category ID is the value of the CategoryId response parameter.
   * - When you query categories by calling the ListAssetCategories operation, the category ID is the value of the CategoryId parameter in the corresponding returned entry.
   * 
   * @example
   * 10
   */
  categoryId?: number;
  /**
   * @remarks
   * The filter conditions. For the syntax rules, see [Media asset search protocol](https://www.alibabacloud.com/help/en/ims/developer-reference/media-asset-search-filter-description).
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
   * The number of entries to return on each page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pagination token, which is a 32-character string. You do not need to specify this parameter when you send a search request for the first time. If the search request returns data, the server returns this parameter to record the position of the current search data. Record the returned value and specify this parameter in subsequent searches based on the following requirements or recommendations: This parameter is required if you need to traverse all data that matches the search conditions. If the value of the PageNo parameter exceeds 200, specify this parameter to optimize search performance. You can only page forward, and the maximum paging distance is 1,000 media assets.
   * 
   * @example
   * F8C4F642184DBDA5D93907A70AAE****
   */
  scrollToken?: string;
  /**
   * @remarks
   * The sort fields and sort orders. Separate multiple values with commas (,). Format: field1:Desc,field2:Asc. The sort direction can only be Asc or Desc.
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

