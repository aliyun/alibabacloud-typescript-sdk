// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveEntityFromMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The entity ID. Currently, entities can only be tables. You can call the ListTables operation to query the ID.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  id?: string;
  /**
   * @remarks
   * The collection ID. You can call the ListMetaCollections operation to query the ID.
   * 
   * @example
   * as78d756asd
   */
  metaCollectionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metaCollectionId: 'MetaCollectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metaCollectionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

