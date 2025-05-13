// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductOrdersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the product purchase request.
   * 
   * @example
   * 3ed6a882-0d85-4dd8-ad36-cd8d74ab9fdb
   */
  buyProductRequestId?: string;
  /**
   * @remarks
   * The returned message.
   */
  message?: string;
  /**
   * @remarks
   * The purchase order ID.
   * 
   * @example
   * 210292536260646
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ksdjf-jksd-*****slkdjf
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buyProductRequestId: 'BuyProductRequestId',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyProductRequestId: 'string',
      message: 'string',
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

