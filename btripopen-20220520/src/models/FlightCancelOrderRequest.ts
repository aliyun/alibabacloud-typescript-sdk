// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCancelOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dis123
   */
  disOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

