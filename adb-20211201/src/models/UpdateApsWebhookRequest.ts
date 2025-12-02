// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApsWebhookRequestWebhook extends $dara.Model {
  /**
   * @remarks
   * Signed key.
   * 
   * @example
   * ABC**
   */
  key?: string;
  /**
   * @remarks
   * The name of the webhook.
   * 
   * @example
   * exampleWebhookName
   */
  name?: string;
  /**
   * @remarks
   * The URL of the request.
   * 
   * @example
   * https://example.com/webhook
   */
  url?: string;
  /**
   * @remarks
   * The ID of the webhook.
   * 
   * This parameter is required.
   * 
   * @example
   * **355****
   */
  webhookId?: number;
  /**
   * @remarks
   * The notification method. Valid values: dingtalk. lark.
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
      webhookId: 'number',
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

export class UpdateApsWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDBClusterId
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleRegionId
   */
  regionId?: string;
  /**
   * @remarks
   * The array of webhooks.
   */
  webhook?: UpdateApsWebhookRequestWebhook[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      webhook: { 'type': 'array', 'itemType': UpdateApsWebhookRequestWebhook },
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

