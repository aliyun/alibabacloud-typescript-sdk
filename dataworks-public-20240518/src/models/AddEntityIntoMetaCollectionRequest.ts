// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEntityIntoMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The entity ID. Currently, only table entities are supported. You can call the ListTables operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table
   */
  id?: string;
  /**
   * @remarks
   * The collection ID. You can refer to the return result of the ListMetaCollections operation.
   * 
   * This parameter is required.
   * 
   * @example
   * category.123
   */
  metaCollectionId?: string;
  /**
   * @remarks
   * Remarks added when adding the entity to a collection. This parameter is currently valid only for album collections.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metaCollectionId: 'MetaCollectionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metaCollectionId: 'string',
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

