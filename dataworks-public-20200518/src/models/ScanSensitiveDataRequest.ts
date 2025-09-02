// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanSensitiveDataRequest extends $dara.Model {
  /**
   * @remarks
   * The data that you want to check.
   * 
   * This parameter is required.
   * 
   * @example
   * 13900001234
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

