// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndPenetrationTestRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the application record.
   * 
   * > The data type of this field is Long. Precision loss may occur during serialization or deserialization. Ensure that the value does not exceed 9007199254740991.
   * 
   * @example
   * 2398
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

