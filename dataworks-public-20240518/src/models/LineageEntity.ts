// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LineageEntity extends $dara.Model {
  /**
   * @remarks
   * The additional properties.
   * 
   * @example
   * {"key1":"value1"}
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * maxcompute-table:123456XXX::test_project::test_tbl
   * dlf-table:123456XXX:test_catalog:test_db::test_tbl
   * hms-table:c-abc123xxx::test_db::test_tbl
   * holo-table:h-abc123xxx::test_db:test_schema:test_tbl
   * custom-api:api123
   * custom-table:table456
   */
  id?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test_tbl
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

