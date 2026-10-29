// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPenetrationTestDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identity of the application record.
   * 
   * > This field is of the Long type. Precision loss may occur during the procedure to serialize or deserialize the numeric sequence. Ensure that the value does not exceed 9007199254740991.
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

