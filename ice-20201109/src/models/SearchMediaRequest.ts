// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The custom filters. The value is a JSON string. Supported fields include the integer field intField1 and the string fields strField1 and strField2. You can select at most one match type for the same field. Filters for different fields use the AND logical operator.
   * - Exact match, such as {"intField1":12,"strField1":"abc"}.
   * - Multi-value match, such as {"intField1":[12,13],"strField1":["abc","cd"]}.
   * - Range match, such as {"intField1":{"gte":12,"lte":13}}.
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
   * The filter conditions. <props="china">For syntax rules, see [Media asset search protocol](https://help.aliyun.com/document_detail/2584256.html).
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The scroll token, which is a 32-character string. You do not need to specify this parameter when you initiate a search request for the first time. If the search request returns data, the server returns this parameter value to record the position of the current search data. Record the returned value and specify it in subsequent searches based on the following requirements or suggestions: This parameter is required to traverse all data that matches the search conditions. If the value of the PageNo parameter exceeds 200, specify this parameter to optimize search performance. You can only scroll forward, and the maximum scroll distance is 1,000 media assets.
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
   * The sort fields and sort orders. Separate multiple values with commas (,).
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

