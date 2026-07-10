// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderPayRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  btripOrderId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  companyPayFee?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  personPayFee?: number;
  thirdPayAccount?: string;
  thirdTradeNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      btripOrderId: 'btrip_order_id',
      btripUserId: 'btrip_user_id',
      companyPayFee: 'company_pay_fee',
      personPayFee: 'person_pay_fee',
      thirdPayAccount: 'third_pay_account',
      thirdTradeNo: 'third_trade_no',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripOrderId: 'number',
      btripUserId: 'string',
      companyPayFee: 'number',
      personPayFee: 'number',
      thirdPayAccount: 'string',
      thirdTradeNo: 'string',
      totalPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

