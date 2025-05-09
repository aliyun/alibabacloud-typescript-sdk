// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveEntityFromMetaCollectionRequest extends $dara.Model {
  /**
   * @example
   * dlf-table:123456789:test_catalog:test_database::test_table
   */
  id?: string;
  /**
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

