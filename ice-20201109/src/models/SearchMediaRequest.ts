// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The custom filter. This is a JSON string. Supported fields include integer field intField1 and string fields strField1 and strField2. Each field supports only one matching type. Filters on different fields are combined with an AND relationship.
   * 
   * @example
   * {"intField1":{"gte":12,"lte":13},"strField2":["cd","de"],"strField1":"abc"}
   */
  customFilters?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * 2d3bf1e35a1e42b5ab338d701efa****
   */
  entityId?: string;
  /**
   * @remarks
   * The filter condition. <props="china">For syntax rules, see [Media asset search protocol](https://help.aliyun.com/document_detail/2584256.html).
   * 
   * @example
   * Title = \\"China\\" and utcCreate = [\\"1693367158561\\",\\"1693367158562\\"]
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The pagination token. This is a 32-character field. You do not need to set this parameter for the first search request. When the search request matches data, the server returns this parameter value to record the current position of the search data. Record the returned parameter value and set this parameter in the next search request according to the following requirements or suggestions: This parameter must be set when you need to traverse all data that matches the search conditions. When the PageNo parameter value exceeds 200, set this parameter to optimize search performance. You can only page forward, and the maximum paging distance is 1000 media assets.
   * 
   * @example
   * F8C4F642184DBDA5D93907A70AAE****
   */
  scrollToken?: string;
  /**
   * @remarks
   * The search library.
   * 
   * @example
   * test-1
   */
  searchLibName?: string;
  /**
   * @remarks
   * The sort fields and sort orders, separated by commas (,).
   * 
   * @example
   * utcCreate:Desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      customFilters: 'CustomFilters',
      entityId: 'EntityId',
      match: 'Match',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      scrollToken: 'ScrollToken',
      searchLibName: 'SearchLibName',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFilters: 'string',
      entityId: 'string',
      match: 'string',
      pageNo: 'number',
      pageSize: 'number',
      scrollToken: 'string',
      searchLibName: 'string',
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

