// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of the account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-a4e5626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * For more information about how to obtain the ID of a delivery channel, see [ListAggregateConfigDeliveryChannels](https://help.aliyun.com/document_detail/429842.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cdc-d9106457e0d900b1****
   */
  deliveryChannelId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      deliveryChannelId: 'DeliveryChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
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

