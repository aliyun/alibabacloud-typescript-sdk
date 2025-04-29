// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonthBillConfirmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20221001
   */
  mailBillDate?: number;
  /**
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      mailBillDate: 'mail_bill_date',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailBillDate: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

