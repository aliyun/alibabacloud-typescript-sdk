// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgenticDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the catalog to which the database belongs. You can obtain the UUID by calling ListAgenticCatalog or SearchAgenticCatalog.
   * 
   * This parameter is required.
   * 
   * @example
   * mc-HZ-OfjcNc2z***
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. You do not need to specify this parameter for the first query. When you query the next page, set this parameter to the NextToken value returned in the previous response.
   * 
   * @example
   * f056501ada12****
   */
  nextToken?: string;
  /**
   * @remarks
   * The search keyword used to match the database name or the prefix of the fully qualified name.
   * 
   * @example
   * order
   */
  searchKey?: string;
  /**
   * @remarks
   * The field used for sorting. This parameter is case-sensitive. Valid values:
   * 
   * - **name**: Sorts by database name.
   * - **qualifiedName**: Sorts by the fully qualified name of the database.
   * 
   * If you specify other values, the request fails. If you do not specify this parameter, the results are returned in the default order, and the SortOrder parameter does not take effect.
   * 
   * @example
   * name
   */
  sortFieldName?: string;
  /**
   * @remarks
   * The sort order. This parameter takes effect only when SortFieldName is specified. This parameter is case-insensitive. Valid values:
   * 
   * - **ASC** (default): Ascending order.
   * - **DESC**: Descending order.
   * 
   * If you specify other values, the request fails.
   * 
   * @example
   * ASC
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      searchKey: 'SearchKey',
      sortFieldName: 'SortFieldName',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogUuid: 'string',
      maxResults: 'number',
      nextToken: 'string',
      searchKey: 'string',
      sortFieldName: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

