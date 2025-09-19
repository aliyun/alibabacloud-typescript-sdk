// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 1764
   */
  id?: number;
  /**
   * @remarks
   * The remarks.
   */
  remark?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      remark: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.remark)) {
      $dara.Model.validateArray(this.remark);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

