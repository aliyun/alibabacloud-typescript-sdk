// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightPayOrderShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  corpPayPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dis123
   */
  disOrderId?: string;
  extraShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  personalPayPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  totalPayPrice?: number;
  static names(): { [key: string]: string } {
    return {
      corpPayPrice: 'corp_pay_price',
      disOrderId: 'dis_order_id',
      extraShrink: 'extra',
      personalPayPrice: 'personal_pay_price',
      totalPayPrice: 'total_pay_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      disOrderId: 'string',
      extraShrink: 'string',
      personalPayPrice: 'number',
      totalPayPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

