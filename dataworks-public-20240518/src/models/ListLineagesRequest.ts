// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLineagesRequest extends $dara.Model {
  /**
   * @remarks
   * The destination entity ID. You can use the table or column ID returned by the ListTables or ListColumns operation, or a custom entity ID.
   * 
   * @example
   * dlf-table::catalog_id:database_name::table_name
   */
  dstEntityId?: string;
  /**
   * @remarks
   * The destination entity name. Fuzzy match is supported.
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
   * The sort direction. Default value: Asc. Valid values:
   * - Asc: ascending order.
   * - Desc: descending order.
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
   * The page size. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  recentDays?: number;
  /**
   * @remarks
   * The sort field. Default value: Name, which sorts by lineage entity name.
   * 
   * @example
   * Name
   */
  sortBy?: string;
  /**
   * @remarks
   * The source entity ID. You can use the table or column ID returned by the ListTables or ListColumns operation, or a custom entity ID.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  srcEntityId?: string;
  /**
   * @remarks
   * The source entity name. Fuzzy match is supported.
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

