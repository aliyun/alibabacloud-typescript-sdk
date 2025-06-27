// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveEntityFromMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The entity ID. Currently, entities can only be tables. You can call the ListTables operation to query the ID.
   * 
   * @example
   * dlf-table:123456789:test_catalog:test_database::test_table
   */
  id?: string;
  /**
   * @remarks
   * The collection ID. You can call the ListMetaCollections operation to query the ID.
   * 
   * @example
   * category.123
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

