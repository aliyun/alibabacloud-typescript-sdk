// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaCollectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The administrator ID. Valid only for album types. Default: The current user ID.
   * 
   * @example
   * 12345
   */
  administrator?: string;
  /**
   * @remarks
   * The creator user ID. Valid only for album types. Default: The current user ID.
   * 
   * @example
   * 123456
   */
  createUser?: string;
  /**
   * @remarks
   * The collection description. Supports fuzzy matching.
   */
  description?: string;
  /**
   * @remarks
   * The collection name. Supports fuzzy matching.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   Asc (default): Ascending order
   * *   Desc
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default: 1.
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
   * The ID of the parent collection.
   * 
   * @example
   * category.123
   */
  parentId?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   * *   Id (default)
   * *   Name
   * *   CreateUser: Creator ID
   * *   CreateTime: Creation time
   * *   ModifyTime: Modification time
   * 
   * @example
   * Name
   */
  sortBy?: string;
  /**
   * @remarks
   * The collection type. Valid values:
   * 
   * *   Category
   * *   Album
   * *   AlbumCategory: Album subcategory
   * 
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

