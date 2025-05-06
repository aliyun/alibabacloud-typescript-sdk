// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConfigDeliveryChannelResponseBodyDeliveryChannel } from "./GetConfigDeliveryChannelResponseBodyDeliveryChannel";


export class GetConfigDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the delivery channel.
   */
  deliveryChannel?: GetConfigDeliveryChannelResponseBodyDeliveryChannel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC300244-FCE3-5061-8214-C27ECB668487
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannel: 'DeliveryChannel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannel: GetConfigDeliveryChannelResponseBodyDeliveryChannel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deliveryChannel && typeof (this.deliveryChannel as any).validate === 'function') {
      (this.deliveryChannel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

