// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingPayShrinkRequest extends $dara.Model {
  corpPayPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  disOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  disSubOrderId?: string;
  extraShrink?: string;
  personalPayPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  totalPayPrice?: number;
  static names(): { [key: string]: string } {
    return {
      corpPayPrice: 'corp_pay_price',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      extraShrink: 'extra',
      personalPayPrice: 'personal_pay_price',
      totalPayPrice: 'total_pay_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
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

