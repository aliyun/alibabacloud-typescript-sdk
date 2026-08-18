// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEntityIntoMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the entity. Currently, only the table type is supported. You can obtain the ID from the response of the ListTables operation.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  id?: string;
  /**
   * @remarks
   * The ID of the collection object. You can obtain the ID from the response of the ListMetaCollections operation.
   * 
   * This parameter is required.
   * 
   * @example
   * as78d756asd
   */
  metaCollectionId?: string;
  /**
   * @remarks
   * The remarks when adding the entity to the collection. Currently, this parameter takes effect only for the album type.
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

