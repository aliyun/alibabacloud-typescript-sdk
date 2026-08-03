// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @example
   * EXT_ORDER_001
   */
  externalOrderNo?: string;
  /**
   * @example
   * SO202606290001
   */
  orderNo?: string;
  /**
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

