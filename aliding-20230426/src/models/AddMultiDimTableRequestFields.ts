// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMultiDimTableRequestFields extends $dara.Model {
  name?: string;
  property?: { [key: string]: any };
  /**
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      property: 'Property',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      property: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.property) {
      $dara.Model.validateMap(this.property);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

