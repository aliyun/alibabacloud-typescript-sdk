// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The code of the specification, which must be consistent with the value that you specify on the buy page.
   * 
   * @example
   * ""
   */
  code?: string;
  /**
   * @remarks
   * The value of the specification.
   * 
   * @example
   * ""
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

