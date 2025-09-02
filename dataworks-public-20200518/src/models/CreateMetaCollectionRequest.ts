// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the collection.
   * 
   * This parameter is required.
   * 
   * @example
   * ALBUM
   */
  collectionType?: string;
  /**
   * @remarks
   * The comment of the collection. The comment must be 1 to 64 characters in length.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The name of the collection. The name must be 1 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * collection_name
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of the parent collection.
   * 
   * @example
   * album.333508
   */
  parentQualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      collectionType: 'CollectionType',
      comment: 'Comment',
      name: 'Name',
      parentQualifiedName: 'ParentQualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionType: 'string',
      comment: 'string',
      name: 'string',
      parentQualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

