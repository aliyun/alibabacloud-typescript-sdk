// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderPayRequest extends $dara.Model {
  /**
   * @remarks
   * 供应商订单号（取自创单返回的订单号）
   * 
   * This parameter is required.
   * 
   * @example
   * 1002202194207077022
   */
  btripOrderId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23918781
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  companyPayFee?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  personPayFee?: number;
  /**
   * @example
   * demo
   */
  thirdPayAccount?: string;
  /**
   * @example
   * demo
   */
  thirdTradeNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
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

