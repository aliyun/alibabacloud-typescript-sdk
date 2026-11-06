// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscribeProductResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer to which the subscription belongs. This is the same as the consumerId path parameter in the request and refers to the same consumer as the consumerName returned at the same level.
   * 
   * @example
   * cs-xxxxxxxxxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * The name of the consumer to which the subscription belongs. This consumer is the same as the consumerId returned at the same level.
   * 
   * @example
   * consumer-1
   */
  consumerName?: string;
  /**
   * @remarks
   * The ID of the subscribed API product. This is the primary ID of the Product resource and is the same as the productId specified in the request body.
   * 
   * @example
   * product-xxxxxxxx
   */
  productId?: string;
  /**
   * @remarks
   * The name of the subscribed API product. This is the Name property of the Product resource.
   * 
   * @example
   * model-service
   */
  productName?: string;
  /**
   * @remarks
   * The type of the subscribed API product. The value set is not declared in this operation definition. The response parameter with the same name in the related ListProductSubscriptions operation is annotated with @enums. Valid values: REST_API, HTTP_API, MCP_SERVER, AGENT_API, and MODEL_API.
   * 
   * @example
   * MCP_SERVER
   */
  productType?: string;
  /**
   * @remarks
   * The subscription status. Valid values: PENDING and APPROVED. The value set is declared in the enum of the status request parameter of the related ListProductSubscriptions operation. This response parameter is not annotated with @enums.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The subscription ID, which identifies the API product subscription record corresponding to this subscription. You can use this ID to call UnsubscribeHiMarketProduct to cancel the subscription or call ApproveProductSubscription to approve the subscription. Both operations identify the record by using /himarket/v1/consumers/{consumerId}/subscriptions/{subscriptionId}.
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

export class SubscribeProductResponseBody extends $dara.Model {
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
  data?: SubscribeProductResponseBodyData;
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
      data: SubscribeProductResponseBodyData,
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

