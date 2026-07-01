// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The custom filter, specified as a JSON string. Supports the integer field intField1 and the string fields strField1 and strField2. Use only one match type per field. Conditions on different fields are combined with a logical AND.
   * 
   * - Exact match: `{"intField1":12,"strField1":"abc"}`
   * 
   * - Multi-value match: `{"intField1":[12,13],"strField1":["abc","cd"]}`
   * 
   * - Range match: `{"intField1":{"gte":12,"lte":13}}`
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
   * The filter condition for the search. <props="china">For syntax rules, see the [Media Search Protocol](https://help.aliyun.com/document_detail/2584256.html).
   * 
   * @example
   * Title = \\"China\\" and utcCreate = [\\"1693367158561\\",\\"1693367158562\\"]
   */
  match?: string;
  /**
   * @remarks
   * The page number to return. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of results per page. The default value is 10, and the maximum value is 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The scroll token for deep pagination. It is a 32-character string. This parameter is not required for the first search request. If a search is successful, the response includes a `ScrollToken` to mark the current position. Use this token in subsequent requests to retrieve the next page of results. This parameter is required to iterate through all matching results. For optimal performance, use this parameter when the `PageNo` value exceeds 200. You can scroll only forward, up to a maximum of 1,000 media assets.
   * 
   * @example
   * F8C4F642184DBDA5D93907A70AAE****
   */
  scrollToken?: string;
  /**
   * @remarks
   * The name of the search library.
   * 
   * @example
   * test-1
   */
  searchLibName?: string;
  /**
   * @remarks
   * The sort field and sort order. Separate multiple sort criteria with a comma (,).
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

