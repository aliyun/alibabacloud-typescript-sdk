// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLineageRelationshipsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination entity. You can get the ID for a table or column from the response of the `ListTables` or `ListColumns` operation, or specify the ID of a custom entity.
   * 
   * This parameter is required.
   * 
   * @example
   * dlf-table::catalog_id:database_name::table_name
   */
  dstEntityId?: string;
  /**
   * @remarks
   * The name of the destination entity. Supports fuzzy matching.
   * 
   * @example
   * dstName
   */
  dstEntityName?: string;
  /**
   * @remarks
   * The sort order. The default value is `Asc`. Valid values:
   * 
   * - `Asc`: ascending order
   * 
   * - `Desc`: descending order
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. The default value is 10. The maximum value is 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field to sort the results by. The default value is `Name`.
   * 
   * @example
   * Name
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the source entity. You can get the ID for a table or column from the response of the `ListTables` or `ListColumns` operation, or specify the ID of a custom entity.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  srcEntityId?: string;
  /**
   * @remarks
   * The name of the source entity. Supports fuzzy matching.
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

