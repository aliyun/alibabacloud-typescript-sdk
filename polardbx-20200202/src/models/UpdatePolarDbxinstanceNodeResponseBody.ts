// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarDBXInstanceNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID generated when the number of instance nodes is changed.
   * 
   * @example
   * 20211103105558
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

