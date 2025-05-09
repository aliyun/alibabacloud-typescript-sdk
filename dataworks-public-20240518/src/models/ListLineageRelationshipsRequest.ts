// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLineageRelationshipsRequest extends $dara.Model {
  /**
   * @remarks
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
   * @example
   * dstName
   */
  dstEntityName?: string;
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

