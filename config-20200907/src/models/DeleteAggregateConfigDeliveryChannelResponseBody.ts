// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregateConfigDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * @example
   * cdc-38c3013b46c9002c****
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FCC2F05C-F672-5665-8102-0020DF66B9B9
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

