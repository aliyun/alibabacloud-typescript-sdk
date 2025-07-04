// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMultiAccountDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * This parameter is required.
   * 
   * @example
   * dc-0bzhsqpnkxxx
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

