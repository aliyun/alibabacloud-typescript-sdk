// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLineagesRequest extends $dara.Model {
  /**
   * @remarks
   * The destination entity ID. You can refer to the table or column ID returned by the ListTables or ListColumns operation, or use a custom entity ID.
   * 
   * @example
   * dlf-table::catalog_id:database_name::table_name
   */
  dstEntityId?: string;
  /**
   * @remarks
   * The destination entity name. Fuzzy matching is supported.
   * 
   * @example
   * dstName1
   */
  dstEntityName?: string;
  /**
   * @remarks
   * Specifies whether to return lineage relationship information. Default value: false.
   * 
   * @example
   * false
   */
  needAttachRelationship?: boolean;
  /**
   * @remarks
   * The sort order. Default value: Asc. Valid values:
   * - Asc: Ascending order.
   * - Desc: Descending order.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Queries the lineage relationships that take effect within the specified number of recent calendar days. Valid values: 1 to 30. For example, 1 indicates starting from midnight of the current day, and 7 indicates starting from midnight 6 days ago. If this parameter is not specified, the system filters the data based on the configured lineage validity period.
   * 
   * @example
   * 7
   */
  recentDays?: number;
  /**
   * @remarks
   * The sort field. Default value: Name. The entities are sorted by lineage entity name.
   * 
   * @example
   * Name
   */
  sortBy?: string;
  /**
   * @remarks
   * The source entity ID. You can refer to the table or column ID returned by the ListTables or ListColumns operation, or use a custom entity ID.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  srcEntityId?: string;
  /**
   * @remarks
   * The source entity name. Fuzzy matching is supported.
   * 
   * @example
   * srcName1
   */
  srcEntityName?: string;
  static names(): { [key: string]: string } {
    return {
      dstEntityId: 'DstEntityId',
      dstEntityName: 'DstEntityName',
      needAttachRelationship: 'NeedAttachRelationship',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recentDays: 'RecentDays',
      sortBy: 'SortBy',
      srcEntityId: 'SrcEntityId',
      srcEntityName: 'SrcEntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstEntityId: 'string',
      dstEntityName: 'string',
      needAttachRelationship: 'boolean',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recentDays: 'number',
      sortBy: 'string',
      srcEntityId: 'string',
      srcEntityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

