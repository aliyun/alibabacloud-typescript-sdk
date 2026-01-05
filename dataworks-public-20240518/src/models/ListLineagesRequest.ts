// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLineagesRequest extends $dara.Model {
  /**
   * @example
   * dlf-table::catalog_id:database_name::table_name
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
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
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

