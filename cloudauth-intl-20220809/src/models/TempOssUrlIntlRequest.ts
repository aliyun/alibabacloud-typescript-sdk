// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TempOssUrlIntlRequest extends $dara.Model {
  /**
   * @remarks
   * Object name.
   * 
   * This parameter is required.
   * 
   * @example
   * 20250512/pdf/579047.pdf
   */
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

