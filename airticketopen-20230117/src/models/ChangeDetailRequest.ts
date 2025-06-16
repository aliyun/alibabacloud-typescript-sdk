// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4988430***950
   */
  changeOrderNum?: number;
  static names(): { [key: string]: string } {
    return {
      changeOrderNum: 'change_order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

