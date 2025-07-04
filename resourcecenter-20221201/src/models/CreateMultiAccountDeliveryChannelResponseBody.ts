// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultiAccountDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * @example
   * dc-6q79dm4o9***
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 994BFEFE-4BB5-5A27-8917-4583DEEF2***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

