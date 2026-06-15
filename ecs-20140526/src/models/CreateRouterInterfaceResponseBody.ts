// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouterInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID. This parameter is returned only for subscription-based router interfaces.
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * The router interface ID.
   */
  routerInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
      routerInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

