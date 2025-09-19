// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRegistryScanDayNumRequest extends $dara.Model {
  /**
   * @remarks
   * The cycle at which you want to scan your images. Unit: days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scanDayNum?: number;
  static names(): { [key: string]: string } {
    return {
      scanDayNum: 'ScanDayNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scanDayNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

