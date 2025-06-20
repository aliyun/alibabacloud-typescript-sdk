// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @example
   * dc-0bzhsqpnk***
   */
  deliveryChannelId?: string;
  /**
   * @example
   * 42A89312-0616-591E-B614-07BC87D3D***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
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

