// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * @example
   * cdc-38c32e87cadb002c****
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35F1DA37-ECB5-54E9-AC22-0D9111A665AA
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

