// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLineageRelationshipsRequest extends $dara.Model {
  /**
   * @remarks
   * The destination entity ID. For more information, see the table ID or field ID in the response returned by the ListTables or ListColumns operation. You can also specify a custom entity ID.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table:123456XXX::test_project::test_tbl
   * dlf-table:123456XXX:test_catalog:test_db::test_tbl
   * hms-table:c-abc123xxx::test_db::test_tbl
   * holo-table:h-abc123xxx::test_db:test_schema:test_tbl
   * custom-api:api123
   * custom-table:table456
   */
  dstEntityId?: string;
  /**
   * @remarks
   * The destination entity name. Supports fuzzy matching.
   * 
   * @example
   * dstName
   */
  dstEntityName?: string;
  /**
   * @remarks
   * The order in which schemas are sorted. Default value: Asc. Valid values:
   * 
   * *   Asc: ascending.
   * *   Desc: descending.
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
   * The sort field. Default value: Name.
   * 
   * @example
   * Name
   */
  sortBy?: string;
  /**
   * @remarks
   * The source entity ID. For more information, see the table ID or field ID in the response returned by the ListTables or ListColumns operation. You can also specify a custom entity ID.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table:123456XXX::test_project::test_tbl
   * dlf-table:123456XXX:test_catalog:test_db::test_tbl
   * hms-table:c-abc123xxx::test_db::test_tbl
   * holo-table:h-abc123xxx::test_db:test_schema:test_tbl
   * custom-api:api123
   * custom-table:table456
   */
  srcEntityId?: string;
  /**
   * @remarks
   * The source entity name. Supports fuzzy matching.
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

