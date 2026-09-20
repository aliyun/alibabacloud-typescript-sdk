// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The collection type.
   * 
   * This parameter is required.
   * 
   * @example
   * ALBUM
   */
  collectionType?: string;
  /**
   * @remarks
   * The comment for the collection.
   * 
   * Length limit: 1 to 64 characters.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The collection name.
   * 
   * Length limit: 1 to 32 characters.
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

