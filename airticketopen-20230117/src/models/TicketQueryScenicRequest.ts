// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketQueryScenicRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  scenicId?: number;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      scenicId: 'ScenicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      scenicId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

