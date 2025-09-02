// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMetaCollectionEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the collection.
   * 
   * This parameter is required.
   * 
   * @example
   * album.2222
   */
  collectionQualifiedName?: string;
  /**
   * @remarks
   * The unique identifier of the entity. Example: maxcompute-table.projectA.tableA.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table.projectA.tableB
   */
  entityQualifiedName?: string;
  /**
   * @remarks
   * The remarks of the entity. Example: latest product table.
   * 
   * @example
   * this is a remark
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      collectionQualifiedName: 'CollectionQualifiedName',
      entityQualifiedName: 'EntityQualifiedName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionQualifiedName: 'string',
      entityQualifiedName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

