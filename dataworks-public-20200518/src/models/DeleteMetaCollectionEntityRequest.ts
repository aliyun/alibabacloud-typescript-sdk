// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetaCollectionEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the collection.
   * 
   * This parameter is required.
   * 
   * @example
   * album.12345
   */
  collectionQualifiedName?: string;
  /**
   * @remarks
   * The unique identifier of the entity.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute.projectA.tableB
   */
  entityQualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      collectionQualifiedName: 'CollectionQualifiedName',
      entityQualifiedName: 'EntityQualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionQualifiedName: 'string',
      entityQualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

