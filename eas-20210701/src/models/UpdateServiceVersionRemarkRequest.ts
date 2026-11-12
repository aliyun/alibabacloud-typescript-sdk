// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceVersionRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * version info.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

