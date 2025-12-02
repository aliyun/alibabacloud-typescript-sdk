// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApsWebhookResponseBodyWebhook extends $dara.Model {
  /**
   * @remarks
   * Signing key
   * 
   * @example
   * your_secret_key
   */
  key?: string;
  /**
   * @remarks
   * The name of the webhook.
   * 
   * @example
   * webhook_name
   */
  name?: string;
  /**
   * @remarks
   * The request URL.
   * 
   * @example
   * https://example.com/webhook
   */
  url?: string;
  /**
   * @remarks
   * The ID of the webhook that you want to delete.
   * 
   * @example
   * **35***
   */
  webhookId?: string;
  /**
   * @remarks
   * Webhook type.
   * 
   * @example
   * dingtalk
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
      url: 'Url',
      webhookId: 'WebhookId',
      webhookType: 'WebhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
      url: 'string',
      webhookId: 'string',
      webhookType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApsWebhookResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status or POP error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * exampleRequestId
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The array of webhooks.
   */
  webhook?: ListApsWebhookResponseBodyWebhook[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      webhook: { 'type': 'array', 'itemType': ListApsWebhookResponseBodyWebhook },
    };
  }

  validate() {
    if(Array.isArray(this.webhook)) {
      $dara.Model.validateArray(this.webhook);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

