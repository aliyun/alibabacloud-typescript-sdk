// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderQueryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 246584390
   */
  orderId?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
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

