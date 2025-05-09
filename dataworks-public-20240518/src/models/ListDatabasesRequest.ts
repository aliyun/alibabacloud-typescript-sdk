// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesRequest extends $dara.Model {
  /**
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @example
   * test_tbl
   */
  name?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mysql:rm-abc123xxx
   * dlf-catalog:123456XXX:test_catalog
   */
  parentMetaEntityId?: string;
  /**
   * @example
   * CreateTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentMetaEntityId: 'ParentMetaEntityId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentMetaEntityId: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

