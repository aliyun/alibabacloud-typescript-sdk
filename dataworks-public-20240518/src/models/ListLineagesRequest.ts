// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLineagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination entity. This can be a table or column ID returned by the `ListTables` or `ListColumns` API, or the ID of a custom entity.
   * 
   * @example
   * dlf-table::catalog_id:database_name::table_name
   */
  dstEntityId?: string;
  /**
   * @remarks
   * The name of the destination entity. This parameter supports fuzzy matching.
   * 
   * @example
   * dstName1
   */
  dstEntityName?: string;
  /**
   * @remarks
   * Specifies whether to include lineage relationships. Default: false.
   * 
   * @example
   * false
   */
  needAttachRelationship?: boolean;
  /**
   * @remarks
   * The sort order. Default: `Asc`. Valid values:
   * 
   * - `Asc`: ascending
   * 
   * - `Desc`: descending
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number to retrieve. Default: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default: 10. Maximum: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field to sort the results by. The default is `Name`, which sorts by entity name.
   * 
   * @example
   * Name
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the source entity. This can be a table or column ID returned by the `ListTables` or `ListColumns` API, or the ID of a custom entity.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  srcEntityId?: string;
  /**
   * @remarks
   * The name of the source entity. This parameter supports fuzzy matching.
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

