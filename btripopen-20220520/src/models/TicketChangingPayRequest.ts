// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingPayRequest extends $dara.Model {
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
  extra?: { [key: string]: string };
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
      extra: 'extra',
      personalPayPrice: 'personal_pay_price',
      totalPayPrice: 'total_pay_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      personalPayPrice: 'number',
      totalPayPrice: 'number',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

