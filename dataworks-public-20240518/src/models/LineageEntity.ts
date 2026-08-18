// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LineageEntity extends $dara.Model {
  /**
   * @remarks
   * The other properties.
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
   * maxcompute-table:123456::test_project::test_tbl
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

