// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertPrepayInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2104063546*****
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67F33190-946B-1105-B6A1-E2DF0426****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the conversion is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

