// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelQueryOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The distributor account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * The external order number. At least one of ExternalOrderNo and OrderNo is required.
   * 
   * @example
   * EXT_ORDER_001
   */
  externalOrderNo?: string;
  /**
   * @remarks
   * The sales order number. At least one of OrderNo and ExternalOrderNo is required.
   * 
   * @example
   * SO202606290001
   */
  orderNo?: string;
  /**
   * @remarks
   * TracerId
   * 
   * @example
   * TracerId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      externalOrderNo: 'ExternalOrderNo',
      orderNo: 'OrderNo',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      externalOrderNo: 'string',
      orderNo: 'string',
      tracerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

