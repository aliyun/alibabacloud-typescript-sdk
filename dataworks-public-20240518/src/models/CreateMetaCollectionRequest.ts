// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The collection description.
   * 
   * @example
   * test comment
   */
  description?: string;
  /**
   * @remarks
   * The ID of the collection.
   * 
   * This parameter is required.
   * 
   * @example
   * test_album
   */
  name?: string;
  /**
   * @remarks
   * The parent collection ID.
   * 
   * @example
   * category.123
   */
  parentId?: string;
  /**
   * @remarks
   * The collection name.
   * 
   * *   Category
   * *   Album
   * *   AlbumCategory: Album subcategory.
   * 
   * This parameter is required.
   * 
   * @example
   * Category
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parentId: 'string',
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

