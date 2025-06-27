// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLineagesRequest extends $dara.Model {
  /**
   * @remarks
   * The destination entity ID. For more information, see the table ID or field ID in the response returned by the ListTables or ListColumns operation. You can also specify a custom entity ID.
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
   * @example
   * dstName1
   */
  dstEntityName?: string;
  /**
   * @example
   * false
   */
  needAttachRelationship?: boolean;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Name
   */
  sortBy?: string;
  /**
   * @remarks
   * The source entity ID. For more information, see the table ID or field ID in the response returned by the ListTables or ListColumns operation. You can also specify a custom entity ID.
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

