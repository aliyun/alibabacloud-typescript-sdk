// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMultiAccountDeliveryChannelsResponseBodyDeliveryChannels } from "./ListMultiAccountDeliveryChannelsResponseBodyDeliveryChannels";


export class ListMultiAccountDeliveryChannelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery channels.
   */
  deliveryChannels?: ListMultiAccountDeliveryChannelsResponseBodyDeliveryChannels[];
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
      deliveryChannels: { 'type': 'array', 'itemType': ListMultiAccountDeliveryChannelsResponseBodyDeliveryChannels },
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

