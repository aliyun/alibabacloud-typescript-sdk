// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightPayOrderRequest extends $dara.Model {
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
  extra?: { [key: string]: string };
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
      extra: 'extra',
      personalPayPrice: 'personal_pay_price',
      totalPayPrice: 'total_pay_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      disOrderId: 'string',
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

