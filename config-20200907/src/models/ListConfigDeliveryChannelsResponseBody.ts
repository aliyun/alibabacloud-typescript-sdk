// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConfigDeliveryChannelsResponseBodyDeliveryChannels } from "./ListConfigDeliveryChannelsResponseBodyDeliveryChannels";


export class ListConfigDeliveryChannelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the delivery channels.
   */
  deliveryChannels?: ListConfigDeliveryChannelsResponseBodyDeliveryChannels[];
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
      deliveryChannels: 'DeliveryChannels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannels: { 'type': 'array', 'itemType': ListConfigDeliveryChannelsResponseBodyDeliveryChannels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryChannels)) {
      $dara.Model.validateArray(this.deliveryChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

