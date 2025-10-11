// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeliveryChannelsResponseBodyDeliveryChannels extends $dara.Model {
  /**
   * @remarks
   * The time when the delivery channel was created.
   * 
   * @example
   * 2024-06-20T08:46:29Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the delivery channel.
   */
  deliveryChannelDescription?: string;
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * @example
   * dc-4m6ffpkgu***
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * @example
   * test-delivery-channel
   */
  deliveryChannelName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deliveryChannelDescription: 'DeliveryChannelDescription',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deliveryChannelDescription: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryChannelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery channels.
   */
  deliveryChannels?: ListDeliveryChannelsResponseBodyDeliveryChannels[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * This parameter is required.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17502A1B-7026-5551-8E1C-CCABD0CBC***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannels: 'DeliveryChannels',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannels: { 'type': 'array', 'itemType': ListDeliveryChannelsResponseBodyDeliveryChannels },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryChannels)) {
      $dara.Model.validateArray(this.deliveryChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

