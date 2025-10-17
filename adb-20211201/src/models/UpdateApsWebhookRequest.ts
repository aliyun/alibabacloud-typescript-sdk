// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApsWebhookRequestWebhook extends $dara.Model {
  /**
   * @example
   * ABC**
   */
  key?: string;
  /**
   * @example
   * exampleWebhookName
   */
  name?: string;
  /**
   * @example
   * https://example.com/webhook
   */
  url?: string;
  /**
   * @remarks
   * Webhook ID。
   * 
   * This parameter is required.
   * 
   * @example
   * **355****
   */
  webhookId?: number;
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
   * This parameter is required.
   * 
   * @example
   * exampleDBClusterId
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * exampleRegionId
   */
  regionId?: string;
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

