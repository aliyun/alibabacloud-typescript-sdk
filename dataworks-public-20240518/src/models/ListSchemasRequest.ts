// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchemasRequest extends $dara.Model {
  /**
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @example
   * abc
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
   * maxcompute-project:123456XXX::test_project
   * holo-database:h-abc123xxx::test_db
   */
  parentMetaEntityId?: string;
  /**
   * @example
   * CreateTime
   */
  sortBy?: string;
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentMetaEntityId: 'ParentMetaEntityId',
      sortBy: 'SortBy',
      types: 'Types',
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
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

