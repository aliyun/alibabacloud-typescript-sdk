// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGwConsumerOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The redemption code used for subsequent activation.
   * 
   * @example
   * "9"
   */
  creditToken?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the AI gateway instance.
   * 
   * @example
   * pg-2ze24rr575j5b18cg
   */
  gatewayId?: string;
  /**
   * @remarks
   * The order ID returned after the order is placed.
   * 
   * @example
   * 2035638*******
   */
  orderId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      creditToken: 'CreditToken',
      expireTime: 'ExpireTime',
      gatewayId: 'GatewayId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditToken: 'string',
      expireTime: 'string',
      gatewayId: 'string',
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

