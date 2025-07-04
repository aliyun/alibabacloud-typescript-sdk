// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiAccountDeliveryChannelsResponseBodyDeliveryChannels extends $dara.Model {
  /**
   * @remarks
   * The time when the delivery channel was created.
   * 
   * @example
   * 2023-08-17T00:23:55Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the delivery channel.
   */
  deliveryChannelDescription?: string;
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * @example
   * dc-0bzhsqpnk***
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * @example
   * test-multi-account-delivery-channel
   */
  deliveryChannelName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deliveryChannelDescription: 'DeliveryChannelDescription',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deliveryChannelDescription: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

