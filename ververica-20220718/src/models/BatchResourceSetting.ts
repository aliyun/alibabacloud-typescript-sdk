// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BasicResourceSetting } from "./BasicResourceSetting";


export class BatchResourceSetting extends $dara.Model {
  basicResourceSetting?: BasicResourceSetting;
  /**
   * @example
   * 10
   */
  maxSlot?: number;
  static names(): { [key: string]: string } {
    return {
      basicResourceSetting: 'basicResourceSetting',
      maxSlot: 'maxSlot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicResourceSetting: BasicResourceSetting,
      maxSlot: 'number',
    };
  }

  validate() {
    if(this.basicResourceSetting && typeof (this.basicResourceSetting as any).validate === 'function') {
      (this.basicResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

