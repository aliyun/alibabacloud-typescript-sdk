// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExplorerRegistryModulesRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword for the module name. Fuzzy matching is performed based on `moduleName`.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 0 to 200.
   * 
   * Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the module.
   * 
   * Note: The module name is not necessarily the same as the product name or resource name.
   */
  moduleName?: string;
  /**
   * @remarks
   * The pagination token for the next page of results.
   * 
   * If the total number of entries exceeds the maxResults limit, the data is truncated. You can use nextToken to query the next page of data.
   * 
   * @example
   * DxEkv+3w0EDAQgcRFBp8Ep4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order of the returned results. Valid values:
   * - Normal (default): returns results in normal order.
   * - Top: returns results sorted by popularity.
   * 
   * @example
   * Normal
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      moduleName: 'moduleName',
      nextToken: 'nextToken',
      sort: 'sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      moduleName: 'string',
      nextToken: 'string',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

