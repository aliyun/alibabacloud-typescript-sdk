// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketPageQueryProductRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 123456
   */
  scenicId?: number;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      scenicId: 'ScenicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      pageNo: 'number',
      pageSize: 'number',
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

