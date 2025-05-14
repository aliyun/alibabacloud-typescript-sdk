// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRangeResponseBodyBackgroundColors extends $dara.Model {
  /**
   * @remarks
   * red
   * 
   * @example
   * 0
   */
  red?: number;
  /**
   * @remarks
   * green
   * 
   * @example
   * 0
   */
  green?: number;
  /**
   * @remarks
   * blue
   * 
   * @example
   * 0
   */
  blue?: number;
  /**
   * @remarks
   * hexString
   * 
   * @example
   * #000000
   */
  hexString?: string;
  static names(): { [key: string]: string } {
    return {
      red: 'Red',
      green: 'Green',
      blue: 'Blue',
      hexString: 'HexString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      red: 'number',
      green: 'number',
      blue: 'number',
      hexString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

