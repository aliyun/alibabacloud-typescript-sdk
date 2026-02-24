// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregateConfigDeliveryChannelResponseBody extends $dara.Model {
  deliveryChannelId?: string;
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

