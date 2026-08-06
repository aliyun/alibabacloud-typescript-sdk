// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaCollectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collection administrator. This parameter is valid only for the album type. Default value: the current user ID.
   * 
   * @example
   * 12345
   */
  administrator?: string;
  /**
   * @remarks
   * The user ID of the creator. This parameter is valid only for the album type. Default value: the current user ID.
   * 
   * @example
   * 123456
   */
  createUser?: string;
  /**
   * @remarks
   * The collection description. Fuzzy match is supported.
   * 
   * @example
   * Test collection
   */
  description?: string;
  /**
   * @remarks
   * The collection name. Fuzzy match is supported.
   * 
   * @example
   * Data Asset Subject Domain
   */
  name?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * 
   *  - Asc (default)
   *  - Desc
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
   * The page size. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent node collection object.
   * 
   * @example
   * as78d756asd
   */
  parentId?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   *  - Id (default)
   *  - Name: name.
   *  - CreateUser: creator ID.
   *  - CreateTime: creation time.
   *  - ModifyTime: modification time.
   * 
   * @example
   * Name
   */
  sortBy?: string;
  /**
   * @remarks
   * The collection type. Valid values:
   * 
   *  - Category: category.
   *  - Album: data album.
   *  - AlbumCategory: album subcategory.
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

