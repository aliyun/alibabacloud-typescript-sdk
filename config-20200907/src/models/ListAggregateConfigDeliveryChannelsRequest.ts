// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateConfigDeliveryChannelsRequest extends $dara.Model {
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
   * The IDs of the delivery channels. Separate multiple IDs with commas (,).
   * 
   * @example
   * cdc-d9106457e0d900b1****
   */
  deliveryChannelIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      deliveryChannelIds: 'DeliveryChannelIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      deliveryChannelIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

