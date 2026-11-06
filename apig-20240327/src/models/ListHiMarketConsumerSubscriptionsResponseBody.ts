// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHiMarketConsumerSubscriptionsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer to which the subscription belongs. This is the same as the consumerId path parameter of this operation.
   * 
   * @example
   * cs-xxxxxxxxxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * The name of the consumer to which the subscription belongs.
   * 
   * @example
   * consumer-1
   */
  consumerName?: string;
  /**
   * @remarks
   * The ID of the subscribed API product. This is the primary ID of the API product resource.
   * 
   * @example
   * product-xxxxxxxx
   */
  productId?: string;
  /**
   * @remarks
   * The name of the subscribed API product.
   * 
   * @example
   * model-service
   */
  productName?: string;
  /**
   * @remarks
   * The type of the subscribed API product. This response parameter does not have an enum annotation. For the response parameter with the same name in the related ListProductSubscriptions operation, the valid values are REST_API, HTTP_API, MCP_SERVER, AGENT_API, and MODEL_API.
   * 
   * @example
   * MCP_SERVER
   */
  productType?: string;
  /**
   * @remarks
   * The subscription status. Valid values: PENDING and APPROVED. These valid values are declared in the enum of the status request parameter. This response parameter does not have an enum annotation.
   * 
   * @example
   * APPROVED
   */
  status?: string;
  /**
   * @remarks
   * The subscription ID. You can use this ID to cancel a subscription by calling UnsubscribeHiMarketProduct or approve a subscription by calling ApproveProductSubscription. Both operations use the /himarket/v1/consumers/{consumerId}/subscriptions/{subscriptionId} path to locate the subscription.
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

export class ListHiMarketConsumerSubscriptionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The API product subscriptions of the consumer. Each element in the list is named subscription and represents an API product subscription record.
   */
  content?: ListHiMarketConsumerSubscriptionsResponseBodyDataContent[];
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
      content: { 'type': 'array', 'itemType': ListHiMarketConsumerSubscriptionsResponseBodyDataContent },
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

export class ListHiMarketConsumerSubscriptionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListHiMarketConsumerSubscriptionsResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
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
   * The pagination token for the next page. An empty value indicates that the last page has been reached.
   * 
   * @example
   * token-xxxxxxxx
   */
  nextToken?: string;
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
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHiMarketConsumerSubscriptionsResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
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

