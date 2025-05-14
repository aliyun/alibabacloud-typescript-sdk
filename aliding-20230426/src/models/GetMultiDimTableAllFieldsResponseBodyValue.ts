// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiDimTableAllFieldsResponseBodyValue extends $dara.Model {
  /**
   * @example
   * stxxxx
   */
  id?: string;
  /**
   * @example
   * Sheet1
   */
  name?: string;
  /**
   * @example
   * xxx
   */
  property?: { [key: string]: any };
  /**
   * @example
   * xxx
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      property: 'Property',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

