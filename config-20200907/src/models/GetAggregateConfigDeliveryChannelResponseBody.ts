// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateConfigDeliveryChannelResponseBodyDeliveryChannel } from "./GetAggregateConfigDeliveryChannelResponseBodyDeliveryChannel";


export class GetAggregateConfigDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about a delivery channel.
   */
  deliveryChannel?: GetAggregateConfigDeliveryChannelResponseBodyDeliveryChannel;
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
      deliveryChannel: GetAggregateConfigDeliveryChannelResponseBodyDeliveryChannel,
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

