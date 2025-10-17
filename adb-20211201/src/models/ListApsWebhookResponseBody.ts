// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApsWebhookResponseBodyWebhook extends $dara.Model {
  /**
   * @example
   * your_secret_key
   */
  key?: string;
  /**
   * @example
   * webhook_name
   */
  name?: string;
  /**
   * @example
   * https://example.com/webhook
   */
  url?: string;
  /**
   * @example
   * **35***
   */
  webhookId?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * exampleRequestId
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
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

