// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgenticTableBaseInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the database to which the table belongs. You can obtain the UUID by calling the ListAgenticDatabase or SearchAgenticDatabase operation.
   * 
   * This parameter is required.
   * 
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
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
   * The search keyword. The system matches the keyword against table names. The results are sorted by exact match, prefix match, and contains match. Within the same match level, the results are sorted by the field specified by SortFieldName.
   * 
   * @example
   * order
   */
  searchKey?: string;
  /**
   * @remarks
   * The field by which to sort the results. This parameter is case-sensitive. Valid values:
   * 
   * - **name**: Sorts the results by table name. This value is recommended.
   * - **numRows**: Sorts the results by the number of rows.
   * - **storeCapacity**: Sorts the results by the storage capacity.
   * 
   * If you specify other values, the request fails. If you do not specify this parameter, the results are returned in the default order, and the SortOrder parameter does not take effect.
   * 
   * @example
   * name
   */
  sortFieldName?: string;
  /**
   * @remarks
   * The sort order. This parameter takes effect only when SortFieldName is specified. This parameter is not case-sensitive. Valid values:
   * 
   * - **ASC**: Sorts the results in ascending order. This is the default value and is recommended.
   * - **DESC**: Sorts the results in descending order.
   * 
   * If you specify other values, the request fails.
   * 
   * @example
   * ASC
   */
  sortOrder?: string;
  /**
   * @remarks
   * The table type. The results are strictly filtered by this type. Valid values:
   * 
   * - **NORMAL**: Regular table.
   * - **VIEW**: View.
   * - **FOREIGN**: Foreign table.
   * - **SYNONYM**: Synonym. This value is supported only for Oracle data sources.
   * 
   * @example
   * NORMAL
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      databaseUuid: 'DatabaseUuid',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      searchKey: 'SearchKey',
      sortFieldName: 'SortFieldName',
      sortOrder: 'SortOrder',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseUuid: 'string',
      maxResults: 'number',
      nextToken: 'string',
      searchKey: 'string',
      sortFieldName: 'string',
      sortOrder: 'string',
      tableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

