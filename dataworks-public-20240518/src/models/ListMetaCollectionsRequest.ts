// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaCollectionsRequest extends $dara.Model {
  /**
   * @example
   * 12345
   */
  administrator?: string;
  /**
   * @example
   * 123456
   */
  createUser?: string;
  description?: string;
  /**
   * @example
   * test
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
   * @example
   * category.123
   */
  parentId?: string;
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
   * Category
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      administrator: 'Administrator',
      createUser: 'CreateUser',
      description: 'Description',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentId: 'ParentId',
      sortBy: 'SortBy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administrator: 'string',
      createUser: 'string',
      description: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentId: 'string',
      sortBy: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

