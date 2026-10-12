// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLineageRelationshipsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination entity. You can refer to the table or field ID returned by the ListTables or ListColumns operation, or use a custom entity ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dlf-table::catalog_id:database_name::table_name
   */
  dstEntityId?: string;
  /**
   * @remarks
   * The name of the destination entity. Fuzzy match is supported.
   * 
   * @example
   * dstName
   */
  dstEntityName?: string;
  /**
   * @remarks
   * The sort order. Default value: Asc. Valid values:
   * 
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
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used for sorting. Default value: Name.
   * 
   * @example
   * Name
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the source entity. You can refer to the table or field ID returned by the ListTables or ListColumns operation, or use a custom entity ID.
   * 
   * To obtain the entity ID of a table or field, first call ListCrawlers to obtain the MetaEntityId of the metadata crawler. For types that include a data catalog hierarchy, such as DLF and StarRocks, call ListCatalogs to obtain the catalog ID. Then, call ListDatabases to obtain the database ID, and call ListSchemas to obtain the schema ID if necessary. Finally, call ListTables or ListColumns to obtain the table or field ID.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  srcEntityId?: string;
  /**
   * @remarks
   * The name of the source entity. Fuzzy match is supported.
   * 
   * @example
   * srcName
   */
  srcEntityName?: string;
  static names(): { [key: string]: string } {
    return {
      dstEntityId: 'DstEntityId',
      dstEntityName: 'DstEntityName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      srcEntityId: 'SrcEntityId',
      srcEntityName: 'SrcEntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstEntityId: 'string',
      dstEntityName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

