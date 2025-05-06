// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateConfigDeliveryChannelsResponseBodyDeliveryChannels } from "./ListAggregateConfigDeliveryChannelsResponseBodyDeliveryChannels";


export class ListAggregateConfigDeliveryChannelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the delivery channels.
   */
  deliveryChannels?: ListAggregateConfigDeliveryChannelsResponseBodyDeliveryChannels[];
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
      deliveryChannels: { 'type': 'array', 'itemType': ListAggregateConfigDeliveryChannelsResponseBodyDeliveryChannels },
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

