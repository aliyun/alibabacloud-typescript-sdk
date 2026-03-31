// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregateConfigDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * This parameter is required.
   * 
   * @example
   * ca-23c6626622af0041****
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
   * cdc-38c3013b46c9002c****
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

