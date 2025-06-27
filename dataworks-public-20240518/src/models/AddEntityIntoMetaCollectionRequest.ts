// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEntityIntoMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The entity ID. Currently, entities can only be tables. You can call the ListTables operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table
   */
  id?: string;
  /**
   * @remarks
   * The collection ID. You can call the ListMetaCollections operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * category.123
   */
  metaCollectionId?: string;
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

