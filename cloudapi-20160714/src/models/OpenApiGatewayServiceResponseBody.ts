// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenApiGatewayServiceResponseBody extends $dara.Model {
  /**
   * @example
   * 210981***530495
   */
  orderId?: string;
  /**
   * @example
   * 2D39D1B3-8548-508A-9CE2-7F4A3F2A7989
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

