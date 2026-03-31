// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigDeliveryChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery channel. Separate multiple IDs with commas (,).
   * 
   * @example
   * cdc-d9106457e0d900b1****
   */
  deliveryChannelIds?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelIds: 'DeliveryChannelIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

