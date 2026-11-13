// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductSubscriptionsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer to which the subscription belongs. This ID and the consumerName returned in the same element refer to the same consumer.
   * 
   * @example
   * cs-xxxxxxxxxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * The name of the consumer to which the subscription belongs. This corresponds to the keyword search of the consumerName request parameter.
   * 
   * @example
   * consumer-1
   */
  consumerName?: string;
  /**
   * @remarks
   * The ID of the subscribed API product. This is the primary ID of the API product resource and is the same as the productId path parameter of this operation.
   * 
   * @example
   * product-xxxxxxxx
   */
  productId?: string;
  /**
   * @remarks
   * The name of the subscribed API product. This is the Name property of the API product resource.
   * 
   * @example
   * model-service
   */
  productName?: string;
  /**
   * @remarks
   * The type of the subscribed API product. Valid values: REST_API, HTTP_API, MCP_SERVER, AGENT_API, and MODEL_API.
   * 
   * @example
   * MCP_SERVER
   */
  productType?: string;
  /**
   * @remarks
   * The subscription status. Valid values: PENDING and APPROVED. The valid values are defined in the status request parameter.
   * 
   * @example
   * APPROVED
   */
  status?: string;
  /**
   * @remarks
   * The subscription ID, which identifies an API product subscription record. You can use this ID to cancel the subscription by calling UnsubscribeHiMarketProduct or approve the subscription by calling ApproveProductSubscription. Both operations locate the record by using the path /himarket/v1/consumers/{consumerId}/subscriptions/{subscriptionId}.
   * 
   * @example
   * sub-xxxxxxxx
   */
  subscriptionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      consumerName: 'consumerName',
      productId: 'productId',
      productName: 'productName',
      productType: 'productType',
      status: 'status',
      subscriptionId: 'subscriptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      consumerName: 'string',
      productId: 'string',
      productName: 'string',
      productType: 'string',
      status: 'string',
      subscriptionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductSubscriptionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The subscription list of the API product. The list element is named subscription, and each element represents an API product subscription record.
   */
  content?: ListProductSubscriptionsResponseBodyDataContent[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListProductSubscriptionsResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductSubscriptionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListProductSubscriptionsResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListProductSubscriptionsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

