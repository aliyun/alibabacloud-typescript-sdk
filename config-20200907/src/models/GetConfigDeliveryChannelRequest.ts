// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * For more information about how to obtain the ID of a delivery channel, see [DescribeDeliveryChannels](https://help.aliyun.com/document_detail/429841.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cdc-d9106457e0d900b1****
   */
  deliveryChannelId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

